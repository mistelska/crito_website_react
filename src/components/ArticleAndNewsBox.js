import React from 'react'

const ArticleAndNewsBox = ({image, imagedescription, dateday, datemonth, title}) => {
  return (
    <div>
        <div className="pic-and-text">
            <a href="#">
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

            </a>

            <div className="how-to-text">
                <h3>{title}</h3>
            </div>

            <div className="lorem">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>

        </div>
    </div>
  )
}

export default ArticleAndNewsBox