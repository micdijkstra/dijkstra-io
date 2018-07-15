import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Page, PageTitle } from '../components/Page'
import Close from '../components/Close'
import { Container } from '../components/Layout'

const PageNotFound = Page.extend`
  background-color: ${props => props.theme.colors.quaternary};
  color: ${props => props.theme.colors.onDark};
`;

const NotFoundPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <PageNotFound>
      <Helmet>
        <title>Where is Michael Dijkstra?</title>
      </Helmet>
      <Close />
      <Container>
        <PageTitle>page<br />not<br />found</PageTitle>
      </Container>
    </PageNotFound>
  </div>
)

export default NotFoundPage
