import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import styled from 'styled-components';
import sparkScroll from 'react-spark-scroll-gsap';
const {SparkScroll, SparkProxy} = sparkScroll({invalidateAutomatically: true});

import {Container, Row} from '../components/Layout';
import Tagline from '../components/Tagline';
import {Page, PageTitle, a} from '../components/Page';
import Close from '../components/Close';
import {Cards, Card} from '../components/Card';
import {ReadingText} from '../components/Text';

import getPageImages from '../utils/getPageImages';
import {fadeTimeline, media} from '../utils/style';

const AboutPage = Page.extend`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onDark};
`;

const AboutCard = Card.extend`
  &:nth-of-type(2) {
    margin-left: auto;
    margin-top: -50%;
    margin-bottom: -45%;
    max-width: 60%;
  }

  &:nth-of-type(3) {
    margin-bottom: -25%;
    margin-top: -75%;
    max-width: 80%;
  }

  &:nth-of-type(4) {
    margin-left: auto;
    margin-right: 5%;
    max-width: 70%;
  }
`;

const AboutRow = Row.extend`
  ${media.sm`
    flex-direction: row;
  `};
`;

class About extends React.Component {
  render() {
    const {transition, data} = this.props;
    const pageImages = getPageImages(data.allFile.edges, 1, 2);
    const images = [
      pageImages['landscape'][0],
      pageImages['portrait'][0],
      pageImages['landscape'][1],
    ];

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>Who is Michael Dijkstra?</title>
        </Helmet>
        <AboutPage>
          <Close />
          <SparkProxy.div proxyId="parallax">
            <Container>
              <Cards order={[3, 2, 0, 1]}>
                <AboutCard>
                  <SparkScroll.div
                    proxy="parallax"
                    timeline={{
                      topBottom: {transform: 'translate3d(0px,0px,0px)'},
                      bottomTop: {transform: 'translate3d(0px,-120px,0px)'},
                    }}>
                    <PageTitle>
                      loves<br />the<br />www
                    </PageTitle>
                  </SparkScroll.div>
                </AboutCard>
                {images.map((img, index) => {
                  const translateX = `${(index % 2 == 0 ? '-' : '') +
                    index +
                    1 * 15}vw`;
                  return (
                    <AboutCard key={index}>
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
                    </AboutCard>
                  );
                })}
              </Cards>
            </Container>

            <Container>
              <SparkScroll.div timeline={fadeTimeline}>
                <AboutRow>
                  <Tagline />
                  <ReadingText>
                    <p>
                      Michael Dijkstra is a software developer and product
                      manager with more than 10 years experience working across
                      the entire product stack including back-end server
                      development, front-end client side development, product
                      management, wire framing, copy writing and (a little bit
                      of) design.
                    </p>

                    <p>
                      He has worked for and with companies like
                      <a href="https://www.q-ctrl.com" target="_blank">
                        Q-CTRL
                      </a>,{' '}
                      <a href="https://ayr.com" target="_blank">
                        AYR
                      </a>,{' '}
                      <a href="https://www.roughtrade.com" target="_blank">
                        Rough Trade
                      </a>,{' '}
                      <a href="https://eyeondesign.aiga.org" target="_blank">
                        AIGA
                      </a>,{' '}
                      <a href="https://www.buzzfeed.com" target="_blank">
                        BuzzFeed
                      </a>{' '}
                      and{' '}
                      <a href="https://www.dropbox.com" target="_blank">
                        Dropbox
                      </a>.
                    </p>

                    <p>
                      He has collaborated with designers like
                      <a href="http://jacobheftmann.com/" target="_blank">
                        Jacob{' '}
                      </a>
                      and{' '}
                      <a href="http://www.thankseverybody.com/" target="_blank">
                        Jake{' '}
                      </a>
                      from{' '}
                      <a href="https://xxix.co" target="_blank">
                        XXIX{' '}
                      </a>,{' '}
                      <a href="https://www.wadejeffree.com" target="_blank">
                        Wade
                      </a>{' '}
                      and{' '}
                      <a href="http://www.thankseverybody.com/" target="_blank">
                        Leta
                      </a>{' '}
                      from{' '}
                      <a href="http://ikkoikko.com/" target="_blank">
                        Ikko Ikko
                      </a>{' '}
                      and{' '}
                      <a href="http://dmcg.co/" target="_blank">
                        David McGillivray
                      </a>.
                    </p>

                    <p>
                      He has started many businesses including{' '}
                      <a href="http://frontrowhq.com" target="_blank">
                        Front Row Ventures
                      </a>,{' '}
                      <a href="http://www.wiseapp.com" target="_blank">
                        Wise
                      </a>{' '}
                      and{' '}
                      <a href="https://www.smallvictori.es" target="_blank">
                        Small Victories
                      </a>.
                    </p>

                    <p>
                      While Michael has worked with a range of technologies such
                      as HTML, CSS, JavaScript, Python and Swift, his preferred
                      technologies are Ruby (on Rails), React and Go.
                    </p>

                    <p>
                      This website was designed by{' '}
                      <a href="http://www.wadejeffree.com" target="_blank">
                        Wade Jeffree
                      </a>, built with{' '}
                      <a href="https://www.gatsbyjs.com/" target="_blank">
                        Gatsby.js
                      </a>, managed with{' '}
                      <a href="https://www.contentful.com/" target="_blank">
                        Contentful
                      </a>{' '}
                      and hosted on{' '}
                      <a href="https://www.netlify.com/" target="_blank">
                        Netlify
                      </a>.
                    </p>
                  </ReadingText>
                </AboutRow>
              </SparkScroll.div>
            </Container>
          </SparkProxy.div>
        </AboutPage>
      </div>
    );
  }
}

export const query = graphql`
  query AboutImagesQuery {
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 900) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;

export default About;
