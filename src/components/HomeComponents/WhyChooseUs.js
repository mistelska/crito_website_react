import React from 'react'
import IconThumbsUp from '../../assets/images/icon1.svg'
import IconPentagon from '../../assets/images/icon2.svg'
import IconExperience from '../../assets/images/icon3.svg'
import IconHead from '../../assets/images/icon4.svg'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
        <div className="container">

            <div className="caption-and-text">

                <div className="caption">
                    <h4>Why Choose Us</h4>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>

                <div className="icons-text">

                    <div className="icons">
                        <img src={IconThumbsUp} alt="Small design of a hand making thumbs up"/>
                    </div>

                    <div className="text">
                        <h3>Process Excellence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className="icons">
                        <img src={IconPentagon} alt="Small design to the text strategic planning"/>
                    </div>

                    <div className="text">
                        <h3>Strategic Planning</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                        
                    <div className="icons">
                        <img src={IconExperience} alt="Small design to the text experience design"/>
                    </div>

                    <div className="text">
                        <h3>Experience Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className="icons">
                        <img src={IconHead} alt="Small design of a cogwheel inside of a head"/>
                    </div>

                    <div className="text">
                        <h3>Artificial Inteligence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>

                </div>
            </div>
            
            <div className="pic-grey-box">
                <div className="picture"><img src="images/twoladies.png" alt="Two ladies sitting by a table discussing business"/></div>
                <div className="grey-box"></div>
            </div>

        </div>
    </section>
  )
}

export default WhyChooseUs