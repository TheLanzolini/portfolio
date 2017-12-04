import React from 'react'
import { connect } from 'react-redux'
import { hardListToggle, hardListRemove } from '../../reducers/HardListReducer'
import styled from 'styled-components'

// This component only lists and interacts with HardList items
// they are added with another component

import './HardList.css'

const HardList = (props) => {
  const { HardList, hardListToggle, hardListRemove } = props
  const HardListContainer = styled.div`
    width: 250px;
    padding: 8px;
    box-shadow: 0px 0px 1px 1px #cdcdcd;
    margin: 12px 0;
  `
  const HardListTitle = styled.h3`
    text-align: center;
    padding: 6px 0;
    margin: 0;
    font-weight: 300;
    border-bottom: 1px solid #cdcdcd;
  `
  const HardListEmpty = styled.p`
    color: #78909C;
    text-align: center;
    font-style: italic;
    font-size: 12px;
  `
  return (
    <HardListContainer>
      <HardListTitle>HardList Card!</HardListTitle>
      { HardList.items.length === 0 && <HardListEmpty>No Hardlist items!</HardListEmpty> }
      {
        HardList.items.map((item, index) => {
          const HardListItem = styled.div`
            display: flex;
            cursor: pointer;
            line-height: 2;
            border-bottom: 1px solid #efefef;
          `
          const HardListName = styled.div`
            text-decoration: ${item.complete ? 'line-through' : 'none'};
            font-style: ${item.complete ? 'italic' : 'normal'};
            color: ${item.complete ? '#cdcdcd' : 'black'};
            flex: 1;
            &:hover {
              text-decoration: line-through;
            }
          `
          const HardListRemove = styled.div`
            color: #F44336;
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
              <HardListRemove className="hardlist-remove" onClick={remove}>remove</HardListRemove>
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
