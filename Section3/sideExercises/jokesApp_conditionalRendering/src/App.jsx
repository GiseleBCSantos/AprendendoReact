import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jokesData from './jokesData'
import Joke from './components/Joke'

function App() {

  const jokesComponents = jokesData.map(joke => {
    return <Joke 
              key={joke.id}
              {...joke}
           />
  })

  return (
    <>
      {jokesComponents}
    </>
  )
}

export default App
