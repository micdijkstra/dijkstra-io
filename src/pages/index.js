import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styled from 'styled-components'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Container from '../components/Container'
import { Page } from '../components/Page'

import getRandom from '../utils/getRandom'

const PageIndex = Page.extend`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onDark};
`;

const Images = styled.div`
  position: relative;
`

const Item = styled.div`
  position: relative;

  &:nth-of-type(2) {
    margin-top: -22%;
    margin-bottom: -45%;
    max-width: 60%;
  }

  &:nth-of-type(3) {
    margin-bottom: -25%;
    margin-left: auto;
    max-width: 80%;
  }

  &:nth-of-type(4) {
    margin-left: auto;
    margin-right: 5%;
    max-width: 70%;
  }
`

class Group extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      order: [0,1,2,3]
    }
  }

  render() {
    const children = React.Children.map(this.props.children, (child,index) => {
      return React.cloneElement(child, {
        zIndex: this.state.order.indexOf(index),
        index: index,
        onMouseEnter: () => {
          let order = this.state.order.slice(0) // Clone the array
          const i = this.state.order.indexOf(index) // Get the current index
          order.splice(i, 1) // Remove from array
          order.push(index) // Add to end of array
          this.setState({ order: order })
        }
      })
    })

    return <Images>{children}</Images>
  }
}

const GroupItem = (props) => (
  <Item style={{zIndex: props.zIndex}} {...props}>
    {props.children}
  </Item>
)

class Index extends React.Component {
  shouldComponentUpdate() {
    // Prevent update on page transition
    return false
  }

  render() {
    const { transition, data } = this.props

    return(
      <div style={transition && transition.style}>
        <PageIndex>
          <Container>
            <Header />
          </Container>

          <Container>
            <Group>
              <GroupItem>
                <Logo />
              </GroupItem>
              {getRandom(data.allFile.edges, 3).map((img, index) => {
                return (
                  <GroupItem key={index}>
                    <Img sizes={img.node.childImageSharp.sizes} />
                  </GroupItem>
                )
              })}
            </Group>
            <Nav />
          </Container>
        </PageIndex>
      </div>
    )
  }
}

export const query = graphql`
  query ImagesQuery {
   allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          childImageSharp {
          sizes(maxWidth: 900) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export default Index
