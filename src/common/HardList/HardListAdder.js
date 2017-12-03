import React from 'react'
import { hardListAdd } from '../../reducers/HardListReducer'
import { connect } from 'react-redux'

class HardListAdder extends React.Component {
  constructor(props) {
    super(props)
    this.addToHardList = this.addToHardList.bind(this)
  }
  addToHardList() {
    this.props.hardListAdd(this.input.value)
    this.input.value = ''
  }
  componentDidMount() {
    document.addEventListener('keydown', e => {
      if (e.target == this.input && e.keyCode === 13) {
        this.addToHardList()
      }
    })
  }
  render() {
    return (
      <div className="hardlist-add">
        <input ref={(ref) => this.input = ref} type="text" />
        <button onClick={this.addToHardList}>Add</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hardListAdd: (name) => dispatch(hardListAdd(name)),
  }
}

export default connect(null, mapDispatchToProps)(HardListAdder)
