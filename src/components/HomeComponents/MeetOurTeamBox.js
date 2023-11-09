import React from 'react'

const MeetOurTeamBox = ({image, imagedescription, name, title}) => {
  return (
    <div>
        <div className="pic-and-info">
            <img src={image} alt={imagedescription}/>
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default MeetOurTeamBox