import React from 'react'

function Footer() {
  return (
    <div>
       <footer id="footer" className="section">
    <div className="footer-section">
      <div className="footer-wrapper">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="mb-4">
                <a href="index.html"><img className="main-logo" src="assets/img/footer-logo.png" alt=""/></a>
              </div>
              <p className="footer-desc mb-4">We are a team of designers and developers that create high quality Magento,
                Prestashop, Opencart.
              </p>
              <ul className="footer-social">
                <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 ">
              <h5 className="footer-top-title mb-4">Information</h5>
              <ul className="footer-item-collection">
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 ">
              <h5 className="footer-top-title mb-4">SUPPORT</h5>
              <ul className="footer-item-collection">
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Community Guidelines</a></li>
                <li><a href="#">Advertise Online</a></li>
                <li><a href="#">Privacy Notice</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h5 className="footer-top-title mb-4">Contact</h5>
              <ul className="footer-item-collection">
                <li><a href="#">(+00) 123 456 789</a></li>
                <li><a href="#">Infor@yourmail.com</a></li>
                <li><a href="#">www.yourdomain.com</a></li>
                <li><a href="#">255 Sheet, Your City Name</a></li>
                <li>
                  <div className="footer-payment">
                    <ul className="payment-collection">
                      <li>
                        <a href="#">
                          <img src="assets/img/payment1.jpg" alt=""/>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/payment2.jpg" alt=""/>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/payment3.jpg" alt=""/>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/payment4.jpg" alt=""/>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/payment5.jpg" alt=""/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr className="hr-mod"/>
          <div className="row">
            <div className="col-md-12 text-center py-2">
              <p className="copyright"> &copy;All Rights Reserved 2022 @Luminouslabs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  {/* <!-- Footer Section End --> */}

  {/* <!-- scroll top start --> */}
  <a className="material-scrolltop">
    <i className="fas fa-arrow-circle-up"></i>
  </a>
  {/* <!-- scroll top end --> */}

  {/* <!-- Modal --> */}
  <div className="modal fade" id="cartModal" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {/* <!-- Cart Table Start --> */}
          <div id="cart-Table">
            <div className="container">
              <div className="cart-table-section mb-5">
                <table id="cartTable" className="cartTable">
                  <thead>
                    <tr>
                      <th scope="col" className="cth-first"></th>
                      <th scope="col" className="cth-second">Product</th>
                      <th scope="col" className="cth-third">Price</th>
                      <th scope="col" className="cth-fourth">Quantity</th>
                      <th scope="col" className="cth-fifth">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label=""><a href="#"><i className="fa fa-times" aria-hidden="true"></i></a></td>
                      <td data-label="Product"><img className="cart-product-img" src="assets/img/product.jpg" alt=""/></td>
                      <td data-label="Price">$320.00</td>
                      <td data-label="Quantity">
                        {/* <!-- Increment-Decrement Start --> */}
                        <div className="quantity-wrapper">
                          <div className="product-quantity">
                            <p className="input-number-decrement">-</p>
                            <input id="demoInput1" className="demoInput input-number" type="number" min="1" max="100"
                              />
                            <p className="input-number-increment">+</p>
                          </div>
                        </div>
                        {/* <!-- Increment-Decrement End --> */}
                      </td>
                      <td data-label="Total">$320.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <!-- Cart Table End --> */}
        </div>
        <div className="modal-footer">
          <a href="" className="btn btn-custom btn-custom-primary">Proceed to checkout</a>
        </div>
      </div>
    </div>
  </div>


  {/* <!-- Search Modal --> */}
  <div className="modal fade searchModal" id="searchModal" tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="modal-body">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..."/>
            <span className="input-group-btn">
              <button className="btn modal-btn-search" type="button"><i className="fa fa-search fa-fw"></i> Search</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Footer