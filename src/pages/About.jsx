import React from 'react'
import AboutHero from '../components/About/AboutHero'
import BlogUpdate from '../components/Blog/BlogUpdate'
import Feelings from '../components/Feelings/Feelings'
import Header from '../components/Header/Header'
import LeaderShip from '../components/LeaderShip/LeaderShip'
import Membership from '../components/Membership/Membership'

function About() {
  return (
      <div>
          <Header />
          <AboutHero />
          <Feelings />
          <LeaderShip />
          <BlogUpdate />
          <Membership />
          
    </div>
  )
}

export default About