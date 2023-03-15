import React from 'react'

function Experiance() {
  return (
      <div>
          <section id="experience" className="section">
    <div className="experience-section">
      <div className="container">
        <div className="exp-wrapper flex-align">
          <div className="exp-left">
            <div className="exp-left-img">
              <div className="el-lg-img">
                <img src="./assets/img/experience-lg.jpg" alt=""/>

                <div className="el-sm-img">
                  <img src="./assets/img/experience-sm.jpg" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="exp-right">
            <h3 className="exp-title">Feel the Rich Cosmetic Experience</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, quae hic. Quisquam ea nesciunt
              eaque consectetur sapiente facere dignissimos, maiores ab assumenda officia debitis obcaecati?</p>
            {/* <br> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident libero repellendus molestiae saepe?
              Debitis, odio?</p>

            <a className="btn btn-custom btn-custom-primary" href="shop.html">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Experiance