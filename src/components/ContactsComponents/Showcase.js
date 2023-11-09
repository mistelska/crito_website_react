import React from 'react'
import BgdLines from '../../assets/images/line-up.svg'
import { NavLink } from 'react-router-dom'

const Showcase = () => {
  return (
    <section className="showcase-contact">
        <img className="bgd-lines" src={BgdLines} alt="Wavy white line"/>
        <div className="container">
            <div className="caption">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contact'><span>Contact</span></NavLink>
                <h2>Let&rsquo;s Connect</h2>
            </div>
        </div>
    </section>
  )
}

export default Showcase