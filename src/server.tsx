import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import { ServerStyleSheet } from 'styled-components';

import App from './app/App';

const { APP_ENV, NODE_ENV } = process.env;

// This is the stats file generated by webpack loadable plugin
const statsFile = path.resolve('./build/loadable-stats.json');

console.log(statsFile);

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express()
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', (req: express.Request, res: express.Response) => {
    const context = {};
    const sheet = new ServerStyleSheet();
    const extractor = new ChunkExtractor({ statsFile });
    try {
      const markup = renderToString(
        sheet.collectStyles(
          <ChunkExtractorManager extractor={extractor}>
            <StaticRouter context={context} location={req.url}>
              <App />
            </StaticRouter>
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
          ${chunkedScriptTags}
        </html>
      `);
    } catch (e) {
      console.log('Failed to render!');
      console.error(e);
      res.status(500);
      res.setHeader('Cache-Control', 'no-store');
      res.send('Something went wrong!');
    } finally {
      sheet.seal();
    }
  });

export default server;
