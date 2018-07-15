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
import {PageLink} from '../components/Page';
import WorkList from '../components/WorkList';

import {fadeTimeline, media} from '../utils/style';

const TagPage = styled.div`
  background-color: ${props => props.theme.colors.senary};
  color: ${props => props.theme.colors.primary};
  min-height: 100vh;
`;

const TagCloseHeader = styled.div`
  color: ${props => props.theme.colors.primary};
`;

const TagLink = styled(PageLink)`
  color: ${props => props.theme.colors.primary};
`;

const TagCard = Card.extend`
  &:nth-of-type(2) {
    margin-left: -5%;
    margin-top: -80%;
    margin-bottom: -45%;
    max-width: 60%;
  }

  &:nth-of-type(3) {
    margin-bottom: -25%;
    margin-left: auto;
    margin-top: -60%;
    max-width: 80%;
  }

  &:nth-of-type(4) {
    margin-left: auto;
    margin-right: 5%;
    max-width: 70%;
  }
`;

class Tag extends React.Component {
  render() {
    const {transition, data} = this.props;
    const {project, slug, title} = data.contentfulTag;
    console.log(project);

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>Tag :: Michael Dijkstra</title>
        </Helmet>
        <TagPage>
          <TagCloseHeader>
            <Close />
          </TagCloseHeader>

          <Container>
            <Row>
              <WorkList projects={project} />
              <div>
                <AsidePrimary>
                  <div>Technology</div>
                  <div>used</div>
                </AsidePrimary>
                <AsideSecondary>
                  <div>&nbsp;</div>
                  <div>
                    <TagLink to={`/work/${slug}/`}>{title}</TagLink>
                  </div>
                </AsideSecondary>
              </div>
            </Row>
          </Container>
        </TagPage>
      </div>
    );
  }
}

export default Tag;

export const query = graphql`
  query tagQuery($slug: String!) {
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
`;
