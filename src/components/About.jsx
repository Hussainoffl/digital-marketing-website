import { Link } from "react-router-dom";

function About() {
  return (
    <main className="page">
      <section className="section about-hero">
        <div className="about-copy reveal">
          <span className="eyebrow">Who we are</span>
          <h1>We build premium digital marketing programs that grow brands.</h1>
          <p>
            NOVO MEDIA is a modern digital marketing agency focused on helping
            businesses grow with SEO, social media, ads, content, and web design.
          </p>
          <div className="about-actions">
            <Link className="btn btn-primary" to="/services">
              Explore services
            </Link>
            <Link className="btn btn-secondary" to="/contact">
              Talk to our team
            </Link>
          </div>
        </div>
        <div className="about-visual reveal reveal-delay-2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Marketing team"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section about-values">
        <div className="section-header reveal">
          <span>Our approach</span>
          <h2>Strategy, creativity, and performance at every stage.</h2>
        </div>

        <div className="value-grid">
          <article className="value-card reveal reveal-delay-1">
            <h3>🎯 Mission</h3>
            <p>
              Empower brands with digital marketing solutions that deliver
              measurable growth and long-term momentum.
            </p>
          </article>
          <article className="value-card reveal reveal-delay-2">
            <h3>🚀 Vision</h3>
            <p>
              Be the trusted growth partner for ambitious brands that want modern
              and scalable digital experiences.
            </p>
          </article>
          <article className="value-card reveal reveal-delay-3">
            <h3>🤝 Values</h3>
            <p>
              Clarity, creativity, and collaboration guide every campaign and
              every relationship.
            </p>
          </article>
        </div>
      </section>

      <section className="section about-services">
        <div className="section-header reveal">
          <span>What we do</span>
          <h2>Full-service marketing designed for challenger brands.</h2>
        </div>

        <div className="services-grid">
          <article className="service-card reveal reveal-delay-1">
            <h3>🔍 SEO Optimization</h3>
            <p>Improve search rankings, boost organic traffic, and increase conversions.</p>
          </article>
          <article className="service-card reveal reveal-delay-2">
            <h3>📱 Social Media Marketing</h3>
            <p>Build brand awareness with engaging social campaigns and community growth.</p>
          </article>
          <article className="service-card reveal reveal-delay-3">
            <h3>🎯 Google Ads</h3>
            <p>Generate consistent high-quality leads through performance media.</p>
          </article>
          <article className="service-card reveal reveal-delay-4">
            <h3>💻 Web Development</h3>
            <p>Create modern, responsive websites that turn visitors into customers.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default About;