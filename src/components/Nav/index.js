import React from 'react'
import styled from 'styled-components'

import { PageLink } from '../Page'

const Wrapper = styled.div`
  font-size: ${props => props.theme.text.lg};

  @media (min-width: ${props => props.theme.screen.sm}) {
    font-size: ${props => props.theme.text.md.lg};
  }
`

const NavList = styled.ol`
  list-style: lower-alpha inside;
  padding-left: 0;
`

const Nav = () => (
  <Wrapper>
    <NavList>
      <li><PageLink to="/work">Work</PageLink></li>
      <li><PageLink to="/about">About</PageLink></li>
      <li><PageLink to="/contact">Contact</PageLink></li>
    </NavList>
  </Wrapper>
)

export default Nav
