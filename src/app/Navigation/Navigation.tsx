import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/website-stack">Website Stack</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/skills">Skills</Link>
  </header>
);
