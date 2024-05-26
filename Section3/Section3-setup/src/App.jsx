import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Meme from './components/Meme'

function App() {
  return (
    <>
      <Navbar />
      <Meme />
    </>
  )
}

export default App
