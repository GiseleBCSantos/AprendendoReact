import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './components/van/VanDetail'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Button from './components/Button'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './server'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="main">
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route
                index
                element={<Home />}
              />
              <Route
                path='about'
                element={<About />}
              />
              
              <Route
                path='vans'
                element={<Vans />}
              />
              <Route
                path='vans/:id'
                element={<VanDetail />}
              />
              
              <Route
                path='/host'
                element={<HostLayout />}
              >

                <Route
                  index
                  element={<Dashboard />}
                />
                <Route
                  path='income'
                  element={<Income />}
                />
                <Route
                  path='reviews'
                  element={<Reviews />}
                />

              </Route>
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
