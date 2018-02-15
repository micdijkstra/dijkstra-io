import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styled from 'styled-components'
import sparkScroll from 'react-spark-scroll-gsap';
const { SparkScroll, SparkProxy } = sparkScroll({invalidateAutomatically: true});

import Tagline from '../components/Tagline'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import { Container } from '../components/Container'
import { Page } from '../components/Page'
import { Cards, Card } from '../components/Card'

import getRandom from '../utils/getRandom'

const IndexPage = Page.extend`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onDark};
`

const IndexContainer = Container.extend`
  overflow: visible;
`

const IndexCard = Card.extend`
  &:nth-of-type(2) {
    margin-top: -22%;
    margin-bottom: -45%;
    max-width: 60%;
  }

  &:nth-of-type(3) {
    margin-bottom: -25%;
    margin-left: auto;
    max-width: 80%;
  }

  &:nth-of-type(4) {
    margin-left: auto;
    margin-right: 5%;
    max-width: 70%;
  }

  &:nth-of-type(5) {
    bottom: 0;
    left: 25%;
    position: absolute;
    z-index: 10 !important;
  }
`

const HeaderContainer = Container.extend`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
`

class Index extends React.Component {
  shouldComponentUpdate() {
    // Prevent update on page transition
    return false
  }

  render() {
    const { transition, data } = this.props

    return(
      <div style={transition && transition.style}>
        <IndexPage>
          <HeaderContainer>
            <Tagline />
          </HeaderContainer>

          <SparkProxy.div proxyId="parallax">
            <IndexContainer>
              <Cards order={[0,1,2,3,4]} style={{position: 'relative', minHeight: '100vh'}}>
                <IndexCard>
                  <SparkScroll.div
                    proxy="parallax"
                    timeline={{
                      topBottom: {transform: 'translate3d(0px,0px,0px)'},
                      bottomTop: {transform: 'translate3d(0px,-120px,0px)'}
                    }}
                  >
                    <Logo />
                  </SparkScroll.div>
                </IndexCard>
                {getRandom(data.allFile.edges, 3).map((img, index) => {
                  return (
                    <IndexCard key={index}>
                      <SparkScroll.div
                        proxy="parallax"
                        timeline={{
                          topBottom: { transform: 'translate3d(0px,0px,0px)' },
                          bottomTop: { transform: 'translate3d(0px,-' + index+1 * 240 + 'px,0px)' }
                        }}
                      >
                        <Img sizes={img.node.childImageSharp.sizes} />
                      </SparkScroll.div>
                    </IndexCard>
                  )
                })}
                <IndexCard>
                  <SparkScroll.div
                    timeline={{
                      topBottom: { opacity: 0 },
                      bottomBottom: { opacity: 1 }
                    }}
                  >
                    <Nav />
                  </SparkScroll.div>
                </IndexCard>
              </Cards>
            </IndexContainer>
          </SparkProxy.div>
        </IndexPage>
      </div>
    )
  }
}

export const query = graphql`
  query IndexImagesQuery {
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

export default Index
