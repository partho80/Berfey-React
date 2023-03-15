import React from 'react'
import Slider from 'react-slick';


function ProductDetailsBody(){
//  const settings = {
//       speed: 600,
//       arrows: true,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//   };

  return (
      <div>
          <section id="shop-inner-product" className="section">
    <div className="shop-inner-product-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-5">
            <div className="elivate-zoom-section">
              <img id="elivateMain" className="elivate-lg-img" src="assets/img/product-sm-1.jpg"
                data-zoom-image="assets/img/product-lg-1.jpg" alt="" />
           {/* <Slider {...settings}>
              <div className="mt-4 elivate-slider" id="thumb-img">
                <a href="#" data-image="assets/img/product-sm-1.jpg" data-zoom-image="assets/img/product-lg-1.jpg">
                  <img id="elivateMain2" src="assets/img/product-lg-1.jpg" alt="" />
                </a>
                <a href="#" data-image="assets/img/product-sm-2.jpg" data-zoom-image="assets/img/product-lg-2.jpg">
                  <img id="elivateMain3" src="assets/img/product-lg-2.jpg" alt="" />
                </a>
                <a href="#" data-image="assets/img/product-sm-3.jpg" data-zoom-image="assets/img/product-lg-3.jpg">
                  <img id="elivateMain4" src="assets/img/product-lg-3.jpg" alt="" />
                </a>
                <a href="#" data-image="assets/img/product-sm-4.jpg" data-zoom-image="assets/img/product-lg-4.jpg">
                  <img id="elivateMain5" src="assets/img/product-lg-4.jpg" alt="" />
                </a>
                <a href="#" data-image="assets/img/product-sm-5.jpg" data-zoom-image="assets/img/product-lg-5.jpg">
                  <img id="elivateMain6" src="assets/img/product-lg-5.jpg" alt="" />
                </a>
              </div>
          </Slider> */}
            </div>
            
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="shop-inner-desc-top mb-4">
              <h2 className="shop-inner-title">Mashmallow Top</h2>
              <h4 className="price">$99.00</h4>
              <div className="product-ratings">
                <ul className="ratings-collection flex-all">
                  <li>
                    <p><i className="fas fa-star"></i></p>
                  </li>
                  <li>
                    <p><i className="fas fa-star"></i></p>
                  </li>
                  <li>
                    <p><i className="fas fa-star"></i></p>
                  </li>
                  <li>
                    <p><i className="fas fa-star"></i></p>
                  </li>
                  <li>
                    <p><i className="fas fa-star"></i></p>
                  </li>
                </ul>
                <span>(03 Customer Review) </span>
              </div>
            </div>
            <hr/>

            <div className="shop-inner-desc">
              <ul className="desc-collection">
                <li>
                  <p>In Stock</p>
                </li>
                <li>
                  <p>Free delivery available*</p>
                </li>
                <li>
                  <p>Sale 10% Off Use Code : Dosbron20</p>
                </li>
              </ul>
              <p className="short-desc">Saepe in venir cu quo, mel et epics de salu tatus si que, has eu graecis aco moda.
                Vix ei mucius iriure
                dolors umin, mel ad nobis </p>
              <a href="wishlist.html"><span><i className="far fa-heart"></i></span> ADD TO WISHLIST</a>

              {/* <!-- Increment-Decrement Start --> */}
              <div className="quantity-wrapper py-4">
                <div className="product-quantity mr-5">
                  <p className="input-number-decrement">-</p>
                  <input id="demoInput2" className="demoInput input-number" type="number" min="1" max="100" value="1"/>
                  <p className="input-number-increment">+</p>
                </div>
              </div>
              {/* <!-- Increment-Decrement End --> */}

              <ul className="desc-collection">
                <li>
                  <p>SKU: USR4JK74</p>
                </li>
                <li>
                  <p>Category: Skincare</p>
                </li>
                <li>
                  <p>Tags: care, cosmetics, gloss</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Shop inner Product Section End -->

  <!-- Tabs Section Start --> */}
  <div id="tabs">
    <div className="tabs-section">
      <div className="container">
        <div className="card mt-3 tab-card">
          <div className="card-header tab-card-header">
            <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="one-tab" data-toggle="tab" href="#one" role="tab"
                  aria-selected="true">DESCRIPTION</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab"
                  aria-selected="false">ADDITIONAL INFORMATION</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab"
                  aria-selected="false">REVIEWS (0)</a>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's
                content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique eos odit velit
                optio
                molestias tempora libero sed maiores veritatis.</p>
            </div>
            <div className="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's
                content. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quidem repellat expedita
                quas,
                iste quisquam? </p>
            </div>
            <div className="tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's
                content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, autem? </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Tabs Section End -->

  <!-- Similar Product Section Start --> */}
  <div id="similarProduct" className="section">
    <div className="similar-product-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
            <div className="single-product">
              <div className="sp-box">
                <div className="spb-thumb">
                  <a href="shop-inner.html" className="sp-thumbnail-url">
                    <img src="assets/img/product-1.jpg" alt=""/>
                  </a>

                  <div className="single-prod-icon">
                    <ul className="prod-icon-collection flex-all">
                      <li> <a href="#" className="addtowishlist">
                          <p className="addToCart"><i className="fas fa-shopping-bag sp-icon"></i></p>
                        </a></li>
                      <li><a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart sp-icon"></i></p>
                        </a></li>
                      <li><a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye sp-icon"></i></p>
                        </a></li>
                    </ul>
                  </div>
                  <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                    cart</button>
                </div>

                <div className="single-prod-bottom text-center mt-3">
                  <a href="shop-inner.html" className="product-title">Fairness cream</a>
                  <div className="product-ratings">
                    <ul className="ratings-collection flex-all">
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                    </ul>
                  </div>
                  <div className="product-price">
                    <p className="regular-price">$70.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
            <div className="single-product">
              <div className="sp-box">
                <div className="spb-thumb">
                  <a href="shop-inner.html" className="sp-thumbnail-url">
                    <img src="assets/img/product-2.jpg" alt=""/>
                  </a>

                  <div className="single-prod-icon">
                    <ul className="prod-icon-collection flex-all">
                      <li> <a href="#" className="addtowishlist">
                          <p className="addToCart"><i className="fas fa-shopping-bag sp-icon"></i></p>
                        </a></li>
                      <li><a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart sp-icon"></i></p>
                        </a></li>
                      <li><a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye sp-icon"></i></p>
                        </a></li>
                    </ul>
                  </div>
                  <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                    cart</button>
                </div>

                <div className="single-prod-bottom text-center mt-3">
                  <a href="shop-inner.html" className="product-title">Green Tea</a>
                  <div className="product-ratings">
                    <ul className="ratings-collection flex-all">
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                    </ul>
                  </div>
                  <div className="product-price">
                    <p className="regular-price">$120.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
            <div className="single-product">
              <div className="sp-box">
                <div className="spb-thumb">
                  <a href="shop-inner.html" className="sp-thumbnail-url">
                    <img src="assets/img/product-3.jpg" alt=""/>
                  </a>

                  <div className="single-prod-icon">
                    <ul className="prod-icon-collection flex-all">
                      <li> <a href="#" className="addtowishlist">
                          <p className="addToCart"><i className="fas fa-shopping-bag sp-icon"></i></p>
                        </a></li>
                      <li><a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart sp-icon"></i></p>
                        </a></li>
                      <li><a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye sp-icon"></i></p>
                        </a></li>
                    </ul>
                  </div>
                  <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                    cart</button>
                </div>

                <div className="single-prod-bottom text-center mt-3">
                  <a href="shop-inner.html" className="product-title">Peripharal Ink</a>
                  <div className="product-ratings">
                    <ul className="ratings-collection flex-all">
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                    </ul>
                  </div>
                  <div className="product-price">
                    <p className="regular-price">$90.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
            <div className="single-product">
              <div className="sp-box">
                <div className="spb-thumb">
                  <a href="shop-inner.html" className="sp-thumbnail-url">
                    <img src="assets/img/product-1.jpg" alt=""/>
                  </a>

                  <div className="single-prod-icon">
                    <ul className="prod-icon-collection flex-all">
                      <li> <a href="#" className="addtowishlist">
                          <p className="addToCart"><i className="fas fa-shopping-bag sp-icon"></i></p>
                        </a></li>
                      <li><a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart sp-icon"></i></p>
                        </a></li>
                      <li><a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye sp-icon"></i></p>
                        </a></li>
                    </ul>
                  </div>
                  <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                    cart</button>
                </div>

                <div className="single-prod-bottom text-center mt-3">
                  <a href="shop-inner.html" className="product-title">Peripharal Ink</a>
                  <div className="product-ratings">
                    <ul className="ratings-collection flex-all">
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                      <li>
                        <p><i className="fas fa-star"></i></p>
                      </li>
                    </ul>
                  </div>
                  <div className="product-price">
                    <p className="regular-price">$90.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ProductDetailsBody