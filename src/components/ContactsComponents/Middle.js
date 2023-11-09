import React, { useState } from 'react'
import MiddleBox from './MiddleBox'
import Form from './Form'

const Middle = () => {
  return (
    <section className="middle">
        <div className="container">

            <div className="contact-group">
                <MiddleBox 
                    link='https://www.google.se/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm/@59.336637,18.0620105,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d6799554e87:0x6562d2c842903003!8m2!3d59.336637!4d18.0620105!16s%2Fg%2F11c0rp4jyr?entry=ttuclassName='
                    icon='fa-light fa-location-dot'
                    title='Visit us'
                    textone='Sveavägen 31'
                    texttwo='111 34 STOCKHOLM'
                />
                <MiddleBox 
                    link='#'
                    icon='fa-thin fa-phone'
                    title='Call us'
                    textone='+46 (8) 121 470 50'
                    texttwo='+46 (8) 121 470 51'
                />
                <MiddleBox 
                    link='#'
                    icon='fa-light fa-envelope'
                    title='Email us'
                    textone='info@crito.com'
                    texttwo='support@crito.com'
                />
            </div>

            <div className="contact-box">

                <div>
                    <h3>Leave us a message<br/>for any information</h3>
                </div>

                <Form/>

            </div>
        </div>
    </section>
  )
}

export default Middle