import React from 'react';
import styled from 'styled-components';

import {Section} from '../../Layout';
import {ProjectTag} from '../../Project';
import ProjectImages from '../../Project/Images';

import {fadeIn, media, timeout} from '../../../utils/style';

const ProjectFrame = styled.div`
  ${fadeIn()} height: 0;
  position: relative;
  width: 100%;

  iframe {
    border: 0;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    volume: silent;
    width: 100%;
    z-index: 1;
  }
`;

const DesktopFrame = ProjectFrame.extend`
  padding-bottom: 70%;
`;

const MobileFrame = ProjectFrame.extend`
  height: 480px;
  margin-left: 8%;
  width: 300px;

  ${media.sm`
    height: 0;
    margin-left: 12%;
    padding-bottom: 65%;
    width: 365px;
  `};
`;

const VimeoFrame = ProjectFrame.extend`
  padding-bottom: 51%;
`;

class ProjectFrames extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {images, liveUrl, vimeoUrl} = this.props;

    if (liveUrl)
      return (
        <div>
          <Section>
            <DesktopFrame>
              <iframe src={liveUrl} />
            </DesktopFrame>
            <ProjectTag>a.&emsp;desktop</ProjectTag>
          </Section>

          <Section>
            <MobileFrame style={{animationDelay: `${timeout}ms`}}>
              <iframe src={liveUrl} />
            </MobileFrame>
            <ProjectTag>b.&emsp;mobile</ProjectTag>
          </Section>
        </div>
      );

    return (
      <div>
        {vimeoUrl && (
          <VimeoFrame>
            <iframe src={`${vimeoUrl}?autoplay=1`} allowFullScreen />
          </VimeoFrame>
        )}
        <ProjectImages images={images} offset={vimeoUrl ? 1 : 0} />
      </div>
    );
  }
}

export default ProjectFrames;
