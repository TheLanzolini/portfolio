import React from 'react'
import HardList from './HardList'
import HardListAdder from './HardList/HardListAdder.js'

if (!Object.entries) {
  Object.entries = function( obj ) {
    var ownProps = Object.keys( obj ), i = ownProps.length, resArray = new Array(i)
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]]
    return resArray
  }
}

const App = () => (
  <div>
    <div>I am an app</div>
    <HardList />
    <HardListAdder />
  </div>
)

export default App
