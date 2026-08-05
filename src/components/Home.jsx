import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  ["⌕", "SEO Optimization", "Improve your Google rankings and attract organic customers with advanced SEO strategies."],
  ["↗", "Social Media Marketing", "Build brand awareness and engage your audience through creative social media campaigns."],
  ["◎", "Google Ads & PPC", "Generate instant leads with highly optimized paid advertising campaigns."],
  ["</>", "Website Development", "Create fast, responsive websites that turn visitors into customers."],
  ["▤", "Content Marketing", "Create valuable content that builds trust and attracts your ideal customers."],
  ["✦", "Branding", "Develop a strong brand identity that makes your business memorable."],
];

const projects = [
  ["01", "Real Estate Growth Campaign", "SEO + Google Ads", "300%", "Increase in leads", "project-estate"],
  ["02", "Ecommerce Brand Growth", "Social Media + Ads", "2X", "Online sales", "project-commerce"],
  ["03", "Business Website", "Web Development + SEO", "50K", "Monthly visitors", "project-web"],
];

function Arrow() { return <span aria-hidden="true">→</span>; }

function Home() {
  return (
    <main className="home-page">
      <section className="hero" id="home">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><i /> Digital growth partners for ambitious brands</p>
            <h1>Scale your business with <em>powerful</em> digital marketing.</h1>
            <p className="hero-lead">We help brands increase visibility, generate qualified leads, and grow revenue through SEO, paid advertising, social media, and high-converting websites.</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">Get Free Consultation <Arrow /></Link>
              <a className="button button-ghost" href="#services">Explore Our Services <Arrow /></a>
            </div>
            <div className="client-proof"><span className="avatar-stack"><b>R</b><b>P</b><b>A</b></span><p><strong>50+ growth-minded clients</strong><br />trust NOVO MEDIA to move faster</p></div>
          </div>
          <div className="dashboard-wrap reveal reveal-delay-2" aria-label="Marketing performance dashboard illustration">
            <motion.div className="dashboard" animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <div className="dash-top"><div><small>Performance overview</small><strong>Growth Dashboard</strong></div><span className="live-dot">Live</span></div>
              <div className="metric-row"><div className="metric"><small>Website traffic</small><strong>48.2K <b>+24.8%</b></strong><div className="bars"><i /><i /><i /><i /><i /><i /><i /></div></div><div className="metric circle-metric"><small>Conversion rate</small><div className="ring"><b>8.6%</b></div><span>↑ 2.1% this month</span></div></div>
              <div className="revenue-card"><div><small>Revenue generated</small><strong>₹8,46,250</strong><span>↑ 32.4% vs last month</span></div><svg viewBox="0 0 260 85" role="img" aria-label="Rising revenue line"><path d="M0 72 C26 65,30 60,49 63 S78 52,94 57 S123 44,141 47 S165 20,186 36 S215 18,260 5" fill="none" stroke="url(#line)" strokeWidth="4"/><path d="M0 72 C26 65,30 60,49 63 S78 52,94 57 S123 44,141 47 S165 20,186 36 S215 18,260 5 V85 H0Z" fill="url(#area)" opacity=".35"/><defs><linearGradient id="line"><stop stopColor="#22c55e"/><stop offset="1" stopColor="#14b8a6"/></linearGradient><linearGradient id="area" x2="0" y2="1"><stop stopColor="#22c55e"/><stop offset="1" stopColor="#22c55e" stopOpacity="0"/></linearGradient></defs></svg></div>
              <div className="social-card"><span className="social-icon">◉</span><div><small>Social reach</small><strong>124.8K</strong></div><b>+18.2%</b><div className="mini-bars"><i /><i /><i /><i /><i /></div></div>
            </motion.div>
            <div className="float-card float-leads"><span>✦</span><div><small>Qualified leads</small><strong>+1,240</strong></div></div>
            <div className="float-card float-roi"><small>Campaign ROI</small><strong>4.8x</strong><b>↑ 38%</b></div>
          </div>
        </div>
        <div className="container hero-stats"><div><strong>500<span>+</span></strong><p>Leads Generated</p></div><div><strong>100<span>+</span></strong><p>Successful Projects</p></div><div><strong>50<span>+</span></strong><p>Happy Clients</p></div><p className="stats-note">Built for results.<br />Designed to scale.</p></div>
      </section>

      <section className="section" id="services"><div className="container"><header className="section-heading reveal"><p className="eyebrow"><i /> What we do</p><h2>Our digital marketing <em>services.</em></h2><p>Complete digital solutions designed to help your business attract customers, increase sales, and build a powerful online presence.</p></header><div className="services-grid">{services.map(([icon,title,text], i) => <article className={`service-card reveal reveal-delay-${(i % 3) + 1}`} key={title}><span className="service-icon">{icon}</span><h3>{title}</h3><p>{text}</p><Link to="/services" aria-label={`Learn more about ${title}`} className="card-link">Explore service <Arrow /></Link></article>)}</div></div></section>

      <section className="section about-section" id="about"><div className="container about-grid"><div className="about-visual reveal"><div className="about-image"><div className="image-shine" /><p>STRATEGY<br /><span>MEETS IMPACT</span></p></div><div className="experience"><strong>3<span>+</span></strong><p>Years of<br />experience</p></div></div><div className="about-copy reveal reveal-delay-2"><p className="eyebrow"><i /> About NOVO MEDIA</p><h2>Helping businesses grow in the <em>digital world.</em></h2><p>At NOVO MEDIA, we combine creativity, technology, and marketing expertise to create strategies that deliver measurable results.</p><div className="about-stats"><div><strong>100+</strong><span>Projects completed</span></div><div><strong>50+</strong><span>Happy clients</span></div><div><strong>95%</strong><span>Client satisfaction</span></div></div><Link className="text-link" to="/about">More about our approach <Arrow /></Link></div></div></section>

      <section className="section why-section"><div className="container"><header className="section-heading centered reveal"><p className="eyebrow"><i /> Your growth advantage</p><h2>Why businesses choose <em>NOVO.</em></h2></header><div className="why-grid">{[["01","Data driven strategy","We use analytics and insights to create marketing campaigns that deliver results."],["02","Transparent reporting","Track your campaign performance with clear reports and real-time insights."],["03","Customized solutions","Every business gets a strategy designed specifically for their goals."],["04","Experienced team","Work with professionals who understand modern digital marketing."]].map(([num,title,text]) => <article className="why-card reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section process-section" id="process"><div className="container"><header className="section-heading reveal"><p className="eyebrow"><i /> How we work</p><h2>Our simple growth <em>process.</em></h2></header><div className="process-grid">{[["01","Discovery","We understand your business, audience, and goals."],["02","Strategy","We create a customized marketing roadmap."],["03","Execution","We launch campaigns and optimize performance."],["04","Growth","We scale successful strategies to maximize results."]].map(([num,title,text]) => <article className="process-step reveal" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="section portfolio-section" id="portfolio"><div className="container"><header className="section-heading reveal"><p className="eyebrow"><i /> Results that speak</p><h2>Featured <em>projects.</em></h2></header><div className="projects-grid">{projects.map(([num,title,service,result,label,cls]) => <article className={`project-card ${cls} reveal`} key={title}><span className="project-number">{num}</span><div className="project-content"><p>{service}</p><h3>{title}</h3><div><strong>{result}</strong><span>{label}</span></div></div><span className="project-arrow"><Arrow /></span></article>)}</div></div></section>

      <section className="section testimonials-section" id="testimonials"><div className="container"><header className="section-heading centered reveal"><p className="eyebrow"><i /> Client stories</p><h2>What our clients <em>say.</em></h2></header><div className="testimonial-grid">{[["GrowthX helped us increase our online leads within months. Their strategy and execution were excellent.","Rahul Sharma","Business Owner"],["Our website traffic improved significantly after working with GrowthX.","Priya Enterprises","Founder"],["Professional team with great communication and measurable results.","Arjun Kumar","Director"]].map(([quote,name,role]) => <article className="testimonial-card reveal" key={name}><span className="quote">“</span><p>{quote}</p><div><span className="person-initial">{name[0]}</span><section><strong>{name}</strong><small>{role}</small></section></div></article>)}</div></div></section>

      <section className="section pricing-section"><div className="container"><header className="section-heading centered reveal"><p className="eyebrow"><i /> Flexible partnerships</p><h2>Choose your growth <em>plan.</em></h2></header><div className="pricing-grid">{[["Starter","₹15,000","Social Media Management|Basic SEO|Monthly Reports"],["Growth","₹35,000","SEO|Google Ads|Content Marketing|Analytics"],["Premium","₹75,000","Complete Digital Strategy|Paid Campaigns|Website Optimization|Dedicated Support"]].map(([title,price,items],i) => <article className={`pricing-card ${i === 1 ? "featured" : ""} reveal`} key={title}>{i === 1 && <span className="popular">Most popular</span>}<h3>{title}</h3><p>Per month</p><strong>{price}<small>/month</small></strong><ul>{items.split("|").map(item => <li key={item}>✓ {item}</li>)}</ul><Link className={i === 1 ? "button button-primary" : "button button-ghost"} to="/contact">Get started <Arrow /></Link></article>)}</div></div></section>

      <section className="contact-cta" id="contact"><div className="container contact-cta-inner reveal"><div><p className="eyebrow"><i /> Let’s grow together</p><h2>Ready to grow your <em>business?</em></h2><p>Book a free consultation and discover how we can help you generate more leads and increase revenue.</p></div><Link className="button button-primary" to="/contact">Start Growing <Arrow /></Link></div></section>
    </main>
  );
}

export default Home;
