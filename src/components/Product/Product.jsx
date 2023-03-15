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
      <section id="productCategory" className="section">
        <div className="product-category-section">
          {/* <!-- Section Top Title --> */}

          <div className="container">
            <div className="section-top-box text-center">
            <h2 className="st-title">Product Category</h2>
            <p className="st-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, maiores asperiores.?</p>
          </div>
            <Slider {...settings}>
              <div className="">
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/product-1.jpg" alt="" />
                      </a>

                      <div className="">
                        <ul className="">
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

                  <div className="">
                    <ul className="">
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

                  <div className="">
                    <ul className="">
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

                  <div className="">
                    <ul className="">
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

                  <div className="">
                    <ul className="">
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


