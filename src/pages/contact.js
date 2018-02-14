import React from 'react'

import { Page, PageTitle, CloseHeader, CloseLink } from '../components/Page'

const PageContact = Page.extend`
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.onDark};
`;

const ContactPage = () => (
  <PageContact>
    <CloseHeader>
      <CloseLink to="/">close</CloseLink>
    </CloseHeader>
    <PageTitle>hello<br />from<br />sydney</PageTitle>
  </PageContact>
)

export default ContactPage
