import Seo from '../components/Seo';

export default function About() {
  return (
    <>
      <Seo
        title="About April Bogle, RN"
        description="32 years in emergency nursing. 8 years in plant medicine. Founder of Ohm Academy of Healing. The woman behind The Psychedelic Nurse."
      />

      {/* Opening */}
      <section className="section-parchment">
        <div className="container narrow">
          <p className="eyebrow">THE WOMAN BEHIND THE SITE</p>
          <h1>April Bogle, RN</h1>
          <blockquote className="pullquote">
            I spent 32 years holding space for people in the worst moments of
            their lives. Then I discovered a kind of holding the ER never
            taught me.
          </blockquote>
        </div>
      </section>

      {/* The ER years */}
      <section className="section-parchment-warm">
        <div className="container narrow prose">
          <p className="eyebrow">THE ER YEARS</p>
          <h2>Thirty-two years of holding space in emergencies.</h2>
          <p>
            For more than three decades, April worked as an emergency room
            nurse in Nashville. She held hands through cardiac arrests,
            overdoses, psychotic breaks, assaults, and the deaths of children.
            She watched the same patients return with variations of the same
            wounds &mdash; bodies arriving at the ER with traumas the hospital
            could stabilize but rarely heal.
          </p>
          <p>
            What she saw, over and over, was unhealed trauma in the flesh.
            Heart attacks in people who had never grieved. Overdoses in people
            who could not feel safe in their own bodies. Autoimmune flares in
            people whose nervous systems had been stuck in fight-or-flight
            since childhood. Conventional medicine could meet the acute event.
            It could rarely meet the wound underneath.
          </p>
        </div>
      </section>

      {/* Plant medicine years */}
      <section className="section-parchment">
        <div className="container narrow prose">
          <p className="eyebrow">THE PLANT MEDICINE YEARS</p>
          <h2>Eight years of a different kind of holding.</h2>
          <p>
            April&rsquo;s own work with plant medicine began as a patient, not
            a practitioner. Her first ceremonies came during a season of her
            life when the tools she had &mdash; clinical, cognitive, hard-won
            &mdash; were no longer enough. What the medicines offered was not
            a substitute for that training. It was an extension of it.
          </p>
          <p>
            The decision to become a guide emerged slowly. She studied at the
            McKenna Academy of Natural Philosophy and holds certifications in
            breathwork, sound healing, biofield tuning, tuning fork therapy,
            and nervous system trauma. The combination of clinical nursing and
            ceremonial medicine is rare. It is also, she believes, what this
            moment asks for.
          </p>
        </div>
      </section>

      {/* Ohm Academy */}
      <section className="section-parchment-warm">
        <div className="container narrow prose">
          <p className="eyebrow">OHM ACADEMY OF HEALING</p>
          <h2>A container for the work.</h2>
          <p>
            April founded Ohm Academy of Healing to create safe containers for
            others seeking the kind of holding the ER never taught her. The
            academy is a 501(c)(3) religious ministry operating under
            Religious Freedom Restoration Act protections, dedicated to
            trauma-informed, holistic healing in Middle Tennessee and beyond.
            It holds the ceremonial work April offers her clients &mdash;
            retreats, integration circles, and one-on-one sessions.
          </p>
        </div>
      </section>

      {/* Why this site exists */}
      <section className="section-parchment">
        <div className="container narrow prose">
          <p className="eyebrow">WHY THIS SITE EXISTS</p>
          <h2>A separate project, on purpose.</h2>
          <blockquote className="pullquote">
            Harm reduction deserves its own home.
          </blockquote>
          <p>
            The conscious community holds enormous beauty and real medicine.
            Alongside it, there are also stories that sometimes drift from
            what is clinically true &mdash; and it isn&rsquo;t always easy,
            from the inside, to tell which is which. Often both travel
            together, from the same teachers.
          </p>
          <p>
            Ohm Academy is the container for clients working with April
            directly. The Psychedelic Nurse is for everyone else.
          </p>
          <p>
            For the person researching MDMA at 2am. For the partner of someone
            about to go to Mexico for a ceremony. For the therapist whose
            client just mentioned ayahuasca and who does not know what to say
            next. For the nurse considering her first Bufo journey and trying
            to find out if her thyroid medication is safe to hold.
          </p>
          <p>
            It is free. It is public. It is built on what is clinically and
            ceremonially true &mdash; not on what is marketable.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section-forest">
        <div className="container narrow">
          <p className="eyebrow">REACH OUT</p>
          <h2>Get in touch</h2>
          <ul className="contact-list">
            <li>
              <span className="label">Phone</span>
              <a href="tel:+16159702015">(615) 970-2015</a>
            </li>
            <li>
              <span className="label">Email</span>
              <a href="mailto:ohmacademy432@gmail.com">
                ohmacademy432@gmail.com
              </a>
            </li>
            <li>
              <span className="label">Location</span>
              <span>Nashville, Tennessee</span>
            </li>
            <li>
              <span className="label">Main site</span>
              <a
                href="https://ohmacademyofhealing.org"
                target="_blank"
                rel="noreferrer"
              >
                ohmacademyofhealing.org
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
