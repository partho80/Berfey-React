import React from 'react'

function Discount() {
  return (
      <div>
          <section id="discount" className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
                          <div className="single-discount" style={{ backgroundImage: `url('assets/img/discount-1.jpg')` }}>
            <div className="sd-content">
              <h5>Up to 50% Off Cosmetics!</h5>
              <a className="btn btn-custom btn-custom-white" href="shop.html">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
                          <div className="single-discount" style={{ backgroundImage: `url('assets/img/discount-1.jpg')` }}>
            <div className="sd-content">
              <h5>100% Natural Skin Balance</h5>
              <a className="btn btn-custom btn-custom-white" href="shop.html">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Discount