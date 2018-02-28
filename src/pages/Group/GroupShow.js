import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { groupLoaded } from 'reducers/groupReducer'
import { DataCall } from 'common/DataCall'
import 'isomorphic-fetch'
import Loading from 'common/Loading'
import { NavLink } from 'react-router-dom'

class GroupList extends DataCall {
  constructor(props) {
    super(props)
    this.apiUrl = `https://staging.fantasygolf.pgatour.com/api/v6/pgaroster/leagues/${this.props.leagueId}/leaderboard/by_season/2018/2/page/1.json`
    this.cancelUpdate = false
    this.data = null
    this.dataCall = (store) => fetch(this.apiUrl).then(res => res.json()).then(res => {
      store.dispatch(groupLoaded(this.props.leagueId, res))
      return Promise.resolve()
    })
    this.addDataCall(this.dataCall)
  }

  componentDidMount() {
    if (!this.props.group[this.props.leagueId]) {
      fetch(this.apiUrl).then(res => res.json()).then(res => {
        this.props.groupLoaded(this.props.leagueId, res)
      })
    }
  }
  render() {
    if (!this.props.group || !this.props.group[this.props.leagueId]) {
      return (<Loading />)
    }
    const { league, memberships } = this.props.group[this.props.leagueId]
    return (
      <div>
        <div>{league.name}</div>
        <div>{league.motto}</div>
        <table>
          <tbody>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Points</th>
            </tr>
            {
              memberships.map((membership, index) => (
                <tr key={index}>
                  <td>{membership.rank}</td>
                  <td>{membership.name}</td>
                  <td>{membership.points}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.Group)
  return { group: state.Group }
}

const mapDispatchToProps = (dispatch) => {
  return {
    groupLoaded: (id, data) => dispatch(groupLoaded(id, data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)