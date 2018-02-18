import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Container } from '../../components/Container'

import { media } from '../../utils/style'

const Background = styled.div`
  left: 0;
  height: 100%;
  opacity: 0.97;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 0;
`

const BackgroundImage = Background.extend`
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 80%;
  left: 10%;
  opacity: 0.97;
  top 10%;
  width: 80%;
`

const WorkContainer = Container.extend`
  color: ${props => props.theme.colors.primary};
  float: right;
  min-width: 80%;
  padding-right: ${props => props.theme.spacing.md};

  ${media.sm`
    min-width: 60%;
    padding-right: ${props => props.theme.spacing.xl};
  `}
`

const WorkItems = styled.ol`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.text.md};
  line-height: ${props => props.theme.line.sm};
  list-style: none;

  ${media.sm`
    font-size: ${props => props.theme.text.md.md};
  `}
`

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
    `}
  }

  :nth-child(-n+9):before {
    content: '0'counter(count);
  }

  &:hover {
    opacity: 0.9;
  }
`

const WorkLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`

class WorkList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: '',
      image: ''
    }

    this.showProject = this.showProject.bind(this)
  }

  showProject(color, image) {
    this.setState({ color, image })
  }

  render() {
    const { title, projects } = this.props
    const { color, image } = this.state

    return(
      <div>
        <Background style={{backgroundColor: color}} />
        <BackgroundImage style={{backgroundImage: `url(${image}`}} />
        <WorkContainer>
          <WorkItems>
            {projects.map((project, index) => {
              const color = project.color
              const src = project.image && project.image.sizes.src

              return (
                <WorkItem
                  key={index}
                  onMouseEnter={() => this.showProject(color, src)}
                >
                  <WorkLink to={`/${project.slug}`}>
                    {project.title}
                  </WorkLink>
                </WorkItem>
              )
            })}
          </WorkItems>
        </WorkContainer>
      </div>
    )
  }
}

export default WorkList
