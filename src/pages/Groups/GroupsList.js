import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { groupsLoaded } from 'reducers/GroupsReducer'
import { DataCall } from 'common/DataCall'
import 'isomorphic-fetch'
import Loading from 'common/Loading'
import { NavLink } from 'react-router-dom'

const apiUrl = 'https://staging.fantasygolf.pgatour.com/api/static-v6/pgaroster/leagues/page/1/filter_by/public.json'

class GroupsList extends DataCall {
  constructor(props) {
    super(props)
    this.cancelUpdate = false
    this.data = null
    this.dataCall = (store) => fetch(apiUrl).then(res => res.json()).then(res => {
      store.dispatch(groupsLoaded(res))
      return Promise.resolve()
    })
    this.addDataCall(this.dataCall)
  }

  componentDidMount() {
    if (!Object.keys(this.props.groups).length) {
      fetch(apiUrl).then(res => res.json()).then(res => {
        this.props.groupsLoaded(res)
      })
    }
  }
  render() {
    if (!this.props.groups || !this.props.groups.leagues) {
      return (<Loading />)
    }
    const { leagues } = this.props.groups
    return (
      <div>
        {
          leagues.map((league, index) => (
            <div key={index}>
              <NavLink to={`/group/${league.league_id}`}>{league.name}</NavLink>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { groups: state.Groups }
}

const mapDispatchToProps = (dispatch) => {
  return {
    groupsLoaded: (data) => dispatch(groupsLoaded(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList)