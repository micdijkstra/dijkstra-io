import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../../utils/style'

const Page = styled.div`
  min-height: 100vh;
  padding-left: ${props => props.theme.spacing.sm};
  padding-right: ${props => props.theme.spacing.sm};
  padding-bottom: ${props => props.theme.spacing.xl};

  ${media.sm`
    padding-bottom: ${props => props.theme.spacing.md};
  `}
`;

const PageTitle = styled.div`
  font-size: ${props => props.theme.text.xl};
  line-height: ${props => props.theme.line.xs};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xs};
  text-align: center;
  hyphens: auto;
  overflow: hidden;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;

  ${media.sm`
    font-size: ${props => props.theme.text.md.xl};
    padding: ${props => props.theme.spacing.lg};
    overflow: visible;
  `}
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

  &.hover,
  &:hover {
    &:before {
      width: 100%;
    }
  }
`

export { Page, PageTitle, PageLink }
