import React from 'react'

const TextBlock = (props) =>{
  return(
    <div style={props.styles.style} className="TextBlock">
      <h2 style={props.styles.titleStyle}>{props.title}</h2>
      <p style={props.styles.textStyle}>{props.text}</p>
    </div>
  )
}

export default TextBlock
