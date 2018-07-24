import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import sparkScroll from 'react-spark-scroll-gsap';
const {SparkScroll, SparkProxy} = sparkScroll({invalidateAutomatically: true});

import Tagline from '../components/Tagline';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import {Container} from '../components/Layout';
import {Page} from '../components/Page';
import {Cards, Card} from '../components/Card';

import {getRandom} from '../utils/getPageImages';

const IndexPage = Page.extend`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onDark};
`;

const IndexCard = Card.extend`
  &:nth-of-type(2) {
    margin-top: -22%;
    margin-bottom: -45%;
    max-width: 60%;
  }

  &:nth-of-type(3) {
    margin-left: auto;
    margin-bottom: -25%;
    max-width: 80%;
  }

  &:nth-of-type(4) {
    margin-bottom: -25%;
    margin-left: auto;
    margin-right: 5%;
    max-width: 70%;
  }
`;

const HeaderContainer = Container.extend`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.md}
    ${props => props.theme.spacing.lg};
  position: relative;
  z-index: 5;
`;

const NavContainer = Container.extend`
  margin-left: 25%;
  position: relative;
  z-index: 10 !important;
`;

class Index extends React.Component {
  shouldComponentUpdate() {
    // Prevent update on page transition
    return false;
  }

  render() {
    const {transition, data} = this.props;
    let images = data.allContentfulProject.edges.map(project => {
      return project.node.image;
    });
    images = getRandom(images.filter(i => i), 3);

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>Michael Dijkstra is a product minded software developer</title>
          <meta
            name="description"
            content="Michael Dijkstra is a product minded software developer."
          />
        </Helmet>
        <IndexPage>
          <HeaderContainer>
            <Tagline />
          </HeaderContainer>

          <SparkProxy.div proxyId="parallax">
            <Container>
              <Cards order={[0, 1, 2, 3, 4]}>
                <IndexCard>
                  <SparkScroll.div
                    proxy="parallax"
                    timeline={{
                      topBottom: {transform: 'translate3d(0px,0px,0px)'},
                      bottomTop: {transform: 'translate3d(0px,-120px,0px)'},
                    }}>
                    <Logo />
                  </SparkScroll.div>
                </IndexCard>
                {images.map((img, index) => {
                  const translateY = (index + 1) * 500;
                  return (
                    <IndexCard key={index}>
                      <SparkScroll.div
                        proxy="parallax"
                        timeline={{
                          topBottom: {transform: 'translate3d(0px,0px,0px)'},
                          bottomTop: {
                            transform: `translate3d(0px,-${translateY}px,0px)`,
                          },
                        }}>
                        <Img sizes={img.sizes} />
                      </SparkScroll.div>
                    </IndexCard>
                  );
                })}
              </Cards>
            </Container>
            <NavContainer>
              <Nav />
            </NavContainer>
          </SparkProxy.div>
        </IndexPage>
      </div>
    );
  }
}

Index.propTypes = {
  transition: PropTypes.object,
  data: PropTypes.object,
};

export const query = graphql`
  query IndexImagesQuery {
    allContentfulProject(sort: {fields: [slug], order: ASC}) {
      edges {
        node {
          image {
            sizes(maxWidth: 1800, cropFocus: TOP) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`;

export default Index;
