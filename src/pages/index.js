import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styled from 'styled-components'

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
          <Container>
            <Tagline />
          </Container>

          <Container>
            <Cards>
              <IndexCard>
                <Logo />
              </IndexCard>
              {getRandom(data.allFile.edges, 3).map((img, index) => {
                return (
                  <IndexCard key={index}>
                    <Img sizes={img.node.childImageSharp.sizes} />
                  </IndexCard>
                )
              })}
            </Cards>
            <Nav />
          </Container>
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
