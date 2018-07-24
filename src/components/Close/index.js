import React from 'react';
import PropTypes from 'prop-types';
import {navigateTo} from 'gatsby-link';
import styled from 'styled-components';

import {PageLink} from '../Page';

import {media} from '../../utils/style';

const CloseHeader = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.md};
`;

const CloseLink = PageLink.extend`
  color: inherit;
  font-size: ${props => props.theme.text.xs.md};
  position: relative;
  z-index: 1;

  &:visited {
    color: inherit;
  }

  ${media.sm`
    font-size: ${props => props.theme.text.md.md};
  `};
`;

class Close extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown, false);
  }

  keyDown(event) {
    // esc
    if (event.keyCode === 27) {
      navigateTo('/');
    }
  }

  render() {
    const {to} = this.props;

    return (
      <CloseHeader>
        <CloseLink to={`/${to ? to : ''}`} {...this.props}>
          close
        </CloseLink>
      </CloseHeader>
    );
  }
}

Close.propTypes = {
  to: PropTypes.string,
};

export default Close;
