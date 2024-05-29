import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)


  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])



  return (
    <div>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(prevData => prevData+1)}>Get next character</button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default App
