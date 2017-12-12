/* eslint no-console: "off" */
import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import reducers from '../reducers'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { matchRoutes, renderRoutes } from 'react-router-config'
import Routes from '../Routes'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'
import 'isomorphic-fetch'
import { collectPromises, clearPromises } from 'common/Example'

const app = express()

app.use(express.static('dist'))

app.get('*', (req, res) => {
  // const branch = matchRoutes(Routes, req.url)
  // const Q = fetch('http://ddragon.leagueoflegends.com/cdn/7.23.1/data/en_US/champion.json').then(res => res.json()).then(res => {
  //   const { data } = res
  //   return new Promise((resolve, reject) => {
  //     store.dispatch({ type: '@@portfolio/CHAMPIONS_LOADED', data })
  //     // this.props.championsLoaded(data)
  //     resolve(data)
  //   })
  // })
  // Q.then(() => {
  const store = createStore(reducers)
  // const collectedPromises = collectPromises()
  // collectedPromises.forEach(p => {
  //   promises.push(p(store))
  // })

  const context = {}
  const sheet = new ServerStyleSheet()
  // renderToString and save to nowhere so we can gather the promises
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
  // })
  // branch.forEach(({ route }) => {
  //   const comp = new route.component()
  //   if (comp.dataCall && comp.dataCall.then) {
  //     promises.push(comp.dataCall)
  //   }
  //   if (comp.props && comp.props.children && Array.isArray(comp.props.children)) {
  //     comp.props.children.forEach(child => {
  //       if (child.props && child.props.children && child.props.children.type && typeof(child.props.children.type) === 'function') {
  //         const childComp = new child.props.children.type()
  //         if (childComp && childComp.dataCall && childComp.dataCall.then) {
  //           promises.push(childComp.dataCall)
  //         }
  //       }
  //     })
  //   }
  // })
  // console.log(promises)
  // Promise.all(promises).then(console.log)
  // Resolve all promises and stick it in the store, then make components render based on the redux store

})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening')
})
