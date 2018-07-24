import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import {Container, Row} from '../components/Layout';
import {Page, PageExternalLink} from '../components/Page';
import Close from '../components/Close';
import {AsidePrimary, AsideSecondary} from '../components/Aside';
import {ReadingText} from '../components/Text';
import ContactForm from '../components/ContactForm';

const ContactPage = Page.extend`
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.onDark};
`;

class Contact extends React.Component {
  render() {
    const {transition} = this.props;

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>How do you contact Michael Dijkstra?</title>
        </Helmet>
        <ContactPage>
          <Close />

          <Container>
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
                      href="https://github.com/micdijkstra"
                      target="_blank">
                      GitHub
                    </PageExternalLink>
                  </div>
                  <div>
                    <PageExternalLink
                      href="https://twitter.com/micdijkstra"
                      target="_blank">
                      Twitter
                    </PageExternalLink>
                  </div>
                  <div>
                    <PageExternalLink
                      href="https://instagram.com/dijkstra.io"
                      target="_blank">
                      Instagram
                    </PageExternalLink>
                  </div>
                </AsideSecondary>
              </div>
            </Row>
          </Container>
        </ContactPage>
      </div>
    );
  }
}

Contact.propTypes = {
  transition: PropTypes.object,
};

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
`;

export default Contact;
