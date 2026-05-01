import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { ARTICLES } from '../data/articles';

export default function Articles() {
  return (
    <>
      <Seo
        title="Writing"
        description="Long-form essays from April Bogle, RN — on plant medicine, harm reduction, the ethics of psychedelic communities, and what the science actually says."
      />

      {/* Hero */}
      <section className="section-parchment">
        <div className="container narrow">
          <p className="eyebrow">WRITING</p>
          <h1>Essays from the path.</h1>
          <p
            style={{
              fontSize: 22,
              lineHeight: 1.5,
              fontStyle: 'italic',
              color: 'var(--ink-mute)',
              marginTop: 8,
            }}
          >
            Long-form pieces on plant medicine, harm reduction, and the
            questions we should be asking.
          </p>
        </div>
      </section>

      {/* Article list */}
      <section className="section-parchment-warm">
        <div className="container narrow">
          {ARTICLES.length === 0 ? (
            <p className="lede">More writing coming soon.</p>
          ) : (
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 40,
              }}
            >
              {ARTICLES.map((article) => (
                <li
                  key={article.slug}
                  style={{
                    paddingBottom: 40,
                    borderBottom: '1px solid var(--ink-line, rgba(0,0,0,0.1))',
                  }}
                >
                  <p
                    className="eyebrow"
                    style={{ marginBottom: 8 }}
                  >
                    {article.publishedLabel} &middot; {article.readTime}
                  </p>
                  <h2 style={{ marginBottom: 8 }}>
                    <Link
                      to={`/articles/${article.slug}`}
                      style={{
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p
                    style={{
                      fontSize: 19,
                      lineHeight: 1.5,
                      fontStyle: 'italic',
                      color: 'var(--ink-mute)',
                      marginTop: 0,
                      marginBottom: 16,
                    }}
                  >
                    {article.subtitle}
                  </p>
                  <p style={{ marginBottom: 20 }}>{article.excerpt}</p>
                  <Link
                    to={`/articles/${article.slug}`}
                    className="rust-link"
                  >
                    Read the full piece &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
