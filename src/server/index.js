/* eslint no-console: "off" */
import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import App from '../common/App.js'
import reducers from '../reducers'
import { Provider } from 'react-redux'

const store = createStore(
  reducers
)

const state = store.getState()

const app = express()

app.use(express.static('public'))

const html = renderToString(
  <Provider store={store}>
    <App />
  </Provider>
)

app.get('*', (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel='stylesheet' href='/css/main.css'>
        <script src='/bundle.js' defer></script>
      </head>
      <body>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
        </script>
        <div id='root'>${html}</div>
      </body>
    </html>
  `)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening')
})
