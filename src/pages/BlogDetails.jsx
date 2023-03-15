import React from 'react'
import BlogDetailsBody from '../components/BlogDetails/BlogDetailsBody'
import BlogDetailsHero from '../components/BlogDetails/BlogDetailsHero'
import Header from '../components/Header/Header'

function BlogDetails() {
  return (
      <div>
          <Header />
          <BlogDetailsHero />
          <BlogDetailsBody/>
    </div>
  )
}

export default BlogDetails