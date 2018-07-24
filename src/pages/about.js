import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import {Container, Row} from '../components/Layout';
import Tagline from '../components/Tagline';
import {Page, a} from '../components/Page';
import Close from '../components/Close';
import {ReadingText} from '../components/Text';

import {media} from '../utils/style';

const AboutPage = Page.extend`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onDark};
`;

const AboutRow = Row.extend`
  ${media.sm`
    flex-direction: row;
  `};
`;

class About extends React.Component {
  render() {
    const {transition} = this.props;

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>Who is Michael Dijkstra?</title>
        </Helmet>
        <AboutPage>
          <Close />
          <Container>
            <AboutRow>
              <Tagline />
              <ReadingText>
                <p>
                  Michael Dijkstra is a product-minded software developer with
                  more than 10 years experience working across the entire
                  product stack including back-end server development, front-end
                  client side development, product management, wire framing,
                  copy writing and (a little bit of) design.
                </p>

                <p>
                  He has worked for and with companies like{' '}
                  <a
                    href="https://www.q-ctrl.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Q-CTRL
                  </a>,{' '}
                  <a
                    href="https://ayr.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    AYR
                  </a>,{' '}
                  <a
                    href="https://www.roughtrade.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Rough Trade
                  </a>,{' '}
                  <a
                    href="https://eyeondesign.aiga.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    AIGA
                  </a>,{' '}
                  <a
                    href="https://www.buzzfeed.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    BuzzFeed
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.dropbox.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Dropbox
                  </a>.
                </p>

                <p>
                  He has collaborated with designers like{' '}
                  <a
                    href="http://jacobheftmann.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Jacob{' '}
                  </a>
                  and{' '}
                  <a
                    href="http://www.thankseverybody.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Jake{' '}
                  </a>
                  from{' '}
                  <a
                    href="https://xxix.co"
                    target="_blank"
                    rel="noopener noreferrer">
                    XXIX{' '}
                  </a>,{' '}
                  <a
                    href="https://www.wadejeffree.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Wade
                  </a>{' '}
                  and{' '}
                  <a
                    href="http://www.thankseverybody.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Leta
                  </a>{' '}
                  from{' '}
                  <a
                    href="http://ikkoikko.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Ikko Ikko
                  </a>{' '}
                  and{' '}
                  <a
                    href="http://dmcg.co/"
                    target="_blank"
                    rel="noopener noreferrer">
                    David McGillivray
                  </a>.
                </p>

                <p>
                  He is the co-founder of{' '}
                  <a
                    href="http://frontrowhq.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Front Row Ventures
                  </a>, and{' '}
                  <a
                    href="https://www.smallvictori.es"
                    target="_blank"
                    rel="noopener noreferrer">
                    Small Victories
                  </a>.
                </p>

                <p>
                  Michael&rquo;s current preferred technologies are are Ruby on
                  Rails, React and Go.
                </p>

                <p>
                  This website was designed by{' '}
                  <a
                    href="http://www.wadejeffree.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Wade Jeffree
                  </a>, built with{' '}
                  <a
                    href="https://www.gatsbyjs.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Gatsby.js
                  </a>, managed with{' '}
                  <a
                    href="https://www.contentful.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Contentful
                  </a>{' '}
                  and hosted on{' '}
                  <a
                    href="https://www.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Netlify
                  </a>.
                </p>
              </ReadingText>
            </AboutRow>
          </Container>
        </AboutPage>
      </div>
    );
  }
}

About.propTypes = {
  transition: PropTypes.object,
};

export default About;
