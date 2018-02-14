import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'

import { Container, Row } from '../components/Container'
import Tagline from '../components/Tagline'
import { Page, PageTitle, CloseHeader, CloseLink } from '../components/Page'
import { Cards, Card } from '../components/Card'
import { ReadingText } from '../components/Text'

import getRandom from '../utils/getRandom'

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

const CopyContainer = Container.extend`
  padding: ${props => props.theme.spacing.lg} 0;
`

const AboutRow = Row.extend`
  @media (min-width: ${props => props.theme.screen.sm}) {
    flex-direction: row;
  }
`

class About extends React.Component {
  render() {
    const { transition, data } = this.props

    return(
      <div style={transition && transition.style}>
        <AboutPage>
          <CloseHeader>
            <CloseLink to="/">close</CloseLink>
          </CloseHeader>

          <Container>
            <Cards order={[3,2,0,1]}>
              <AboutCard>
                <PageTitle>love<br />to<br />code</PageTitle>
              </AboutCard>
              {getRandom(data.allFile.edges, 3).map((img, index) => {
                return (
                  <AboutCard key={index}>
                    <Img sizes={img.node.childImageSharp.sizes} />
                  </AboutCard>
                )
              })}
            </Cards>
          </Container>

          <CopyContainer>
            <AboutRow>
              <Tagline />
              <ReadingText>
                <p>Michael Dijkstra works with most web and mobile technologies, specializing in Ruby on Rails web applications, Swift iOS applications and front-end website development using HTML, CSS/Sass and modern JavaScript frameworks such as React.</p>
              </ReadingText>
            </AboutRow>
          </CopyContainer>
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
