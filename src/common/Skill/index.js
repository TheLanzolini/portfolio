import React from 'react'
import ClickAway from 'common/ClickAway'

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
      <div>
        <div onClick={this.toggleShow}>skill</div>
        {
          this.state.showSkill && <div style={{ width: '200px', height: '200px', backgroundColor: 'blue' }}>MORE SKILL</div>
        }
      </div>
    )
  }
}

export default Skill
