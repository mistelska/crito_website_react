import React from 'react'
import ArticleAndNewsBox from '../ArticleAndNewsBox'
import LadyArticleNews from '../../assets/images/last1.png'
import GPTArticleNews from '../../assets/images/last2.png'
import BooksArticleNews from '../../assets/images/last3.png'

import HoldingBook from '../../assets/images/articlenewsbook.png'
import Ceeling from '../../assets/images/ceeling.png'
import Computers from '../../assets/images/computers.png'

import Computer from '../../assets/images/computersmall.png'
import Glasses from '../../assets/images/glassessmall.png'
import Book from '../../assets/images/booksmall.png'


const Pictures = () => {
  return (
    <div className='title'>
      <h2>Our News & Articles</h2>
      <div className='article-news'>
        <div className='all-pictures'>
            <ArticleAndNewsBox 
              info='/articleandnews'
              image={LadyArticleNews}
              imagedescription='A woman sitting on a chair and smiling.'
              title='How To Use Digitalization'
              titlesecond='In The Classroom'
              dateday='25'
              datemonth='Mar'/>
            <ArticleAndNewsBox
              image={GPTArticleNews}
              imagedescription='A screen showing chat GPT.'
              title='How To Implement Chat GPT'
              titlesecond='In Your Projects'
              dateday='17'
              datemonth='Mar'/>
            <ArticleAndNewsBox
              image={BooksArticleNews}
              imagedescription='Two books laying on a table white a smartphone on top of them.'
              title='The Guide To Support'
              titlesecond='Modern CSS Design'
              dateday='13'
              datemonth='Mar'/>
            <ArticleAndNewsBox 
              image={HoldingBook}
              imagedescription='Person writing in a notebook.'
              title='Why You Need To Implement The'
              titlesecond='Five S s'
              dateday='12'
              datemonth='Mar'/>
            <ArticleAndNewsBox 
              image={Ceeling}
              imagedescription='Picture of a ceeling with three lamps.'
              title='Get More Involved With Your'
              titlesecond='End Users'
              dateday='07'
              datemonth='Mar'/>
            <ArticleAndNewsBox 
              image={Computers}
              imagedescription='Desktops with computers on them.'
              title='Guided Tour Of Our New Head Office'
              titlesecond='In Stockholm'
              dateday='02'
              datemonth='Mar'/>
            <ArticleAndNewsBox 
              image={Computer}
              imagedescription='A laptop on a reflective table.'
              title='Using Business Intelligence To Get'
              titlesecond='Insights Into Our Businesses'
              dateday='28'
              datemonth='Feb'/>
            <ArticleAndNewsBox 
              image={Glasses}
              imagedescription='Glasses, pen and a laptop on a table.'
              title='Apple Has Released New Products. Are'
              titlesecond='They Any Good?'
              dateday='18'
              datemonth='Feb'/>
            <ArticleAndNewsBox 
              image={Book}
              imagedescription='A mug, a pen and a book on a desktop.'
              title='How To Improve Your Teams And Get A'
              titlesecond='Better Result'
              dateday='11'
              datemonth='Feb'/>
        </div>
      </div>
    </div>
  )
}

export default Pictures