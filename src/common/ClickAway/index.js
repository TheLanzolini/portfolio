import React from 'react'
import ReactDOM from 'react-dom'

const clickAwayEvents = ['mouseup', 'touchend']
const bindClick = (callback) => clickAwayEvents.forEach((event) => document.addEventListener(event, callback, false))
const unbindClick = (callback) => clickAwayEvents.forEach((event) => document.removeEventListener(event, callback, false))

export const isDescendant = (el, target) => {
  if (target !== null) {
    return el === target || isDescendant(el, target.parentNode)
  }
  return false
}

class ClickAway extends React.Component {
  constructor(props) {
    super(props)
    this.callbacks = []
    this.addListener = this.addListener.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  addListener(func) {
    if (typeof(func) !== 'function') {
      throw new Error(`addListener in ClickAway expected function, instead got ${typeof(func)}`)
    }
    this.callbacks.push(func)
  }

  handleClick(e) {
    const thisElement = ReactDOM.findDOMNode(this)
    const targetIsThis = e.target === thisElement || (document.documentElement.contains(e.target) && isDescendant(thisElement, e.target))
    this.callbacks.forEach(cb => cb(targetIsThis, e))
  }

  componentDidMount() {
    bindClick(this.handleClick)
  }

  componentWillUnmount() {
    unbindClick(this.handleClick)
  }

}

export default ClickAway
