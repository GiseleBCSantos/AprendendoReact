import React, { useState } from 'react'

function Main(props) {

  return (
    <div className='main' id='main'>
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={props.handleClick}>Start quiz</button>
    </div>
  )
}

export default Main