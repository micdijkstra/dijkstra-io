import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
`

class Cards extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      order: this.props.order || [0,1,2,3]
    }
  }

  render() {
    const children = React.Children.map(this.props.children, (child,index) => {
      return React.cloneElement(child, {
        style: {
          zIndex: this.state.order.indexOf(index),
        },
        onMouseEnter: () => {
          let order = this.state.order.slice(0) // Clone the array
          const i = this.state.order.indexOf(index) // Get the current index
          order.splice(i, 1) // Remove from array
          order.push(index) // Add to end of array
          this.setState({ order: order })
        }
      })
    })

    return <div style={{position: 'relative'}} {...this.props}>{children}</div>
  }
}

export { Cards, Card }
