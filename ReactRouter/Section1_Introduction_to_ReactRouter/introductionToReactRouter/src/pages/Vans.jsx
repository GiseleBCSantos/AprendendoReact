import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import './Vans.css'
import Van from '../components/van/Van'
// import Link from 'react-router-dom'

function Vans() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setData(data.vans))
  }, [])

  const vans = data.map(item => (
    <Link to={`/vans/${item.id}`}>
      <Van data={item} key={item.id}/>
    </Link>
  ))

  return (
    <div className="vans--main">
      <h1>Explore our van options</h1>

      <div className="filters">
        <Button text='Simple' bgColor='#FFEAD0' padding='5px 35px'/>
        <Button text='Luxury' bgColor='#FFEAD0' padding='5px 35px'/>
        <Button text='Rugged' bgColor='#FFEAD0' padding='5px 35px'/>
        <Button text='Clear filters' bgColor='transparent' textDecoration='underline'/>
      </div>

      <div className="vansContainer">
        {vans}
      </div>

    </div>
  )
}

export default Vans