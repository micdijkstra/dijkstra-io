import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import styled from 'styled-components';
import sparkScroll from 'react-spark-scroll-gsap';
const {SparkScroll, SparkProxy} = sparkScroll({invalidateAutomatically: true});

import {AsidePrimary, AsideSecondary} from '../components/Aside';
import {Cards, Card} from '../components/Card';
import Close from '../components/Close';
import {Container, Row} from '../components/Layout';
import {PageTitle, PageLink} from '../components/Page';
import WorkList from '../components/WorkList';

import {fadeTimeline, media} from '../utils/style';

const WorkPage = styled.div`
  background-color: ${props => props.theme.colors.quinary};
  color: ${props => props.theme.colors.primary};
  min-height: 100vh;
`;

const WorkCloseHeader = styled.div`
  color: ${props => props.theme.colors.primary};
  position: relative;
  z-index: 5;
`;

const WorkContainer = Container.extend`
  position: relative;
  z-index: 5;
`;

const TagLink = styled(PageLink)`
  color: ${props => props.theme.colors.primary};
`;

const WorkCard = Card.extend`
  &:nth-of-type(2) {
    margin-left: -5%;
    margin-top: -70%;
    margin-bottom: -45%;
    max-width: 60%;
  }

  &:nth-of-type(3) {
    margin-bottom: -15%;
    margin-left: auto;
    margin-top: -50%;
    max-width: 80%;
  }

  &:nth-of-type(4) {
    margin-left: auto;
    margin-right: 5%;
    max-width: 70%;
  }
`;

const getRandom = (arr, n) => {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

class Work extends React.Component {
  render() {
    const {transition, data} = this.props;

    const projects = data.projects.edges.map(project => {
      return project.node;
    });

    let images = data.projects.edges.map(project => {
      return project.node.image;
    });
    images = getRandom(images.filter(i => i), 3);

    const tags = data.tags.edges.map(tag => {
      return tag.node;
    });

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>What did Michael Dijkstra build?</title>
        </Helmet>
        <WorkPage>
          <WorkCloseHeader>
            <Close />
          </WorkCloseHeader>

          <Container>
            <Cards order={[3, 0, 2, 1]}>
              <WorkCard>
                <SparkScroll.div
                  proxy="parallax"
                  timeline={{
                    topBottom: {transform: 'translate3d(0px,0px,0px)'},
                    bottomTop: {transform: 'translate3d(0px,-120px,0px)'},
                  }}>
                  <PageTitle>
                    hard<br />at<br />work
                  </PageTitle>
                </SparkScroll.div>
              </WorkCard>
              {images.map((img, index) => {
                const translateX = `${(index % 2 == 0 ? ' ' : '-') +
                  index +
                  1 * 15}vw`;
                return (
                  <WorkCard key={index}>
                    <SparkScroll.div
                      proxy="parallax"
                      timeline={{
                        topBottom: {transform: 'translate3d(0px,0px,0px)'},
                        bottomTop: {
                          transform: `translate3d(${translateX},-120px,0px)`,
                        },
                      }}>
                      <Img sizes={img.sizes} />
                    </SparkScroll.div>
                  </WorkCard>
                );
              })}
            </Cards>
          </Container>

          <WorkContainer>
            <SparkScroll.div timeline={fadeTimeline}>
              <Row>
                <WorkList projects={projects} />
                <div>
                  <AsidePrimary>
                    <div>Technologies</div>
                    <div>used</div>
                  </AsidePrimary>
                  <AsideSecondary>
                    <div>&nbsp;</div>
                    {tags &&
                      tags.map((tag, index) => {
                        return (
                          <div key={index}>
                            <TagLink to={`/work/${tag.slug}`}>
                              {tag.title}
                            </TagLink>
                          </div>
                        );
                      })}
                  </AsideSecondary>
                </div>
              </Row>
            </SparkScroll.div>
          </WorkContainer>
        </WorkPage>
      </div>
    );
  }
}

export default Work;

export const query = graphql`
  query projectsQuery {
    projects: allContentfulProject(sort: {fields: [slug], order: ASC}) {
      edges {
        node {
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
    tags: allContentfulTag(sort: {fields: [slug], order: ASC}) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;
