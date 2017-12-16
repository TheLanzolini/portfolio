import React from 'react'
import Skill from './Skill'
import styled from 'styled-components'

import html5 from 'images/skills/html5.png'
import css3 from 'images/skills/css3.svg'
import js from 'images/skills/js.png'
import node from 'images/skills/node.png'
import react from 'images/skills/react.png'
import redux from 'images/skills/redux.png'
import angular from 'images/skills/angular.png'
import electron from 'images/skills/electron.png'
import webpack from 'images/skills/webpack.png'
import gulp from 'images/skills/gulp.jpg'
import git from 'images/skills/git.png'
import sass from 'images/skills/sass.png'
import aws from 'images/skills/aws.png'
import windows from 'images/skills/windows.png'
import mac from 'images/skills/mac.png'
import linux from 'images/skills/linux.png'
import cordova from 'images/skills/cordova.png'
import cc from 'images/skills/cc.png'

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`

const SkillWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px 0;
`

const SkillImg = styled.div.attrs({
  src: props => props.src,
})`
  width: 100px;
  height: 100px;
  background-image: url(${props => props.src});
  background-size: 100% auto;
  background-position: center center;
  background-repeat: no-repeat;
`

const skills = [
  html5,
  css3,
  js,
  node,
  react,
  redux,
  angular,
  electron,
  webpack,
  gulp,
  git,
  sass,
  aws,
  windows,
  mac,
  linux,
  cordova,
  cc,
]

const skillNames = skills.map(skill => skill.replace(/media\//, '').replace(/\.(png|svg|jpg)/, '').toUpperCase())

const descriptions = {
  [html5]: 'I\'ve been working with HTML since high school. I have a solid understanding of the DOM and HTML5 elements including audio, video, and canvas.',
  [css3]: 'I\'ve been writing css just as long as I have been writing HTML. I am well versed in browser specific issues and features as well as animations and transitions.',
  [js]: 'I have been working heavily with JavaScript for many years now, and I believe it to be the strongest skill I possess and also the language I most enjoy working with.',
  [node]: 'Node gives me the freedom to accomplish almost anything I want while using the language I already know. I use it all the time for build tools and also as app servers for my side projects',
  [react]: 'I started using react for real at work, once I got into a real production level application, I fell in love with the library\'s structure and Syntax.',
  [redux]: 'I have worked with these state systems in the past and even written some of my own personal ones, but redux seems to nail the formula down and I love using it with react.',
  [angular]: 'I have the most experience with Angular 1.x than any other library, even surpassing jQuery. Had React not existd, I might be on board the Angular5 train.',
  [electron]: 'I have been following electron from the beginning and I love the idea of native desktop experiences that share the same source code. I have used it many times for my own personal projects.',
  [webpack]: 'I have been using webpack since version 1 on production level applications and although I prefer the programmatic gulp, webpack works well with React and it has such great support.',
  [gulp]: 'I more or less skipped over Grunt and really took to gulp. I have experience using gulp on many production level apps, had it not been for React and Webpack I would still be using it',
  [git]: 'I have been using git since my first job as a developer. I have eventually come to use it as a collaboration tool on GitHub as well as version control. I ❤ GitHub.',
  [sass]: 'I have a lot of experience using SASS and have used it for many production level applications. I also have experience using other forms of css preprocessors as well like stylus.',
  [aws]: 'As a frontend developer, I never had to use AWS for servers and any of my personal projects fit fine on heroku, but I have written many deploy scripts to upload to S3.',
  [windows]: 'I have been using windows as long as I had a computer and I am very familiar. I currently use it for certain development purposes but mostly keep it around for PC gaming.',
  [mac]: 'I have been using Mac OSX since I started my career and I am familiar with using the development tools for both web development as well as circumstancial use of xcode.',
  [linux]: 'As well as OSX, I have been using linux since the start of my career as well. Using Ubuntu at my first job and carrying over my experience into Arch.',
  [cordova]: 'I have used cordova in the past to emulate and build native apps using the already built web applications.',
  [cc]: 'I have used the Adobe Creative Cloud to collaborate with designers and edit video (Premiere) and sound (Audition). I have also used Photoshop and Illustrator to take assets from designers for development.',
}


const Skills = () => {
  return (
    <SkillContainer>
      {
        skills.map((skill, index) => {
          const Description = () => (
            <div>
              <div>{skillNames[index]}</div>
              <div>{descriptions[skill]}</div>
            </div>
          )
          return (
            <SkillWrapper key={index}>
              <Skill target={(<SkillImg src={skill} />)} description={<Description />} alignself={((index > 4 && index < 9) || (index > 13) ) ? 'right' : 'left'} />
            </SkillWrapper>
          )
        })
      }
    </SkillContainer>
  )
}

export default Skills
