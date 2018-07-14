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
            <span style={{opacity: alt ? 0 : 1}}>sarcastic</span>
            <AltItem style={{opacity: alt ? 1 : 0}}>good</AltItem>
          </Line>
          <Line>but</Line>
        </AsidePrimary>
        <TaglineContent>
          <Line>
            <span style={{opacity: alt ? 0 : 1}}>good</span>
            <SecondaryAltItem style={{opacity: alt ? 1 : 0}}>
              sarcastic
            </SecondaryAltItem>
          </Line>
          <Line>software</Line>
          <Line>developer</Line>
        </TaglineContent>
      </Wrapper>
    );
  }
}

export default Tagline;
