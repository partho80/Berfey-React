import React from 'react'
import BlogUpdate from '../components/Blog/BlogUpdate'
import Experiance from '../components/Experiance/Experiance'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Instagram from '../components/Instagram/Instagram'
import LatestProduct from '../components/Product/LatestProduct'
import NewProduct from '../components/Product/NewProduct'
import Product from '../components/Product/Product'
import Services from '../components/Services/Services'
import Testimonial from '../components/Testimonial/Testimonial'
import Tranding from '../components/Tranding/Tranding'

function HomePage() {
  return (
      <div>    
          <Header/>
          <Hero />
          <Services/>
          <Product />
          <Experiance />
          <NewProduct/>
          <Tranding/>
          <LatestProduct/>
          <Testimonial/>
          <BlogUpdate/>
          <Instagram/>
          
       
         
          
    </div>
  )
}

export default HomePage