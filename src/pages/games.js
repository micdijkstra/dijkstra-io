import React from 'react'

import { Page, PageTitle, CloseHeader, CloseLink } from '../components/Page'

const PageGames = Page.extend`
  background-color: ${props => props.theme.colors.quaternary};
  color: ${props => props.theme.colors.onDark};
`;

const GamesPage = () => (
  <PageGames>
    <CloseHeader>
      <CloseLink to="/">close</CloseLink>
    </CloseHeader>
    <PageTitle>games<br />games<br />games</PageTitle>
  </PageGames>
)

export default GamesPage
