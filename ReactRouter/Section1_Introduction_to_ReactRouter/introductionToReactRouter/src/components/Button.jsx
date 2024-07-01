import React from 'react'

function Button(props) {
    const styles = {
        width: `${props.width}`,
        padding: `${props.padding}`,
        background: `${props.bgColor}`,
        color: `${props.color}`,
        border: props.border ? props.border : 'none',
        outline: 'none',
        borderRadius: props.borderRadius,
        fontWeight: props.fontWeight,
        textDecoration: props.textDecoration,
        cursor: 'pointer'
    }

    const align_styles = {
        display: 'flex', 
        justifyContent: `${props.align}`

    }

  return (
    <div className="button-align" style={align_styles}>
        <button style={styles} className={`${props.className}`}>{props.text}</button>
    </div>
  )
}

export default Button