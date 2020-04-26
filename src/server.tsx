import { getDataFromTree } from '@apollo/react-ssr';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import { importSchema } from 'graphql-import';
import fetch from 'node-fetch';
import path from 'path';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import { ServerStyleSheet } from 'styled-components';
import { resolvers } from './server/graphql/resolvers';

import App from './app/App';

const typeDefs = importSchema(
  path.resolve(__dirname, '..', 'src', 'server/graphql/schema.graphql')
);

const { APP_ENV, NODE_ENV } = process.env;

// This is the stats file generated by webpack loadable plugin
const statsFile = path.resolve('./build/loadable-stats.json');

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const link = new HttpLink({
  fetch,
  uri: 'http://localhost:3000/graphql',
});

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const server = express();
apolloServer.applyMiddleware({ app: server, path: '/graphql' });
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', async (req: express.Request, res: express.Response) => {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link,
      ssrMode: true,
    });
    const context = {};
    const sheet = new ServerStyleSheet();
    const extractor = new ChunkExtractor({
      entrypoints: ['client'],
      statsFile,
    });
    try {
      await getDataFromTree(
        <ApolloProvider client={client}>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        </ApolloProvider>
      );
      const initialApolloState = client.extract();
      const markup = renderToString(
        sheet.collectStyles(
          <ChunkExtractorManager extractor={extractor}>
            <ApolloProvider client={client}>
              <StaticRouter context={context} location={req.url}>
                <App />
              </StaticRouter>
            </ApolloProvider>
          </ChunkExtractorManager>
        )
      );
      const chunkedScriptTags = extractor.getScriptTags();
      const chunkedLinkTags = extractor.getLinkTags();
      const chunkedStyleTags = extractor.getStyleTags();
      const helmet = Helmet.renderStatic();
      const styleTags = sheet.getStyleTags();
      res.send(`
        <!doctype html>
        <html lang="">
          <head ${helmet.htmlAttributes.toString()}>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            ${styleTags}
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Ubuntu:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet" />
            <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
            ${
              assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''
            }
            ${chunkedLinkTags}
            ${chunkedStyleTags}
            ${
              process.env.NODE_ENV === 'production'
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${assets.client.js}" defer crossorigin></script>`
            }
          </head>
          <body ${helmet.bodyAttributes.toString()}>
            <div id="root">${markup}</div>
          </body>
          <script>
            window.env = ${serialize({ APP_ENV, NODE_ENV })}
          </script>
          <script>
            window.__APOLLO_STATE__ = ${JSON.stringify(
              initialApolloState
            ).replace(/</g, '\\u003c')};
          </script>
          ${chunkedScriptTags}
        </html>
      `);
    } catch (e) {
      // tslint:disable-next-line no-console
      console.log('Failed to render!');
      // tslint:disable-next-line no-console
      console.error(e);
      res.status(500);
      res.setHeader('Cache-Control', 'no-store');
      res.send('Something went wrong!');
    } finally {
      sheet.seal();
    }
  });

export default server;
