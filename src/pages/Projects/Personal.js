import React from 'react'
import ProjectList from './ProjectList'

import tforceImg from 'images/projects/tforce.jpg'
import e3bingoImg from 'images/projects/e3bingo.jpg'
import extralife from 'images/projects/extralife.jpg'
import lanzoalerts from 'images/projects/lanzoalerts.jpg'
import twitchSoundboard from 'images/projects/twitch-soundboard.jpg'
import twitchCommandCenter from 'images/projects/twitch-command-center.jpg'

const projects = [
  {
    name: 'TForce Network',
    link: 'https://www.trinityforcenetwork.com/',
    image: tforceImg,
    description: 'A NextJS website I built for a the podcast network where my podcast (the TForceGG) lives.',
    color: 'white',
    backgroundcolor: '#6754A4',
  },
  {
    name: 'E3 Bingo!',
    link: 'http://lanzo.space/e3bingo/',
    image: e3bingoImg,
    description: 'A fun and functional E3 Bingo card that would generate a different bingo card for everyone.',
    color: 'white',
    backgroundcolor: '#F14632',
  },
  {
    name: 'Extra Life Alerts',
    link: 'http://lanzo.space/extralifealert',
    image: extralife,
    description: 'An alert system for Extra Life donations for live streaming that did not require auth to get started.',
    color: 'white',
    backgroundcolor: '#1A4C6d',
  },
  {
    name: 'Lanzo Alerts',
    link: 'https://lanzoalerts.herokuapp.com/',
    image: lanzoalerts,
    description: 'An alert system for twitch live streaming in which the alerts were custom made by me.',
    color: 'white',
    backgroundcolor: '#FF9800',
  },
  {
    name: 'Twitch Soundboard',
    link: 'https://github.com/TheLanzolini/twitch-soundboard',
    image: twitchSoundboard,
    description: 'A soundboard that played sound clips based on interaction with twitch chat. Built using electron for native desktop.',
    color: 'white',
    backgroundcolor: '#6441AB',
  },
  {
    name: 'Twitch Command Center',
    link: 'https://github.com/TheLanzolini/twitch-command-center',
    image: twitchCommandCenter,
    description: 'An desktop application made with electron to stream many twitch streams at once',
    color: 'white',
    backgroundcolor: '#673AB7',
  },
]

const Projects = () => (<ProjectList projects={projects} />)

export default Projects
