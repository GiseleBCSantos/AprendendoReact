import React from 'react'
import Question from './Question'

const Questions = (props) => {

  const dataContainer = props.data.map(item => (
    <Question item={item} key={props.data.indexOf(item)}/>
  ))
  return (
    <div className='questions'>
      {dataContainer}
    </div>
  )
}

export default Questions