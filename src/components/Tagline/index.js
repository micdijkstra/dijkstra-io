import React from 'react';
import styled from 'styled-components';

import {AsidePrimary, AsideSecondary} from '../Aside';

import {media} from '../../utils/style';

const Wrapper = styled.div`
  float: right;
`;

const TaglineContent = AsideSecondary.extend`
  margin-top: 57px;
  margin-left: ${props => props.theme.spacing.sm};

  ${media.sm`
    margin-left: ${props => props.theme.spacing.md};
    margin-top: 80px;
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
          <Line>young</Line>
          <Line>Australian</Line>
        </AsidePrimary>
        <TaglineContent>
          <Line>Software</Line>
          <Line>Developer</Line>
        </TaglineContent>
      </Wrapper>
    );
  }
}

export default Tagline;
