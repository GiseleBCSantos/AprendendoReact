import React from 'react'
import photo_grid from '../assets/photo-grid.png'

const Hero = () => {
    return (
        <section className="hero">
            <img src={photo_grid} alt="" className='hero--img'/>


            <h2 className='hero--header'>Online Experiences</h2>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>

    )
}

export default Hero