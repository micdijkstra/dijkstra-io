import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { fadeIn } from '../../utils/style'

const ProjectTag = styled.div`
  font-size: ${props => props.theme.text.lg};
  margin-left: 25%;
  margin-top: ${props => props.theme.spacing.md};
`

const ProjectImage = styled(Img)`
  ${fadeIn()}
`

export { ProjectTag, ProjectImage }
