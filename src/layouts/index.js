import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';

import theme from '../theme';

import 'normalize.css';
import './index.css';

const Wrapper = styled.div`
  overflow: hidden;
`;

class DefaultLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  componentDidMount() {
    const {location} = this.props;
    this.htmlElement = document.querySelector(`html`);
    this.bodyElement = document.querySelector(`body`);
    this.scrollPosition = 0;

    document.body.classList.add('no-touch');
    window.addEventListener(
      'touchstart',
      function onFirstTouch() {
        document.body.classList.remove('no-touch');
        window.removeEventListener('touchstart', onFirstTouch, false);
      },
      false,
    );
  }

  render() {
    const {location} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Helmet
            title="Michael Dijkstra is sarcasitc but hard-working software developer"
            meta={[
              {
                name: 'description',
                content: 'Australian web and mobile developer',
              },
              {name: 'keywords', content: 'front-end, website'},
            ]}
          />
          {this.props.children({...this.props})}
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default DefaultLayout;
