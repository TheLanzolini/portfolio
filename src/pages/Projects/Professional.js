import React from 'react'
import ProjectList from './ProjectList'

import nascarImg from 'images/projects/nascar.jpg'
import hattrickImg from 'images/projects/hattrick.jpg'
import mlsImg from 'images/projects/mls.jpg'
import fanballDfsImg from 'images/projects/fanball-dfs.jpg'
import fanballNewsImg from 'images/projects/fanball-news.jpg'
import pgaImg from 'images/projects/pga.jpg'
import ncaaImg from 'images/projects/ncaa.jpg'
import nflImg from 'images/projects/nfl.jpg'
import lexusImg from 'images/projects/lexus.jpg'
import watvImg from 'images/projects/watv.jpg'

const projects = [
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
    name: 'PGA Bracket',
    link: 'http://fantasybracket.pgatour.com',
    image: pgaImg,
    description: 'Bracket game for the World Golf Championship that featured 64 golfers in the field.',
    color: 'white',
    backgroundcolor: '#001E35',
  },
  {
    name: 'NCAA Bracket Challenge',
    link: 'https://bracketchallenge.ncaa.com',
    image: ncaaImg,
    description: 'March Madness bracket game for the NCAA college basketball tournament.',
    color: 'white',
    backgroundcolor: '#013a70',
  },
  {
    name: 'NFL Predict Pick',
    link: 'http://predictpick.nfl.com',
    image: nflImg,
    description: 'A draft prediction game for the NFL draft.',
    color: 'white',
    backgroundcolor: '#5c5c5c',
  },
  {
    name: 'Lexus 0 to 60',
    link: 'https://lexus0to60bracketchallenge.com',
    image: lexusImg,
    description: 'A March Madness game where you predicted the first match in every round to hit 60 points.',
    color: 'white',
    backgroundcolor: 'black',
  },
  {
    name: 'Whitlock and the Vaughn',
    link: 'http://www.blogtalkradio.com/fanball-fantasy-basketball',
    image: watvImg,
    description: 'A Daily Fantasy Basketball podcast I produced for Fanball.',
    color: 'white',
    backgroundcolor: '#18453B',
  },
]





const Projects = () => (
  <ProjectList projects={projects} />
)

export default Projects
