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
import { Helmet } from 'react-helmet'

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
  console.log(req.url)
  if ( (/\/projects\/.\.bundle\.js/).test(req.url) ) {
    console.log(__dirname, 'dirname')
    console.log(__filename, 'filename')
    const newUrl = req.url.replace('/projects/', `${__dirname}/`)
    console.log(newUrl)
    return res.sendFile(newUrl)
  }
  const helmet = Helmet.renderStatic()
  const styleTags = sheet.getStyleTags()
  res.send(`
      <!DOCTYPE html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${styleTags}
        <link rel="stylesheet" href="/css/main.css" />
      </head>
      <body>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
        </script>
        <script src="/bundle.js" async></script>
        <div id="root">${html}</div>
      </body>
    </html>
  `)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening')
})
