import React from 'react'
import styled from 'styled-components'

import { media } from '../../utils/style'

const Text = styled.div`
  a {
    text-decoration: underline;

    &,
    &:visited {
      color: inherit;
    }

    &:hover {
      text-decoration: none;
    }
  }
`

const ReadingText = Text.extend`
  font-size: ${props => props.theme.text.md};
  line-height: ${props => props.theme.line.sm};

  > p {
    margin-bottom: ${props => props.theme.spacing.md};
  }

  ${media.sm`
    font-size: ${props => props.theme.text.md.md};
  `}
`;

export { Text, ReadingText }
