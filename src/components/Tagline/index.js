import React from 'react';
import styled from 'styled-components';

import {AsidePrimary, AsideSecondary} from '../Aside';

import {media} from '../../utils/style';

const Wrapper = styled.div`
  float: right;
`;

const TaglineContent = AsideSecondary.extend`
  margin-top: 80px;
  margin-left: ${props => props.theme.spacing.sm};

  ${media.sm`
    margin-left: ${props => props.theme.spacing.md};
  `};
`;

const Line = styled.div`
  position: relative;
`;

const AltItem = styled.span`
  position: absolute;
  width: 200%;
  right: 0;
`;

const SecondaryAltItem = AltItem.extend`
  left: 0;
  right: auto;
`;

class Tagline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: false,
    };

    this.showAlt = this.showAlt.bind(this);
    this.showDefault = this.showDefault.bind(this);
  }

  showAlt() {
    this.setState({alt: true});
  }

  showDefault() {
    this.setState({alt: false});
  }

  render() {
    const {alt} = this.state;

    return (
      <Wrapper onMouseEnter={this.showAlt} onMouseLeave={this.showDefault}>
        <AsidePrimary>
          <div>
            <span>a</span>
          </div>
          <Line>
            <span style={{opacity: alt ? 0 : 1}}>software</span>
            <AltItem style={{opacity: alt ? 1 : 0}}>product</AltItem>
          </Line>
          <Line>
            <span style={{opacity: alt ? 0 : 1}}>developer</span>
            <AltItem style={{opacity: alt ? 1 : 0}}>manager</AltItem>
          </Line>
        </AsidePrimary>
        <TaglineContent>
          <div>
            <span>and</span>
          </div>
          <Line>
            <span style={{opacity: alt ? 0 : 1}}>product</span>
            <SecondaryAltItem style={{opacity: alt ? 1 : 0}}>
              software
            </SecondaryAltItem>
          </Line>
          <Line>
            <span style={{opacity: alt ? 0 : 1}}>manager</span>
            <SecondaryAltItem style={{opacity: alt ? 1 : 0}}>
              developer
            </SecondaryAltItem>
          </Line>
        </TaglineContent>
      </Wrapper>
    );
  }
}

export default Tagline;
