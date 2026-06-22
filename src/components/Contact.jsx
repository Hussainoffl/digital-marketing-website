

function Contact() {
  return (
    <section id="contact" className="contact">

      {/* LEFT SIDE */}
      <div className="contact-left">

        <span className="contact-us">Contact Us</span>

        <h2>Let's Grow Your Business</h2>

        <p>
          Ready to increase your online presence and generate more leads?
          Our digital marketing experts are here to help you achieve your goals.
        </p>

        <div className="contact-details">

          <div className="contact-card">
            <span className="icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>hello@novomedia.com</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="icon">📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="icon">📍</span>
            <div>
              <h4>Office</h4>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">

        <h2 className="send">Get Free Consultation</h2>

        <form className="contact-form">

          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell us about your business goals..." required></textarea>
          </div>

          <button type="submit">
            🚀 Request Free Consultation
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;