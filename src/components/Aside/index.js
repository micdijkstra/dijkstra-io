import React from 'react'
import styled from 'styled-components'

const Group = styled.div`
  font-size: ${props => props.theme.text.sm};
  line-height: ${props => props.theme.line.sm};
  float: left;
`;

const GroupSecondary = Group.extend`
  margin-left: ${props => props.theme.spacing.md};
`;

const Aside = ({ children }) => (
  <Group>
    {children}
  </Group>
)

const AsideSecondary = ({ children }) => (
  <GroupSecondary>
    {children}
  </GroupSecondary>
)

export { Aside, AsideSecondary }
