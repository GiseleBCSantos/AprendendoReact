import React from 'react'
import lorem from '../assets/lorem.jpg'

const Info = () => {
  return (
    <div className='info'>
      <img src={lorem} alt="Foto" className='info--img' />
      <div className="info--text">
        <h2>Laura Smith</h2>
        <h4>Frontend Developer</h4>
        <h5>mywebsite.com</h5>
      </div>
      <div className="info--contato">
        <a className='info--contato--email'>
          <i class="fa-solid fa-envelope"></i>
          <span>
            Email
          </span>
        </a>
        <a className='info--contato--linkedin'>
          <i class="fa-brands fa-linkedin"></i>
          <span>
            Linkedin
          </span>
        </a>
      </div>
    </div>
  )
}

export default Info