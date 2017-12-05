/* eslint no-console: "off" */
import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import reducers from '../reducers'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import Routes from '../Routes'
import { ServerStyleSheet } from 'styled-components'

const store = createStore(reducers)
const state = store.getState()
const app = express()

app.use(express.static('dist'))

app.get('*', (req, res) => {
  const context = {}
  const sheet = new ServerStyleSheet()
  const html = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>
    )
  )
  const styleTags = sheet.getStyleTags()
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal React</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700" rel="stylesheet">
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no, width=device-width"/>
        ${styleTags}
      </head>
      <body>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
        </script>
        <div id="root">${html}</div>
      </body>
    </html>
  `)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening')
})
