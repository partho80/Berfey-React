import React from 'react'
import ContactBody from '../components/Contact/ContactBody'
import ContactHero from '../components/Contact/ContactHero'
import Header from '../components/Header/Header'

function Contact() {
  return (
      <div>
          <Header/>
          <ContactHero />
          <ContactBody/>
          
    </div>
  )
}

export default Contact