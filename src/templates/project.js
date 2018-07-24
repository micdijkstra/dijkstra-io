import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Swipeable from 'react-swipeable';
import {navigateTo} from 'gatsby-link';
import sparkScroll from 'react-spark-scroll-gsap';
const {SparkScroll, SparkProxy} = sparkScroll({invalidateAutomatically: true});

import {Section, Container} from '../components/Layout';
import {Cards, Card} from '../components/Card';
import {Page, PageTitle} from '../components/Page';
import Close from '../components/Close';

import ProjectFrames from '../components/Project/Frames';
import ProjectInfo from '../components/Project/Info';

import {media, timeout} from '../utils/style';

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
        current: {},
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
        },
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
        current: {},
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
        },
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
        current: {},
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
        },
      },
    },
  };
};

const ProjectCloseHeader = styled.div`
  color: ${props => props.color || props.theme.colors.onDark};
  left: 0;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
`;

const ProjectTitle = PageTitle.extend`
  margin-top: -150px;
  padding: 0 0 15px;

  ${media.sm`
    padding: 0 0 15px;
  `};
`;

const Wrapper = styled.div`
  position: relative;
  overflow: visible;
  width: 100vw;
`;

const ProjectPage = Page.extend`
  color: ${props => props.color || props.theme.colors.onDark};
  padding-top: 250px;
`;

const SiblingPage = ProjectPage.extend`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NextPage = SiblingPage.extend`
  transform: translateX(100vw);
`;

const PreviousPage = SiblingPage.extend`
  transform: translateX(-100vw);
`;

const Pagintation = styled.a`
  bottom: 0;
  position: fixed;
  top: 0;
  width: 8vw;
`;

const NextPagination = Pagintation.extend`
  right: 0;
`;

const PreviousPagination = Pagintation.extend`
  left: 0;
`;

const ProjectContainer = Container.extend`
  overflow: visible;
`;

const ProjectLink = styled.a`
  color: ${props => props.color || props.theme.colors.onDark};
  left: 0;
  position: absolute;
  text-align: center;
  text-decoration: none;
  top: 0;
  width: 100%;
`;

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exiting: true,
      showNext: false,
      showPrevious: false,
    };

    this.showNext = this.showNext.bind(this);
    this.showPrevious = this.showPrevious.bind(this);
    this.showCurrent = this.showCurrent.bind(this);
    this.goTo = this.goTo.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  componentDidMount() {
    const that = this;
    window.setTimeout(() => {
      that.setState({
        exiting: false,
      });
    }, timeout);
    document.addEventListener('keydown', this.keyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown, false);
  }

  keyDown(event) {
    // up or left
    if (event.keyCode === 38 || event.keyCode == 37) {
      const {pathContext} = this.props;
      const {next} = pathContext;
      this.showNext();
      this.goTo(event, next.slug);
    }

    // down or right
    if (event.keyCode === 40 || event.keyCode == 39) {
      const {pathContext} = this.props;
      const {previous} = pathContext;
      this.showPrevious();
      this.goTo(event, previous.slug);
    }
  }

  goTo(event, slug) {
    event.preventDefault();

    this.setState({
      exiting: true,
    });

    window.setTimeout(() => {
      navigateTo(`/${slug}`);
    }, timeout);
  }

  showNext() {
    if (this.state.exiting) return;
    this.setState({
      showNext: true,
    });
  }

  showPrevious() {
    if (this.state.exiting) return;
    this.setState({
      showPrevious: true,
    });
  }

  showCurrent() {
    this.setState({
      showNext: false,
      showPrevious: false,
    });
  }

  render() {
    const {data, pathContext} = this.props;
    const {
      title,
      linkText,
      link,
      color,
      onColor,
      images,
      liveUrl,
      vimeoUrl,
      body,
      metaDescription,
      tags,
    } = data.contentfulProject;
    const {next, previous} = pathContext;
    const {exiting, showNext, showPrevious} = this.state;

    const status = (exiting && 'exiting') || 'loaded';
    const direction =
      (showNext && 'next') || (showPrevious && 'previous') || 'current';
    const wrapperStyle = transitionStyles(timeout)['wrapper'][status][
      direction
    ];
    const nextStyle = Object.assign(
      {backgroundColor: next.color},
      transitionStyles(timeout)['next'][status][direction],
    );
    const previousStyle = Object.assign(
      {backgroundColor: previous.color},
      transitionStyles(timeout)['previous'][status][direction],
    );

    const projectPageStyle = {backgroundColor: color, color: onColor};

    function createMarkup(text) {
      return {__html: text};
    }

    return (
      <div>
        <Helmet>
          <title>{title} :: Michael Dijkstra</title>
          <meta name="description" content={metaDescription} />
        </Helmet>

        <ProjectCloseHeader color={onColor}>
          <Close to="/work/" />
        </ProjectCloseHeader>

        <Wrapper style={wrapperStyle}>
          <Swipeable
            onSwipingLeft={this.showNext}
            onSwipedLeft={e => this.goTo(e, next.slug)}
            onSwipingRight={this.showPrevious}
            onSwipedRight={e => this.goTo(e, previous.slug)}>
            <ProjectPage style={projectPageStyle}>
              <SparkProxy.div proxyId="parallax">
                <ProjectContainer>
                  <Cards order={[0, 1]} style={{position: 'relative'}}>
                    <Card>
                      <SparkScroll.div
                        proxy="parallax"
                        timeline={{
                          topBottom: {transform: 'translate3d(0px,0px,0px)'},
                          bottomTop: {transform: 'translate3d(0px,-120px,0px)'},
                        }}>
                        <ProjectLink
                          href={link}
                          target="_blank"
                          color={onColor}>
                          <ProjectTitle
                            dangerouslySetInnerHTML={createMarkup(linkText)}
                          />
                        </ProjectLink>
                      </SparkScroll.div>
                    </Card>
                    <Card>
                      <ProjectFrames
                        liveUrl={liveUrl}
                        vimeoUrl={vimeoUrl}
                        images={images}
                      />

                      <Section>
                        <ProjectInfo
                          body={body}
                          tags={tags}
                          color={color}
                          onColor={onColor}
                          index={
                            vimeoUrl
                              ? 1 + images.length
                              : liveUrl ? 2 : images.length
                          }
                        />
                      </Section>
                    </Card>
                  </Cards>
                </ProjectContainer>
              </SparkProxy.div>
            </ProjectPage>
          </Swipeable>
        </Wrapper>

        <NextPage style={nextStyle}>
          <ProjectContainer>
            <ProjectTitle
              dangerouslySetInnerHTML={createMarkup(next.linkText)}
            />
          </ProjectContainer>
        </NextPage>

        <PreviousPage style={previousStyle}>
          <ProjectContainer>
            <ProjectTitle
              dangerouslySetInnerHTML={createMarkup(previous.linkText)}
            />
          </ProjectContainer>
        </PreviousPage>

        <NextPagination
          href={next.slug}
          onClick={e => this.goTo(e, next.slug)}
          onMouseEnter={this.showNext}
          onMouseLeave={this.showCurrent}
        />
        <PreviousPagination
          href={previous.slug}
          onClick={e => this.goTo(e, previous.slug)}
          onMouseEnter={this.showPrevious}
          onMouseLeave={this.showCurrent}
        />
      </div>
    );
  }
}

Project.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object,
};

export default Project;

export const pageQuery = graphql`
  query projectQuery($slug: String!) {
    contentfulProject(slug: {eq: $slug}) {
      id
      title
      slug
      linkText
      link
      color
      onColor
      liveUrl
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
`;
