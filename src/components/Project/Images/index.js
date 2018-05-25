import React from 'react';
import styled from 'styled-components';

import {Section} from '../../Layout';
import {ProjectImage, ProjectTag} from '../../Project';

import {timeout} from '../../../utils/style';
import alphabet from '../../../utils/alphabet';

class ProjectFrames extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {images, offset} = this.props;

    return (
      <div>
        {images.map((image, index) => {
          return (
            <Section key={index}>
              <ProjectImage
                sizes={image.sizes}
                aspectRatio={image.sizes.aspectRatio}
                alt={image.description}
                style={{animationDelay: `${(index + 1) * timeout}ms`}}
              />
              <ProjectTag>
                {alphabet[offset + index]}. {image.title}
              </ProjectTag>
            </Section>
          );
        })}
      </div>
    );
  }
}

export default ProjectFrames;
