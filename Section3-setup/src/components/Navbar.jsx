import React from 'react'
import reactLogo from '../assets/react.svg'

const Navbar = () => {
  return (
    <header className='nav'>
        <div className="nav--title">
            <img src={reactLogo} alt="fsadf" />
            <h2>Meme Generator</h2>
        </div>

        <div className="nav--subtitle">
            <h4>React Course - Project 3</h4>
        </div>
        
    </header>
  )
}

export default Navbar 