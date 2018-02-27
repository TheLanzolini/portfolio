import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { gameLoaded } from 'reducers/GameReducer'
import { DataCall } from 'common/DataCall'
import 'isomorphic-fetch'

const apiUrl = 'https://stage.bracketchallenge.ncaa.com/api/static-v1/ncaabracketchallenge/game.json'

class MatchupList extends DataCall {
  constructor(props) {
    super(props)
    this.cancelUpdate = false
    this.data = null
    this.dataCall = (store) => fetch(apiUrl).then(res => res.json()).then(res => {
      const { data } = res
      store.dispatch(gameLoaded(data))
      return Promise.resolve()
      // this helps demonstrate async SSR
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve()
      //   }, 2000)
      // })
    })
    this.addDataCall(this.dataCall)
  }

  componentDidMount() {
    if (!Object.keys(this.props.champions).length) {
      fetch(apiUrl).then(res => res.json()).then(res => {
        this.props.gameLoaded(res.data)
      })
    }
  }
  render() {
    return (
      <div>Matchup List</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { game: state.Game }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gameLoaded: (data) => dispatch(gameLoaded(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchupList)