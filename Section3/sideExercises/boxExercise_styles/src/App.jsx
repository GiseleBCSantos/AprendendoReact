import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box'
import boxes from './boxes'

function App() {

  const [squares, setSquares] = useState(boxes)

  function toggle(id){
    setSquares(prevSquares => {
      return prevSquares.map(square => {
        return id === square.id ? {...square, on: !square.on} : square
      })
    })
  }


  return (
    <>
      {squares.map(square => (
        <Box 
          key={square.id}
          handleClick={() => toggle(square.id)}
          on={square.on}
        />
      ))}
    </>
  )
}

export default App
