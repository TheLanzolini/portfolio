import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  text-align: center;
`;

const Err = styled.div`
  color: red;
  text-align: left;
`;

interface ErrorBoundaryState {
  error: Error | null;
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  public readonly state: ErrorBoundaryState = { error: null };

  public componentDidCatch = (error: Error) => {
    this.setState({ error });
  };

  public render() {
    const { error } = this.state;
    const { children } = this.props;
    return error === null ? (
      children
    ) : (
      <ErrorWrapper>
        <h1>Something went wrong!</h1>
        <h3>A client side error has occurred 😱</h3>
        <p>
          I would appreciate it if you reached out to me and told me what you
          were doing to cause this client side crash! Screenshots always
          appreciated!
          <br />
          <a href="mailto:thelanzolini@gmail.com">Email me!</a>
        </p>
      </ErrorWrapper>
    );
  }
}

export { ErrorBoundary };
