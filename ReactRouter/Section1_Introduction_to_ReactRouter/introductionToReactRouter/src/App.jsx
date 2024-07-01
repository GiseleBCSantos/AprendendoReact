import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Button from './components/Button'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './server'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/vans'
            element={<Vans />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
