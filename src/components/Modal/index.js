import React from 'react'
import styled from 'styled-components'

import { CloseHeader, CloseLink } from '../Page'

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.modal};
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.text.md};
  height: 100%;
  left: 0;
  overflow: visible;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1500;
`

const Modal = () => (
  <Wrapper>
    <CloseHeader>
      <CloseLink to="/">close</CloseLink>
    </CloseHeader>
  </Wrapper>
)

export default Modal
