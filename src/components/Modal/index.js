import React from 'react'
import styled from 'styled-components'

import Close from '../Close'

import theme from '../../theme'

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.modal};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.text.md};
  height: 100%;
  left: 0;
  overflow: visible;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1500;
`

const Modal = ({ children }) => (
  <Wrapper>
    <Close />

    {children()}
  </Wrapper>
)

export default Modal
