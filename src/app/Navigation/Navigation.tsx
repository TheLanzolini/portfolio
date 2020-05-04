import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { primary } from '../constants/palette';

const _HEADER_HEIGHT = 60;

const Header = styled.header`
  position: fixed;
  z-index: 500;
  top: 0;
  background-color: white;
  height: ${_HEADER_HEIGHT}px;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
`;

const HeaderLink = styled(NavLink)`
  background-color: white;
  color: ${primary};
  font-size: 18px;
  flex: 1;
  display: block;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease, border 0.2s ease;
  border-bottom: 3px solid transparent;
  &:hover {
    background-color: ${primary};
    color: white;
  }
  &.active {
    border-bottom: 3px solid ${primary};
  }
`;

const Spacer = styled.div`
  padding-bottom: ${_HEADER_HEIGHT}px;
`;

export const Navigation = () => (
  <>
    <Header>
      <HeaderLink activeClassName="active" exact={true} to="/">
        Home
      </HeaderLink>
      <HeaderLink activeClassName="active" to="/website-stack">
        Website Stack
      </HeaderLink>
      <HeaderLink activeClassName="active" to="/projects">
        Projects
      </HeaderLink>
      <HeaderLink activeClassName="active" to="/skills">
        Skills
      </HeaderLink>
    </Header>
    <Spacer />
  </>
);
