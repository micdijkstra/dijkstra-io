import React from 'react'
import styled from 'styled-components'

import { Row } from '../../Layout'
import { AsidePrimary, AsideSecondary } from '../../Aside'
import { ReadingText } from '../../Text'
import { PageLink } from '../../Page'
import { ProjectTag } from '../../Project'

const InfoSection = styled.div`
  margin-top: ${props => props.theme.spacing.xl};
`

const ProjectRow = Row.extend`
  padding-top: ${props => props.theme.spacing.md};
  overflow: hidden;
  left: 0;
  position: absolute;
  right: 0;
  transition: opacity 0.15s ease-in-out;
  z-index: 2;
`

const ProjectInfoTag = PageLink.extend`
  position: relative;
  z-index: 3;

  &:before {
    width: 100%;
  }
`


class ProjectInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

    this.showInfo = this.showInfo.bind(this)
    this.hideInfo = this.hideInfo.bind(this)
  }

  showInfo() {
    this.setState({
      show: true
    })
  }

  hideInfo() {
    this.setState({
      show: false
    })
  }

  render() {
    const { show } = this.state
    const { body, color, titleKey, tags } = this.props
    let projectRowStyle = {
      backgroundColor: color,
      opacity: show ? 1 : 0
    }

    return(
      <InfoSection  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}>
        <ProjectTag>
          {titleKey}.&emsp;<ProjectInfoTag to="#info">Info</ProjectInfoTag>
        </ProjectTag>
        <ProjectRow style={projectRowStyle}>
          <ReadingText
            dangerouslySetInnerHTML={{__html: (body && body.childMarkdownRemark.html || '')}}
          />
          <div>
            <AsidePrimary>
              <div>Technologies</div>
              <div>used</div>
            </AsidePrimary>
            <AsideSecondary>
              <div>&nbsp;</div>
              {tags && tags.map((tag, index) => {
                return(
                  <div key={index}><PageLink to={`/work/${tag.slug}`}>{tag.title}</PageLink></div>
                )
              })}
            </AsideSecondary>
          </div>
        </ProjectRow>
      </InfoSection>
    )
  }
}

export default ProjectInfo
