import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import sparkScroll from 'react-spark-scroll-gsap'
const { SparkScroll, SparkProxy } = sparkScroll({invalidateAutomatically: true})

import { Container } from '../components/Container'
import { Page, PageTitle, CloseHeader, CloseLink } from '../components/Page'

const ProjectPage = Page.extend`
  color: ${props => props.theme.colors.onDark};
`

const ProjectContainer = Container.extend`
  overflow: visible;
`

class Project extends React.Component {
  render() {
    const { title, linkText, link, color } = this.props.data.contentfulProject
    const { transition, data } = this.props

    function createMarkup(text) {
      return {__html: text};
    }

    return(
      <div style={transition && transition.style}>
        <ProjectPage style={{backgroundColor: color}}>
          <CloseHeader>
            <CloseLink to="/">close</CloseLink>
          </CloseHeader>

          <SparkProxy.div proxyId="parallax">
            <ProjectContainer>
              <SparkScroll.div
                proxy="parallax"
                timeline={{
                  topBottom: {transform: 'translate3d(0px,0px,0px)'},
                  bottomTop: {transform: 'translate3d(0px,-120px,0px)'}
                }}
              >
                <PageTitle dangerouslySetInnerHTML={createMarkup(linkText)} />
              </SparkScroll.div>
            </ProjectContainer>
          </SparkProxy.div>
        </ProjectPage>
      </div>
    )
  }
}

Project.PropTypes = {
  data: PropTypes.object.isRequired
}

export default Project

export const pageQuery = graphql`
  query projectQuery($slug: String!){
    contentfulProject(slug: {eq: $slug}) {
      id
      title
      slug
      linkText
      link
      color
    }
  }
`
