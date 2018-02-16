const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/templates/project.js')
    resolve(
      graphql(`
        {
          allContentfulProject (limit:1000) {
            edges {
              node {
                slug
                color
                link
                linkText
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }

        const projects = result.data.allContentfulProject.edges
        index = 0
        projects.forEach((edge) => {
          const next = (index === projects.length - 1) ? projects[0] : projects[index + 1]
          const previous = (index === 0) ? projects[projects.length - 1] : projects[index - 1]

          createPage ({
            path: edge.node.slug,
            component: projectTemplate,
            context: {
              slug: edge.node.slug,
              previous: previous.node,
              next: next.node,
            }
          })

          index++
        })

        return
      })
    )
  })
}
