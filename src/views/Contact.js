import React from 'react'

import Header from '../components/Header'
import Showcase from '../components/ContactsComponents/Showcase'
import Middle from '../components/ContactsComponents/Middle'
import Map from '../components/ContactsComponents/Map'
import Footer from '../components/Footer'

const Contacts = () => {
  return (
    <div className='wrapper-grid'>
    <Header />
    <main>
      <Showcase />
      <Middle />
      <Map />
    </main>
    <Footer />
    </div>
  )
}

export default Contacts