import React from 'react'
import BlackLine from '../../assets/images/line.png'
import BgLineOurServices from '../../assets/images/line-our-services.svg'

const OurServices = () => {
  return (
    <section className="our-services">
        <img className="design-line" src={BgLineOurServices} alt="Design line"/>

        <div className="container">

            <div className="caption">
                <h4>Our Services</h4>
                <h2>We Provide The Best<br/>Service For Consulting</h2>
            </div>

            <div className="all-boxes">

                <div className="position">
                    <a href="#">

                        <div className="line">
                            <img src={BlackLine} alt="A small black line"/>
                        </div>

                        <div className="text-in-box">
                            <h4>Business Advice</h4>
                            <p>Lorem, ipsum dolor sit amet<br/>consectetur adipisicing elit. Officiis<br/>in nam possimus.</p>
                        </div>

                        <div className="arrow">
                            <div className="arrow-button-black"><i className="fa-thin fa-arrow-right"></i></div>
                        </div>

                    </a>
                </div>

                <div className="position">
                    <a href="#">

                        <div className="line">
                            <img src={BlackLine} alt="A small black line"/>
                        </div>

                        <div className="text-in-box">
                            <h4>Startup Business</h4>
                            <p>Lorem, ipsum dolor sit amet<br/>consectetur adipisicing elit. Officiis<br/>in nam possimus.</p>
                        </div>

                        <div className="arrow">
                            <div className="arrow-button-black"><i className="fa-thin fa-arrow-right"></i></div>
                        </div>

                    </a>
                </div>

                <div className="position">
                    <a href="#">

                        <div className="line">
                            <img src={BlackLine} alt="A small black line"/>
                        </div>

                        <div className="text-in-box">
                            <h4>Financial Advice</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis<br/>in nam possimus.</p>
                        </div>

                        <div className="arrow">
                            <div className="arrow-button-black"><i className="fa-thin fa-arrow-right"></i></div>
                        </div>

                    </a>
                </div>

                <div className="position">
                    <a href="#">

                        <div className="line">
                            <img src={BlackLine} alt="A small black line"/>
                        </div>

                        <div className="text-in-box">
                            <h4>Risk Management</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis<br/>in nam possimus.</p>
                        </div>
                        
                        <div className="arrow">
                            <div className="arrow-button-black"><i className="fa-thin fa-arrow-right"></i></div>
                        </div>

                    </a>
                </div>
            </div>

            <div className="button">
                <a className="buttons-transparent" href="#">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default OurServices