import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState(false)
    const[error, setError] =useState ('')
    const[submitted, setSubmitted] =useState('')

    const handleChange = (e) => {
        switch (e.target.id) {
            case 'name':
                setName(e.target.value)
                setNameError(validateLength(e.target.value, 1))
            break;
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateEmail(e.target.value))
            break;
            case 'message':
                setMessage(e.target.value)
                setMessageError(validateLength(e.target.value, 3))
            break;
        }
    }

    const validateEmail =(email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) ? '' : 'Invalid email.';
    }

    const validateLength = (value, minimumLength = 1) => {
        if (value.length < minimumLength)
            return true
        return false
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if ( nameError || emailError || messageError) {
            setError('Fill in all fields correctly!')
            setSubmitted('')
            return;
        }

        const user = {name, email, message}
        const json = JSON.stringify(user)

        const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
            'content-type' : 'application/json'
            },
            body: json
        })

        switch (result.status) {
            case 200: 
            setSubmitted('Thank you for your message!')
                console.log('Form submitted!')
                clearForm('')
            break;

            case 400: 
            setSubmitted('')
            setError('Fill in all fields correctly!')
                console.log('Form not submitted.')
            break;
        }
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
        setError('')
        setNameError('')
        setEmailError('')
        setMessageError('')
    }

  return (
    <form onSubmit={handleSubmit} noValidate> 
        <p className='error-main'>{error}</p> 
        <input 
        type="text"
        id='name'
        placeholder='Name*'
        value={name} 
        onChange={(e) => handleChange(e)}></input>
        {nameError && <p className='error'><i className="fa-sharp fa-solid fa-triangle-exclamation"></i>Fill in your name, please.</p>}

        <input 
        type="email" 
        id='email'
        placeholder='Email*' 
        value={email} 
        onChange={(e) => handleChange(e)}></input>
        {emailError && <p className='error'><i className="fa-sharp fa-solid fa-triangle-exclamation"></i>Fill in your email, please.</p>}

        <textarea 
        type="text" 
        id='message'
        placeholder='Your Message*' 
        value={message} 
        onChange={(e) => handleChange(e)}></textarea>
        {messageError && <p className='error'><i className="fa-sharp fa-solid fa-triangle-exclamation"></i>You need to write a message first!</p>}

        <button className='buttons-yellow' type='submit'>Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
        <p className='submitted'>{submitted}</p>
    </form>
  )
}

export default Form