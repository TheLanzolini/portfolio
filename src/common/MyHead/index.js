import React from 'react'
import Parallax from 'common/Parallax'

class MyHead extends Parallax {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div>scroll position{this.state.position}</div>)
  }
}


export default MyHead
