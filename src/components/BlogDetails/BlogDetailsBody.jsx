import React from 'react'

function BlogDetailsBody() {
  return (
      <div>
          <section id="blog-details" className="section">
    <div className="blog-details-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 mb-5">
            {/* <!-- Search Start --> */}
            <div className="product-search mb-5">
              <h3 className="sidebar-title mb-4">Blog Search</h3>
              <hr className="hr-span"/>
              <div className="search-box">
                <input type="text" placeholder="Search Here"/><span><i className="fas fa-search"></i></span>
              </div>
            </div>
            {/* <!-- Search End --> */}
            <div className="blog-wrapper">
              <div className="single-blog">
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
                    <p className="mb-2">Ut tortor pretium viverra suspendisse potenti nullam. Rhoncus
                      est pellentesque elit ullamcorper dignissim. Tristique nulla aliquet enim
                      tortor at auctor urna. Lobortis scelerisque fermentum dui faucibus in.
                      Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
                      Convallis convallis tellus id interdum velit laoreet id donec ultrices. Quis
                      ipsum suspendisse ultrices gravida dictum fusce ut. Quam quisque id diam vel
                      quam elementum pulvinar etiam non. <br/> <br/> Adipiscing vitae proin sagittis
                      nisl rhoncus mattis rhoncus urna neque. Risus pretium quam vulputate
                      dignissim suspendisse in. Nunc eget lorem dolor sed viverra ipsum nunc
                      aliquet. Morbi leo urna molestie at elementum eu facilisis sed. Tristique
                      nulla aliquet enim tortor at. Aliquet eget sit amet tellus cras adipiscing
                      enim eu. Tortor at auctor urna nunc id cursus metus. Viverra orci sagittis
                      eu volutpat odio facilisis. Sodales neque sodales ut etiam sit.</p>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <img className="bd-sm-img" src="assets/img/bd-sm-1.jpg" alt=""/>
                      </div>
                      <div className="col-md-6">
                        <img className="bd-sm-img" src="assets/img/bd-sm-2.jpg" alt=""/>
                      </div>
                    </div>
                    <p className="mt-2">Eu turpis egestas pretium aenean. Vel orci porta non pulvinar
                      neque. Et ligula ullamcorper that uada proin. Fermentum odio eu feugiat
                      pretium nibh ipsum. Netus et malesuada fames ac. Ac auctor augue mauris
                      augue neque gravida in.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bd-ts-wrapper flex-between">
              <div className="bdt-content flex-all">
                <p>Tags:</p>
                <ul className="bdt-collection flex-all">
                  <li><a href="shop.html">Beauty</a></li>
                  <li><a href="shop.html">Maroon</a></li>
                  <li><a href="shop.html">Art</a></li>
                </ul>
              </div>
              {/* <!-- Blog Share Section Start -->/ */}
              <div className="blog-share">
                <h3>Share on:</h3>
                <div className="categories-wrapper">
                  <ul className="share-collection">
                    <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- Blog Share Section End --> */}
            </div>
            <hr/>

            {/* <!-- Comment Section Start --> */}
            <section id="comment">
              <div className="bd-title mb-4">
                <p>02 Comment </p>
              </div>
              <div className="comment-wrapper">
                <div className="single-comment">
                  <div className="comment-content">
                    <div className="writter-img-box mr-4">
                      <img className="writter-img" src="assets/img/author.jpg" alt=""/>
                    </div>
                    <div className="comment-box mb-4">
                      <h6>Patricia Guerrero</h6>
                      <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
                        leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                      <a href="#" className="read-more-btn mt-3"><span><i
                            className="fas fa-reply d-inline-block mr-2"></i></span>
                        reply</a>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-11 offset-md-1">
                      <div className="single-comment ml-4">
                        <div className="comment-content">
                          <div className="writter-img-box mr-4">
                            <img className="writter-img" src="assets/img/comment-writter.jpg" alt=""/>
                          </div>
                          <div className="comment-box mb-4">
                            <h6>Melanie Burke</h6>
                            <p>Neque vitae tempus quam pellentesque. Pellentesque massa
                              placerat duis ultricies.</p>
                            <a href="#" className="read-more-btn mt-3"><span><i
                                  className="fas fa-reply d-inline-block mr-2"></i></span>
                              reply</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-comment">
                  <div className="comment-content">
                    <div className="writter-img-box mr-4">
                      <img className="writter-img" src="assets/img/author-2.jpg" alt=""/>
                    </div>
                    <div className="comment-box mb-4">
                      <h6>April George</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
                        doloremque? Ullam culpa,
                        doloribus repellat ducimus autem eum, ex sed reiciendis cupiditate error
                        cum accusantium
                        quidem!</p>
                      <a href="#" className="read-more-btn mt-3"><span><i
                            className="fas fa-reply d-inline-block mr-2"></i></span>
                        reply</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Comment Section End -->

            <!-- Post Section Start --> */}
            <div id="post">
              <div className="bd-title mb-4">
                <p>Leave A Comment</p>
              </div>
              <div className="post-section">
                <form id="post-form" className="post-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="inputFname" placeholder="Your First Name"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="inputLName" placeholder="Your Last Name"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" className="form-control" id="inputEmail1" placeholder="Your Email"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="tel" className="form-control" id="inputPhone" placeholder="Phone (Optional)"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea className="form-control" id="inputMessage"
                          placeholder="Write your message here..."></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-custom btn-custom-primary">Send
                    Message</button>
                </form>
              </div>
            </div>
            {/* <!-- Post Section End --> */}
          </div>
          <div className="col-lg-4 col-md-12">
            {/* <!-- Search Start --> */}
            <div className="product-search mb-3 mobile-hide">
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
    </div>
  )
}

export default BlogDetailsBody