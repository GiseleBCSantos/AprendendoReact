import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './VanDetail.css'
import Button from '../Button'
import { Link } from 'react-router-dom'

function VanDetail() {
  const [van, setVan] = useState(null)
  const params = useParams()

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params.id])

  console.log(van)

  // const badgeStyles = {
  //   background: van.type === 'simple' ? '#E17654' : (van.type === 'rugged' ? '#115E59' : '#161616')
  // }

  return (
    <>
      {van ?
        <div className='van-detail--main'>
          <div className='return-van-page'>
            <Link to='/vans'>
              <i className='fa-solid fa-arrow-left'></i>
              <p>Back to all vans</p>
            </Link>
          </div>

          <div className="van-detail">
            <img
              src={van.imageUrl}
              alt={`Image of ${van.name}`}
              className='van-detail--image '
            />

            <div className="van-detail--info">
              <span className={`van-detail--bagde ${van.type}`}>{van.type}</span>
              <h2>{van.name}</h2>

              <div className="van-detail--price">
                <p>${van.price}</p>
                <span>/day</span>
              </div>

              <p>{van.description}</p>
            </div>


          </div>

          <Button
            text='Rent this van'
            width='100%'
            bgColor='#FF8C38'
            color='white'
            borderRadius='5px'
            padding='13px'
            className='rent-van-button'
            align='center'
          />
        </div>

        :
        <h2>Loading...</h2>
      }
    </>
  )
}

export default VanDetail