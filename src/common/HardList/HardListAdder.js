import React from 'react'
import { hardListAdd } from '../../reducers/HardListReducer'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { global_box_shadow } from 'constants/styled'

const HardListInput = styled.input`
  border: none;
  border-bottom: 1px solid #cdcdcd;
  color: #333333;
  font-size: 14px;
  padding: 4px 2px;
  flex: 1;
  &:focus {
    outline: none;
  }
`

const HardListAdderContainer = styled.div`
  width: 250px;
  padding: 8px;
  box-shadow: ${global_box_shadow};
  margin: 12px 0;
  display: flex;
`

const HardListButton = styled.button`
  background-color: transparent;
  border: 1px solid #333333;
  margin-left: 6px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

class HardListAdder extends React.Component {
  constructor(props) {
    super(props)
    this.addToHardList = this.addToHardList.bind(this)
    this.state = { red: false }
  }
  addToHardList() {
    const exists = this.props.HardList.items.findIndex(item => item.name === this.input.value) >= 0
    if (this.input.value && !exists) {
      this.props.hardListAdd(this.input.value)
      this.input.value = ''
    } else if (exists) {
      this.setState({ red: true })
      setTimeout(() => {
        this.setState({ red: false })
      }, 200)
    }
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
      <HardListAdderContainer>
        <HardListInput className={this.state.red ? 'red' : ''} placeholder="Add Something!" innerRef={(ref) => this.input = ref} type="text" />
        <HardListButton onClick={this.addToHardList}>Add</HardListButton>
      </HardListAdderContainer>
    )
  }
}

const mapStateToProps = (state) => {
  const { HardList } = state
  return { HardList }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hardListAdd: (name) => dispatch(hardListAdd(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HardListAdder)
