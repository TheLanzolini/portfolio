import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';

import App from './app/App';

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
    try {
      const markup = renderToString(sheet.collectStyles(
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      ));
      const styleTags = sheet.getStyleTags();
      res.send(
        `<!doctype html>
      <html lang="">
      <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet='utf-8' />
          <title>Razzle TypeScript</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${styleTags}
          <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
          ${
        assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''
        }
            ${
        process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
      </head>
      <body>
          <div id="root">${markup}</div>
      </body>
  </html>`
      );
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
