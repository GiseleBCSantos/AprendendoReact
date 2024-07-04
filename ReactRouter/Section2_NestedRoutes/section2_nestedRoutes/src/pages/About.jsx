import React from 'react'
import vanImage from '../assets/images/image_54.png'
import Button from '../components/Button'
import './About.css'

function About() {
  return (
    <main className="about--main">
      <img className='hero--image' src={vanImage} alt="imagem de van" width={'100%'} />
      <div className="hero">
        <h2 className="hero--title">Don’t squeeze in a sedan when you could relax in a van.</h2>
        <div className="hero--text">
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
          <p>(Hitch costs extra 😉)</p>
          <br />
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels. </p>
        </div>

        <div className="hero--go-vans">
          <div className="hero--go-vans--title">
            <h2>Your destination is waiting.</h2>
            <h2>Your van is ready.</h2>
          </div>
          <Button text='Explore our vans' bgColor='black' color='white' padding='15px' borderRadius='10px' fontWeight='700' />
        </div>
      </div>
    </main>
  )
}

export default About