import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import { useAuth } from '../../hooks/useAuth';

const SECTIONS = [
  {
    to: '/members/prep-protocols',
    eyebrow: 'PREPARATION',
    title: 'Preparation Protocols',
    description:
      'Dietary, lifestyle, pharmacological, and psycho-spiritual prep. Substance-specific.',
  },
  {
    to: '/members/screening-tools',
    eyebrow: 'SCREENING',
    title: 'Screening Tools',
    description:
      'Cardiac, psychiatric, and medication interaction screenings. Print-ready and session-ready.',
  },
  {
    to: '/members/integration',
    eyebrow: 'INTEGRATION',
    title: 'Integration',
    description:
      '30-day IFS-based integration protocol. Journal prompts, parts work, somatic practices.',
  },
  {
    to: '/members/resources',
    eyebrow: 'RESOURCES',
    title: 'Resources',
    description:
      'Practitioner directory, recommended reading, community links.',
  },
];

export default function Dashboard() {
  const { user } = useAuth();
  const displayName =
    (user?.user_metadata as { display_name?: string } | undefined)
      ?.display_name;
  const heading = displayName ? `Welcome, ${displayName}.` : 'Welcome.';

  return (
    <>
      <Seo title="Member dashboard" noIndex />
      <section className="section-parchment">
        <div className="container">
          <p className="eyebrow">MEMBER SITE</p>
          <h1>{heading}</h1>
          <p className="subtitle">
            Everything April uses with her clients lives here.
          </p>

          <div className="member-grid">
            {SECTIONS.map((s) => (
              <Link key={s.to} to={s.to} className="medicine-card">
                <p className="eyebrow">{s.eyebrow}</p>
                <h3 className="medicine-name">{s.title}</h3>
                <p className="medicine-desc">{s.description}</p>
                <span className="rust-link">Open &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
