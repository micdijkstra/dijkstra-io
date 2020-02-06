import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Container, Row } from '../components/Layout'
import { Page, PageExternalLink } from '../components/Page'
import { AsidePrimary, AsideSecondary } from '../components/Aside'
import { LeadText, ReadingText } from '../components/Text'
import ContactForm from '../components/ContactForm'

const ContactPage = Page.extend`
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.onDark};

  a {
    &:after {
      background-color: ${props => props.theme.colors.tertiary};
    }
  }
`

class Contact extends React.Component {
  render() {
    const { transition } = this.props

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>Contact | Michael Dijkstra</title>
        </Helmet>
        <ContactPage>
          <Container>
            <LeadText>
              <p>
                <a href="/">Michael Dijkstra</a> is currently living and working
                in Sydney, Australia.
              </p>
            </LeadText>
            <Row>
              <ReadingText>
                <p>Please use the form below to get in touch.</p>
                <ContactForm />
              </ReadingText>
              <div>
                <AsidePrimary>
                  <div>Socials</div>
                </AsidePrimary>
                <AsideSecondary>
                  <div>
                    <PageExternalLink
                      href="https://github.com/diiijkstra"
                      target="_blank"
                    >
                      GitHub
                    </PageExternalLink>
                  </div>
                  <div>
                    <PageExternalLink
                      href="https://twitter.com/diiijkstra"
                      target="_blank"
                    >
                      Twitter
                    </PageExternalLink>
                  </div>
                </AsideSecondary>
              </div>
            </Row>
          </Container>
        </ContactPage>
      </div>
    )
  }
}

Contact.propTypes = {
  transition: PropTypes.object
}

export const query = graphql`
  query ContactImagesQuery {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
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
