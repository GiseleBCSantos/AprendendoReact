import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WindowTracker from './components/WindowTracker'

function App() {
  const [show, setShow] = useState(true)

  function handleClick(){
    setShow(prevState => !prevState)
  }

  return (
    <div className="container">
      <button onClick={handleClick}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  )
}

export default App
