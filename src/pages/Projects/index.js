import React from 'react'
import WideSection from 'common/WideSection'
import Panel from 'common/Panel'

import nascarImg from 'images/projects/nascar.jpg'
import hattrickImg from 'images/projects/hattrick.jpg'
import mlsImg from 'images/projects/mls.jpg'
import fanballDfsImg from 'images/projects/fanball-dfs.jpg'
import fanballNewsImg from 'images/projects/fanball-news.jpg'

const projects = [
  {
    name: 'NASCAR Fantasy Live',
    link: 'https://fantasygames.nascar.com',
    image: nascarImg,
    description: 'NASCAR\'s Live Fantasy experience. Features live data and scoring.',
    color: 'white',
    backgroundcolor: '#333333',
  },
  {
    name: 'NHL Hattrick Challenge',
    link: 'https://hattrick.nhl.com',
    image: hattrickImg,
    description: 'A Proposition game that also featured a Native app experience.',
    color: 'white',
    backgroundcolor: '#00A35E',
  },
  {
    name: 'MLS Bracket Challenge',
    link: 'http://bracket.mlssoccer.com',
    image: mlsImg,
    description: 'A Bracket Challenge for the MLS Playoffs, also featured a Redemption Bracket.',
    color: 'white',
    backgroundcolor: '#E31800',
  },
  {
    name: 'Fanball Daily Game',
    link: 'https://www.fanball.com/',
    image: fanballDfsImg,
    description: 'A Daily Fantasy Salary Cap Game. Features a numbered skill System. (Fanbll Number)',
    color: 'white',
    backgroundcolor: '#31ADD0',
  },
  {
    name: 'Fanball News',
    link: 'https://www.fanball.com/news/nfl',
    image: fanballNewsImg,
    description: 'A Sports News section tailored to Daily Fantasy. Featured an podcast player that played while you browsed.',
    color: 'white',
    backgroundcolor: '#333',
  },
]

const StyledPanel = Panel.extend`
  padding: 16px;
  h3, p {
    margin: 0;
    text-align: left;
    width: 100%;
  }
  h3 {
    font-weight: normal;
  }
  p {
    font-weight: lighter;
    font-size: 24px;
  }
`

const ImagePanel = Panel.extend`
  overflow: hidden;
  a, img {
    height: 100%;
    display: block;
  }
`

const TextPanel = (project) => (
  <StyledPanel {...project}>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
  </StyledPanel>
)



const Projects = () => (
  <div>
    {
      projects.map((project, index) => (
        <WideSection key={index}>
          { index % 2 === 1 && <TextPanel {...project} /> }
          <ImagePanel>
            <a target="_blank" href={project.link}>
              <img src={project.image} />
            </a>
          </ImagePanel>
          { index % 2 === 0 && <TextPanel {...project} /> }
        </WideSection>
      ))
    }
  </div>
)

export default Projects
