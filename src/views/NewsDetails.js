import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleAndNews from '../components/HomeComponents/ArticleAndNews';
import PictureInfo from '../components/NewsDetailsComponents/PictureInfo';

const NewsDetails = () => {
  return (
    <div className='wrapper'>
    <Header />
    <main>
      <PictureInfo />
      <ArticleAndNews />
    </main>
    <Footer />
    </div>
  )
}

export default NewsDetails