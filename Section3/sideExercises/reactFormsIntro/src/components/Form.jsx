import React, { useId, useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isFriendly: true,
        employment: '',
        favColor: ''
    })

    const id = useId()

    console.log(formData)


    function handleChange(event) {
        const { name, value, type, checked } = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    return (
        <form >
            <label htmlFor={id + '-firstName'}>First Name</label>
            <input type="text"
                onChange={handleChange}
                name='firstName'
                value={formData.firstName}
                id={id + '-firstName'}
            />
            <label htmlFor={id + '-lastName'}>Last Name</label>
            <input type="text"
                onChange={handleChange}
                name='lastName'
                value={formData.lastName}
                id={id + '-lastName'}
            />
            <label htmlFor={id + '-email'}>Email</label>
            <input type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                id={id + '-email'}
            />

            <label htmlFor={id + '-comments'}>Comentarios</label>
            <textarea
                value={formData.comments}
                onChange={handleChange}
                name="comments"
                id={id + '-comments'}
            ></textarea>

            <input type="checkbox"
                name="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                id={id + '-isFriendly'}
            />
            <label htmlFor={id + '-isFriendly'}>Are you friendly?</label>

            <fieldset>
                <legend>Current employment status</legend>

                <input type="radio"
                    name="employment"
                    id={id + '-unemployed'}
                    value="unemployed"
                    checked={formData.employment === 'unemployed'}
                    onChange={handleChange}
                />
                <label htmlFor={id + '-unemployed'}>Unemployed</label>
                <br />

                <input type="radio"
                    name="employment"
                    id={id + '-partTime'}
                    value="part-time"
                    checked={formData.employment === 'part-time'}
                    onChange={handleChange}
                />
                <label htmlFor={id + '-partTime'}>Part-time</label>
                <br />

                <input type="radio"
                    name="employment"
                    id={id + '-fullTime'}
                    value="full-time"
                    checked={formData.employment === 'full-time'}
                    onChange={handleChange}
                />
                <label htmlFor={id + '-fullTime'}>Full-time</label>
                <br />
            </fieldset>


            <label htmlFor={id + 'favColor'}>What is your favorite color?</label><br />
            <select
                name="favColor"
                id={id + 'favColor'}
                value={formData.favColor}
                onChange={handleChange}
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">orange</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="indigo">indigo</option>
            </select>

        </form>
    )
}

export default Form