import React from 'react'
import { NavLink } from 'react-router-dom'

const ArticleAndNewsBox = ({info, image, imagedescription, dateday, datemonth, title, titlesecond}) => {
  return (
    <div>
        <div className="pic-and-text">
            <NavLink to={info}>
                <div className="pic-and-yellow-box">

                    <div className="yellow-box">
                        <p><span>{dateday}</span>{datemonth}</p>
                    </div>

                    <div>
                        <img src={image} alt={imagedescription}/>
                    </div>

                </div>

                <div className="business">
                    <p>Business</p>
                </div>

            </NavLink>

            <div className="how-to-text">
                <h3>{title}<br/>{titlesecond}</h3>
            </div>

            <div className="lorem">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>Architecto sed hic libero.</p>
            </div>

        </div>
    </div>
  )
}

export default ArticleAndNewsBox