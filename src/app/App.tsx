import './App.css';

import loadable from '@loadable/component';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { ROOT_URL } from './constants/env';
import { ErrorBoundary } from './ErrorBoundary';
import { Navigation } from './Navigation/Navigation';

const title = 'The works and skills of a dev';
const description =
  'My name is Alex Lanzoni and this is my portfolio. I have some projects and links here, but also I made this website as a showcase of my engineering know how, the source code is available on github at https://github.com/thelanzolini/portfolio';

const ChunkLoading = styled.div`
  padding-bottom: 100vh;
`;

const Home = loadable(() => import('./Home/Home'), {
  fallback: <ChunkLoading />,
});

const WebsiteStack = loadable(() => import('./WebsiteStack/WebsiteStack'), {
  fallback: <ChunkLoading />,
});

const Projects = loadable(() => import('./Projects/Projects'), {
  fallback: <ChunkLoading />,
});

const Project = loadable(() => import('./Project/Project'), {
  fallback: <ChunkLoading />,
});

const App = () => {
  const { pathname } = useLocation();
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
      <Navigation />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/website-stack" component={WebsiteStack} />
        <Route path="/projects" component={Projects} />
        <Route path="/project/:projectSlug" component={Project} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
