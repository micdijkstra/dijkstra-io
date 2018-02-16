import React from 'react'
import styled from 'styled-components'

const Group = styled.div`
  font-size: ${props => props.theme.text.sm};
  line-height: ${props => props.theme.line.sm};
  float: left;
  margin-bottom: ${props => props.theme.spacing.md};
  text-align: right;
`;

const GroupSecondary = Group.extend`
  margin-left: ${props => props.theme.spacing.md};
  text-align: left;
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


const AsideLine = styled.div`
  line-height: ${props => props.theme.line.md};
`


export { Aside, AsideSecondary, AsideLine }
