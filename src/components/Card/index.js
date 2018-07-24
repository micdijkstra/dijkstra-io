import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Perf from 'react-addons-perf';

const Group = styled.div`
  minheight: 100vh;
  position: relative;
`;

const Card = styled.div`
  position: relative;
`;

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: this.props.order || [0, 1, 2, 3],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only update if the order changes
    return this.state.order.join('') !== nextState.order.join('');
  }

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        style: {
          zIndex: this.state.order.indexOf(index),
        },
        onMouseEnter: () => {
          Perf.start();
          let order = this.state.order.slice(0); // Clone the array
          const i = this.state.order.indexOf(index); // Get the current index
          order.splice(i, 1); // Remove from array
          order.push(index); // Add to end of array
          this.setState({order: order});
        },
        componentDidUpdate: () => {
          Perf.stop();
          Perf.printInclusive();
          Perf.printWasted();
        },
      });
    });

    return <Group {...this.props}>{children}</Group>;
  }
}

Cards.propTypes = {
  children: PropTypes.node,
  order: PropTypes.array,
};

export {Cards, Card};
