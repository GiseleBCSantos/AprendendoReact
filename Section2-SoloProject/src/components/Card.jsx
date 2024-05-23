import React from 'react'

const Card = (props) => {
    return (
        <section className='card'>
            <img src={props.imageUrl} alt="Mount Fuji" className='card--img' />
            <div className="card--info">
                <div className="card--info--location">
                    <p className='card--info--location--country'>
                        <i className="fa-solid fa-location-dot"></i>
                        {props.location}
                    </p>
                    <a href={props.googleMapsUrl} className='card--info--location--maps'>View on Google Maps</a>
                </div>
                <h2 className='card--info--title'>{props.title}</h2>
                <p className='card--info--dates'>{props.startDate} - {props.endDate}</p>
                <p className='card--info--description'>{props.description}</p>
            </div>
        </section>
    )
}

export default Card