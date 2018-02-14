import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Page = styled.div`
  min-height: 100vh;
  padding-left: ${props => props.theme.spacing.sm};
  padding-right: ${props => props.theme.spacing.sm};
  padding-bottom: ${props => props.theme.spacing.xl};

  @media (min-width: ${props => props.theme.screen.sm}) {
    padding-bottom: ${props => props.theme.spacing.md};
  }
`;

const PageTitle = styled.div`
  font-size: ${props => props.theme.text.xl};
  line-height: ${props => props.theme.line.xs};
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
`
const PageLink = styled(Link)`
  color: white;
  display: inline-block;
  line-height: ${props => props.theme.line.sm};
  position: relative;
  text-decoration: none;

  &:before {
    background-color: currentColor;
    bottom: -2px;
    content: "";
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    transition: 0.15s ease-in-out;
    width: 0;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`

const CloseHeader = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.md};
`

const CloseLink = PageLink.extend`
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.text.md};
`

export { Page, PageTitle, PageLink, CloseHeader, CloseLink }
