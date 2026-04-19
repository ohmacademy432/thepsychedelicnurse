import Seo from '../components/Seo';

export default function ComingSoon({ title }: { title: string }) {
  return (
    <>
      <Seo title={title} description="This page is being populated in the next milestone of The Psychedelic Nurse." noIndex />
      <section>
        <div className="container">
          <p className="eyebrow">COMING SOON</p>
          <h1 style={{ marginTop: 16 }}>{title}</h1>
          <p style={{ marginTop: 24, maxWidth: 620 }}>
            This page is being populated in the next milestone.
          </p>
        </div>
      </section>
    </>
  );
}
