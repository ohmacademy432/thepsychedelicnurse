import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { MEDICINES } from '../data/medicines';

export default function MedicineDetail() {
  const { slug } = useParams<{ slug: string }>();
  const medicine = MEDICINES.find((m) => m.slug === slug);

  if (!medicine) {
    return (
      <>
        <Seo title="Medicine not found" noIndex />
        <section className="section-parchment">
          <div className="container narrow">
            <p className="eyebrow">NOT IN THE LIBRARY</p>
            <h1>That medicine isn&rsquo;t here.</h1>
            <p className="lede" style={{ marginTop: 24 }}>
              The page you followed may have moved or may not exist yet.
            </p>
            <Link to="/medicines" className="rust-link">
              &larr; Back to the medicine library
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo
        title={medicine.name}
        description={medicine.description}
        noIndex
      />
      <section className="section-parchment">
        <div className="container narrow">
          <p className="eyebrow">{medicine.category.toUpperCase()}</p>
          <h1>{medicine.name}</h1>
          <p className="subtitle">{medicine.description}</p>
          <p className="lede" style={{ marginTop: 48 }}>
            This medicine page is coming in the next phase. Check back soon.
          </p>
          <Link
            to="/medicines"
            className="rust-link"
            style={{ marginTop: 32 }}
          >
            &larr; Back to the medicine library
          </Link>
        </div>
      </section>
    </>
  );
}
