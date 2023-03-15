import React from 'react'

function WishlistBody() {
  return (
      <div>
          <div id="cart-Table-page" className="section">
    <div className="container">
      <div className="cart-table-section mb-5">
        <table id="cartTable-page" className="cartTable">
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
                <div className="quantity-wrapper py-4">
                  <div className="product-quantity">
                    <p className="input-number-decrement">-</p>
                    <input id="demoInput" className="demoInput input-number" type="number" min="1" max="100" value="1"/>
                    <p className="input-number-increment">+</p>
                  </div>
                </div>
                {/* <!-- Increment-Decrement End --> */}
              </td>
              <td data-label="Total">$320.00</td>
            </tr>
            <tr>
              <td data-label=""><a href="#"><i className="fa fa-times" aria-hidden="true"></i></a></td>
              <td data-label="Product"><img className="cart-product-img" src="assets/img/product.jpg" alt=""/></td>
              <td data-label="Price">$320.00</td>
              <td data-label="Quantity">
                {/* <!-- Increment-Decrement Start --> */}
                <div className="quantity-wrapper py-4">
                  <div className="product-quantity">
                    <p className="input-number-decrement">-</p>
                    <input id="demoInput3" className="demoInput input-number" type="number" min="1" max="100" value="1"/>
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
      <div className="cart-buttons-wrapper">
        <a href="cart.html" className="btn btn-custom btn-custom-primary">Go to Cart</a>
      </div>
    </div>
  </div>
    </div>
  )
}

export default WishlistBody