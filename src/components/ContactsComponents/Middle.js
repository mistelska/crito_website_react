import React from 'react'

const Middle = () => {
  return (
    <section className="middle">
        <div className="container">

            <div className="contact-group">

                <a className="contact" href="https://www.google.se/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm/@59.336637,18.0620105,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d6799554e87:0x6562d2c842903003!8m2!3d59.336637!4d18.0620105!16s%2Fg%2F11c0rp4jyr?entry=ttuclassName=" target="_blank">
                
                    <div className="btn-black-contact"><i className="fa-light fa-location-dot"></i></div>

                    <div>
                        <h4>Visit us</h4>
                        <p>Sveavägen 31<br/>111 34 STOCKHOLM</p>
                    </div>

                </a>

                <a className="contact" href="#">

                    <div className="btn-black-contact"><i className="fa-thin fa-phone"></i></div>

                    <div>
                        <h4>Call us</h4>
                        <p>+46 (8) 121 470 50<br/>+46 (8) 121 470 51</p>
                    </div>

                </a>

                <a className="contact" href="#">

                    <div className="btn-black-contact"><i className="fa-light fa-envelope"></i></div>

                    <div>
                        <h4>Email us</h4>
                        <p>info@crito.com<br/>support@crito.com</p>
                    </div>

                </a>

            </div>

            <div className="contact-box">

                <div>
                    <h3>Leave us a message<br/>for any information</h3>
                </div>

                <form>
                    <input type="name" placeholder="Name*"/>
                    <input type="email" placeholder="Email*"/>
                    <textarea placeholder="Your Message*" ></textarea>
                    <a className="buttons-yellow" href="#">Send Message<i className="fa-regular fa-arrow-up-right"></i></a>
                </form>

            </div>
        </div>
    </section>
  )
}

export default Middle