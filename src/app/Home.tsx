import React from 'react';
import styled from 'styled-components';

import './Home.css';

const Example = styled.div`
  color: red;
  font-size: 100px;
`;

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <Example className="Home">
        hello world!
        <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="alex-lanzoni"><a className="LI-simple-link" href="https://www.linkedin.com/in/alex-lanzoni?trk=profile-badge">Alex Lanzoni</a></div>
      </Example>
    );
  }
}

export default Home;
