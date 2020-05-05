import React from 'react';
import styled from 'styled-components';
import { Layout } from '../Layout';
import { Stack } from './Stack';

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const H1 = styled.h1`
  font-size: 38px;
`;

const WebsiteStack = () => (
  <Layout
    title="Portfolio website stack information"
    description="This site is built on a SSR React stack with typescript and GraphQL, come check it out!"
  >
    <Container>
      <H1>I built this website on a modern stack</H1>
      <Stack />
    </Container>
  </Layout>
);

export default WebsiteStack;
