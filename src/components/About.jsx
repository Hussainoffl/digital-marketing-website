function About() {
  return (
    <section className="page">

      <div className="about-hero">

        <div className="about-content">
          <h1>About NOVO MEDIA</h1>

          <p>
            NOVO MEDIA is a modern digital marketing agency helping
            businesses grow online through SEO, Social Media Marketing,
            Google Ads, Content Marketing, and Web Development.
          </p>

          <p>
            Our mission is to create impactful digital experiences that
            increase visibility, generate leads, and drive business growth.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Marketing Team"
          />
        </div>

      </div>

      <div className="mission-grid">

        <div className="mission-card">
          <h2>🎯 Our Mission</h2>
          <p>
            To empower businesses with innovative digital marketing
            solutions that deliver measurable growth.
          </p>
        </div>

        <div className="mission-card">
          <h2>🚀 Our Vision</h2>
          <p>
            To become a trusted growth partner for brands worldwide.
          </p>
        </div>

      </div>

      <h2 className="services-title">What We Do</h2>

      <div className="services-grid">

        <div className="service-card">
          <h3>🔍 SEO Optimization</h3>
          <p>Improve rankings and organic traffic.</p>
        </div>

        <div className="service-card">
          <h3>📱 Social Media Marketing</h3>
          <p>Build brand awareness and engagement.</p>
        </div>

        <div className="service-card">
          <h3>🎯 Google Ads</h3>
          <p>Generate quality leads with PPC campaigns.</p>
        </div>

        <div className="service-card">
          <h3>💻 Web Development</h3>
          <p>Create modern responsive websites.</p>
        </div>

      </div>

    </section>
  );
}

export default About;