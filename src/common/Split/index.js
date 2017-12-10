import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MinHeightSplit = styled.div`
  min-height: 80vh;
`

class Split extends React.Component {
  componentWillMount() {
    this.cancelUpdate = false
    this.props.load.then(Component => {
      this.Component = Component
      if (!this.cancelUpdate && process.browser) {
        this.forceUpdate()
      }
    })
  }

  componentWillUnmount() {
    this.cancelUpdate = true
  }

  render() {
    const { componentProps } = this.props
    return (
      <MinHeightSplit>
        {
          this.Component
            ? this.Component.default
              ? <this.Component.default {...componentProps} />
              : <this.Component {...componentProps} />
            : null
        }
      </MinHeightSplit>
    )
  }
}

Split.propTypes = {
  load: PropTypes.object.isRequired,
}

export default Split
