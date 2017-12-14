import React from 'react'

function AsyncComponent(chunkName, getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null

    static loadComponent() {
      return getComponent().then(m => m.default).then(Component => {
        AsyncComponent.Component = Component
        return Component
      })
    }

    mounted = false

    state = {
      Component: AsyncComponent.Component,
    }

    componentWillMount() {
      if (this.state.Component === null) {
        AsyncComponent.loadComponent()
          .then(Component => {
            if (this.mounted) {
              this.setState({ Component })
            }
          })
      }
    }

    componentDidMount() {
      this.mounted = true
    }

    componentWillUnmount() {
      this.mounted = false
    }

    render() {
      const { Component } = this.state

      if (Component !== null) {
        return (<Component {...this.props} />)
      }
      return null
    }
  }
}

export default AsyncComponent
