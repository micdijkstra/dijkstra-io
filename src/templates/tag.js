import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import {AsidePrimary, AsideSecondary} from '../components/Aside';
import Close from '../components/Close';
import {Container, Row} from '../components/Layout';
import {PageLink} from '../components/Page';
import WorkList from '../components/WorkList';

const TagPage = styled.div`
  background-color: ${props => props.theme.colors.senary};
  color: ${props => props.theme.colors.primary};
  min-height: 100vh;
`;

const TagCloseHeader = styled.div`
  color: ${props => props.theme.colors.primary};
`;

const TagLink = styled(PageLink)`
  color: ${props => props.theme.colors.primary};
`;

class Tag extends React.Component {
  render() {
    const {transition, data} = this.props;
    const {project, slug, title} = data.contentfulTag;

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>Tag :: Michael Dijkstra</title>
        </Helmet>
        <TagPage>
          <TagCloseHeader>
            <Close />
          </TagCloseHeader>

          <Container>
            <Row>
              <WorkList projects={project} />
              <div>
                <AsidePrimary>
                  <div>Technology</div>
                  <div>used</div>
                </AsidePrimary>
                <AsideSecondary>
                  <div>&nbsp;</div>
                  <div>
                    <TagLink to={`/work/${slug}/`}>{title}</TagLink>
                  </div>
                </AsideSecondary>
              </div>
            </Row>
          </Container>
        </TagPage>
      </div>
    );
  }
}

Tag.propTypes = {
  data: PropTypes.object,
  transition: PropTypes.object,
};

export default Tag;

export const query = graphql`
  query tagQuery($slug: String!) {
    contentfulTag(slug: {eq: $slug}) {
      id
      title
      slug
      project {
        color
        image {
          sizes(maxWidth: 1800, cropFocus: TOP) {
            ...GatsbyContentfulSizes
          }
        }
        title
        slug
        linkText
        link
        position
      }
    }
  }
`;
