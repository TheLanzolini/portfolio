/* tslint:disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../Layout';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './Home.css';
import { ExecutionResult } from 'graphql';

const query = gql`
  query MyQuery {
    posts {
      id
    }
  }
`;

const Example = styled.div`
  color: red;
  font-size: 100px;
`;

const Home = () => {
  const q = 'foo';
  const example = { foo: { render: <div>hello</div> } };
  const [thing, setThing] = useState(q);
  return (
    <Layout>
      <Example onClick={() => setThing('asd')}>hello world!</Example>
      {example[thing].render}
      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale="en_US"
        data-type="horizontal"
        data-theme="light"
        data-vanity="alex-lanzoni"
      >
        <a
          className="LI-simple-link"
          href="https://www.linkedin.com/in/alex-lanzoni?trk=profile-badge"
        >
          Alex Lanzoni
        </a>
      </div>
      <Query query={query}>
        {(result: ExecutionResult) => {
          // console.log(result.data);
          if (result.loading) return <span>Loading...</span>;
          if (result.error) return <span>Error happened!</span>;
          return <div>{JSON.stringify(result.data.posts)}</div>;
        }}
      </Query>
    </Layout>
  );
};

export default Home;
