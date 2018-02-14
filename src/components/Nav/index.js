import React from 'react'
import styled from 'styled-components'

import { PageLink } from '../Page'

const Wrapper = styled.div`
  font-size: ${props => props.theme.text.lg};
  margin: ${props => props.theme.spacing.lg} 0 0 25%;

  @media (min-width: ${props => props.theme.screen.sm}) {
    font-size: ${props => props.theme.text.md.lg};
    margin: ${props => props.theme.spacing.xl} 0;
    margin-left: 25%;
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
