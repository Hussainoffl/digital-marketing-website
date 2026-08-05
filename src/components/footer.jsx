import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">NOVO MEDIA</span>
          <p>
            Luxury digital marketing for modern brands. We combine strategy,
            creativity and performance to build memorable campaigns.
          </p>
          <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">𝕏</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services">SEO</Link></li>
            <li><Link to="/services">Social Media</Link></li>
            <li><Link to="/services">Google Ads</Link></li>
            <li><Link to="/services">Web Development</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p><a href="mailto:hello@novomedia.com">hello@novomedia.com</a></p>
          <p><a href="tel:+919876543210">+91 98765 43210</a></p>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NOVO MEDIA. All rights reserved.</p>
        <p>Crafted with care for ambitious brands.</p>
      </div>
    </footer>
  );
}

export default Footer;