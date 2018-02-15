import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Container } from '../components/Container'

const WorkContainer = Container.extend`
  float: right;
  min-width: 60%;
  padding-right: ${props => props.theme.spacing.md};

  @media (min-width: ${props => props.theme.screen.sm}) {
    padding-right: ${props => props.theme.spacing.xl};
  }
`

const WorkLink = styled(Link)`
  color: white;
  display: inline-block;
  font-size: ${props => props.theme.text.md};
  line-height: ${props => props.theme.line.sm};
  text-decoration: none;

  @media (min-width: ${props => props.theme.screen.sm}) {
    font-size: ${props => props.theme.text.md.md};
  }
`

const Work = ({ transition, data }) => (
  <div style={transition && transition.style}>
    <WorkContainer>
      {data.allContentfulProject.edges.map((project, index) => {
        return (
          <WorkLink key={index} to={project.node.slug}>
            {("0" + index+1).slice(-2)}
            &emsp;
            {project.node.title}
          </WorkLink>
        )
      })}
    </WorkContainer>
  </div>
)

export default Work

export const query = graphql`
  query projectsQuery {
    allContentfulProject {
      edges {
        node {
          id
          title
          slug
          linkText
          link
          color
        }
      }
    }
  }
`

