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
import 'isomorphic-fetch'
import { collectPromises, clearPromises } from 'common/DataCall'

const app = express()

app.use(express.static('dist'))

app.get('*', (req, res) => {
  const store = createStore(reducers)
  const context = {}
  const sheet = new ServerStyleSheet()
  // renderToString and save to nowhere so we can gather the promises
  // I'm "rendering" the views so that I can compile the promises necessary for the actual render
  // because I wouldn't want to request all the data in the app and stick it in the store if we only need _some_ of the data
  // and the only real way to know (that I have found as of right now) is to render out the components and collect the promises.
  renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>
    )
  )
  const promises = collectPromises().map(promise => promise(store))
  Promise.all(promises).then(() => {
    clearPromises()
    const html = renderToString(
      sheet.collectStyles(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            {renderRoutes(Routes)}
          </StaticRouter>
        </Provider>
      )
    )
    const state = store.getState()
    // Resolving code split
    // TODO improve logic here for all routes
    if ( (/\/projects\/.\.bundle\.js/).test(req.url) ) {
      const newUrl = req.url.replace('/projects/', `${__dirname}/`)
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
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening')
})
