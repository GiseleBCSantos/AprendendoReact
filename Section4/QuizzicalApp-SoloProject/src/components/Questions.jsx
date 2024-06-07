import React, { useEffect, useState } from 'react'
import Question from './Question'

const Questions = (props) => {

  const [isChecked, setIsChecked] = useState(false)
  const [countChecked, setCountChecked] = useState(0)

  const dataContainer = props.data.map(item => (
    <Question
      item={item}
      key={item.id}
      isChecked={isChecked}
      countChecked={countChecked}
      setCountChecked={setCountChecked}
    />
  )
  )

  async function handleClick() {
    setIsChecked(prevState => !prevState)

    if (isChecked){
      setCountChecked(0)
      props.setCurrentPage('main')
      props.setNewData()
    }
  }

  return (
    <>
      <div className='questions' id='questions'>
        {dataContainer}
      </div>
      <div className="answers--show">
        {isChecked && <p className='answers--text'>You scored {countChecked}/5 correct answers.</p>}
        <button 
          className={isChecked ? 'answers--button' : ''} 
          onClick={handleClick}
        >
          {!isChecked ? 'Check answers' : 'Play again'}
        </button>
      </div>
    </>
  )
}

export default Questions