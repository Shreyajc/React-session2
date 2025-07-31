import React from "react";

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 py-5">
        <h2 className="mb-4 text-center">Contact Us</h2>
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 mt-4 mt-md-0">
            <h5>Get in Touch</h5>
            <p>Email: support@shreya.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: 123 Herbal Lane, Pune, India</p>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609951492!2d72.7411015347963!3d19.082197839779598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceac4bcb9f1f%3A0x55c635d1e0c8323a!2sPune!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#f6dfb7",
          padding: "10px 0",
          textAlign: "center",
        }}
      >
        All rights reserved
      </footer>
    </div>
  );
};

export default Contact;
