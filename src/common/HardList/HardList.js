import React from 'react'
import { connect } from 'react-redux'
import { hardListToggle, hardListRemove } from '../../reducers/HardListReducer'
import styled from 'styled-components'

// This component only lists and interacts with HardList items
// they are added with another component

const HardList = (props) => {
  const { HardList, hardListToggle, hardListRemove } = props
  const HardListContainer = styled.div`
    width: 250px;
  `
  return (
    <HardListContainer>
      {
        HardList.items.map((item, index) => {
          const HardListItem = styled.div`
            display: flex;
            cursor: pointer;
          `
          const HardListName = styled.div`
            text-decoration: ${item.complete ? 'line-through' : 'none'};
            flex: 1;
          `
          const HardListRemove = styled.div`
            background-color: red;
            color: white;
            padding: 5px;
            border-radius: 100%;
          `
          const onClick = () => {
            hardListToggle(item.name)
          }
          const remove = () => {
            hardListRemove(item.name)
          }
          return (
            <HardListItem key={index}>
              <HardListName onClick={onClick}>{item.name}</HardListName>
              <HardListRemove className="hardlist-remove" onClick={remove}>x</HardListRemove>
            </HardListItem>
          )
        })
      }
    </HardListContainer>
  )
}

const mapStateToProps = (state) => {
  const { HardList } = state
  return { HardList }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hardListToggle: (name) => dispatch(hardListToggle(name)),
    hardListRemove: (name) => dispatch(hardListRemove(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HardList)
