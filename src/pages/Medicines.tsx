import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { MEDICINES } from '../data/medicines';

export default function Medicines() {
  return (
    <>
      <Seo
        title="Medicine Library"
        description="What each medicine actually does in the body and the mind. Where it comes from, what traditions teach, what the popular conversation often leaves out — every page written through a harm reduction lens."
      />
      <section className="section-parchment">
        <div className="container">
          <p className="eyebrow">MEDICINE LIBRARY</p>
          <h1>The medicines, told honestly.</h1>
          <p className="lede" style={{ maxWidth: 680 }}>
            What each medicine actually does in the body and the mind. Where
            it comes from. What the traditions around it teach. What the
            popular conversation often leaves out. What the science knows
            and doesn&rsquo;t know. Every page written through a harm
            reduction lens.
          </p>

          <div className="medicine-grid">
            {MEDICINES.map((m) => (
              <Link
                key={m.slug}
                to={`/medicines/${m.slug}`}
                className="medicine-card"
              >
                <p className="eyebrow">{m.category}</p>
                <h3 className="medicine-name">{m.name}</h3>
                <p className="medicine-desc">{m.description}</p>
                <span className="rust-link">Read more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
