import { useState } from "react";
import { motion } from "framer-motion";

const contactItems = [
  ["✉", "Email us", "hello@novomedia.com", "mailto:hello@novomedia.com"],
  ["⌁", "Call us", "+91 98765 43210", "tel:+919876543210"],
  ["⌖", "Visit us", "Chennai, Tamil Nadu", null],
];

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thank you! We'll respond within one business day.");
    event.target.reset();
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-glow contact-glow-one" />
        <div className="contact-glow contact-glow-two" />
        <div className="container contact-layout">
          <motion.div className="contact-intro" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}>
            <p className="eyebrow"><i /> Let’s start a conversation</p>
            <h1>Ready to grow your <em>business?</em></h1>
            <p className="contact-lead">Book a free strategy consultation and discover the clearest path to more qualified leads, stronger visibility, and sustainable growth.</p>

            <div className="contact-benefits">
              <p><span>✓</span> A focused 30-minute growth consultation</p>
              <p><span>✓</span> Clear, practical recommendations for your goals</p>
              <p><span>✓</span> No pressure — just a useful conversation</p>
            </div>

            <div className="contact-details">
              {contactItems.map(([icon, title, value, href]) => (
                <article className="contact-detail" key={title}>
                  <span>{icon}</span><div><small>{title}</small>{href ? <a href={href}>{value}</a> : <strong>{value}</strong>}</div>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div className="consultation-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }}>
            <div className="form-card-heading"><span className="form-step">01</span><div><p>Free strategy call</p><h2>Tell us about your goals.</h2></div></div>
            <form onSubmit={handleSubmit} className="novo-contact-form">
              <div className="contact-form-row">
                <label>Full name<input type="text" name="name" placeholder="Your name" autoComplete="name" required /></label>
                <label>Email address<input type="email" name="email" placeholder="you@company.com" autoComplete="email" required /></label>
              </div>
              <div className="contact-form-row">
                <label>Phone number<input type="tel" name="phone" placeholder="+91 00000 00000" autoComplete="tel" required /></label>
                <label>Business name<input type="text" name="business" placeholder="Your business" autoComplete="organization" required /></label>
              </div>
              <label>What can we help you achieve?<textarea name="message" placeholder="Tell us about your business, growth goals, or biggest challenge." required /></label>
              <button className="contact-submit" type="submit">Start Growing <span>→</span></button>
              {status && <p className="form-status" role="status">{status}</p>}
              <p className="form-note">By submitting, you agree to be contacted about your inquiry. We respect your privacy.</p>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="contact-confidence"><div className="container confidence-inner"><p>Trusted by businesses ready to move forward</p><div><span>SEO</span><span>Paid Media</span><span>Social Growth</span><span>Web Experiences</span></div></div></section>
    </main>
  );
}

export default Contact;
