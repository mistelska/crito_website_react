import React from 'react'
import PaperzLogo from '../../assets/images/1.png'
import DorfusLogo from '../../assets/images/2.png'
import MartinoLogo from '../../assets/images/3.png'
import SquareLogo from '../../assets/images/4.png'
import GobonaLogo from '../../assets/images/5.png'

const FiveGreyLogos = () => {
  return (
    <section className="five-logos-and-features">
        <div className="container">
            <div className="grey-logos">
                <img src={PaperzLogo} alt="Paperz Logo"/>
                <img src={DorfusLogo} alt="Dorfus Logo"/>
                <img src={MartinoLogo} alt="Martino Logo"/>
                <img src={SquareLogo} alt="Square Logo"/>
                <img src={GobonaLogo} alt="Gobona Logo"/>
            </div>
        </div>
    </section>
  )
}

export default FiveGreyLogos