import React from 'react'
import CritoStart from '../assets/images/logostart.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
            <button className="btn-menubars" ><i className="fa-solid fa-bars-staggered"></i></button>
            <div className="logo">
                <NavLink to='/'>
                <img src={CritoStart} alt="crito logotype"/> </NavLink>
            </div>

            <div className="contact-info">
                <a href="tel:+46812174050" className="content-box">
                    <i className="fa-light fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </a>
                <a href="mailto:info@crito.com"className="content-box">
                    <i className="fa-light fa-envelope"></i>
                    info@crito.com
                </a>
                <a href="https://www.google.se/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm/@59.336637,18.0620105,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d6799554e87:0x6562d2c842903003!8m2!3d59.336637!4d18.0620105!16s%2Fg%2F11c0rp4jyr?entry=ttuclassName=" target="_blank" className="content-box">
                    <i className="fa-light fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </a>
            </div>

            <div className="social">
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>

            <div className="menu">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="*">News</NavLink>
                    <NavLink to="*">Service</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                <a className="buttons-yellow btn-login" href="#">Login <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </header>
  )
}

export default Header