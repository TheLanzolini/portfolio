import React from 'react'
import { Helmet } from 'react-helmet'
import Champions from './Champions'
import MatchupList from './MatchupList'


export default () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div>I am home</div>
    <MatchupList />
  </div>
)
