import React from 'react'

import Header from '../components/Header';
import Showcase from '../components/HomeComponents/Showcase';
import FiveGreyLogos from '../components/HomeComponents/FiveGreyLogos';
import Features from '../components/HomeComponents/Features';
import AboutCompany from '../components/HomeComponents/AboutCompany';
import OurServices from '../components/HomeComponents/OurServices';
import WhyChooseUs from '../components/HomeComponents/WhyChooseUs';
import ProjectAndCase from '../components/HomeComponents/ProjectAndCase';
import MeetOurTeam from '../components/HomeComponents/MeetOurTeam';
import Testimonial from '../components/HomeComponents/Testimonial';
import ArticleAndNews from '../components/HomeComponents/ArticleAndNews';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='wrapper-grid'>
      <Header />
      <main>
        <Showcase />
        <FiveGreyLogos />
        <Features />
        <AboutCompany />
        <OurServices />
        <WhyChooseUs />
        <ProjectAndCase />
        <MeetOurTeam />
        <Testimonial />
        <ArticleAndNews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Home