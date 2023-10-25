import React from 'react'
import FiveStars from '../../assets/images/five-stars.svg'
import PicTestimonial1 from '../../assets/images/round1.png'
import PicTestimonial2 from '../../assets/images/round2.png'
import PicTestimonial3 from '../../assets/images/round3.png'

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

                    <div className="review">

                        <div className="star-and-text">
                            <img src={FiveStars} alt="Five red stars"/>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        </div>

                        <div className="pic-and-info">

                            <div className="profile">
                                <img src={PicTestimonial1} alt="Round profile picture of Cassandra Warren"/>
                            </div>

                            <div className="text">
                                <h3>Cassandra Warren</h3>
                                <p>Business Manager, Dorfus</p>
                            </div>

                        </div>

                    </div>

                    <div className="review">

                        <div className="star-and-text">
                            <img src={FiveStars} alt="Five red stars"/>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        </div>

                        <div className="pic-and-info">

                            <div className="profile">
                                <img src={PicTestimonial2} alt="Round profile picture of Amanda Tulling"/>
                            </div>

                            <div className="text">
                                <h3>Amanda Tulling</h3>
                                <p>Senior Developer, Square</p>
                            </div>

                        </div>

                    </div>

                    <div className="review">

                        <div className="star-and-text">
                            <img src={FiveStars} alt="Five red stars"/>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        </div>

                        <div className="pic-and-info">

                            <div className="profile">
                                <img src={PicTestimonial3} alt="Round profile picture of Jack McDogglas"/>
                            </div>

                            <div className="text">
                                <h3>Jack McDogglas</h3>
                                <p>Key Account Manager, Gobona</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="button">
                    <a className="buttons-black" href="projects.html">All Reviews<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
