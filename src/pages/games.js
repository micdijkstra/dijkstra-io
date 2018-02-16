import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Page, PageTitle, CloseHeader, CloseLink } from '../components/Page'
import { Aside, AsideSecondary } from '../components/Aside'
import { Container, Row } from '../components/Container'

const PageGames = Page.extend`
  background-color: ${props => props.theme.colors.quaternary};
  color: ${props => props.theme.colors.onDark};
`;

const GameContainer = Container.extend`
  position: relative;
`

const Game = styled.iframe`
  border: none;
  display: none;
  height: 400px;
  left: 50%;
  margin-top: -150px;
  margin-left: -320px;
  position: absolute;
  top: 50%;
  width: 640px;

  @media (min-width: ${props => props.theme.screen.sm}) {
    display: block;
  }
`

const NoGame = styled.div`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onDark};
  padding: ${props => props.theme.spacing.sm};
  text-align: center;
  position: absolute;
  top: 50%;
  width: 100%;

  @media (min-width: ${props => props.theme.screen.sm}) {
    display: none;
  }
`

const GamesPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <PageGames>
      <Helmet>
        <title>Games :: Michael Dijkstra</title>
      </Helmet>
      <CloseHeader>
        <CloseLink to="/">close</CloseLink>
      </CloseHeader>
      <GameContainer>
        <NoGame>Load this page on your computer to play games!</NoGame>
        <Game src="https://wolf3d.dijkstra.io"></Game>
        <PageTitle>games<br />games<br />games</PageTitle>
      </GameContainer>
      <Container>
        <Row>
          <div>
            <Aside>
              <div>&nbsp;</div>
              <div>move</div>
              <div>run</div>
              <div>open</div>
              <div>fire</div>
              <div>strafe</div>
            </Aside>
            <AsideSecondary>
              <div>buttons</div>
              <div>arrow keys</div>
              <div>shift</div>
              <div>space</div>
              <div>x</div>
              <div>z</div>
            </AsideSecondary>
          </div>
        </Row>
      </Container>
    </PageGames>
  </div>
)

export default GamesPage
