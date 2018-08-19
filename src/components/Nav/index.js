import React from 'react';
import styled from 'styled-components';

import {PageLink, PageExternalLink} from '../Page';
import {media} from '../../utils/style';

const Wrapper = styled.div`
  font-size: ${props => props.theme.text.xs.lg};
  margin-left: 25%;
  position: relative;
  z-index: 10 !important;

  ${media.sm`
    font-size: ${props => props.theme.text.md.lg};
  `};
`;

const NavList = styled.ol`
  list-style: lower-alpha inside;
  padding-left: 0;
`;

const Nav = () => (
  <Wrapper>
    <NavList>
      <li>
        <PageLink to="/about/">About</PageLink>
      </li>
      <li>
        <PageLink to="/work/">Work</PageLink>
      </li>
      <li>
        <PageLink to="/contact/">Contact</PageLink>
      </li>
      <li>
        <PageExternalLink href="https://blog.dijkstra.io">Blog</PageExternalLink>
      </li>
    </NavList>
  </Wrapper>
);

export default Nav;
