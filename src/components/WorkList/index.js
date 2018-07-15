import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import {Container} from '../../components/Layout';
import {PageLink} from '../../components/Page';

import {media} from '../../utils/style';

const Background = styled.div`
  left: 0;
  height: 100%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 0;
`;

const BackgroundImage = Background.extend`
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 80%;
  left: 10%;
  opacity: 0.97;
  top 10%;
  width: 80%;
`;

const WorkContainer = Container.extend`
  color: ${props => props.theme.colors.primary};
  float: right;
  min-width: 80%;
  padding-right: ${props => props.theme.spacing.md};

  ${media.sm`
    min-width: 60%;
    padding-right: ${props => props.theme.spacing.xl};
  `};
`;

const WorkItems = styled.ol`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.text.md};
  line-height: ${props => props.theme.line.sm};
  list-style: none;

  ${media.sm`
    font-size: ${props => props.theme.text.md.md};
  `};
`;

const WorkItem = styled.li`
  counter-increment: count;
  margin-bottom: ${props => props.theme.spacing.sm};
  position: relative;

  :before {
    content: counter(count);
    left: -50px;
    position: absolute;

    ${media.sm`
      left: -75px;
    `};
  }

  :nth-child(-n + 9):before {
    content: '0' counter(count);
  }

  body.no-touch & {
    &:hover {
      opacity: 0.9;
    }
  }
`;

const WorkLink = styled(PageLink)`
  color: ${props => props.theme.colors.primary};
`;

class Work extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {title, projects} = this.props;

    return (
      <WorkContainer>
        <WorkItems>
          {projects &&
            projects.map((project, index) => {
              const src = project.image && project.image.sizes.src;

              return (
                <WorkItem key={index}>
                  <WorkLink to={`/${project.slug}`}>{project.title}</WorkLink>
                </WorkItem>
              );
            })}
        </WorkItems>
      </WorkContainer>
    );
  }
}

class WorkList extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      document.body.classList.contains('no-touch') &&
      (this.state.color !== nextState.color ||
        this.state.image !== nextState.image)
    );
  }

  render() {
    const {title, projects} = this.props;

    return (
      <div>
        <Work title={title} projects={projects} />
      </div>
    );
  }
}

export default WorkList;
