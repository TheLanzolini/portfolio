import React from 'react'

class Parallax extends React.Component {
  constructor(props) {
    super(props)
    this.ticking = false
    this.state = { position: 0 }
  }
  componentDidMount() {
    window.addEventListener('scroll', e => {
      const lastKnownPosition = window.scrollY || 0
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.setState({ position: lastKnownPosition })
          this.ticking = false
        })
        this.ticking = true
      }
    })
  }
}

export default Parallax
