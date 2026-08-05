import { useState } from "react";

const services = [
  {
    title: "SEO Optimization",
    icon: "🔍",
    summary: "Rank higher and capture organic search demand.",
    details: [
      "Keyword research",
      "Technical SEO",
      "Content optimization",
      "Link development",
    ],
  },
  {
    title: "Social Media Marketing",
    icon: "📱",
    summary: "Grow engagement and build a memorable social presence.",
    details: [
      "Creative campaigns",
      "Community management",
      "Paid social ads",
      "Performance reporting",
    ],
  },
  {
    title: "Google Ads",
    icon: "🎯",
    summary: "Drive leads with conversion-driven PPC programs.",
    details: [
      "Search & display ads",
      "Audience targeting",
      "Budget optimization",
      "Ad creative testing",
    ],
  },
  {
    title: "Web Development",
    icon: "💻",
    summary: "Launch responsive sites that convert and look premium.",
    details: [
      "Custom landing pages",
      "UX-focused design",
      "Performance tuning",
      "CMS integration",
    ],
  },
];

function Services() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <main className="page">
      <section className="section services-hero">
        <div className="section-header reveal">
          <span>Services</span>
          <h1>Strategic services for digital growth and brand momentum.</h1>
          <p>
            We blend insight, creativity and technology to create campaigns that
            attract customers and improve business performance.
          </p>
        </div>
      </section>

      <section className="section services-grid">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`service-card reveal reveal-delay-${index + 1} ${activeCard === index ? "active" : ""}`}
            onClick={() => setActiveCard(activeCard === index ? null : index)}
          >
            <div className="service-card__top">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
            </div>
            <p>{service.summary}</p>

            <div className="service-details">
              <ul>
                {service.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button type="button" className="btn btn-text">
                Learn more
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Services;