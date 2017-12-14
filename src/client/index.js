import React from 'react'
import { hydrate } from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { renderRoutes } from 'react-router-config'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers'
import Routes from '../routes'
import * as AsyncChunks from 'routes/sync'

const splitPoints = window.__SPLIT_POINTS__ || []
const preloadedState = window.__PRELOADED_STATE__

// Garbage Collect
delete window.__PRELOADED_STATE__
delete window.__SPLIT_POINTS__

const store = createStore(reducers, preloadedState)

const AppRoot = () => (
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>
)

Promise.all(splitPoints.map(chunk => AsyncChunks[chunk].loadComponent(AsyncChunks))).then(() => {hydrate(<AppRoot />, document.getElementById('root'))})
