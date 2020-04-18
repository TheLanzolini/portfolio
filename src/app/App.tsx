import './App.css';

import loadable from '@loadable/component';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { ROOT_URL } from './constants/env';
import { ErrorBoundary } from './ErrorBoundary';

// Routes
// import { Home } from './Home/Home';
// import { WebsiteStack } from './WebsiteStack/WebsiteStack';

const title = 'The works and skills of a dev';
const description =
  'My name is Alex Lanzoni and this is my portfolio. I have some projects and links here, but also I made this website as a showcase of my engineering know how, the source code is available on github at https://github.com/thelanzolini/portfolio';

const ChunkLoading = styled.div`
  padding-bottom: 100vh;
`;

// const loadHome = /* #__LOADABLE__ */ () => import('./Home/Home');
const Home = loadable(() => import('./Home/Home'), {
  fallback: <ChunkLoading />,
});
// const loadWebsite = /* #__LOADABLE__ */ () =>
//   import('./WebsiteStack/WebsiteStack');
const WebsiteStack = loadable(() => import('./WebsiteStack/WebsiteStack'), {
  fallback: <ChunkLoading />,
});
// class Home extends React.Component<{}, { Component: any }> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       Component: null,
//     };
//     const promise = loadHome().then((r) => {
//       console.log(r.default);
//       this.setState({ Component: r.default });
//     });
//     console.log(promise);
//   }

//   public render() {
//     const { Component } = this.state;
//     // tslint:disable-next-line
//     return Component ? <Component /> : null;
//   }
// }

const App = () => {
  const { pathname } = useLocation();
  // const WebsiteStack = () => <div />;
  // console.log(loadHome);
  // console.log(loadWebsite);
  return (
    <ErrorBoundary>
      <Helmet
        defaultTitle="Alex Lanzoni Portfolio | The works and skills of a dev"
        titleTemplate="Alex Lanzoni Portfolio | %s"
      >
        <title>{title}</title>
        <link rel="canonical" href={`${ROOT_URL}${pathname}`} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${ROOT_URL}${pathname}`} />
        <meta property="og:site_name" content="Alex Lanzoni Portfolio" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content={`${ROOT_URL}/og-image.jpg`} />
        <meta name="twitter:image" content={`${ROOT_URL}/og-image.jpg`} />
        <meta name="twitter:site" content="@thelanzolini" />
        <meta name="twitter:creator" content="@thelanzolini" />
      </Helmet>
      <Link to="/">Home</Link>
      <Link to="/website-stack">Website Stack</Link>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/website-stack" component={WebsiteStack} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
