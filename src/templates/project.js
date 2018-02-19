import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { navigateTo } from "gatsby-link"
import sparkScroll from 'react-spark-scroll-gsap'
const { SparkScroll, SparkProxy } = sparkScroll({invalidateAutomatically: true})

import { Section, Container, Row } from '../components/Layout'
import { Cards, Card } from '../components/Card'
import { Page, PageTitle, PageLink } from '../components/Page'
import Close from '../components/Close'

import { ProjectTag, ProjectImage } from '../components/Project'
import ProjectFrames from '../components/Project/Frames'
import ProjectInfo from '../components/Project/Info'
import ProjectImages from '../components/Project/Images'

import getTransitionStyle from "../utils/getTransitionStyle"
import { fadeIn, media, timeout } from '../utils/style'

const transitionStyles = timeout => {
  return {
    wrapper: {
      exiting: {
        next: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(-100vw)',
        },
        previous: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(100vw)',
        },
        current: {
        }
      },
      loaded: {
        next: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(-15vw)',
        },
        previous: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(15vw)',
        },
        current: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(0)',
        }
      },
    },
    previous: {
      exiting: {
        next: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(-100vw)',
        },
        previous: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(0)',
        },
        current: {
        }
      },
      loaded: {
        next: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(-100vw)',
        },
        previous: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(-85vw)',
        },
        current: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(-100vw)',
        }
      },
    },
    next: {
      exiting: {
        next: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(0)',
        },
        previous: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(100vw)',
        },
        current: {
        }
      },
      loaded: {
        next: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(85vw)',
        },
        previous: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(100vw)',
        },
        current: {
          transition: `transform ${timeout}ms ease-in-out`,
          transform: 'translateX(100vw)',
        }
      },
    }
  }
}

const ProjectCloseHeader = styled.div`
  color: ${props => props.theme.colors.onDark};
  left: 0;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
`

const ProjectTitle = PageTitle.extend`
  margin-top: -150px;
  padding-bottom: 0;
  padding-top: 0;

  ${media.sm`
    padding-bottom: 0;
    padding-top: 0;
  `}
`

const Wrapper = styled.div`
  position: relative;
  overflow: visible;
  width: 100vw;
`

const ProjectPage = Page.extend`
  color: ${props => props.theme.colors.onDark};
  padding-top: 250px;
`

const SiblingPage = ProjectPage.extend`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`

const NextPage = SiblingPage.extend`
  transform: translateX(100vw);
`

const PreviousPage = SiblingPage.extend`
  transform: translateX(-100vw);
`

const Pagintation = styled.a`
  bottom: 0;
  position: fixed;
  top: 0;
  width: 8vw;
`

const NextPagination = Pagintation.extend`
  right: 0;
`

const PreviousPagination = Pagintation.extend`
  left: 0;
`

const ProjectContainer = Container.extend`
  overflow: visible;
`

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.onDark};
  left: 0;
  position: absolute;
  text-align: center;
  text-decoration: none;
  top: 0;
  width: 100%;
`

class Project extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      exiting: true,
      showNext: false,
      showPrevious: false,
    }

    this.showNext = this.showNext.bind(this)
    this.showPrevious = this.showPrevious.bind(this)
    this.showCurrent = this.showCurrent.bind(this)
    this.goTo = this.goTo.bind(this)
  }

  componentDidMount() {
    self = this
    window.setTimeout(() => {
      self.setState({
        exiting: false,
      })
    }, timeout)
  }

  goTo(e, slug) {
    e.preventDefault()

    this.setState({
      exiting: true
    })

    window.setTimeout(() => {
      navigateTo(slug)
    }, timeout)
  }

  showNext() {
    if (this.state.exiting) return
    this.setState({
      showNext: true
    })
  }

  showPrevious() {
    if (this.state.exiting) return
    this.setState({
      showPrevious: true
    })
  }

  showCurrent() {
    this.setState({
      showNext: false,
      showPrevious: false
    })
  }

  render() {
    const {
      title,
      linkText,
      link,
      color,
      images,
      liveUrl,
      vimeoUrl,
      body,
      metaDescription,
      tags,
    } = this.props.data.contentfulProject
    const featuredImage = images && images[0]
    const otherImages = images && images.slice(1) || []

    const { transition, data } = this.props
    const { next, previous } = this.props.pathContext
    const { exiting, showNext, showPrevious } = this.state

    const status = exiting && 'exiting' || 'loaded'
    const direction = (showNext && 'next') || (showPrevious && 'previous') || 'current'
    const wrapperStyle = transitionStyles(timeout)['wrapper'][status][direction]
    const nextStyle = Object.assign({ backgroundColor: next.color}, transitionStyles(timeout)['next'][status][direction])
    const previousStyle = Object.assign({ backgroundColor: previous.color},transitionStyles(timeout)['previous'][status][direction])

    const projectPageStyle = { backgroundColor: color }

    function createMarkup(text) {
      return {__html: text};
    }

    return(
      <div>
        <Helmet>
          <title>{title} :: Michael Dijkstra</title>
          <meta name="description" content={metaDescription} />
        </Helmet>

        <ProjectCloseHeader>
          <Close />
        </ProjectCloseHeader>

        <Wrapper style={wrapperStyle}>
          <ProjectPage style={projectPageStyle}>
            <SparkProxy.div proxyId="parallax">
              <ProjectContainer>
                <Cards order={[0,1]} style={{position: 'relative'}}>
                  <Card>
                    <SparkScroll.div
                      proxy="parallax"
                      timeline={{
                        topBottom: {transform: 'translate3d(0px,0px,0px)'},
                        bottomTop: {transform: 'translate3d(0px,-120px,0px)'}
                      }}
                    >
                      <ProjectLink href={link} target="_blank">
                        <ProjectTitle dangerouslySetInnerHTML={createMarkup(linkText)} />
                      </ProjectLink>
                    </SparkScroll.div>
                  </Card>
                  <Card>
                    <ProjectFrames liveUrl={liveUrl} vimeoUrl={vimeoUrl} image={featuredImage} />

                    <Section>
                      <ProjectInfo body={body} tags={tags} color={color} titleKey={liveUrl? 'c' : 'a'} />
                    </Section>

                    <ProjectImages images={otherImages} />
                  </Card>
                </Cards>
              </ProjectContainer>
            </SparkProxy.div>
          </ProjectPage>
        </Wrapper>

        <NextPage style={nextStyle}>
          <ProjectContainer>
            <ProjectTitle dangerouslySetInnerHTML={createMarkup(next.linkText)} />
          </ProjectContainer>
        </NextPage>

        <PreviousPage style={previousStyle}>
          <ProjectContainer>
            <ProjectTitle dangerouslySetInnerHTML={createMarkup(previous.linkText)} />
          </ProjectContainer>
        </PreviousPage>

        <NextPagination href={next.slug} onClick={(e) => this.goTo(e, next.slug) } onMouseEnter={this.showNext} onMouseLeave={this.showCurrent} />
        <PreviousPagination href={previous.slug} onClick={(e) => this.goTo(e, previous.slug) } onMouseEnter={this.showPrevious} onMouseLeave={this.showCurrent} />
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
      liveUrl
      vimeoUrl
      metaDescription
      body {
        childMarkdownRemark {
          html
        }
      }
      images {
        title
        description
        sizes(maxWidth: 1800, cropFocus: TOP) {
        ...GatsbyContentfulSizes
        }
      }
      tags {
        id
        slug
        title
      }
    }
  }
`
