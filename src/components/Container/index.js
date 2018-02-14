import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 100%;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    flex-direction: row-reverse;

    > div {
      width: 50%;
    }
  }
`;

export { Container, Row }
