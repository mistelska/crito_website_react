import React from 'react'
import BlackLine from '../../assets/images/line.png'

const OurServicesBox = ({title}) => {
  return (
    <div className="position">
        <a href="#">
            <div className="line">
                <img src={BlackLine} alt="A small black line"/>
            </div>

            <div className="text-in-box">
                <h4>{title}</h4>
                <p>Lorem, ipsum dolor sit amet<br/>consectetur adipisicing elit. Officiis<br/>in nam possimus.</p>
            </div>

            <div className="arrow">
                <div className="arrow-button-black"><i className="fa-thin fa-arrow-right"></i></div>
            </div>
        </a>
    </div>
  )
}

export default OurServicesBox