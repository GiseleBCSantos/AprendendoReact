import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const WindowTracker = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    useEffect(() => {
        function watchWidth(){
            setInnerWidth(window.innerWidth)
        }
        window.addEventListener('resize', watchWidth)

        return function(){
            window.removeEventListener('resize', watchWidth)
        }
    }, [])

  return (
    <div>
        <h1>Window width: {innerWidth}</h1>
    </div>
  )
}

export default WindowTracker