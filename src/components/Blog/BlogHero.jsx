import React from 'react'

function BlogHero() {
  return (
    <div>
      <div className="top-banner" style={{ backgroundImage: `url('assets/img/blog-banner.jpg')` }}>
    <div className="container">
      <div className="row">
        <div className="banner-title">
          <h2>Blog</h2>
          <div className="banner-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="overlay"></div>
  </div>
    </div>
  )
}

export default BlogHero