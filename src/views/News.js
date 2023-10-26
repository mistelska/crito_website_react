import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Showcase from '../components/NewsComponents/Showcase';
import Newsletter from '../components/Newsletter';
import Pictures from '../components/NewsComponents/Pictures';

const News = () => {
  return (
    <div className='wrapper'>
    <Header />
      <main>
        <Showcase />
        <Pictures />
        <Newsletter />
      </main>
    <Footer />
    </div>
  )
}

export default News