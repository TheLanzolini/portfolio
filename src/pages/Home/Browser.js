import React from 'react'
import styled from 'styled-components'

import chrome1 from 'images/browsers/chrome-1.jpg'
import chrome2 from 'images/browsers/chrome-2.jpg'
import firefox1 from 'images/browsers/firefox-1.jpg'
import firefox2 from 'images/browsers/firefox-2.jpg'
import safari1 from 'images/browsers/safari-1.jpg'
import safari2 from 'images/browsers/safari-2.jpg'
import edge1 from 'images/browsers/edge-1.jpg'
import edge2 from 'images/browsers/edge-2.jpg'
import ie1 from 'images/browsers/ie-1.jpg'
import ie2 from 'images/browsers/ie-2.jpg'

const browsers = {
  chrome: {
    1: chrome1,
    2: chrome2,
  },
  firefox: {
    1: firefox1,
    2: firefox2,
  },
  safari: {
    1: safari1,
    2: safari2,
  },
  edge: {
    1: edge1,
    2: edge2,
  },
  ie: {
    1: ie1,
    2: ie2,
  },
}

const BrowserImg = styled.img`
  display: block;
`


class Browser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { keyframe: 1 }
    this.switchKeyframe = this.switchKeyframe.bind(this)
    setInterval(this.switchKeyframe, 750)
  }

  switchKeyframe() {
    this.setState({ keyframe: this.state.keyframe === 1 ? 2 : 1 })
  }

  componentDidMount() {
    setTimeout(this.switchKeyframe, 250)
  }

  componentWillUnmount() {
    clearInterval(this.switchKeyframe)
  }

  render() {
    return (
      <BrowserImg src={browsers[this.props.browser][this.state.keyframe]} />
    )
  }
}

export default Browser
