import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Close from '../components/Close';
import WorkList from '../components/WorkList';

import {media} from '../utils/style';

const WorkPage = styled.div`
  background-color: ${props => props.theme.colors.quinary};
  height: 100vh;
`;

const WorkCloseHeader = styled.div`
  color: ${props => props.theme.colors.primary};
`;

class Work extends React.Component {
  render() {
    const {transition, data} = this.props;

    const projects = data.allContentfulProject.edges.map(project => {
      return project.node;
    });

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>Work :: Michael Dijkstra</title>
        </Helmet>
        <WorkPage>
          <WorkCloseHeader>
            <Close />
          </WorkCloseHeader>
          <WorkList projects={projects} />
        </WorkPage>
      </div>
    );
  }
}

export default Work;

export const query = graphql`
  query projectsQuery {
    allContentfulProject(sort: {fields: [position], order: ASC}) {
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
          backgroundPosition
        }
      }
    }
  }
`;
