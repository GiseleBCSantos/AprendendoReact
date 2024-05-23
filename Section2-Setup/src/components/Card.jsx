import React from 'react'
import star from '../assets/star.png'

const Card = (props) => {
    let badgeText;
    if (props.data.openSpots === 0){
        badgeText = 'SOLD OUT'
    }
    else if (props.data.location === 'Online'){
        badgeText = 'ONLINE'
    }

    return (
        <div className="card">
            { badgeText && <div className="card--badge">
                <span>{badgeText}</span>
            </div>}
            <img src={`./src/assets/${props.data.coverImg}`} alt="" className='card--photo' />
            <div className="card--stats">
                <img src={star} alt="" className='card--stats--star' />
                <span>{props.data.stats.rating}</span>
                <span className='gray'>({props.data.stats.reviewCount}) • </span>
                <span className='gray'>{props.data.location}</span>
            </div>
            <p className='card--title'>{props.data.title}</p>

            <p className='card--price'><span className='bold'>From ${props.data.price}</span> / person</p>

        </div>
    )
}

export default Card