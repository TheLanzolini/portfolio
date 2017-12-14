import React from 'react'

function SyncComponent(chunkName, mod) {
  const Module = mod.default ? mod.default : mod

  function Component(props) {
    if (props.staticContext.splitPoints) {
      props.staticContext.splitPoints.push(chunkName)
    }

    return (<Module {...props} />)
  }

  return Component
}

export default SyncComponent
