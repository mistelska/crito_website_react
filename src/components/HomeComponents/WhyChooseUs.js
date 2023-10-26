import React from 'react'
import IconThumbsUp from '../../assets/images/icon1.svg'
import IconPentagon from '../../assets/images/icon2.svg'
import IconExperience from '../../assets/images/icon3.svg'
import IconHead from '../../assets/images/icon4.svg'
import TwoLadies from '../../assets/images/twoladies.png'
import WhyChooseUsBox from './WhyChooseUsBox'


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
                    <WhyChooseUsBox
                        icon={IconThumbsUp}
                        imagedescription='Small design of a hand making thumbs up'
                        title='Process Excellence'
                    />
                    <WhyChooseUsBox
                        icon={IconPentagon}
                        imagedescription='Small design to the text strategic planning'
                        title='Strategic Planning'
                    />
                    <WhyChooseUsBox
                        icon={IconExperience}
                        imagedescription='Small design to the text experience design'
                        title='Experience Design'
                    />
                    <WhyChooseUsBox
                        icon={IconHead}
                        imagedescription='Small design of a cogwheel inside of a hea'
                        title='Artificial Inteligence'
                    />
                    
                </div>
            </div>
            
            <div className="pic-grey-box">
                <div className="picture"><img src={TwoLadies} alt="Two ladies sitting by a table discussing business"/></div>
                <div className="grey-box"></div>
            </div>

        </div>
    </section>
  )
}

export default WhyChooseUs