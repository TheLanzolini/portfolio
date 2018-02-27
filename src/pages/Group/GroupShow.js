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
    console.log(this.props)
    this.apiUrl = `https://staging.fantasygolf.pgatour.com/api/v6/pgaroster/leagues/${this.props.group.league_id}/leaderboard/by_season/2018/2/page/1.json`
    console.log(this.apiUrl)
    this.cancelUpdate = false
    this.data = null
    this.dataCall = (store) => fetch(this.apiUrl).then(res => res.json()).then(res => {
      store.dispatch(groupLoaded(res))
      return Promise.resolve()
    })
    this.addDataCall(this.dataCall)
  }

  componentDidMount() {
    if (!Object.keys(this.props.group).length) {
      fetch(this.apiUrl).then(res => res.json()).then(res => {
        this.props.groupLoaded(res)
      })
    }
  }
  render() {
    if (!this.props.group || !this.props.group.leagues) {
      return (<Loading />)
    }
    const { leagues } = this.props.group
    return (
      <div>
        {
          leagues.map((league, index) => (
            <div key={index}>
              <NavLink className="nav-link" to={`/group/${league.league_id}`}>{league.name}</NavLink>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { group: state.Group }
}

const mapDispatchToProps = (dispatch) => {
  return {
    groupLoaded: (data) => dispatch(groupLoaded(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)