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

const isModal = (pathname) => {
  return pathname == "/work" || pathname.split('/')[1] === "work"
}

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

    document.body.classList.add('no-touch');
    window.addEventListener('touchstart', function onFirstTouch() {
      document.body.classList.remove('no-touch');
      window.removeEventListener('touchstart', onFirstTouch, false);
    }, false);
  }

  componentWillReceiveProps(nextProps) {
    // cache scroll position
    this.scrollPosition = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    if (isModal(nextProps.location.pathname)) {
      // Setup page for modal
      this.bodyElement.style.overflow = `hidden`
    } else {
      // Undo modal setup
      this.bodyElement.style.overflow = `visible`
    }
  }

  componentDidUpdate() {
    if (isModal(this.props.location.pathname)) {
      let scrollPosition = this.scrollPosition
      // Hack to maintain scroll position when modal shows
      window.setTimeout(function() {
        window.scrollTo(0, scrollPosition)
      }, 20)
    }
  }

  render() {
    const { location } = this.props
    const modal = isModal(location.pathname)

    return(
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Helmet
            title="Michael Dijkstra is sarcasitc but hard-working software developer"
            meta={[
              { name: 'description', content: 'Australian web and mobile developer' },
              { name: 'keywords', content: 'front-end, website' },
            ]}
          />
          {
            modal
            ? this.props.children({...this.props, location: { pathname: `/` },})
            : this.props.children({...this.props})
          }
          {modal && (
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
