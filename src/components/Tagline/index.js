import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  float: right;
  margin-top: ${props => props.theme.spacing.md};
`;

const Group = styled.div`
  font-size: ${props => props.theme.text.sm};
  line-height: ${props => props.theme.line.sm};
  float: left;
`;

const GroupSecondary = Group.extend`
  margin-top: ${props => props.theme.spacing.lg};
  margin-left: ${props => props.theme.spacing.sm};
`;

const Line = styled.div`
`;

const Tagline = () => (
  <Wrapper>
    <Group>
      <Line>a</Line>
      <Line>young</Line>
      <Line>australian</Line>
    </Group>
    <GroupSecondary>
      <Line>software</Line>
      <Line>developer</Line>
    </GroupSecondary>
  </Wrapper>
)

export default Tagline
