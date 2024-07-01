import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header>
        <div className="navbar">
            <div className="navbar--title">
                <Link to='/'><h3>#VANLIFE</h3></Link>
            </div>
            <div className="navbar--links">
                <Link to={'/about'}><h4>About</h4></Link>
                <Link to={'/vans'}><h4>Vans</h4></Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar