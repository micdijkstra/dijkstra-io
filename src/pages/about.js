import React from 'react'

import { Page, PageTitle, CloseHeader, CloseLink } from '../components/Page'

const PageAbout = Page.extend`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onDark};
`;

const AboutPage = () => (
  <PageAbout>
    <CloseHeader>
      <CloseLink to="/">close</CloseLink>
    </CloseHeader>
    <PageTitle>love<br />to<br />code</PageTitle>
  </PageAbout>
)

export default AboutPage
