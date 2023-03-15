import React from 'react'

function ShopBody() {
  return (
      <div>
           <section id="shop-page" className="section">
    <div className="container">
      <div className="row">
        {/* <!-- shop-sidebar Start --> */}
        <div className="col-lg-4 col-md-12 mb-5 shop-sidebar-wrapper">
          <div className="product-search mb-3">
            <h3 className="sidebar-title mb-4">Product Search</h3>
            <hr className="hr-span"/>
            <div className="search-box">
              <input type="text" placeholder="Search..."/><span><i className="fas fa-search"></i></span>
            </div>
          </div>

          {/* <!-- Category Section Start --> */}
          <div className="categories-wrapper mb-5">
            <h3 className="sidebar-title mb-4">Product Category</h3>
            <hr className="hr-span"/>
            <ul className="categories-collection">
              <li><a href="#">Bath & Body</a></li>
              <li><a href="#">Hair Care</a></li>
              <li><a href="#">Make Up</a></li>
              <li><a href="#">Health Care</a></li>
              <li><a href="#">Skin Care</a></li>
              <li><a href="#">Tennis</a></li>
              <li><a href="#">Styling Products</a></li>
            </ul>
          </div>

          <hr/>
          {/* <!-- Category Section End -->

          <!-- filter start --> */}
          <div className="filter-by-price mb-4">
            <div className="price-range-block">

              <h3 className="sidebar-title mb-4">Filter By Price</h3>
              <hr className="hr-span"/>

              <div id="slider-range" className="price-filter-range"></div>

              <div className="filter-box-wrapper">
                <div className="filter-text">
                  <p>Filter</p>
                </div>
                <div className="filter-input">
                  <input type="number" min="0" max="9900"  onInput={() => {validity.valid||(value='0')}}  id="min_price"
                    className="price-range-field" />
                  <input type="number" min= "0" max="10000"  onInput={() => {validity.valid||(value='10000')}}  id="max_price"
                    className="price-range-field" />
                </div>
              </div>

              <a href="#" className="btn btn-custom btn-custom-secondary btn-block" id="price-range-submit">Search</a>

              <div id="searchResults" className="search-results-block"></div>

            </div>
          </div>
          {/* <!-- filter end -->

          <!-- Color Section Start --> */}
          <div className="categories-wrapper mb-5">
            <h3 className="sidebar-title mb-4">By Colors</h3>
            <hr className="hr-span"/>
            <ul className="color-collection">
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>

            </ul>
          </div>
          {/* <!-- Color Section End -->

          <!-- Brands Section Start --> */}
          <div className="brands-wrapper mb-5">
            <h3 className="sidebar-title mb-4">By Brands</h3>
            <hr className="hr-span"/>
            <ul className="brands-collection">
              <li>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="brand-1"/>
                  <label className="form-check-label" form="brand-1">Red</label>
                </div>
              </li>
              <li>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="brand-2"/>
                  <label className="form-check-label" form="brand-2">Yellow</label>
                </div>
              </li>
              <li>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="brand-3"/>
                  <label className="form-check-label" form="brand-3">Pink</label>
                </div>
              </li>
              <li>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="brand-4"/>
                  <label className="form-check-label" form="brand-4">Orange</label>
                </div>
              </li>
              <li>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="brand-5"/>
                  <label className="form-check-label" form="brand-5">Black</label>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- Brands Section End -->

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
          {/* <!-- Instagram Sidebar End --> */}

        </div>
        {/* <!-- shop-sidebar End --> */}

        {/* <!-- Shop-Product Start --> */}
        <div className="col-lg-8 col-md-12 shop-right-side-wrapper">
          <div className="shop-section">
            <div className="shop-top">
              <div className="row">
                <div className="col-md-8">
                  <div className="st-left">
                    <div className="available-search-result">
                      <p>Showing 1–10 of 47 results</p>
                    </div>
                    <div className="grid-icon-wrapper">
                      <a href="#" className="grid-icon without-sidebar"><i className="fas fa-th"></i></a>
                      <a href="#" className="grid-icon with-sidebar active"><i className="fas fa-border-all"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-sort">
                    <div className="form-group sorting-wrapper">
                      <select className="form-control" id="product-sorting">
                        <option value="default">Default Sorting</option>
                        <option value="New">New</option>
                        <option value="Low to high">Low to high</option>
                        <option value="High to low">High to low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrapper">
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
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
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
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
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
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
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/product-4.jpg" alt=""/>
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
                      <a href="shop-inner.html" className="product-title">Skin Silver Serum</a>
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
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/product-5.jpg" alt=""/>
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
                      <a href="shop-inner.html" className="product-title">Night Serum</a>
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
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/product-6.jpg" alt=""/>
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
                      <a href="shop-inner.html" className="product-title">Cream Oil</a>
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
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/product-7.jpg" alt=""/>
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
                      <a href="shop-inner.html" className="product-title">Skin Cleaner</a>
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
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/product-8.jpg" alt=""/>
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
                      <a href="shop-inner.html" className="product-title">Skin Mask</a>
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
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/product-9.jpg" alt=""/>
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
                      <a href="shop-inner.html" className="product-title">Skin Care</a>
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
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
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
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
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
              <div className="prod-dynamic-cls col-md-6 col-sm-6 mb-5">
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
            </div>
          </div>
        </div>
        {/* <!-- Shop-Product End --> */}
      </div>
    </div>
  </section>
    </div>
  )
}

export default ShopBody