import React from 'react'
import Line from '../../assets/images/linje1.png'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <img className="background-lines-right" src={Line} alt="Design line"/>

        <div className="container">

            <div>
                <h2>Get News Updates By Signup</h2>
            </div>

            <form>
                <input type="text" placeholder="username@domain.com"/>
                <button className="buttons-yellow">Subscribe<i className="fa-regular fa-arrow-up-right"></i></button>
            </form>

        </div>

    </section>
  )
}

export default Newsletter