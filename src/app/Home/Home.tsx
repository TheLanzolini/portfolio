import React, { useState } from 'react';
import { Layout } from '../Layout';

interface Post {
  id: number;
  title: string;
}

interface PostData {
  posts: Post[];
}

const Home = () => {
  return (
    <Layout>
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
