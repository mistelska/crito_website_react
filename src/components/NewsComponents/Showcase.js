import React from 'react'
import { NavLink } from 'react-router-dom'
import BgdLines from '../../assets/images/line-up.svg'

const Showcase = () => {
  return (
    <div>
    <section className="showcase-contact">
    <img className="bgd-lines" src={BgdLines} alt="Wavy white line"/>
        <div className="container">
            <div className="caption">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/news'><span>News</span></NavLink>
                <h2>News & Articles</h2>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Showcase