import React from 'react'

const Die = (props) => {

    const styles = {
        backgroundColor: props.isHeld ? '#59e391' : 'white'
    }
  return (
    <div className='die' style={styles}>
        <h2>{props.value}</h2>
    </div>
  )
}

export default Die