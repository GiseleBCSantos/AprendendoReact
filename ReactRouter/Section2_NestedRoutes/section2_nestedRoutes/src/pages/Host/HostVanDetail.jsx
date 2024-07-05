import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Host.css'

function HostVanDetail() {

  const params = useParams()
  const [van, setVan] = useState([])

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans[0]))
  }, [])

  return (
    <div className='hostVanDetail--main'>
      <div className='return-van-page'>
        <Link to='/host/vans'>
          <i className='fa-solid fa-arrow-left'></i>
          <p>Back to all vans</p>
        </Link>
      </div>

      <div className="hostVanDetail--component">
        <div className="component--info">
          <div className="van-image">
            <img src={van.imageUrl} alt="" />
          </div>
          <div className="van-info">
            <span className={`van-detail--bagde ${van.type}`}>{van.type}</span>
            <h2>{van.name}</h2>
            <p><strong className='van-price'>${van.price}</strong>/day</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostVanDetail