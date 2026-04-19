import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';

type Props = {
  eyebrow: string;
  title: string;
};

export default function MemberPlaceholder({ eyebrow, title }: Props) {
  return (
    <>
      <Seo title={title} noIndex />
      <section className="section-parchment">
        <div className="container narrow">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="subtitle">
            This section is being populated with April&rsquo;s research in the
            next phase.
          </p>
          <Link
            to="/members"
            className="rust-link"
            style={{ marginTop: 48 }}
          >
            &larr; Back to the member dashboard
          </Link>
        </div>
      </section>
    </>
  );
}
