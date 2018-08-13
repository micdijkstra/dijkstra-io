import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import {AsidePrimary, AsideSecondary} from '../components/Aside';
import {Container, Row} from '../components/Layout';
import {PageLink} from '../components/Page';
import WorkList from '../components/WorkList';
import {LeadText} from '../components/Text';

const WorkPage = styled.div`
  background-color: ${props => props.theme.colors.quinary};
  color: ${props => props.theme.colors.primary};
  min-height: 100vh;

  a {
    &:after {
      background-color: ${props => props.theme.colors.quinary};
    }
  }
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
          <title>Work | Michael Dijkstra</title>
        </Helmet>
        <WorkPage>
          <Container>
            <LeadText>
              <p>
                <a href="/">Michael Dijkstra</a> has designed, developed and
                managed web and mobile applications for clients all over the
                world.
              </p>
            </LeadText>
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
          </Container>
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
