import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'
import sparkScroll from 'react-spark-scroll-gsap';
const { SparkScroll, SparkProxy } = sparkScroll({invalidateAutomatically: true});

import { Container, Row } from '../components/Container'
import Tagline from '../components/Tagline'
import { Page, PageTitle, CloseHeader, CloseLink } from '../components/Page'
import { Cards, Card } from '../components/Card'
import { Aside, AsideSecondary } from '../components/Aside'
import { ReadingText } from '../components/Text'

import getRandom from '../utils/getRandom'

const ContactPage = Page.extend`
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.onDark};
`;

const ContactCard = Card.extend`
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

const Line = styled.div`
  line-height: ${props => props.theme.line.md};
`

class Contact extends React.Component {
  render() {
    const { transition, data } = this.props

    return(
      <div style={transition && transition.style}>
        <ContactPage>
          <CloseHeader>
            <CloseLink to="/">close</CloseLink>
          </CloseHeader>

          <SparkProxy.div proxyId="parallax">
            <Container>
              <Cards order={[3,0,2,1]}>
                <ContactCard>
                  <SparkScroll.div
                    proxy="parallax"
                    timeline={{
                      topBottom: {transform: 'translate3d(0px,0px,0px)'},
                      bottomTop: {transform: 'translate3d(0px,-120px,0px)'}
                    }}
                  >
                    <PageTitle>hello<br />from<br />yeg</PageTitle>
                  </SparkScroll.div>
                </ContactCard>
                {getRandom(data.allFile.edges, 3).map((img, index) => {
                  return (
                    <ContactCard key={index}>
                      <SparkScroll.div
                        proxy="parallax"
                        timeline={{
                          topBottom: { transform: 'translate3d(0px,0px,0px)' },
                          bottomTop: { transform: 'translate3d(' + (index % 2 == 0 ? ' ' : '-') + index+1 * 15 + 'vw,-120px,0px)' }
                        }}
                      >
                        <Img sizes={img.node.childImageSharp.sizes} />
                      </SparkScroll.div>
                    </ContactCard>
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
                <Row>
                  <ReadingText>
                    <p>Michael Dijkstra is available for hire for web and mobile software development.</p>
                    <p>Please use the form below to get in touch.</p>
                  </ReadingText>
                  <div>
                    <Aside>
                      <Line>Socials</Line>
                    </Aside>
                    <AsideSecondary>
                      <Line>GitHub</Line>
                      <Line>Instagram</Line>
                      <Line>Twitter</Line>
                    </AsideSecondary>
                  </div>
                </Row>
              </SparkScroll.div>
            </Container>
          </SparkProxy.div>
        </ContactPage>
      </div>
    )
  }
}

export const query = graphql`
  query ContactImagesQuery {
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

export default Contact
