import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import theme from '../theme'
import Modal from '../components/Modal'

import 'normalize.css'
import './index.css'

const Wrapper = styled.div`
  overflow: hidden;
`

class DefaultLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  componentDidMount() {
    const { location } = this.props
    this.htmlElement = document.querySelector(`html`)
    this.bodyElement = document.querySelector(`body`)
    this.scrollPosition = 0

    if (location.pathname == "/work") {
      this.bodyElement.style.overflow = `hidden`
    }
  }

  componentWillReceiveProps(nextProps) {
    // cache scroll position
    this.scrollPosition = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    if (nextProps.location.pathname == "/work") {
      // Setup page for modal
      this.bodyElement.style.overflow = `hidden`
    } else {
      // Undo modal setup
      this.bodyElement.style.overflow = `visible`
    }
  }

  componentDidUpdate() {
    if (this.props.location.pathname == "/work") {
      let scrollPosition = this.scrollPosition
      // Hack to maintain scroll position when modal shows
      window.setTimeout(function() {
        window.scrollTo(0, scrollPosition)
      }, 20)
    }
  }

  render() {
    const { location } = this.props
    const isModal = (location.pathname == "/work")

    return(
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Helmet
            title="Michael Dijkstra is a young Australian software developer"
            meta={[
              { name: 'description', content: 'A young Australian software developer' },
              { name: 'keywords', content: 'front-end, website' },
            ]}
          />
          {
            isModal
            ? this.props.children({...this.props, location: { pathname: `/` },})
            : this.props.children({...this.props})
          }
          {isModal && (
            <Modal isOpen={true} location={location}>
              {this.props.children}
            </Modal>
          )}
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default DefaultLayout
