import React from 'react'
import styled from 'styled-components'

import { media } from '../../utils/style'

const ReadingText = styled.div`
  font-size: ${props => props.theme.text.md};
  line-height: ${props => props.theme.line.sm};

  > * {
    margin-bottom: ${props => props.theme.spacing.md};
  }

  ${media.sm`
    font-size: ${props => props.theme.text.md.md};
  `}
`;

export { ReadingText }
