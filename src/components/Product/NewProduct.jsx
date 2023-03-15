import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NewProduct() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section id="newProduct" class="section">
        <div className="new-product-section">
          {/* <!-- Section Top Title --> */}

          <div className="container">
            <div className="section-top-box stp-left">
              <h2 className="st-title">New Product</h2>
              <p className="st-desc">Browse the collection of our product</p>
            </div>
            <Slider {...settings}>
              <div className="">
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/product-1.jpg" alt="" />
                      </a>

                      <div className="single-prod-icon">
                        <ul className="prod-icon-collection flex-all">
                          <li>
                            {' '}
                            <a href="#" className="addtowishlist">
                              <p className="addToCart">
                                <i className="fas fa-shopping-bag sp-icon"></i>
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="addtowishlist">
                              <p className="wishlist">
                                <i className="far fa-heart sp-icon"></i>
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="shop-inner.html">
                              <p className="eye">
                                <i className="fas fa-eye sp-icon"></i>
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <button className="btn btn-block add-to-cart">
                        <span>
                          <i className="fas fa-shopping-bag"></i>
                        </span>
                        add to cart
                      </button>
                    </div>

                    <div className="single-prod-bottom text-center mt-3">
                      <a href="shop-inner.html" className="product-title">
                        Fairness cream
                      </a>
                      <div className="product-ratings">
                        <ul className="ratings-collection flex-all">
                          <li>
                            <p>
                              <i className="fas fa-star"></i>
                            </p>
                          </li>
                          <li>
                            <p>
                              <i className="fas fa-star"></i>
                            </p>
                          </li>
                          <li>
                            <p>
                              <i className="fas fa-star"></i>
                            </p>
                          </li>
                          <li>
                            <p>
                              <i className="fas fa-star"></i>
                            </p>
                          </li>
                          <li>
                            <p>
                              <i className="fas fa-star"></i>
                            </p>
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
          <div className="">
            <div className="single-product">
              <div className="sp-box">
                <div className="spb-thumb">
                  <a href="shop-inner.html" className="sp-thumbnail-url">
                    <img  src="assets/img/product-2.jpg" alt=""/>
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
          <div className="">
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
          <div className="">
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
          <div className="">
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
              </Slider>
          </div>
      </div>
     </section >
       
  </div>
  )
}

export default NewProduct


