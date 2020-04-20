import { loadableReady } from '@loadable/component';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);
delete window.__APOLLO_STATE__;

const link = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});

const client = new ApolloClient({
  cache,
  link,
});

loadableReady(() => {
  hydrate(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
  );
});

if (module.hot) {
  module.hot.accept();
}
