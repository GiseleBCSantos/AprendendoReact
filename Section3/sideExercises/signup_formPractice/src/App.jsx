import { useId, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    okayToEmail: false
  })

  console.log(formData)
  const id = useId()

  function handleChange(event) {
    const { name, value, type, checked } = event.target

    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (formData.password === formData.confirmPassword){
      console.log('Successfully signed up')
    }
    else{
      console.log('Passwords not match')
      return
    }

    formData.okayToEmail && console.log('Thanks for signing up for our newsletter!')

  }


  return (
    <div className='form-container'>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor={id + 'email'}>Email</label>
        <input
          type="email"
          className='form--input'
          value={formData.email}
          id={id + 'email'}
          onChange={handleChange}
          name='email'
        />

        <label htmlFor={id + 'password'}>Password</label>
        <input
          type="password"
          className='form--input'
          value={formData.password}
          id={id + 'password'}
          onChange={handleChange}
          name='password'
        />

        <label htmlFor={id + 'confirmPassword'}>Confirm Password</label>
        <input
          type="password"
          className='form--input'
          value={formData.confirmPassword}
          id={id + 'confirmPassword'}
          onChange={handleChange}
          name='confirmPassword'
        />

        <div className="form--marketing">
          <input
            type="checkbox"
            id={id + 'okayToEmail'}
            checked={formData.okayToEmail}
            onChange={handleChange}
            name='okayToEmail'
          />
          <label htmlFor={id + 'okayToEmail'}>I wanto to join the newsletter</label>
        </div>

        <button className="form--submit">
          Sign up
        </button>

      </form>

    </div>
  )
}

export default App
