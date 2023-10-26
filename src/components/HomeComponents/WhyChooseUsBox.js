import React from 'react'

const WhyChooseUsBox = ({icon, imagedescription, title}) => {
  return (
    <>
        <div className="icons">
            <img src={icon} alt={imagedescription}/>
        </div>

        <div className="text">
            <h3>{title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
    </>
  )
}

export default WhyChooseUsBox