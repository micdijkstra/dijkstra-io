import Link from 'gatsby-link';
import styled, {css} from 'styled-components';

import {media} from '../../utils/style';

const Page = styled.div`
  min-height: 100vh;
  padding-left: ${props => props.theme.spacing.sm};
  padding-right: ${props => props.theme.spacing.sm};
  padding-bottom: ${props => props.theme.spacing.xl};

  ${media.sm`
    padding-bottom: ${props => props.theme.spacing.md};
  `};
`;

const PageTitle = styled.div`
  font-size: ${props => props.theme.text.xs.xl};
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
  `};
`;

const LinkStyles = () => css`
  color: white;
  display: inline-block;
  line-height: ${props => props.theme.line.sm};
  position: relative;
  text-decoration: none;

  &:before {
    background-color: currentColor;
    bottom: -2px;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    transition: 0.15s ease-in-out;
    width: 0;
  }

  body.no-touch & {
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
`;

const PageLink = styled(Link)`
  ${LinkStyles()};
`;

const PageExternalLink = styled.a`
  ${LinkStyles()};
`;

export {Page, PageTitle, PageLink, PageExternalLink};
