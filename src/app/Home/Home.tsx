import React, { useState } from 'react';
import styled from 'styled-components';
import { primary } from '../constants/palette';
import { Layout } from '../Layout';
import { yearsExperience } from '../utils/years-experience';
import headshotPng from './headshot.png';
import heroBg from './hero-bg.jpg';

const Hero = styled.div`
  width: 100%;
  height: 33vh;
  background: url(${heroBg});
  background-size: cover;
  color: white;
  position: relative;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 2rem 10%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  & > div {
    flex: 1;
  }
`;

const Title = styled.h1`
  font-size: 7rem;
  margin: 0;
`;

const Tagline = styled.div`
  font-size: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const YearsExperience = styled.div`
  color: ${primary};
  font-family: 'Roboto Mono', monospace, sans-serif;
  font-size: 8rem;
`;

const Position = styled.div`
  font-style: italic;
  font-size: 1.5rem;
`;

const Headshot = styled.img`
  width: ${150 / 16}rem;
  height: ${150 / 16}rem;
  border-radius: ${150 / 32}rem;
  position: absolute;
  top: ${7 / 16}rem;
  left: ${330 / 16}rem;
  border: ${4 / 16}rem solid white;
`;

const TitleContainer = styled.div`
  position: relative;
`;

const Home = () => {
  return (
    <Layout>
      <Hero>
        <Overlay>
          <TitleContainer>
            <Title>
              Alex
              <br />
              Lanzoni
            </Title>
            <Headshot alt="Alex Lanzoni Headshot" src={headshotPng} />
            <Position>Senior Software Engineer</Position>
          </TitleContainer>
          <Tagline>
            Now with
            <YearsExperience>{yearsExperience()}</YearsExperience>
            years of
            <br />
            experience!
          </Tagline>
        </Overlay>
      </Hero>
      <div>
        {new Array(100).fill('Lorem ipsum dolor sit amet').map((i, index) => (
          <div key={index}>{i}</div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;

// {/* <div
//         className="LI-profile-badge"
//         data-version="v1"
//         data-size="medium"
//         data-locale="en_US"
//         data-type="horizontal"
//         data-theme="light"
//         data-vanity="alex-lanzoni"
//       >
//         <a
//           className="LI-simple-link"
//           href="https://www.linkedin.com/in/alex-lanzoni?trk=profile-badge"
//         >
//           Alex Lanzoni
//         </a>
//       </div> */}
