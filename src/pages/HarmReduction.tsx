import Seo from '../components/Seo';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Screening',
    body: 'Before anyone enters a container with these medicines, a full medical and psychiatric history must be on the table — not summarized, not softened. The facilitator needs to know what medications you are taking, what you have taken, what runs in your family. Honest screening is the first harm reduction tool and the one most often skipped.',
  },
  {
    num: '02',
    title: 'Setting',
    body: 'Where the medicine is taken shapes what the medicine does. A trusted space, held by someone who knows what they are doing, with time and privacy for what wants to move. The principle of set and setting is not decorative. It is the difference between a difficult journey that integrates and a difficult journey that shatters.',
  },
  {
    num: '03',
    title: 'Sitter',
    body: 'No one should journey alone — not with these compounds. A sober, trained presence who can hold silence, hold your body if you need holding, and respond clinically if something tips into medical territory. The sitter is not there to guide your vision. They are there to hold the container so you can meet whatever arises safely.',
  },
  {
    num: '04',
    title: 'Dose',
    body: 'Dose is everything. Three grams of mushrooms is not five grams is not eight grams. A microdose is not a macrodose is not a heroic dose, and each calls for entirely different preparation, setting, and integration. The single most common source of harm in this work is a dose that did not match the person, the container, or the intention.',
  },
  {
    num: '05',
    title: 'Integration',
    body: 'The ceremony is not the work. Integration is. The days and weeks after a journey are when the medicine actually does its work — and also when it can quietly unravel. Integration means structured reflection, somatic practice, and community. It means making sure the insight becomes a change, not a memory.',
  },
];

const CONTRAINDICATIONS = [
  'Personal or first-degree family history of schizophrenia or other psychotic disorders.',
  'Uncontrolled cardiovascular disease.',
  'Pregnancy.',
  'Currently taking MAOIs, SSRIs, lithium, or tramadol — without medical consultation and appropriate washout.',
  'People under 25 with active psychiatric instability.',
  'Anyone who has not been able to disclose their full medical history honestly to their facilitator.',
];

export default function HarmReduction() {
  return (
    <>
      <Seo
        title="What harm reduction means here"
        description="Every medicine on this site carries risks — cardiac, psychological, legal, relational. Harm reduction names those risks plainly so you can weigh them consciously. The five non-negotiables of safe psychedelic work."
      />

      {/* Hero */}
      <section className="section-parchment">
        <div className="container narrow">
          <p className="eyebrow">THE APPROACH</p>
          <h1>What harm reduction means here.</h1>
        </div>
      </section>

      {/* Honest naming */}
      <section className="section-parchment-warm">
        <div className="container narrow prose">
          <p className="eyebrow">HONEST NAMING</p>
          <h2>These medicines deserve honest language.</h2>
          <p>
            Every medicine in this library carries real effects. Iboga asks
            the heart to work hard. Ayahuasca doesn&rsquo;t combine well with
            certain antidepressants. A journey undertaken without honest
            screening can surface something a person wasn&rsquo;t ready to
            meet. In most of the United States, possession is still a felony.
            None of this cancels out the beauty or the healing &mdash; it
            just belongs in the same conversation.
          </p>
          <p>
            This site treats you like an adult. The goal isn&rsquo;t to scare
            anyone away from these medicines. It&rsquo;s to respect both the
            medicines and the people approaching them enough to name what is
            actually here. The more a person understands about what a
            compound can and can&rsquo;t do, the more thoughtfully they can
            choose &mdash; whether that choice is to proceed with care, to
            wait, or to decide this path isn&rsquo;t theirs. All three are
            valid. None of them require pretending.
          </p>
        </div>
      </section>

      {/* Five non-negotiables */}
      <section className="section-parchment">
        <div className="container">
          <p className="eyebrow">THE FIVE NON-NEGOTIABLES</p>
          <h2>Screening. Setting. Sitter. Dose. Integration.</h2>
          <p className="lede" style={{ marginTop: 24 }}>
            If any one of these is missing, the margin of safety drops sharply.
            If more than one is missing, the medicine is not being held &mdash;
            it is being handled.
          </p>

          <div className="principles">
            {PRINCIPLES.map((p) => (
              <div key={p.num} className="principle">
                <div className="principle-num">{p.num}</div>
                <div>
                  <h3 className="principle-title">
                    <em>{p.title}</em>
                  </h3>
                  <p className="principle-body">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contraindications */}
      <section className="section-parchment-warm">
        <div className="container narrow prose">
          <p className="eyebrow">HARD STOPS</p>
          <h2>Who should not use these medicines.</h2>
          <p>
            The following are not suggestions or caution flags. They are hard
            contraindications. If any of them apply to you, the right answer
            is not to &ldquo;find the right facilitator&rdquo; &mdash; it is
            not to use these medicines at all.
          </p>
          <ul className="bullet-list">
            {CONTRAINDICATIONS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Defer to your doctor */}
      <section className="section-forest">
        <div className="container narrow prose">
          <p className="eyebrow">THE RULE THAT ALWAYS WINS</p>
          <h2>If this site ever conflicts with your doctor&hellip;</h2>
          <p style={{ color: 'var(--parchment)' }}>
            Defer to your doctor. This site is educational. It is not a
            substitute for personalized medical care. If your physician,
            psychiatrist, or cardiologist tells you not to work with a
            medicine, the correct answer is to listen to them &mdash; not to
            find a facilitator willing to ignore what they said.
          </p>
        </div>
      </section>
    </>
  );
}
