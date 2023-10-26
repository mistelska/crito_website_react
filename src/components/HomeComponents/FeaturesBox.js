import React from 'react'


const FeaturesBox = ({icon, title, imagedescription}) => {
  return (
    <div className="icon-text">
        <img src={icon} alt={imagedescription}/>
        <h4>{title}</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default FeaturesBox