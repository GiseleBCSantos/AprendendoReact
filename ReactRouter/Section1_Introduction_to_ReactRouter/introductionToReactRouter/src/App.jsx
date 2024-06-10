import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route 
            path='/about'
            element={<About />}
          />
        </Routes>
      
    </BrowserRouter>
  )
}

export default App
