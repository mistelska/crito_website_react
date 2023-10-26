import React from 'react'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='wrapper'>
    <main>
        <div className='error-box'>
            <div className="box">
                <div className="error-icon">
                    <h1>PAGE NOT FOUND</h1>
                    <i className="fa-solid fa-hexagon-exclamation"></i>
                </div>
                    <p>Sorry, the page you requested was not found.</p>
                    <NavLink to='/'className='buttons-transparent'>BACK TO HOME</NavLink>
            </div>
        </div>
    </main>
    <Footer />
    </div>
  )
}

export default NotFound