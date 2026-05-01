import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { ARTICLES } from '../data/articles';

const REQUEST_ACCESS_MAILTO =
  'mailto:ohmacademy432@gmail.com' +
  '?subject=' + encodeURIComponent('Member access request') +
  '&body=' + encodeURIComponent(
    "Hi April,\n\n" +
    "I'm interested in member access for The Psychedelic Nurse.\n\n" +
    "A little about me and what I'm working with:\n\n\n" +
    "Thank you."
  );

const REQUEST_ACCESS_SMS =
  'sms:+16159702015?&body=' + encodeURIComponent(
    "Hi April, I'm interested in member access for The Psychedelic Nurse."
  );

export default function Home() {
  return (
    <>
      <Seo
        title="Harm reduction for psychedelic and plant medicine work"
        description="A trauma-informed, clinically grounded harm reduction resource for those preparing for, moving through, or integrating a journey with psychedelic compounds and plant medicines. Held by April Bogle, RN."
      />

      {/* Hero */}
      <section className="section-parchment">
        <div className="container">
          <p className="eyebrow">HARM REDUCTION · EDUCATION · INTEGRATION</p>
          <h1>
            The <em>Psychedelic</em> Nurse
          </h1>
          <p className="subtitle">Sacred medicine, grounded in clinical rigor.</p>
          <p className="lede lede-sm">
            A trauma-informed, clinically grounded resource for those preparing
            for, moving through, or integrating a journey with psychedelic
            compounds and plant medicines. Built on decades of bedside
            medicine, years of ceremonial training, and the conviction that
            these two worlds belong in the same conversation.
          </p>
          <div className="cta-row">
            <Link to="/login" className="btn btn-primary">
              Enter member site
            </Link>
            <Link to="/medicines" className="btn btn-secondary">
              Start with the basics
            </Link>
          </div>
        </div>
      </section>

      {/* Harm Reduction Foundation */}
      <section className="section-parchment-warm">
        <div className="container">
          <p className="eyebrow">THE FOUNDATION</p>
          <h2>This is harm reduction work.</h2>
          <p className="lede">
            Psychedelics and plant medicines carry real power &mdash; and real
            risk. The goal of this space is not to advocate for their use. It
            is to ensure that those who choose to work with them can do so with
            the highest possible margin of safety: physically, psychologically,
            spiritually, and legally. Every page on this site &mdash; from the
            medicine education library to the preparation protocols &mdash; is
            written through that lens. <em>Knowledge reduces harm. Silence and
            stigma increase it.</em>
          </p>
          <Link to="/harm-reduction" className="rust-link">
            Read more about our harm reduction approach &rarr;
          </Link>
        </div>
      </section>

      {/* About April preview */}
      <section className="section-parchment">
        <div className="container">
          <p className="eyebrow">HELD BY</p>
          <h2>April Bogle, RN</h2>
          <p className="lede">
            April spent decades at the bedside of people in crisis &mdash;
            and years more in ceremony, studying what the ER could never
            quite reach. She founded Ohm Academy of Healing to hold that
            kind of work. The Psychedelic Nurse extends it outward: a
            resource for anyone curious about these medicines, whether or
            not they plan to work with them.
          </p>
          <Link to="/about" className="rust-link">
            Read her full story &rarr;
          </Link>
        </div>
      </section>

      {/* Latest Writing */}
      {ARTICLES.length > 0 && (
        <section className="section-parchment-warm">
          <div className="container">
            <p className="eyebrow">LATEST WRITING</p>
            <h2>{ARTICLES[0].title}</h2>
            <p
              style={{
                fontSize: 22,
                lineHeight: 1.5,
                fontStyle: 'italic',
                color: 'var(--ink-mute)',
                marginTop: 8,
                marginBottom: 16,
              }}
            >
              {ARTICLES[0].subtitle}
            </p>
            <p className="lede">{ARTICLES[0].excerpt}</p>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to={`/articles/${ARTICLES[0].slug}`} className="btn btn-primary">
                Read the article
              </Link>
              {ARTICLES.length > 1 && (
                <Link to="/articles" className="rust-link">
                  See all writing &rarr;
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* What's inside */}
      <section className="section-parchment">
        <div className="container">
          <p className="eyebrow">WHAT'S INSIDE</p>
          <h2>Two layers. One mission.</h2>
          <div className="cards-2">
            <article className="card">
              <p className="eyebrow">PUBLIC LIBRARY</p>
              <h3>Open to anyone</h3>
              <p>
                Medicine education, harm reduction foundations, and the
                stories behind the medicines. Open to anyone seeking to learn.
              </p>
            </article>
            <article className="card">
              <p className="eyebrow">MEMBER SITE</p>
              <h3>By invitation</h3>
              <p>
                Screening tools, preparation protocols, integration workbooks,
                and journey-specific guides. Access by invitation from April.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-forest">
        <div className="container">
          <p className="eyebrow">FOR CLIENTS</p>
          <h2>If you&rsquo;re preparing for a journey</h2>
          <p className="lede" style={{ color: 'var(--parchment)' }}>
            The member site holds everything April uses with her clients
            &mdash; from cardiac screening tools for iboga to the 30-day
            integration protocol for 5-MeO-DMT. Access is by invitation. If
            you&rsquo;re working with April or one of her partner
            practitioners, you&rsquo;ll receive a magic link to the email on
            file.
          </p>
          <div className="cta-row">
            <a href={REQUEST_ACCESS_MAILTO} className="btn btn-accent">
              Email April
            </a>
            <a href={REQUEST_ACCESS_SMS} className="btn btn-outline-light">
              Text April
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
