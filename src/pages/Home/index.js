import React from 'react'
import { Helmet } from 'react-helmet'
import Champions from './Champions'


export default () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div>I am home</div>
    <Champions/>
  </div>
)
