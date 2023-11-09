import React from 'react'

const MiddleBox = ({link, icon ,title, textone, texttwo}) => {
  return (
    <a className="contact" href={link} target="_blank">
        
        <div className="btn-black-contact"><i className={icon}></i></div>

        <div>
            <h4>{title}</h4>
            <p>{textone}</p>
            <p>{texttwo}</p>

        </div>

    </a>
  )
}

export default MiddleBox