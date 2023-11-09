import React, { useState } from 'react'

const Form= () => {

    const[firstName, setFirstName] =useState ('')
    const[firstNameError, setFirstNameError] =useState (false)
    const[email, setEmail] =useState ('')
    const[emailError, setEmailError] =useState (false)
    const[message, setMessage] =useState ('')
    const[messageError, setMessageError] =useState (false)
    const[messageSubmitted, setMessageSubmitted] =useState (false)

    const[error, setError] =useState ('')

    const handleChange = (e) => {
        const { name, value } = e.target;
      switch (name) {
        case 'firstName' :
            setFirstName(value)
            setFirstNameError(validateLength(value,1))
            break
        case 'email' :
            setEmail(value)
            setEmailError(validateLength(value,3))
            break
        case 'message' :
            setMessage(value)
            setMessageError(validateLength(value,2))
            break
        }
    }

    const validateLength = (value, minLength =1) => {
        return value.length < minLength;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {firstName, email, message}
        const json = JSON.stringify(user)
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
        })

        switch (result.status) {
            case 200: 
                clearForm()
                messageSubmitted(
                alert ('Your message has been received. Press OK to proceed. ')
                )
                console.log('Form submitted correctly.')
                break;
            case 400: setError(
                <div className='error'>
                    <i class="fa-sharp fa-solid fa-triangle-exclamation"></i>
                    <p>Fill in all fields correctly.</p>
                </div>
            )  
                console.log('Form not submitted.')
                break;
        }
    }
    const clearForm = () => {
        setFirstName('')
        setEmail('')
        setMessage('')
        setError('')
    }
   

  return (
    <div>
        <form onSubmit={handleSubmit} noValidate>
            <p className='error'>{error}</p> 
            
            <input
            type="text"
            name='name'
            placeholder="Name*" 
            value ={firstName} 
            onChange={(e) => handleChange(e)}/>
            {firstNameError && <p className='error-message'>Fill in your name!</p>}

            <input 
            type="email"
            name='email' 
            placeholder="Email*"
            value={email} 
            onChange={(e) => handleChange(e)}/>
            {emailError && <p className='error-message'>Fill in your email!</p>}


            <textarea 
            type="text" 
            name='message' 
            placeholder="Your Message*" 
            value={message} 
            onChange={(e) => handleChange(e)}></textarea>
            {messageError && <p className='error-message'>You need to right a message to send in!</p>}


            <button
            className='buttons-yellow' 
            type='submit' 
            >Send Message<i 
            className="fa-regular fa-arrow-up-right"></i></button>
        </form> 
    </div>
  )
}

export default Form