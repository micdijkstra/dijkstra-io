import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Container, Row } from '../components/Layout'
import { Page } from '../components/Page'
import { AsidePrimary } from '../components/Aside'
import { LeadText, ReadingText } from '../components/Text'

import { media } from '../utils/style'

const BlogPage = Page.extend`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onDark};

  a {
    &:after {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
`

const BlogRow = Row.extend`
  margin-bottom: ${props => props.theme.spacing.lg};

  ${media.sm`
    flex-direction: row;
  `};
`

const SectionTitle = styled.div`
  display: flex;
  margin-top: 5px;

  a:visited {
    color: white;
  }
`

const SectionTitlePrimary = AsidePrimary.extend`
  width: 100px;
`

class Blog extends React.Component {
  render() {
    const { transition } = this.props

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>Blog | Michael Dijkstra</title>
        </Helmet>
        <BlogPage>
          <Container>
            <LeadText>
              <p>
                <a href="/">Michael Dijkstra</a> writes notes about things you
                may or may not find interesting.
              </p>
            </LeadText>

            <BlogRow>
              <SectionTitle>
                <SectionTitlePrimary>
                  Netlify can be blazing fast
                </SectionTitlePrimary>
              </SectionTitle>
              <ReadingText>
                <p>
                  Want to see something blazing fast? Add an `index.html` to a
                  GitHub repo, add the repo to Netlify to see how long it takes
                  to build!
                </p>
              </ReadingText>
            </BlogRow>

            <BlogRow>
              <SectionTitle>
                <SectionTitlePrimary>
                  Can&rsquo;t sign in with GitHub on GitHub Enterprise
                </SectionTitlePrimary>
              </SectionTitle>
              <ReadingText>
                <p>
                  When I signed in to GitHub Enterprise (with the Sign in with
                  GitHub option) I got redirected to a “Contact our sales team”
                  form …
                </p>
                <p>
                  Entering my name and choosing a password works … but if GitHub
                  can’t get Sign in with GitHub to work, what hope is there for
                  the rest of us?
                </p>
              </ReadingText>
            </BlogRow>
          </Container>
        </BlogPage>
      </div>
    )
  }
}

Blog.propTypes = {
  transition: PropTypes.object
}

export default Blog
