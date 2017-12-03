import React from 'react'
import { hydrate } from 'react-dom'
import App from '../common/App.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers'

const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const store = createStore(reducers, preloadedState)



hydrate(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
