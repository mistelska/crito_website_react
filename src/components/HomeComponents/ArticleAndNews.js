import React from 'react'
import LadyArticleNews from '../../assets/images/last1.png'
import GPTArticleNews from '../../assets/images/last2.png'
import BooksArticleNews from '../../assets/images/last3.png'
import { NavLink } from 'react-router-dom'
import ArticleAndNewsBox from '../ArticleAndNewsBox'

const ArticleAndNews = () => {
  return (
    <section className="article-and-news">
        <div className="container">

            <div className="caption-button">

                <div className="text">
                    <NavLink to='/news'><h4>Article & News</h4></NavLink>
                    <h2>Get Every Single Articles & News</h2>
                </div>

                <div className="button">
                    <a className="buttons-transparent" href="projects.html">Brows Articles<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>

            </div>

            <div className="middle">
               <ArticleAndNewsBox 
               image={LadyArticleNews}
               imagedescription='A woman sitting on a chair and smiling.'
               title='How To Use Digitalization In The Classroom'
               dateday='25'
               datemonth='Mar'
               />
               <ArticleAndNewsBox
                image={GPTArticleNews}
                imagedescription='A screen showing chat GPT.'
                title='How To Implement Chat GPT In Your Projects'
                dateday='17'
                datemonth='Mar'
               />
               <ArticleAndNewsBox
                image={BooksArticleNews}
                imagedescription='Two books laying on a table white a smartphone on top of them.'
                title='The Guide To Support Modern CSS Design'
                dateday='13'
                datemonth='Mar'
               />
            </div>

            <div className="dots">
                <a className="dot-dark" href="#"></a>
                <a className="dot-down" href="#"></a>
                <a className="dot-down" href="#"></a>
                <a className="dot-down" href="#"></a>
                <a className="dot-down" href="#"></a>
            </div>

        </div>
    </section>
  )
}

export default ArticleAndNews