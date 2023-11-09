import React from 'react'
import FiveStars from '../../assets/images/five-stars.svg'

const TestimonialBox = ({image, imagedescription, name, title}) => {
  return (
    <div className="review">

    <div className="star-and-text">
        <img src={FiveStars} alt="Five red stars"/>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
    </div>

    <div className="pic-and-info">

      <div className="profile">
          <img src={image} alt={imagedescription}/>
      </div>

      <div className="text">
          <h3>{name}</h3>
          <p>{title}</p>
      </div>

    </div>

  </div>
  )
}

export default TestimonialBox