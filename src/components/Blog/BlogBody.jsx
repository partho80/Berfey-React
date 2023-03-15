import React from 'react'

function BlogBody() {
  return (
      <div>
          
  <section id="blog" className="section">
    <div className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="product-search blog-top-search mb-5">
              <label>Blog Search</label>
              <input type="text" placeholder="Search..."/><span><i className="fas fa-search"></i></span>
            </div>
            <div className="blog-wrapper">
              <div className="single-blog mb-5">
                <div className="blog-img">
                  <img src="assets/img/blog-1.jpg" alt=""/>
                </div>
                <div className="single-blog-body">
                  <div className="blog-spacific-cat">
                    <p>Skin Care</p>
                  </div>
                  <div className="blog-title">
                    <h3>Amazing natural beauty hacks</h3>
                  </div>
                  <div className="blog-watch-wrapper">
                    <p className="blog-watch"><span><i className="fa-solid fa-eye"></i></span> 2560</p>
                    <p className="blog-comnt"><span><i className="fa-solid fa-comment"></i></span> 20
                      Comment</p>
                  </div>

                  <div className="blog-details">
                    <p>Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in
                      mei. Mei an pericula euripidis. hinc partem ei estos ei nisl grae cis.</p>
                  </div>
                  <a href="blog-details.html" className="read-more-btn mt-3">read more</a>
                </div>
              </div>
              <div className="single-blog mb-5">
                <div className="blog-img">
                  <img src="assets/img/blog-2.jpg" alt=""/>
                </div>
                <div className="single-blog-body">
                  <div className="blog-spacific-cat">
                    <p>Hair Care</p>
                  </div>
                  <div className="blog-title">
                    <h3>The Guide to essential oil bathtime</h3>
                  </div>
                  <div className="blog-watch-wrapper">
                    <p className="blog-watch"><span><i className="fa-solid fa-eye"></i></span> 2560</p>
                    <p className="blog-comnt"><span><i className="fa-solid fa-comment"></i></span> 20
                      Comment</p>
                  </div>

                  <div className="blog-details">
                    <p>Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in
                      mei. Mei an pericula euripidis. hinc partem ei estos ei nisl grae cis.</p>
                  </div>
                  <a href="blog-details.html" className="read-more-btn mt-3">read more</a>
                </div>
              </div>
              <div className="single-blog mb-5">
                <div className="blog-img">
                  <img src="assets/img/blog-3.jpg" alt=""/>
                </div>
                <div className="single-blog-body">
                  <div className="blog-spacific-cat">
                    <p>Health Care</p>
                  </div>
                  <div className="blog-title">
                    <h3>Our finest cosmetics – raw is organic</h3>
                  </div>
                  <div className="blog-watch-wrapper">
                    <p className="blog-watch"><span><i className="fa-solid fa-eye"></i></span> 2560</p>
                    <p className="blog-comnt"><span><i className="fa-solid fa-comment"></i></span> 20
                      Comment</p>
                  </div>

                  <div className="blog-details">
                    <p>Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in
                      mei. Mei an pericula euripidis. hinc partem ei estos ei nisl grae cis.</p>
                  </div>
                  <a href="blog-details.html" className="read-more-btn mt-3">read more</a>
                </div>
              </div>
              <div className="single-blog mb-5">
                <div className="blog-img">
                  <img src="assets/img/blog-4.jpg" alt=""/>
                </div>
                <div className="single-blog-body">
                  <div className="blog-spacific-cat">
                    <p>Health Care</p>
                  </div>
                  <div className="blog-title">
                    <h3>Natural products recommended for you</h3>
                  </div>
                  <div className="blog-watch-wrapper">
                    <p className="blog-watch"><span><i className="fa-solid fa-eye"></i></span> 2560</p>
                    <p className="blog-comnt"><span><i className="fa-solid fa-comment"></i></span> 20
                      Comment</p>
                  </div>

                  <div className="blog-details">
                    <p>Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in
                      mei. Mei an pericula euripidis. hinc partem ei estos ei nisl grae cis.</p>
                  </div>
                  <a href="blog-details.html" className="read-more-btn mt-3">read more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            {/* <!-- Search Start --> */}
            <div className="product-search mb-3">
              <h3 className="sidebar-title mb-4">Blog Search</h3>
              <hr className="hr-span"/>
              <div className="search-box">
                <input type="text" placeholder="Search Here"/><span><i className="fas fa-search"></i></span>
              </div>
            </div>
            {/* <!-- Search End -->

            <!-- Recent Post Start --> */}
            <div className="recent-post-wrapper mb-5">
              <h3 className="sidebar-title mb-4">Recent Post</h3>
              <hr className="hr-span"/>
              <ul className="recent-post-collection">
                <li className="d-flex align-items-center mb-3">
                  <img src="assets/img/blog-1.jpg" alt="" className="rp-sm-img mr-3"/>
                  <div className="rp-text d-inline-block">
                    <h4 className="rp-title">Tincidunt vitae sempr quis lectus tincidunt</h4>
                    <a href="blog-details.html" className="rp-btn">Read more</a>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <img src="assets/img/blog-2.jpg" alt="" className="rp-sm-img mr-3"/>
                  <div className="rp-text d-inline-block">
                    <h4 className="rp-title">Pretium vive suendisse potenti nullam</h4>
                    <a href="blog-details.html" className="rp-btn">Read more</a>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <img src="assets/img/blog-4.jpg" alt="" className="rp-sm-img mr-3"/>
                  <div className="rp-text d-inline-block">
                    <h4 className="rp-title">Mauris augue neque grada in fermentum</h4>
                    <a href="blog-details.html" className="rp-btn">Read more</a>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- Recent Post End -->

            <!-- Category Section Start --> */}
            <div className="categories-wrapper mb-5">
              <h3 className="sidebar-title mb-4">Categories</h3>
              <hr className="hr-span"/>
              <ul className="categories-collection">
                <li><a href="shop.html">Bath & Body <span>(20)</span> </a></li>
                <li><a href="shop.html">Hair Care <span>(15)</span> </a></li>
                <li><a href="shop.html">Make Up <span>(17)</span> </a></li>
                <li><a href="shop.html">Health Care <span>(10)</span> </a></li>
                <li><a href="shop.html">Skin Care <span>(13)</span> </a></li>
                <li><a href="shop.html">Art & Design <span>(18)</span> </a></li>
              </ul>
            </div>
            {/* <!-- Category Section End -->


            <!-- Tags Section Start --> */}
            <div className="tags-wrapper mb-5">
              <h3 className="sidebar-title mb-4">Tags</h3>
              <hr className="hr-span"/>
              <ul className="tags-collection blog-tag-colloection">
                <li><a href="shop.html" className="tags-choice">Beauty</a></li>
                <li><a href="shop.html" className="tags-choice">Handmade</a></li>
                <li><a href="shop.html" className="tags-choice">Plantbased</a></li>
                <li><a href="shop.html" className="tags-choice">Magenta </a></li>
                <li><a href="shop.html" className="tags-choice">Dimoned </a></li>
                <li><a href="shop.html" className="tags-choice">Maroon</a></li>
              </ul>
            </div>
            {/* <!-- Tags Section End -->

            <!-- Instagram Sidebar Start --> */}
            <div className="instagram-sidebar-wrapper">
              <h3 className="sidebar-title mb-4">Instagram</h3>
              <hr className="hr-span"/>
              <div className="row">
                <div className="col-md-6">
                  <div className="is-single">
                    <a href="assets/img/sidebar-insta-1.jpg" className="photo-click">
                      <img src="assets/img/sidebar-insta-1.jpg" alt=""/>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="is-single">
                    <a href="assets/img/sidebar-insta-2.jpg" className="photo-click">
                      <img src="assets/img/sidebar-insta-2.jpg" alt=""/>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="is-single">
                    <a href="assets/img/sidebar-insta-3.jpg" className="photo-click">
                      <img src="assets/img/sidebar-insta-3.jpg" alt=""/>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="is-single">
                    <a href="assets/img/sidebar-insta-4.jpg" className="photo-click">
                      <img src="assets/img/sidebar-insta-4.jpg" alt=""/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Instagram Sidebar End -->

            <!-- Social Section Start --> */}
            <div className="categories-wrapper mb-5">
              <h3 className="sidebar-title mb-4">Follow Us</h3>
              <hr className="hr-span"/>
              <ul className="footer-social social-collection">
                <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            {/* <!-- Social Section End --> */}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Pagination Section Start --> */}
  <div className="pagination-section">
    <div className="container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item d-none"><a className="page-link" href="#"><span><i className="fas fa-arrow-left"></i></span>
              Previous</a></li>
          <li className="page-item"><a className="page-link active" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#"><span><i className="fas fa-arrow-right"></i></span></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  {/* <!-- Pagination Section End --> */}
    </div>
  )
}

export default BlogBody