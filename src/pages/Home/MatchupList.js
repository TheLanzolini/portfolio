import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { gameLoaded } from 'reducers/GameReducer'
import { DataCall } from 'common/DataCall'
import 'isomorphic-fetch'
import Loading from 'common/Loading'

const apiUrl = 'https://staging.fantasygolf.pgatour.com/api/static-v6/pgaroster/game.json'

class MatchupList extends DataCall {
  constructor(props) {
    super(props)
    this.cancelUpdate = false
    this.data = null
    this.dataCall = (store) => fetch(apiUrl).then(res => res.json()).then(res => {
      store.dispatch(gameLoaded(res))
      return Promise.resolve()
    })
    this.addDataCall(this.dataCall)
  }

  componentDidMount() {
    if (!Object.keys(this.props.game).length) {
      fetch(apiUrl).then(res => res.json()).then(res => {
        this.props.gameLoaded(res)
      })
    }
  }
  render() {
    if (!this.props.game || !this.props.game.tournaments) {
      return (<Loading />)
    }
    const { tournaments } = this.props.game
    return (
      <div>
        {
          Object.values(tournaments).map((tournament, index) => (
            <div key={index}>
              <img src={tournament.image_path} height="20px" />
              <span>{tournament.name}</span>
            </div>
          ))
        }
      </div>
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