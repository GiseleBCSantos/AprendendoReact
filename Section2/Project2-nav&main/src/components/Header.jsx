import React from 'react'
import reactLogo from '../assets/react.svg'

const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <ul>
          <li>
            <img src={reactLogo} alt="Vite logo" className='nav--img' />
          </li>
          <li>
            <h3 className='nav--title'>
              ReactFacts
            </h3>
          </li>
        </ul>

        <h4 className='nav--subtitle'>React Couse - Project 1</h4>
      </nav>
    </header>
  )
}

export default Header