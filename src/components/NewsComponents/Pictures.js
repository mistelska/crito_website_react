import React from 'react'
import ArticleAndNewsBox from '../ArticleAndNewsBox'

const Pictures = () => {
  return (
    <div>
        <h3>Our News & Articles</h3>
        <div className='ThreeBoxes'>
            <ArticleAndNewsBox />
            <ArticleAndNewsBox />
            <ArticleAndNewsBox />
        </div>

        <div className='ThreeBoxes'>
            <ArticleAndNewsBox />
            <ArticleAndNewsBox />
            <ArticleAndNewsBox />
        </div>

        <div className='ThreeBoxes'>
            <ArticleAndNewsBox />
            <ArticleAndNewsBox />
            <ArticleAndNewsBox />
        </div>
    </div>
  )
}

export default Pictures