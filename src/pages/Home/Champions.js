import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { championsLoaded } from 'reducers/ChampionsReducer'
import { DataCall } from 'common/DataCall'
import 'isomorphic-fetch'

const ChampionsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  overflow-y: scroll;
  height: 285px;
  width: 100%;
  padding: 6px 0;
  box-shadow: inset 0px 0px 10px 1px black;
`

const Champion = styled.div`
  cursor: pointer;
  text-align: center;
`

const ComponentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
`

const ChampionsTitle = styled.h3`
  margin: 0;
  text-align: center;
  font-weight: normal;
  font-size: 26px;
`

const ChampionsDescription = styled.div`
  text-align: center;
`

const ChampionsImg = styled.img`
  display: inline-block;
  min-width: 120px;
  min-height: 120px;
  background-color: #cdcdcd;
`

const ChampionDescription = styled.div`
  min-height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  .instruction {
    color: #adadad;
    font-style: italic;
  }
`

const ChampionInfo = styled.div`
  font-size: 14px;
`

class Champions extends DataCall {

  constructor(props) {
    super(props)
    this.cancelUpdate = false
    this.data = null
    this.state = {
      currentChampion: null,
    }
    this.updateCurrentChampion = this.updateCurrentChampion.bind(this)
    this.dataCall = (store) => fetch('http://ddragon.leagueoflegends.com/cdn/7.23.1/data/en_US/champion.json').then(res => res.json()).then(res => {
      const { data } = res
      store.dispatch(championsLoaded(data))
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
      fetch('http://ddragon.leagueoflegends.com/cdn/7.23.1/data/en_US/champion.json').then(res => res.json()).then(res => {
        this.props.championsLoaded(res.data)
      })
    }
  }

  componentWillUnmount() {
    this.cancelUpdate = true
  }

  updateCurrentChampion(champion) {
    this.setState({ currentChampion: champion })
  }

  render() {
    const champions = !this.props.champions ? null : Object.entries(this.props.champions)
    return (
      <ComponentWrapper>
        <div>
          <ChampionsTitle>Experience working with APIs</ChampionsTitle>
          <ChampionsDescription>I have lots of experience working asynchronous UIs, below is a small example.</ChampionsDescription>
        </div>
        <ChampionsWrapper>
          {
            (champions || []).map((champion, index) => {
              const onClick = () => {
                this.updateCurrentChampion(champion[1])
              }
              return (
                <Champion onClick={onClick} key={index}>
                  <ChampionsImg src={`//ddragon.leagueoflegends.com/cdn/7.23.1/img/champion/${champion[1].image.full}`} />
                  <div>{champion[0]}</div>
                </Champion>
              )
            })
          }
        </ChampionsWrapper>
        <ChampionDescription>
          {
            this.state.currentChampion
              ? `[${this.state.currentChampion.name}]: ${this.state.currentChampion.blurb}`
              : <div className="instruction">Click on a champion portrait to see their blurb.</div>
          }
        </ChampionDescription>
        <ChampionInfo>
          This data is asynchronously fetched and rendered on the server on first load. If you (for example) go to a different view and refresh and route back here, this module will load client side instead.
        </ChampionInfo>
      </ComponentWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return { champions: state.Champions }
}

const mapDispatchToProps = (dispatch) => {
  return {
    championsLoaded: (data) => dispatch(championsLoaded(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Champions)
