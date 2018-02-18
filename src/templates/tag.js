import React from 'react'
import Helmet from 'react-helmet'

import WorkList from '../components/WorkList'
import { PageTitle } from '../components/Page'

const TagTitle = PageTitle.extend`
  position: relative;
  z-index: 3;
`

class Work extends React.Component {
  render() {
    const { transition, data } = this.props
    const { title, project } = data.contentfulTag

    return(
      <div style={transition && transition.style}>
        <Helmet>
          <title>{title} Work :: Michael Dijkstra</title>
        </Helmet>
        <TagTitle>{title}</TagTitle>
        <WorkList projects={project} />
      </div>
    )
  }
}

export default Work

export const query = graphql`
  query tagQuery($slug: String!){
    contentfulTag(slug: {eq: $slug}) {
      id
      title
      slug
      project {
        color
        image {
          sizes(maxWidth: 1800, cropFocus: TOP) {
          ...GatsbyContentfulSizes
          }
        }
        title
        slug
        linkText
        link
        position
      }
    }
  }
`
