import React from 'react'

const Website = () => (
  <div>
    <h1>This Website was built on a React stack</h1>
    <p>
      This website was built on a stack centered around React.js. I wrote all the application code using ES2015+ features.
      Thanks to leveraging webpack and Babel. This website is running a node server in order to accomplish server side rendering.
      Views are compiled on the server for the first request, and all subsequent requests load the views asynchronously thanks to code splitting.
      The state of the app is controlled with Redux and the Routing is being handled by react-router. 
    </p>
  </div>
)

export default Website
