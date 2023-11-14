import React from 'react'
import LineShowcase from '../../assets/images/line-up.svg'
import ManSuit from '../../assets/images/maninsuit.png'
import ButtonYellow from '../../assets/BtnFunctions/ButtonYellow'
import ButtonTransparent from '../../assets/BtnFunctions/ButtonTransparent'

const Showcase = () => {
  return (
    <section className="showcase">
        <img className="background-lines "src={LineShowcase}  alt="White design line"/>
        <div className="container">
            <div className="content">
                <h1> We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <div className='two-buttons'>
                <ButtonYellow text="Get Consulting"/>
                <ButtonTransparent text="Learn More"/>
                </div>
            </div>
            <img src={ManSuit} alt="image of a man in a suit with a tablet"/>
        </div>
    </section>
  )
}

export default Showcase