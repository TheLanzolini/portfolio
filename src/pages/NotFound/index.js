import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import { MinHeight } from 'common/Styled'
import shutterShrug from 'images/404.jpg'

const MinHeight404 = MinHeight.extend`
  text-align: center;
  a {
    color: blue;
  }
`

const NotFound = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404
      }
      return (
        <MinHeight404>
          <h1>404 : Not Found</h1>
          <div>
            <p>You seem to have gotten lost.</p>
            <p>
              <NavLink to="/">Take me Home.</NavLink>
            </p>
            <img src={shutterShrug} />
          </div>
        </MinHeight404>
      )
    }}/>
  )
}

export default NotFound
