import React, { useEffect, useState } from 'react'
import HostVan from '../../components/host/HostVan'

function HostVans() {

    const [vans, setVans] = useState(null)

    useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    

  return (
    <div className='hostVans-page'>
        <h2>Your listed vans</h2>

        <div className="hostVans-page--vans">
            {vans !== null ? vans.map(van => (
                <HostVan van={van} key={van.id}/>
            )) 
            : 
            'Loading...'}
                </div>
    </div>
  )
}

export default HostVans