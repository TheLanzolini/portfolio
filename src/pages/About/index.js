import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const AboutPage = styled.div`
  padding: 8px;
  a {
    color: black;
  }
`

export default () => (
  <AboutPage>
    <Helmet title="About" />
    <div>
      <h2>About</h2>
      <h3>Web Development</h3>
      <p>
        I first started out with web development when I got a job at Syracuse University making websites with PHP and Wordpress.
        I then quickly learned to work with jQuery and ajax to load posts asynchronously. My interest in the frontend became my primary focus
        when I was hired at Sportstech Inc. developing fantasy games. I learned how to focus on user interface and the browser to develop better
        user experiences for our clients. Then I moved onto developing build tools and single page applications to further enchance user experience
        and create more efficient applications.
      </p>
      <h3>Gaming</h3>
      <p>
        At the age of 5 I was blessed with the yellow rectangle that started it all... the Gameboy Color. Ever since that first bootup playing Marble Madness,
        I was in. What started with the Gameboy would launch me into a lifelong passion that still continues to this day. It&apos;s truly difficult to put
        into words because it feels like a part of my identity. All I can say is that I play a lot of video games and I wouldn&apos;t have it any other way.
        I elaborate a whole lot more on the gaming <a target="_blank" href="https://www.trinityforcenetwork.com/show?id=91">podcast</a> that I co-host.
      </p>
      <h3>This Website</h3>
      <p>
        I started this website to demonstrate my skills with Frontend development, and tried my best to include all the technologies I currently want to try.
        I wanted to really get to work with React and create a stack around it while trying out new libraries (such as styled-components).
        I am not afraid to try new things in the hope of creating a better user experience or optimize for better performance.
        I am attempting to make a single page app that also has server side rendering (even with data) that also leverages code splitting and service workers.
        All the code is available on my github in the portfolio repo: <a target="_blank" href="https://github.com/thelanzolini/portfolio">https://github.com/thelanzolini/portfolio</a>.
      </p>
      <p>
        If you want to know more just <NavLink to="/contact">contact</NavLink> me. I am always down to discuss gaming or web development.
      </p>
    </div>
  </AboutPage>
)
