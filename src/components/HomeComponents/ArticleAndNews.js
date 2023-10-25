import React from 'react'
import LadyArticleNews from '../../assets/images/last1.png'
import GPTArticleNews from '../../assets/images/last2.png'
import BooksArticleNews from '../../assets/images/last3.png'

const ArticleAndNews = () => {
  return (
    <section className="article-and-news">
        <div className="container">

            <div className="caption-button">

                <div className="text">
                    <h4>Article & News</h4>
                    <h2>Get Every Single Articles & News</h2>
                </div>

                <div className="button">
                    <a className="buttons-transparent" href="projects.html">Brows Articles<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>

            </div>

            <div className="middle">
                <div className="pic-and-text">
                    <a href="#">
                        <div className="pic-and-yellow-box">

                            <div className="yellow-box">
                                <p><span>23</span>Mar</p>
                            </div>

                            <div>
                                <img src={LadyArticleNews} alt="Picture of girl smiling"/>
                            </div>

                        </div>

                        <div className="business">
                            <p>Business</p>
                        </div>

                    </a>

                    <div className="how-to-text">
                        <h3>How To Use Digitalization <br/> In The Classroom</h3>
                    </div>

                    <div className="lorem">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>

                </div>

                <div className="pic-and-text">
                    <a href="#">
                        <div className="pic-and-yellow-box">
                            <div className="yellow-box">
                                <p><span>17</span>Mar</p>
                            </div>

                            <div>
                                <img src={GPTArticleNews} alt="Picture of a screen"/>
                            </div>

                        </div>

                        <div className="business">
                            <p>Business</p>
                        </div>

                    </a>

                    <div className="how-to-text">
                        <h3>How To Implement Chat GPT<br/>In Your Projects</h3>
                    </div>

                    <div className="lorem">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>

                </div>

                <div className="pic-and-text">
                    <a href="#">
                        <div className="pic-and-yellow-box">
                            <div className="yellow-box">
                                <p><span>13</span>Mar</p>
                            </div>

                            <div>
                                <img src={BooksArticleNews} alt="Picture of a Guide Book to learn CSS"/>
                            </div>

                        </div>

                        <div className="business">
                            <p>Business</p>
                        </div>

                    </a>

                    <div className="how-to-text">
                        <h3>The Guide To Support<br/>Modern CSS Design</h3>
                    </div>

                    <div className="lorem">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </div>
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