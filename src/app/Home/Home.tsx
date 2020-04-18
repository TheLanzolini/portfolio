/* tslint:disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../Layout';

import './Home.css';

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
      <div onClick={() => setThing('asd')}>hello world!</div>
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
    </Layout>
  );
};

export default Home;
