import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'

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

const CopyContainer = Container.extend`
  padding: ${props => props.theme.spacing.lg} 0;
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

          <Container>
            <Cards order={[3,0,2,1]}>
              <ContactCard>
                <PageTitle>hello<br />from<br />edmonton</PageTitle>
              </ContactCard>
              {getRandom(data.allFile.edges, 3).map((img, index) => {
                return (
                  <ContactCard key={index}>
                    <Img sizes={img.node.childImageSharp.sizes} />
                  </ContactCard>
                )
              })}
            </Cards>
          </Container>

          <CopyContainer>
            <Row>
              <div>
                <Aside>
                  <div>Socials</div>
                </Aside>
                <AsideSecondary>
                  <div>GitHub</div>
                  <div>Instagram</div>
                  <div>Twitter</div>
                </AsideSecondary>
              </div>
              <ReadingText>
                <p>Michael Dijkstra is available for hire for web and mobile software development.</p>
                <p>Please use the form below to get in touch.</p>
              </ReadingText>
            </Row>
          </CopyContainer>
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
