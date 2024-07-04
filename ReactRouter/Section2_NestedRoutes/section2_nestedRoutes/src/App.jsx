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

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="main">
          <Routes>
            <Route element={<Layout />}>
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
              <Route
                path='/vans/:id'
                element={<VanDetail />}
              />
              <Route
                path='/host'
                element={<Dashboard />}
              >

                <Route
                  path='/host/income'
                  element={<Income />}
                />
                <Route
                  path='/host/reviews'
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
