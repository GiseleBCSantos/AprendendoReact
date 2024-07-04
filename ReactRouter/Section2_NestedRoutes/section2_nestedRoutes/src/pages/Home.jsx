import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import './Home.css'

function Home() {
  return (
    <main className='home--main'>
      <h1 className='home--title'>You got the travel plans, we got the travel vans.</h1>
      <p className='home--text'>Add adveture to your life by joining the #vanlife movement. Rent the perfect van to make your prerfect road trip.</p>

      <Button text='Find your van' width='700px' align='center' padding='12px' bgColor='#FF8C38' color='white' borderRadius='5px'/>
    </main>
  )
}

export default Home