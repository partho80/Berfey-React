import React from 'react'

function Instagram() {
  return (
      <div>
          <section id="instagram" className="section">
    <div className="instagram-section">
      <div className="section-top-box text-center">
        <h2 className="st-title">As Seen On Instagram</h2>
        <p className="st-desc insta-top-text">@Berfey</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
                              <div className="single-insta" style={{ backgroundImage: `url('assets/img/insta-1.jpg')` }}>
              <a href="https://www.instagram.com" className="insta-hover-box">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-insta" style={{backgroundImage: `url('assets/img/insta-2.jpg')`}}>
              <a href="https://www.instagram.com" className="insta-hover-box">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-insta" style={{backgroundImage: `url('assets/img/insta-3.jpg')`}}>
              <a href="https://www.instagram.com" className="insta-hover-box">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
                              <div className="single-insta" style={{ backgroundImage: `url('assets/img/insta-4.jpg')` }}>
              <a href="https://www.instagram.com" className="insta-hover-box">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Instagram