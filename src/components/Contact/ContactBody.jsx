import React from 'react'

function ContactBody() {
  return (
      <div>
           <section id="contactUs" className="section">
    <div className="contact-us-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 mb-5">
            <div className="cu-left">
              <div className="cu-top-wrapper">
                <h2>Contact Us</h2>
                <p>Enim ut sem viverra aliquet. Lacus vestibulum sed arcu non odio euismod lacinia at. Sagittis
                  malesuada bibendum arcu vitae elementum.</p>
              </div>

              <div className="contact-content-wrapper">
                <div className="single-contact-content">
                  <div className="scc-icon">
                    <p><i className="fa-solid fa-location-dot"></i></p>
                  </div>
                  <div className="scc-text">
                    <h5>Location</h5>
                    <p>329 Queensberry Street, North Melbourne
                      VIC 3051, Australia.</p>
                  </div>
                </div>
                <div className="single-contact-content">
                  <div className="scc-icon">
                    <p><i className="fa-solid fa-envelope"></i></p>
                  </div>
                  <div className="scc-text">
                    <h5>E-Mail</h5>
                    <p>info@yourmail.com</p>
                  </div>
                </div>
                <div className="single-contact-content">
                  <div className="scc-icon">
                    <p><i className="fa-solid fa-phone"></i></p>
                  </div>
                  <div className="scc-text">
                    <h5>Phone</h5>
                    <p>(00) 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="cu-right">
              <form className="post-form contact-form cu-page-form" method="post" action="php/mail.php" id="cf">
                <div className="form-group">
                  <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Your Full Name"/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="sub-input" placeholder="Phone Number"/>
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="msg" name="msg" rows="3"
                    placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" id="submit" name="submit" className="cf-btn btn btn-custom btn-custom-primary">Send
                  Message</button>
                <div className="cf-msg"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Contact Us Section End -->

  <!-- Google Map Start --> */}
  <div id="googleMap">
    <div className="google-map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58391.92348905992!2d90.33451974553982!3d23.83654255462999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c14a3366b005%3A0x901b07016468944c!2sMirpur%20DOHS%2C%20Dhaka!3m2!1d23.836468!2d90.36953919999999!5e0!3m2!1sen!2sbd!4v1642575818911!5m2!1sen!2sbd"
       border="0"
            allowFullScreen={false}
          loading ="lazy"></iframe>
    </div>
  </div>
  {/* <!-- Google Map End --> */}

    </div>
  )
}

export default ContactBody