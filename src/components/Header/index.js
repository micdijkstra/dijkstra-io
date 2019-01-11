import React from 'react';

import {AsideSecondary} from '../Aside';
import {PageLink} from '../Page';
import {Container} from '../Layout';

import {media} from '../../utils/style';

const Wrapper = Container.extend`
  padding: 0 ${props => props.theme.spacing.md}
    ${props => props.theme.spacing.lg};
  overflow: hidden;
  position: relative;
  max-width: 100%;
  z-index: 5;
`;

const Nav = AsideSecondary.extend`
  margin-top: ${props => props.theme.spacing.lg};
  margin-right: ${props => props.theme.spacing.sm};
  float: right;

  ${media.sm`
    margin-right: ${props => props.theme.spacing.md};
    margin-top: ${props => props.theme.spacing.xl};
  `};

  ${media.md`
    position: fixed;
    right: 0;
  `};
`;

const Header = () => (
  <Wrapper>
    <Nav>
      a.{' '}
      <PageLink to="/about/" activeClassName="active">
        About
      </PageLink>
      <br />
      b.{' '}
      <PageLink to="/work/" activeClassName="active">
        Work
      </PageLink>
      <br />
      c.{' '}
      <PageLink to="/contact/" activeClassName="active">
        Contact
      </PageLink>
    </Nav>
  </Wrapper>
);

export default Header;
