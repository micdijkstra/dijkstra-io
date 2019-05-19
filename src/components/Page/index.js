import Link from 'gatsby-link'
import styled from 'styled-components'

import { media, link } from '../../utils/style'

const Page = styled.div`
  min-height: 100vh;
  padding-left: ${props => props.theme.spacing.sm};
  padding-right: ${props => props.theme.spacing.sm};
  padding-bottom: ${props => props.theme.spacing.xl};

  ${media.sm`
    padding-bottom: ${props => props.theme.spacing.md};
  `};
`

const PageTitle = styled.div`
  font-size: ${props => props.theme.text.xs.xl};
  line-height: ${props => props.theme.line.xs};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xs};
  text-align: center;

  ${media.sm`
    font-size: ${props => props.theme.text.md.xl};
    padding: ${props => props.theme.spacing.lg};
  `};
`

const PageLink = styled(Link)`
  ${link()};
`

const PageExternalLink = styled.a`
  ${link()};
`

export { Page, PageTitle, PageLink, PageExternalLink }
