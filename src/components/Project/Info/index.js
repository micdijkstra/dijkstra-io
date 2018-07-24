import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Row} from '../../Layout';
import {AsidePrimary, AsideSecondary} from '../../Aside';
import {ReadingText} from '../../Text';
import {PageLink} from '../../Page';
import {ProjectTag} from '../../Project';

import alphabet from '../../../utils/alphabet';

const InfoSection = styled.div`
  margin-top: ${props => props.theme.spacing.xl};
`;

const ProjectRow = Row.extend`
  left: 0;
  overflow: hidden;
  padding: ${props => props.theme.spacing.md} 0;
  right: 0;
  transition: opacity 0.15s ease-in-out;
  z-index: 2;
`;

const ProjectInfoTag = PageLink.extend`
  color: inherit;
  position: relative;
  z-index: 3;

  &:before {
    width: 100%;
  }

  body.no-touch & {
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
`;

const ProjectInfo = props => {
  const {body, color, index, tags} = props;
  let projectRowStyle = {
    backgroundColor: color,
    opacity: 1,
    height: 'auto',
  };

  return (
    <InfoSection>
      <ProjectTag>
        {alphabet[index]}.&emsp;<ProjectInfoTag to="#info">Info</ProjectInfoTag>
      </ProjectTag>
      <ProjectRow style={projectRowStyle}>
        <ReadingText
          dangerouslySetInnerHTML={{
            __html: (body && body.childMarkdownRemark.html) || '',
          }}
        />
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
                    <PageLink to={`/work/${tag.slug}/`}>{tag.title}</PageLink>
                  </div>
                );
              })}
          </AsideSecondary>
        </div>
      </ProjectRow>
    </InfoSection>
  );
};

ProjectInfo.propTypes = {
  body: PropTypes.object,
  color: PropTypes.string,
  index: PropTypes.number,
  tags: PropTypes.array,
};

export default ProjectInfo;
