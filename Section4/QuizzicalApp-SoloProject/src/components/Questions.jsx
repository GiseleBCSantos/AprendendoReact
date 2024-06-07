import React, { useState } from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'

const Questions = (props) => {

  const [isChecked, setIsChecked] = useState(false)
  const [countCheced, setCountChecked] = useState(0)

  const dataContainer = props.data.map(item => (

      <Question
        item={item}
        key={item.id}
        isChecked={isChecked}
        setCountIsChecked={setCountChecked}
        // answers={answersArray}
        // correctAnswer={correctAnswer}
      />
    )
  )

  function handleClick(e) {
    e.stopPropagation()
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