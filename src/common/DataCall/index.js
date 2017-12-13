import React from 'react'

let Promises = []

export class DataCall extends React.Component {
  constructor(props) {
    super(props)
    this.addDataCall = this.addDataCall.bind(this)
  }

  addDataCall(dataCall) {
    if (!process.browser) {
      Promises.push(dataCall)
    }
  }
}

export const collectPromises = () => {
  return Promises
}

export const clearPromises = () => {
  Promises = []
}
