import React from 'react'
import styled from 'styled-components'

import { Aside, AsideSecondary } from '../Aside'

const Wrapper = styled.div`
  float: right;

  > div:nth-of-type(2) {
    margin-top: ${props => props.theme.spacing.lg};
    margin-left: ${props => props.theme.spacing.sm};
  }
`;

const Tagline = () => (
  <Wrapper>
    <Aside>
      <div>a</div>
      <div>young</div>
      <div>australian</div>
    </Aside>
    <AsideSecondary>
      <div>software</div>
      <div>developer</div>
    </AsideSecondary>
  </Wrapper>
)

export default Tagline
