import React from 'react';
// import './Contact.css'; // make sure your CSS is imported

function Contact() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore <br />
          et dolore magra aliqua. Ut enim ad minim veniam.
        </p>
      </div>

      <div className="content">
        {/* Left Column */}
        <div className="col-1">
          <div className="address-line">
            <i  className="icon bi bi-geo-alt" />
            <div className="contact-info">
              <div className="contact-info-title">Address</div>
              <div>my place,</div>
              <div>my state, New York,</div>
              <div>12345.</div>
            </div>
          </div>

          <div className="address-line">
            <i className="icon bi bi-telephone"></i>
            <div className="contact-info">
              <div className="contact-info-title">Phone</div>
              <div>9489868840</div>
            </div>
          </div>

          <div className="address-line">
            <i className="icon bi bi-envelope"></i>
            <div className="contact-info">
              <div className="contact-info-title">Email</div>
              <div>alfin@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Right Column / Form */}
        <div className="col-2">
          <form>
            <div className="form-container">
              <h2>Send Message</h2>

              <div className="form-row">
                <label>Full Name</label>
                <input type="text" className="form-field" />
              </div>

              <div className="form-row">
                <label>Email</label>
                <input type="text" className="form-field" />
              </div>

              <div className="form-row">
                <label>Type your message...</label>
                <input type="text" className="form-field" />
              </div>

              <input type="button" className="send-btn" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
