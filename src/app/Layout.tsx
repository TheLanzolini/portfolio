/* tslint:disable jsx-no-multiline-js */
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const StyledLayout = styled.div`
  height: 100%;
`;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const Layout = (props: LayoutProps) => {
  const { title, description, imageUrl } = props;
  return (
    <StyledLayout>
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      {props.children}
    </StyledLayout>
  );
};

export { Layout };
