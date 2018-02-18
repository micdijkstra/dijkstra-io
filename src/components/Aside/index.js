import React from 'react'
import styled from 'styled-components'

const Aside = styled.div`
  font-size: ${props => props.theme.text.sm};
  line-height: ${props => props.theme.line.md};
  float: left;
  margin-bottom: ${props => props.theme.spacing.md};
`

const AsidePrimary = Aside.extend`
  text-align: right;
`;

const AsideSecondary = Aside.extend`
  margin-left: ${props => props.theme.spacing.md};
  text-align: left;
`;

export { Aside, AsidePrimary, AsideSecondary }
