import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';

import Header from '../components/Header';
import theme from '../theme';

import 'normalize.css';
import './index.css';

const Wrapper = styled.div`
  overflow: hidden;
`;

const Stage = styled.div`
  background-color: ${props =>
    props.theme.stages[props.path] &&
    props.theme.stages[props.path].background};
  color: ${props =>
    props.theme.stages[props.path] && props.theme.stages[props.path].color};
  min-height: 100vh;
`;

class DefaultLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
    location: PropTypes.object,
  };

  componentDidMount() {
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
    const parts = location.pathname.split('/');
    const path = parts[1];
    const topLevel = parts.length === 3;
    const root = path === '';
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
          <Stage path={path}>
            {!root && topLevel && <Header />}
            {this.props.children({...this.props})}
          </Stage>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default DefaultLayout;
