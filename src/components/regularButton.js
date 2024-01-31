import React from 'react'

import { Styles } from './style/regularButtonStyle'

const RegularButton = (props) => {
  const {text, isSmall, ...rest} = props

  return (
    <Styles>
      <div className={`regular-button ${isSmall?'small-button':''}`} {...rest}>
        <img className={`left-cap ${isSmall?'small-cap':''}`} src='/image/button-left.png' />
        <span>{text}</span>
        <img className={`right-cap ${isSmall?'small-cap':''}`} src='/image/button-right.png' />
      </div>
    </Styles>
  )
}
export default RegularButton
