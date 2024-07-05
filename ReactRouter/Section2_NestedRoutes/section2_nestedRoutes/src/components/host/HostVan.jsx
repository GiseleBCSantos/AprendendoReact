import React from 'react'

function HostVan(props) {
    return (
        <div className="hostVans-page--van">
            <img src={props.van.imageUrl} alt={`Image of ${props.van.name}`} />
            <div className="hostVans-page--van--detail">
                <h3>{props.van.name}</h3>
                <p>${props.van.price}/day</p>
            </div>
        </div>
    )
}

export default HostVan