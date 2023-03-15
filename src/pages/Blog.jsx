import React from 'react'
import BlogBody from '../components/Blog/BlogBody'
import BlogHero from '../components/Blog/BlogHero'
import Header from '../components/Header/Header'

function Blog() {
  return (
      <div>
          <Header />
          <BlogHero />
          <BlogBody/>
    </div>
  )
}

export default Blog