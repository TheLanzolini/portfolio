import React, { PureComponent } from 'react'
import styled from 'styled-components'
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

class Champions extends PureComponent {

  constructor(props) {
    super(props)
    this.cancelUpdate = false
    this.data = null
    this.state = {
      currentChampion: null,
    }
    this.updateCurrentChampion = this.updateCurrentChampion.bind(this)
    this.dataCall = fetch('http://ddragon.leagueoflegends.com/cdn/7.23.1/data/en_US/champion.json').then(res => res.json()).then(res => res.data)
    this.fetchData = function(store) {
      const Q = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('abc')
        }, 1000)
      })
      return Q
    }
  }

  componentWillMount() {
    // this.dataCall.then(res => res.json()).then(res => {
    //   this.data = res.data
    //   if (!this.cancelUpdate && process.browser) {
    //     this.forceUpdate()
    //   }
    // })
  }

  componentWillUnmount() {
    this.cancelUpdate = true
  }

  updateCurrentChampion(champion) {
    this.setState({ currentChampion: champion })
  }

  render() {
    const champions = !this.data ? null : Object.entries(this.data)
    return (
      <ComponentWrapper>
        <div>
          <ChampionsTitle>Experience working with APIs</ChampionsTitle>
          <ChampionsDescription>I have lots of experience working asynchronous UIs, below is a small example.</ChampionsDescription>
        </div>
        <ChampionsWrapper>
          {
            (champions || []).map(champion => {
              const onClick = () => {
                this.updateCurrentChampion(champion[1])
              }
              return (
                <Champion onClick={onClick} key={champion[0]}>
                  <ChampionsImg src={`//ddragon.leagueoflegends.com/cdn/7.23.1/img/champion/${champion[1].image.full}`} />
                  <div>{champion[0]}</div>
                </Champion>
              )
            })
          }
        </ChampionsWrapper>
        <div>{this.state.currentChampion ? `[${this.state.currentChampion.name}]: ${this.state.currentChampion.blurb}` : <br /> }</div>
      </ComponentWrapper>
    )
  }
}

export default Champions
