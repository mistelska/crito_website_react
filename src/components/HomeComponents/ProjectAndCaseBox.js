import React from 'react'

const ProjectAndCaseBox = ({img, imgdescription, title}) => {
  return (
    <a className="project" href="#">
        <img src={img} alt={imgdescription}/>
        <h3>{title}</h3>
        <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
    </a>
)
}

export default ProjectAndCaseBox