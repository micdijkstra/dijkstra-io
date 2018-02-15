import React from 'react'
import styled from 'styled-components'

import { Aside, AsideSecondary } from '../Aside'

const Wrapper = styled.div`
  float: right;

  > div:nth-of-type(2) {
    margin-top: ${props => props.theme.spacing.lg};
    margin-left: ${props => props.theme.spacing.md};
  }
`;

const Line = styled.div`
  line-height: ${props => props.theme.line.md};
  position: relative;
  text-align: right;
`
const SecondaryLine = Line.extend`
  text-align: left;

  &:first-of-type {
    margin-top: ${props => props.theme.line.md * 11}px;
  }
`

const Item = styled.span`
`

const AltItem = styled.span`
  position: absolute;
  width: 200%;
  right: 0;
`

const SecondaryAltItem = AltItem.extend`
  left: 0;
  right: auto;
`

class Tagline extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      alt: false
    }

    this.showAlt = this.showAlt.bind(this)
    this.showDefault = this.showDefault.bind(this)
  }

  showAlt() {
    this.setState({ alt: true })
  }

  showDefault() {
    this.setState({ alt: false })
  }

  render() {
    const { alt } = this.state

    return(
        <Wrapper onMouseEnter={this.showAlt} onMouseLeave={this.showDefault}>
          <Aside>
            <Line>
              <Item>a</Item>
            </Line>
            <Line>
              <Item style={{opacity: alt  ? 0 : 1 }}>sarcastic</Item>
              <AltItem style={{opacity: alt  ? 1 : 0 }}>sadistic</AltItem>
            </Line>
            <Line>
              <Item style={{opacity: alt  ? 0 : 1 }}>but</Item>
              <AltItem style={{opacity: alt  ? 1 : 0 }}>and</AltItem>
            </Line>
          </Aside>
          <AsideSecondary>
            <SecondaryLine>
              <Item style={{opacity: alt  ? 0 : 1 }}>hard-working</Item>
              <SecondaryAltItem style={{opacity: alt  ? 1 : 0 }}>hardly</SecondaryAltItem>
            </SecondaryLine>
            <SecondaryLine>
              <Item style={{opacity: alt  ? 0 : 1 }}>software</Item>
              <SecondaryAltItem style={{opacity: alt  ? 1 : 0 }}>working</SecondaryAltItem>
            </SecondaryLine>
            <SecondaryLine>
              <Item style={{opacity: alt  ? 0 : 1 }}>developer</Item>
              <SecondaryAltItem style={{position: 'absolute', left: 0, width: '200%', opacity: alt  ? 1 : 0 }}>gamer</SecondaryAltItem>
            </SecondaryLine>
          </AsideSecondary>
        </Wrapper>
    )
  }
}

export default Tagline
