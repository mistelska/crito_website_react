import React from 'react'
import Line from '../assets/images/linje1.png'
import ButtonYellow from '../assets/BtnFunctions/ButtonYellow'

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
                <ButtonYellow text="Subscribe"/>
            </form>

        </div>

    </section>
  )
}

export default Newsletter