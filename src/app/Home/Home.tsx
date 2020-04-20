import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../Layout';

import './Home.css';

interface Post {
  id: number;
  title: string;
}

interface PostData {
  posts: Post[];
}

const query = gql`
  query MyQuery {
    posts {
      id
      title
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
  const { loading, data, error } = useQuery<PostData>(query);
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
      <div>
        {loading && 'Loading'}
        {error && 'Error'}
        {data && JSON.stringify(data)}
      </div>
    </Layout>
  );
};

export default Home;
