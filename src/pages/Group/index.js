import React from 'react'
import GroupShow from './GroupShow'

export default (props) => {
  console.log(props)
  return (
    <div>
      <GroupShow leagueId={props.match.params.id} />
    </div>
  )
}