import React from 'react'
import ClickAway from 'common/ClickAway'
import styled from 'styled-components'
import { global_box_shadow } from 'constants/styled'

const Wrapper = styled.div`
  position: relative;
`

const Description = styled.div.attrs({
  alignself: props => props.alignself || 'left',
})`
  position: absolute;
  box-shadow: ${global_box_shadow};
  bottom: 0;
  ${props => props.alignself}: 0;
  z-index: 1;
  width: 200px;
  background-color: white;
  border: 1px solid #cdcdcd;
  transform: translateY(105%);
  border-radius: 4px;
  padding: 6px;
`

// &:after {
//   content: "";
//   position: absolute;
//   top: -22px;
//   left: 38px;
//   width: 1px;
//   height: 1px;
//   border: 10px solid transparent;
//   border-bottom: 10px solid white;
// }

class Skill extends ClickAway {
  constructor(props) {
    super(props)
    this.state = { showSkill: false }
    this.toggleShow = this.toggleShow.bind(this)
    this.addListener((isTarget) => {
      if (!isTarget) {
        this.setState({ showSkill: isTarget })
      }
    })
  }

  toggleShow() {
    this.setState({ showSkill: !this.state.showSkill })
  }

  render() {
    return (
      <Wrapper>
        <div onClick={this.toggleShow}>
          {this.props.target}
        </div>
        {
          this.state.showSkill && (
            <Description alignself={this.props.alignself}>
              { this.props.description }
            </Description>
          )
        }
      </Wrapper>
    )
  }
}

export default Skill
