import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import styled from 'styled-components'

import { PageLink} from '../Page'

import { media } from '../../utils/style'

const CloseHeader = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.md};
`

const CloseLink = PageLink.extend`
  color: inherit;
  font-size: ${props => props.theme.text.md};
  position: relative;
  z-index: 1;

  &:visited {
    color: inherit;
  }

  ${media.sm`
    font-size: ${props => props.theme.text.md.md};
  `}
`

class Close extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDown, false);
  }

  keyDown(event){
    // esc
    if(event.keyCode === 27) {
      navigateTo("/")
    }
  }

  render() {
    return(
      <CloseHeader>
        <CloseLink to="/" {...this.props}>close</CloseLink>
      </CloseHeader>
    )
  }
}

export default Close
