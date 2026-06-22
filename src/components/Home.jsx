function Home() {
  return (
    <div className="page">

      <section className="hero">

        <div className="hero-content">
          <h1>Grow Your Business With Digital Marketing</h1>

          <p>
            We help brands attract more customers, generate quality leads,
            and increase revenue through powerful digital strategies.
          </p>

          <button>Get Free Consultation</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt="Digital Marketing"
          />
        </div>

      </section>

      <section className="stats">
        <div className="card">
          <h2>500+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="card">
          <h2>250+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="card">
          <h2>10M+</h2>
          <p>Leads Generated</p>
        </div>
      </section>

      <section className="why">
        <h2>Why Choose Us?</h2>

        <p>
          We combine creativity, strategy, and technology
          to help businesses grow online, generate more
          leads, and increase revenue through proven
          digital marketing solutions.
        </p>
      </section>

    </div>
  );
}

export default Home;