import React from 'react'
import ladyBlue from '../../assets/images/lady.png'

const AboutCompany = () => {
  return (
    <section className="about-company">
        <div className="container">

            <div className="pic-of-lady-and-text">
                <div className="pic-of-lady">
                    <img src={ladyBlue} alt="Lady walking towards camera holding a laptop smiling"/>
                </div>
                <div className="blue-box">
                    <div className="blue-text">
                        <h3>Samantha Brown, <span>Founder</span></h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit."</p>
                    </div>
                </div>
            </div>

            <div className="caption-lorem-btns">

                <h4>About Company</h4>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                
                <div className="buttons">

                    <div clxass="button">
                        <a className="buttons-black" href="#">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                
                    <a className="btn-and-text" href="#">
                        <div className="play-btn"><i className="fa-solid fa-play"></i></div>
                        <div className="intro">Intro Video</div>
                    </a>

                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCompany