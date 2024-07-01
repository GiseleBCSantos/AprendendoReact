import React from 'react'

function Van(props) {

  const badgeStyles = {
    background:  props.data.type === 'simple' ? '#E17654' : (props.data.type === 'rugged' ?  '#115E59' : '#161616')
  }
  return (
    <div className='van-card'>
      <img className='van--image' src={props.data.imageUrl} alt="Van image" />
      <div className="van--info">
        <p className='van--name'>{props.data.name}</p>
        <p className='van--price'>$ {props.data.price}</p>
        <p className='van--price--day'>/day</p>

      </div>

      <span className='van--badge' style={badgeStyles}>{props.data.type}</span>

    </div>
  )
}

export default Van