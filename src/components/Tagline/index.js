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

const Tagline = () => (
  <Wrapper>
    <AsidePrimary>
      <div>
        <span>a</span>
      </div>
      <Line>product</Line>
      <Line>minded</Line>
    </AsidePrimary>
    <TaglineContent>
      <Line>software</Line>
      <Line>developer</Line>
    </TaglineContent>
  </Wrapper>
);

export default Tagline;
