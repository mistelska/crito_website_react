import React from 'react'
import HandsIcon from '../../assets/images/hands.svg'
import LampIcon from '../../assets/images/lamp.svg'
import FinancialIcon from '../../assets/images/financial.svg'
import SettingsIcon from '../../assets/images/settings.svg'
import FeaturesBox from './FeaturesBox'
import ButtonYellow from '../../assets/BtnFunctions/ButtonYellow'

const Feautres = () => {
  return (
    <section className="features">
        <div className="container">
            <div className="box">
                <div className="middle">

                    <div className="caption">
                        <p>Features</p>
                        <h2>Our Accounting is trusted by thousand of companies</h2>
                        <div className="button">
                        <ButtonYellow text="Learn More"/>
                        </div>
                    </div>

                    <div className="all-icon-text">

                       <FeaturesBox 
                        icon={HandsIcon}
                        title='Business Advice'
                        imagedescription='Two hands holding'
                       />
                         <FeaturesBox 
                        icon={LampIcon}
                        title='Startup Business'
                        imagedescription='Lamp with lights'
                       />
                         <FeaturesBox 
                        icon={FinancialIcon}
                        title='Financial Advice'
                        imagedescription='Small picture to Financial Advice'
                       />
                         <FeaturesBox 
                        icon={SettingsIcon}
                        title='Risk Management'
                        imagedescription='Small settings-design'
                       />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feautres