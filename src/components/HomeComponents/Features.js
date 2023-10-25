import React from 'react'
import HandsIcon from '../../assets/images/hands.svg'
import LampIcon from '../../assets/images/lamp.svg'
import FinancialIcon from '../../assets/images/financial.svg'
import SettingsIcon from '../../assets/images/settings.svg'

const Feautres = () => {
  return (
    <section className="features">
        <div className="container">
            <div className="box">
                <div className="middle">

                    <div className="caption">
                        <p>Features</p>
                        <h2>Our Accounting is trusted by thousand of companies</h2>
                        <div className="button">
                            <a className="buttons-yellow" href="#">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                        </div>
                    </div>

                    <div className="all-icon-text">

                        <div className="icon-text">
                            <img src={HandsIcon} alt="Two hands holding"/>
                            <h4>Business Advice</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className="icon-text">
                            <img src={LampIcon} alt="Lamp with lights"/>
                            <h4>Startup Business</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className="icon-text">
                            <img src={FinancialIcon} alt="Small picture to Financial Advice"/>
                            <h4>Financial Advice</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className="icon-text">
                            <img src={SettingsIcon} alt="Small settings-design"/>
                            <h4>Risk Management</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feautres