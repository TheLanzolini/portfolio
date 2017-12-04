import React from 'react'

class Split extends React.Component {
  componentWillMount() {
    this.cancelUpdate = false
    this.props.load.then(Component => {
      this.Component = Component
      if (!this.cancelUpdate) {
        this.forceUpdate()
      }
    })
  }

  componentWillUnmount() {
    this.cancelUpdate = true
  }

  render() {
    const { componentProps } = this.props
    return this.Component
      ? this.Component.default
        ? <this.Component.default {...componentProps} />
        : <this.Component {...componentProps} />
      : null
  }
}


export default Split
