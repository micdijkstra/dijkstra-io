import React from 'react'
import Helmet from 'react-helmet'
import Img from "gatsby-image"
import styled from 'styled-components'
import sparkScroll from 'react-spark-scroll-gsap'
const { SparkScroll, SparkProxy } = sparkScroll({invalidateAutomatically: true})

import { Container, Row } from '../components/Layout'
import Tagline from '../components/Tagline'
import { Page, PageTitle } from '../components/Page'
import Close from '../components/Close'
import { Cards, Card } from '../components/Card'
import { ReadingText } from '../components/Text'

import getRandom from '../utils/getRandom'
import { media } from '../utils/style'

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
`

const AboutRow = Row.extend`
  ${media.sm`
    flex-direction: row;
  `}
`

class About extends React.Component {
  render() {
    const { transition, data } = this.props

    return(
      <div style={transition && transition.style}>
        <Helmet>
          <title>About :: Michael Dijkstra</title>
        </Helmet>
        <AboutPage>
          <Close />
          <SparkProxy.div proxyId="parallax">
            <Container>
              <Cards order={[3,2,0,1]}>
                <AboutCard>
                  <SparkScroll.div
                    proxy="parallax"
                    timeline={{
                      topBottom: {transform: 'translate3d(0px,0px,0px)'},
                      bottomTop: {transform: 'translate3d(0px,-120px,0px)'}
                    }}
                  >
                    <PageTitle>love<br />to<br />code</PageTitle>
                  </SparkScroll.div>
                </AboutCard>
                {getRandom(data.allFile.edges, 3).map((img, index) => {
                  return (
                    <AboutCard key={index}>
                      <SparkScroll.div
                        proxy="parallax"
                        timeline={{
                          topBottom: { transform: 'translate3d(0px,0px,0px)' },
                          bottomTop: { transform: 'translate3d(' + (index % 2 == 0 ? '-' : '') + index+1 * 15 + 'vw,-120px,0px)' }
                        }}
                      >
                        <Img sizes={img.node.childImageSharp.sizes} />
                      </SparkScroll.div>
                    </AboutCard>
                  )
                })}
              </Cards>
            </Container>

            <Container>
              <SparkScroll.div
                timeline={{
                  topBottom: { opacity: 0 },
                  bottomBottom: { opacity: 1 }
                }}
              >
                <AboutRow>
                  <Tagline />
                  <ReadingText>
                    <p>Michael Dijkstra works with most web and mobile technologies, specializing in Ruby on Rails web applications, Swift iOS applications and front-end website development using HTML, CSS/Sass and modern JavaScript frameworks such as React.</p>
                  </ReadingText>
                </AboutRow>
              </SparkScroll.div>
            </Container>
          </SparkProxy.div>
        </AboutPage>
      </div>
    )
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
`

export default About
