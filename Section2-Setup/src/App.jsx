import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {

  const cards = data.map(item => {
    return <Card
      key={item.id}
      data={item}
    />
  })


  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </>
  )
}

export default App
