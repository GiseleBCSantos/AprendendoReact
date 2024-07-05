import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function HostLayout() {

  const active_style = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
     
  }

  return (
    <>
      <nav className='host-layout-nav'>
        <NavLink 
          to={'/host'}
          end
          style={({isActive}) => isActive ? active_style : null}
        >
          Dashboard
        </NavLink>

        <NavLink 
          to={'/host/income'}
          style={({isActive}) => isActive ? active_style : null}
        >
          Income
        </NavLink>

        <NavLink 
          to={'/host/vans'}
          style={({isActive}) => isActive ? active_style : null}
        >
          Vans
        </NavLink>

        <NavLink 
          to={'/host/reviews'}
          style={({isActive}) => isActive ? active_style : null}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout