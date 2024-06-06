import React, { useState } from 'react'
import Question from './Question'

const Questions = (props) => {

  const [isChecked, setIsChecked] = useState(false)

  const dataContainer = props.data.map(item => (
    <Question 
      item={item} 
      key={item.id} 
    />
  ))

  function handleClick(e){
    e.preventDefault()
    setIsChecked(true)
  }


  return (
    <div className='questions' id='questions'>
      {dataContainer}
      <button onClick={handleClick}>Check answers</button>
    </div>
  )
}

export default Questions