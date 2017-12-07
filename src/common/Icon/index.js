import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import css3 from './icons/css3.svg'
import html5 from './icons/html5.svg'
import js from './icons/js.svg'
import node from './icons/node.svg'

const icons = { css3, html5, js, node }

const StyledIcon = styled.div`
  width: 100%;
  height: 100%;
`

const Icon = (props) => (
  <StyledIcon dangerouslySetInnerHTML={{ __html: icons[props.icon] || '' }}></StyledIcon>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default Icon
