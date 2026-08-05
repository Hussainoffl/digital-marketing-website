function Blog() {
  return (
    <main className="page">
      <section className="section blog-hero">
        <div className="section-header reveal">
          <span>Insights</span>
          <h1>Marketing ideas, trends, and growth tactics for modern brands.</h1>
          <p>
            Explore our latest thinking on digital strategy, campaign performance,
            and creative growth.
          </p>
        </div>
      </section>

      <section className="section blog-grid">
        <article className="blog-card reveal reveal-delay-1">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
            alt="Marketing analytics"
            loading="lazy"
          />
          <div className="blog-card__content">
            <span>Strategy</span>
            <h3>How to build a marketing funnel that converts</h3>
            <p>
              Practical steps for designing campaigns that capture attention and
              move leads through the buyer journey.
            </p>
            <button type="button" className="btn btn-text">Read article</button>
          </div>
        </article>

        <article className="blog-card reveal reveal-delay-2">
          <img
            src="https://images.unsplash.com/photo-1496284045406-d3e0b918d7b4?auto=format&fit=crop&w=900&q=80"
            alt="Social campaign"
            loading="lazy"
          />
          <div className="blog-card__content">
            <span>Social</span>
            <h3>Why creative storytelling outperforms awareness ads</h3>
            <p>
              Learn how strong messaging and design turn social impressions into
              long-term brand interest.
            </p>
            <button type="button" className="btn btn-text">Read article</button>
          </div>
        </article>

        <article className="blog-card reveal reveal-delay-3">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80"
            alt="Search optimization"
            loading="lazy"
          />
          <div className="blog-card__content">
            <span>SEO</span>
            <h3>Five optimization habits for faster search growth</h3>
            <p>
              A proven SEO workflow for improving rankings, content relevance, and
              organic clicks.
            </p>
            <button type="button" className="btn btn-text">Read article</button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Blog;