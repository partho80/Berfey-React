import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Header() {
  return (
      <div>
        <div id="header-upper">
    <div className="header-upper-sec">
      <div className="container">
        <div className="hu-content-wrapper flex-between">
          <div className="huc-left">
            <ul className="huc-collection flex-align">
              <li className="mr-4">
                <p><span><i className="fal fa-map-marker-alt"></i></span> 255 Sheet,Tow tailors, NY</p>
              </li>
              <li>
                <p><span><i className="fal fa-phone-alt"></i></span> +00 8855443377</p>
              </li>
            </ul>
          </div>
          <div className="huc-right">
            <ul className="huc-collection flex-align">
              <li className="mr-4">
                <p><Link to="/Wishlist">Wishlist</Link></p>
              </li>
              <li className="">
                <p><a href="#">Checkout</a></p>
              </li>
            </ul>
          </div>
          <div className="huc-mobile mobile-show">
            <ul className="huc-collection flex-align">
              <li className="mr-2">
                <button className="cart-button" data-toggle="modal" data-target="#searchModal"><i
                    className="fa-solid fa-magnifying-glass"></i></button>
              </li>
              <li>
                <button className="cart-button" data-toggle="modal" data-target="#cartModal"><i
                    className="fa-solid fa-bag-shopping"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <header id="header" className="header">
    <div className="container">
      <div className="row">
        <div className="header-menu-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light flex-between">
            <a href="index.html" className="header-menu-logo navbar-brand">
              <img src="assets/img/logo.png" alt="Berfey logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse header-menu hm-collections" id="navbarSupportedContent">

                  {/* <!-- Left nav --> */}     

                  <ul className="nav navbar-nav ml-auto hm-collections">
                    <li className="nav-item dropdown">
                      <NavLink className="nav-link dropdown-toggle " to="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" activeclassname="active" >
                        Home
                      </NavLink>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item active" to="/">Home 1</Link></li>
                        <li><Link className="dropdown-item" to="/Home_2">Home 2</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to="/AboutUs">About Us</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to="/Shop">Shop</NavLink></li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Pages
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                        <li><Link className="dropdown-item" to="/Blog">Blog</Link></li>
                        <li><Link className="dropdown-item" to="/ProductDetails">ProductDetails</Link></li>
                        <li><Link className="dropdown-item" to="/BlogDetails">Blog Details</Link></li>
                        <li><Link className="dropdown-item" to="/Wishlist">Wishlist</Link></li>
                        <li><Link className="dropdown-item" to="/Cart">Cart</Link></li>
                        <li><Link className="dropdown-item" to="/Error">Error Page</Link></li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">More...</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Sub Menu 1</a></li>
                            <li><a className="dropdown-item" href="#">Sub Menu 2</a></li>
                            <li><a className="dropdown-item" href="#">Sub Menu 3</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Contact" activeclassname="active" >Contact</NavLink></li>
                    <li className="nav-item mobile-hide">
                      <div className="header-right-box mobile-hide">
                        <div className="header-search-btn">
                          <div className="srch_wrpr">
                            <input type="checkbox" className="srch-checkbox" />
                            <div className="srch_sb_cnt">
                              <input type="text" name="text_bar" className="sech_txt_inpt" placeholder="Type to search..." />
                              <button className="srch_btn">
                                <i className="fa fa-search" aria-hidden="true"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="header-cart-btn">
                          <button className="cart-button" data-toggle="modal" data-target="#cartModal"><i
                            className="fa-solid fa-bag-shopping"></i></button>
                        </div>
                      </div>
                    </li>
                  </ul>    
              </div>
          </nav>
        </div>
      </div>
    </div>
  </header> 
    </div>
  )
}

export default Header