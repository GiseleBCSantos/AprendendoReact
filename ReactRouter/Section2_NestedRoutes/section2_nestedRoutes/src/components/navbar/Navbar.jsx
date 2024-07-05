import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header>
        <div className="navbar">
            <div className="navbar--title">
                <Link to='/'><h3>#VANLIFE</h3></Link>
            </div>
            <div className="navbar--links">
                <NavLink 
                  to={'/host'}
                  className={({isActive}) => isActive ? 'active-link' : null}
                >
                  <h4>Host</h4>
                </NavLink>
                <NavLink 
                  to={'/about'}
                  className={({isActive}) => isActive ? 'active-link' : null}
                >
                  <h4>About</h4>
                </NavLink>
                <NavLink 
                  to={'/vans'}
                  className={({isActive}) => isActive ? 'active-link' : null}
                >
                  <h4>Vans</h4>
                </NavLink>
            </div>
        </div>
    </header>
  )
}

export default Navbar