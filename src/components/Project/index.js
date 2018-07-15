import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import {fadeIn, media} from '../../utils/style';

const ProjectTag = styled.div`
  color: ${props => props.color || 'inherit'};
  font-size: ${props => props.theme.text.md};
  margin-left: 25%;
  margin-top: ${props => props.theme.spacing.md};

  ${media.sm`
    font-size: ${props => props.theme.text.md.md};
  `};
`;

const ProjectImage = styled(Img)`
  ${fadeIn()} ${media.sm`
    max-width: ${props => (props.aspectRatio < 1 ? '375px' : '100%')};
  `};
`;

export {ProjectTag, ProjectImage};
