import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import {AsidePrimary, AsideSecondary} from '../components/Aside';
import Close from '../components/Close';
import {Container, Row} from '../components/Layout';
import {PageLink} from '../components/Page';
import WorkList from '../components/WorkList';

const WorkPage = styled.div`
  background-color: ${props => props.theme.colors.quinary};
  color: ${props => props.theme.colors.primary};
  min-height: 100vh;
`;

const WorkCloseHeader = styled.div`
  color: ${props => props.theme.colors.primary};
  position: relative;
  z-index: 5;
`;

const WorkContainer = Container.extend`
  position: relative;
  z-index: 5;
`;

const TagLink = styled(PageLink)`
  color: ${props => props.theme.colors.primary};
`;

class Work extends React.Component {
  render() {
    const {transition, data} = this.props;

    const projects = data.projects.edges.map(project => {
      return project.node;
    });

    const tags = data.tags.edges.map(tag => {
      return tag.node;
    });

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>What did Michael Dijkstra build?</title>
        </Helmet>
        <WorkPage>
          <WorkCloseHeader>
            <Close />
          </WorkCloseHeader>

          <WorkContainer>
            <Row>
              <WorkList projects={projects} />
              <div>
                <AsidePrimary>
                  <div>Technologies</div>
                  <div>used</div>
                </AsidePrimary>
                <AsideSecondary>
                  <div>&nbsp;</div>
                  {tags &&
                    tags.map((tag, index) => {
                      return (
                        <div key={index}>
                          <TagLink to={`/work/${tag.slug}/`}>
                            {tag.title}
                          </TagLink>
                        </div>
                      );
                    })}
                </AsideSecondary>
              </div>
            </Row>
          </WorkContainer>
        </WorkPage>
      </div>
    );
  }
}

Work.propTypes = {
  transition: PropTypes.object,
  data: PropTypes.object,
};

export default Work;

export const query = graphql`
  query projectsQuery {
    projects: allContentfulProject(sort: {fields: [slug], order: ASC}) {
      edges {
        node {
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
    tags: allContentfulTag(sort: {fields: [slug], order: ASC}) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;
