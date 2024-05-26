import React from 'react'
import airbnbLogo from '../assets/airbnb-logo.png'

const Navbar = () => {
    return (
        <header>
            <nav className='nav'>
                <img src={airbnbLogo} alt="" className='nav--img'/>
                {/* <div className="nav--title">
                    <i class="fa-brands fa-airbnb"></i>
                    <div className="nav--logo-text">
                        airbnb
                    </div>
                </div> */}
            </nav>
        </header>
    )
}

export default Navbar