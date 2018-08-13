import styled from 'styled-components';

import {media, link} from '../../utils/style';

const Text = styled.div`
  a {
    ${link()} text-decoration: none;

    &:before {
      width: 100%;
    }

    body.no-touch & {
      &:hover {
        &:after {
          width: 100%;
        }
      }
    }

    &,
    &:visited {
      color: inherit;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;

const LeadText = Text.extend`
  font-size: ${props => props.theme.text.xs.lg};
  line-height: ${props => props.theme.line.sm};

  > p {
    margin-bottom: ${props => props.theme.spacing.xl};
  }

  ${media.sm`
    font-size: ${props => props.theme.text.md.lg};
  `};
`;

const ReadingText = Text.extend`
  font-size: ${props => props.theme.text.xs.sm};
  line-height: ${props => props.theme.line.sm};

  > p {
    margin-bottom: ${props => props.theme.spacing.md};
  }

  ul,
  ol,
  li {
    padding-left: 0;
  }

  ${media.sm`
    font-size: ${props => props.theme.text.md.sm};
  `};
`;

export {LeadText, Text, ReadingText};
