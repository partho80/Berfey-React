import React from 'react'

function BlogDetailsHero() {
  return (
      <div>
          <div class="top-banner" style={{ backgroundImage: `url('assets/img/blog-banner.jpg')` }}>
    <div class="container">
      <div class="row">
        <div class="banner-title">
          <h2>Blog Details</h2>
          <div class="banner-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Blog Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay"></div>
  </div>
    </div>
  )
}

export default BlogDetailsHero