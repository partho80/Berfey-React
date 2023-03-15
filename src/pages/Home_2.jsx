import React from 'react'
import BlogUpdate from '../components/Blog/BlogUpdate'
import Discount from '../components/Discount/Discount'
import Experiance_2 from '../components/Experiance/Experiance_2'
import Header_2 from '../components/Header/Header_2'
import Hero_2 from '../components/Hero/Hero_2'
import LatestProduct from '../components/Product/LatestProduct'
import NewProduct from '../components/Product/NewProduct'
import Product from '../components/Product/Product'
import Testimonial from '../components/Testimonial/Testimonial'
import Tranding from '../components/Tranding/Tranding'
import VideoPlay from '../components/VedioPlay/VideoPlay'

function Home_2() {
  return (
      <div>
          <Header_2 />
          <Hero_2 />
          <NewProduct />
          <Experiance_2 />
          <Product />
          <Discount />
          <LatestProduct />
          <Tranding />
          <Testimonial />
          <BlogUpdate/>
          <VideoPlay />
          

      </div>
  )
}

export default Home_2