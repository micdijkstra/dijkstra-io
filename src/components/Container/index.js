import React from 'react'
import styled from 'styled-components'

import { media } from '../../utils/style'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 100%;
  }

  ${media.sm`
    flex-direction: row-reverse;

    > div {
      width: 50%;
    }
  `}
`;

export { Container, Row }
