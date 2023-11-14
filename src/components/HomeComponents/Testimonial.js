import React from 'react'
import PicTestimonial1 from '../../assets/images/round1.png'
import PicTestimonial2 from '../../assets/images/round2.png'
import PicTestimonial3 from '../../assets/images/round3.png'
import TestimonialBox from './TestimonialBox'
import ButtonBlack from '../../assets/BtnFunctions/ButtonBlack'

const Testimonial = () => {
  return (
    <section className="testimonial">
        <div className="white">
            <div className="container">

                <div className="caption">
                    <h4>Testimonial</h4>
                    <h2>What Our Client Says</h2>
                </div>

                <div className="all-reviews">

                    <TestimonialBox 
                        image={PicTestimonial1}
                        imagedescription='Round profile picture of Cassandra Warren'
                        name='Cassandra Warren'
                        title='Business Manager, Dorfus'
                    />
                       <TestimonialBox 
                        image={PicTestimonial2}
                        imagedescription='Round profile picture of Amanda Tulling'
                        name='Amanda Tulling'
                        title='Senior Developer, Square'
                    />
                       <TestimonialBox 
                        image={PicTestimonial3}
                        imagedescription='Round profile picture of Jack McDogglas'
                        name='Jack McDogglas'
                        title='Key Account Manager, Gobona'
                    />

                </div>

                <div className="button">
                    <ButtonBlack text="All Reviews"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
