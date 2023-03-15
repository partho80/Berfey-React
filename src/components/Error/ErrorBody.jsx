import React from 'react'
import {Link} from 'react-router-dom'
 
function ErrorBody() {
  return (
      <div>
          <div id="page-error" className="pb-80">
    <div className="page-error-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="error-content">
              <div className="ec-img">
                <img src="assets/img/404.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="back-home-btn mx-auto mt-2">
            <Link className="btn btn-custom btn-custom-primary error-btn" to="/">Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ErrorBody