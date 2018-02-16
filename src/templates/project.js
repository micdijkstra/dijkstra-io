import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import { navigateTo } from "gatsby-link"
import sparkScroll from 'react-spark-scroll-gsap'
const { SparkScroll, SparkProxy } = sparkScroll({invalidateAutomatically: true})

import { Container, Row } from '../components/Container'
import { Cards, Card } from '../components/Card'
import { Page, PageTitle, PageLink, CloseHeader, CloseLink } from '../components/Page'
import { ReadingText } from '../components/Text'
import { Aside, AsideSecondary, AsideLine } from '../components/Aside'

import getTransitionStyle from "../utils/getTransitionStyle"
import { fadeIn } from '../utils/style'

const timeout = 250
const transitionStyles = timeout => {
  return {
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
  }
}

const ProjectImg = styled(Img)`
  ${fadeIn()}
`

const ProjectCloseHeader = CloseHeader.extend`
  left: 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
`

const ProjectTitle = PageTitle.extend`
  margin-top: -150px;
  padding-bottom: 0;
  padding-top: 0;

  @media (min-width: ${props => props.theme.screen.sm}) {
    padding-bottom: 0;
    padding-top: 0;
  }
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

const SiblingProjectPage = ProjectPage.extend`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const NextProjectPage = SiblingProjectPage.extend`
  transform: translateX(100vw);
`

const PreviousProjectPage = SiblingProjectPage.extend`
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

const Section = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.onDark};
  margin-left: 50%;
  position: absolute;
  text-decoration: none;
  top: 0;
  transform: translateX(-50%);
`

const ProjectTag = styled.div`
  font-size: ${props => props.theme.text.lg};
  margin-left: 25%;
  margin-top: ${props => props.theme.spacing.md};
`

const ProjectInfoTag = PageLink.extend`
  position: relative;
  z-index: 3;

  &:before {
    width: 100%;
  }
`

const ProjectFrame = styled.div`
  ${fadeIn()}
  height: 0;
  position: relative;
  width: 100%;

  iframe {
    border: 0;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    volume: silent;
    width: 100%;
  }
`

const DesktopFrame = ProjectFrame.extend`
  padding-bottom: 70%;
`

const MobileFrame = ProjectFrame.extend`
  padding-bottom: 65%;
  margin-left: 12%;
  width: 365px;
`

const VimeoFrame = ProjectFrame.extend`
  padding-bottom: 51%;
`

const InfoSection = Section.extend`
  margin-top: ${props => props.theme.spacing.xl};
`

const ProjectRow = Row.extend`
  padding-top: ${props => props.theme.spacing.md};
  overflow: hidden;
  left: 0;
  position: absolute;
  right: 0;
  transition: opacity 0.15s ease-in-out;
  z-index: 2;
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
    this.showInfo = this.showInfo.bind(this)
    this.hideInfo = this.hideInfo.bind(this)
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

  showInfo() {
    this.setState({
      showInfo: true
    })
  }

  hideInfo() {
    this.setState({
      showInfo: false
    })
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
    } = this.props.data.contentfulProject
    const featuredImage = images && images[0]
    const otherImages = images && images.slice(1) || []
    const { transition, data } = this.props
    const { next, previous } = this.props.pathContext
    const { exiting, showNext, showPrevious, showInfo } = this.state
    const status = exiting && 'exiting' || 'loaded'
    const direction = (showNext && 'next') || (showPrevious && 'previous') || 'current'
    const transitionStyle = transitionStyles(timeout)[status][direction]

    const showLiveUrl = liveUrl && liveUrl !== ""
    const showVimeo = !showLiveUrl && vimeoUrl
    const showFeaturedImage = !showLiveUrl && !showVimeo && featuredImage

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
          <CloseLink to="/">close</CloseLink>
        </ProjectCloseHeader>

        <Wrapper
          style={transitionStyle}
        >
          <ProjectPage 
            style={{
              backgroundColor: color,
            }}
          >
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
                    { showLiveUrl &&
                        <div>
                          <Section>
                            <DesktopFrame>
                              <iframe src={liveUrl} />
                            </DesktopFrame>
                            <ProjectTag>a.&emsp;desktop</ProjectTag>
                          </Section>

                          <Section>
                            <MobileFrame style={{animationDelay: `${timeout}ms`}}>
                              <iframe src={liveUrl} />
                            </MobileFrame>
                            <ProjectTag>b.&emsp;mobile</ProjectTag>
                          </Section>
                        </div>
                    }

                    { showVimeo &&
                      <VimeoFrame>
                        <iframe
                          src={`${vimeoUrl}?autoplay=1`}
                          allowFullScreen
                        />
                      </VimeoFrame>
                    }

                    { showFeaturedImage &&
                      <Section>
                        <ProjectImg sizes={featuredImage.sizes} alt={featuredImage.description} />
                      </Section>
                    }

                    <InfoSection onMouseLeave={this.hideInfo}>
                      <ProjectTag onMouseEnter={this.showInfo}>
                        {showLiveUrl ? 'c' : 'a'}.&emsp;<ProjectInfoTag>Info</ProjectInfoTag>
                      </ProjectTag>
                      <ProjectRow
                        onMouseEnter={this.showInfo}
                        style={{ 
                          backgroundColor: color,
                          opacity: (showInfo ? 1 : 0),
                          visibility: (showInfo ? 'visible' : 'hidden'),
                        }}
                      >
                        <ReadingText
                          dangerouslySetInnerHTML={createMarkup(body.childMarkdownRemark.html)}
                        />
                        <div>
                          <Aside>
                            <AsideLine>Technologies</AsideLine>
                            <AsideLine>used</AsideLine>
                          </Aside>
                          <AsideSecondary>
                            <AsideLine>&nbsp;</AsideLine>
                            <AsideLine>Boo</AsideLine>
                          </AsideSecondary>
                        </div>
                      </ProjectRow>
                    </InfoSection>

                    {otherImages.map((image, index) => {
                      return(
                        <Section key={index}>
                          <ProjectImg sizes={image.sizes} alt={image.description} style={{animationDelay: `${(index + 1) * timeout}ms`}} />
                        </Section>
                      )
                    })}
                  </Card>
                </Cards>
              </ProjectContainer>
            </SparkProxy.div>
          </ProjectPage>

          <NextProjectPage style={{backgroundColor: next.color}}>
            <ProjectContainer>
              <ProjectTitle dangerouslySetInnerHTML={createMarkup(next.linkText)} />
            </ProjectContainer>
          </NextProjectPage>

          <PreviousProjectPage style={{backgroundColor: previous.color}}>
            <ProjectContainer>
              <ProjectTitle dangerouslySetInnerHTML={createMarkup(previous.linkText)} />
            </ProjectContainer>
          </PreviousProjectPage>
        </Wrapper>
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
    }
  }
`
