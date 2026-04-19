import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import MedicinePageLayout from '../../components/medicine/MedicinePageLayout';
import MedicineHero from '../../components/medicine/MedicineHero';
import MedicineSection from '../../components/medicine/MedicineSection';
import MedicinePullquote from '../../components/medicine/MedicinePullquote';
import DoseBlock from '../../components/medicine/DoseBlock';
import SafetyCallout from '../../components/medicine/SafetyCallout';

const TOC_ITEMS = [
  { id: 'the-compound', label: 'What MDMA actually is' },
  { id: 'the-research', label: 'Therapeutic promise' },
  { id: 'dosage', label: 'What the dose actually is' },
  { id: 'safety', label: 'Hard interactions' },
  { id: 'party-drug', label: 'Outside the clinic' },
  { id: 'low-dose', label: 'Low-dose use' },
  { id: 'integration', label: 'After the session' },
  { id: 'decision', label: 'Decision framework' },
  { id: 'member-cta', label: 'Member site' },
  { id: 'further-reading', label: 'Further reading' },
];

export default function MDMA() {
  return (
    <>
      <Seo
        title="MDMA — not a plant medicine"
        description="MDMA is synthetic, empathogenic, and one of the most misunderstood substances in the conscious community. Harm reduction for MDMA use: what it is, what it can heal, and where the community is quietly hurting itself with it."
        type="article"
        articleSection="Medicine Library"
        articleTags={['MDMA', 'harm reduction', 'empathogen', 'MDMA-assisted therapy', 'PTSD']}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'MDMA — not a plant medicine',
          description:
            'MDMA is synthetic, empathogenic, and one of the most misunderstood substances in the conscious community.',
          author: { '@type': 'Person', name: 'April Bogle', jobTitle: 'Registered Nurse' },
          publisher: {
            '@type': 'Organization',
            name: 'The Psychedelic Nurse',
            url: 'https://thepsychedelicnurse.org',
          },
          datePublished: '2026-04-19',
          dateModified: '2026-04-19',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://thepsychedelicnurse.org/medicines/mdma',
          },
          articleSection: 'Medicine Library',
          about: [
            { '@type': 'Thing', name: 'MDMA' },
            { '@type': 'Thing', name: 'Harm reduction' },
            { '@type': 'Thing', name: 'Psychedelic-assisted therapy' },
          ],
        }}
      />

      <MedicinePageLayout tocItems={TOC_ITEMS}>
        <MedicineHero
          eyebrow="EMPATHOGEN · SYNTHETIC"
          name="MDMA"
          subtitle="3,4-methylenedioxymethamphetamine"
          intro="MDMA is one of the most misunderstood substances on this site — often called medicine, often placed on the same shelf as ayahuasca and mushrooms, often stacked into ceremonies it was never designed for. This page is an invitation to see it more clearly. What it is. What it does. What it can heal. And where it starts to hurt people who believed it couldn’t."
        />

        <MedicineSection
          id="the-compound"
          eyebrow="THE COMPOUND"
          heading={<>Not a plant. Not a classical psychedelic.</>}
        >
          <p>
            MDMA is a fully synthetic molecule. First created in 1912 by
            Merck, a German pharmaceutical company, as an intermediate in
            synthesizing a different drug. It was never discovered in a
            plant. It was never used in a ceremony by any indigenous
            tradition — because until the 20th century it simply did not
            exist. This matters. When you hear someone describe MDMA as a
            &ldquo;medicine&rdquo; alongside ayahuasca or peyote, they are
            collapsing a category distinction that changes everything about
            how the substance should be held.
          </p>
          <p>
            Pharmacologically, MDMA is what researchers call an{' '}
            <strong>empathogen</strong> &mdash; a compound that produces
            feelings of emotional openness, trust, and closeness to others.
            It is not a classical psychedelic in the way psilocybin or LSD
            are. It does not typically cause visual hallucinations, ego
            dissolution, or the kind of &ldquo;download&rdquo; experiences
            people describe from mushrooms or DMT. The mechanism is
            different. MDMA is primarily a serotonin-norepinephrine-dopamine
            releasing agent, meaning it floods the brain with all three of
            these neurotransmitters at once, especially serotonin. This
            flood is why it feels the way it feels: warm, connected,
            chatty, physically energized, emotionally unarmored.
          </p>
          <p>
            MDMA is chemically classified as a{' '}
            <strong>substituted amphetamine</strong>. That lineage matters
            too. It is structurally related to the same family that
            includes methamphetamine, which is why it carries the stimulant
            side of its profile (elevated heart rate, elevated body
            temperature, appetite suppression, jaw tension) and why
            long-term or high-dose use can damage the same serotonergic
            neurons that give it its beautiful acute effects.
          </p>

          <MedicinePullquote>
            I hear it called &ldquo;the love medicine&rdquo; in retreat
            spaces. I don&rsquo;t argue with the experience &mdash; I have
            held dozens of people through beautiful, healing MDMA sessions.
            I just want us to be precise about the tool we are using.
            Precision is how we keep people safe.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="the-research"
          eyebrow="WHAT THE RESEARCH SHOWS"
          heading={<>There is a reason this medicine is in the room.</>}
        >
          <p>
            MDMA-assisted therapy for PTSD has produced some of the most
            promising Phase 3 clinical trial results in the history of
            psychiatric research. In trials run by MAPS (the
            Multidisciplinary Association for Psychedelic Studies), over
            two-thirds of participants with severe, treatment-resistant
            PTSD no longer met diagnostic criteria for the disorder two
            months after three guided sessions. These are patients who had
            tried every conventional treatment available and had not
            responded. That is not a small result.
          </p>
          <p>
            The mechanism is well understood. MDMA reduces activity in the
            amygdala (the brain&rsquo;s fear center), increases activity in
            the prefrontal cortex (where self-reflection and emotional
            regulation live), and boosts oxytocin, the bonding hormone
            that makes connection feel safe. In a therapeutic container,
            with a trained clinician, this neurochemical window allows a
            trauma survivor to approach memories they could not previously
            approach without dissociating. Healing becomes possible in a
            few sessions that might have taken decades in talk therapy
            alone.
          </p>
          <p>
            As of 2025, the FDA has not yet approved MDMA-assisted therapy.
            An August 2024 decision requested additional trials. Australia
            authorized psychiatrist prescription of MDMA for PTSD in 2023,
            making it the first country to do so. Research continues, and
            the clinical evidence for what MDMA can do inside a proper
            therapeutic container is as strong as anything in the
            psychedelic medicine space.
          </p>

          <MedicinePullquote>
            I am not against MDMA. I am against the casual use of a
            medicine whose healing has only ever been demonstrated inside
            a clinical container. The container matters as much as the
            molecule.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="dosage"
          eyebrow="HARM REDUCTION · DOSE"
          heading={<>What the dose actually is.</>}
        >
          <p>
            Harm reduction means naming numbers out loud. If someone is
            going to take MDMA, they deserve to know what the
            research-backed dosing looks like, what the recreational dosing
            tends to look like, and why the gap between those two numbers
            is where most of the damage happens.
          </p>

          <DoseBlock label="Clinical trial dosing (MAPS Phase 3)">
            <li>Initial dose: 75&ndash;125 mg, taken orally</li>
            <li>Optional booster: 62.5 mg, 90 minutes later</li>
            <li>
              Session length: 6&ndash;8 hours with two trained clinicians
              present
            </li>
            <li>Three sessions total, spaced 3&ndash;5 weeks apart</li>
            <li>Therapeutic integration sessions between and after</li>
          </DoseBlock>

          <DoseBlock label="Recreational / ceremonial range often seen">
            <li>Single doses of 100&ndash;200 mg are common</li>
            <li>
              Redosing within the same night &mdash; often pushing the
              total well past 200 mg &mdash; is extremely common
            </li>
            <li>
              Stacking with alcohol, cannabis, stimulants, or other
              psychedelics is extremely common
            </li>
            <li>No trained container. No integration. No purity testing, usually.</li>
          </DoseBlock>

          <DoseBlock label="What actually fits inside the person’s body">
            <li>
              A general harm reduction formula is roughly{' '}
              <strong>1&ndash;1.5 mg per kg of body weight</strong>, oral,
              single dose, no redose
            </li>
            <li>
              For a 150&nbsp;lb person, that&rsquo;s roughly 70&ndash;100 mg
              as a single dose
            </li>
            <li>
              Above 1.5 mg/kg the risk of neurotoxicity rises steeply. The
              higher the dose, the more serotonin is depleted, the more
              oxidative damage occurs in serotonergic neurons. More is not
              more. More is worse.
            </li>
          </DoseBlock>

          <p>
            Purity is the other half of the dose conversation. MDMA sold
            as pills, powder, or molly is frequently cut with &mdash; or
            entirely substituted by &mdash; other substances. PMA and PMMA
            look and taste similar to MDMA but are far more toxic,
            especially at the same doses. Fentanyl contamination has
            appeared in every major illicit drug supply in North America.
            If someone is going to take a substance, a reagent test kit
            and a fentanyl test strip cost less than $30 combined and have
            prevented more deaths than I can count.{' '}
            <a
              href="https://dancesafe.org"
              target="_blank"
              rel="noreferrer"
            >
              DanceSafe
            </a>{' '}
            distributes these and gives dosing harm reduction advice that
            is more current than any clinical site can be.
          </p>

          <MedicinePullquote>
            I have never once regretted handing a client a test kit. I
            have regretted, more than once, the conversations I did not
            have with people who assumed their source was clean.
          </MedicinePullquote>
        </MedicineSection>

        <SafetyCallout
          id="safety"
          label="SAFETY · HARD INTERACTIONS"
          heading="Never combine MDMA with any of the following."
        >
          <p>
            Combinations can produce <strong>serotonin syndrome</strong>, a
            life-threatening condition characterized by high fever, muscle
            rigidity, confusion, seizures, and cardiac collapse.
          </p>
          <ul>
            <li>
              <strong>MAOIs</strong> (monoamine oxidase inhibitors) &mdash;
              including phenelzine, tranylcypromine, moclobemide, and the
              beta-carbolines found in ayahuasca
            </li>
            <li>
              <strong>SSRIs and SNRIs</strong> &mdash; including Prozac,
              Zoloft, Lexapro, Effexor, Cymbalta, and many others. SSRIs
              also significantly <em>blunt</em> MDMA&rsquo;s effects, so
              people sometimes dose higher to compensate, which raises
              neurotoxicity risk without restoring the therapeutic effect.
            </li>
            <li>Tramadol</li>
            <li>Lithium</li>
            <li>St. John&rsquo;s Wort</li>
            <li>
              Dextromethorphan (DXM &mdash; found in many over-the-counter
              cough medicines)
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Absolute cardiac and medical contraindications
          </h4>
          <ul>
            <li>Uncontrolled hypertension</li>
            <li>History of heart disease, arrhythmia, or stroke</li>
            <li>Pregnancy</li>
            <li>
              Known personal or first-degree-family history of psychotic
              disorder
            </li>
            <li>Severe liver or kidney disease</li>
          </ul>

          <h4 className="safety-callout-subheading">
            Hard rule on re-dosing frequency
          </h4>
          <ul>
            <li>
              Minimum <strong>4&ndash;6 weeks</strong> between sessions
              &mdash; the window the serotonergic system needs to recover.
            </li>
            <li>
              Weekly or monthly MDMA use is neurotoxic. Full stop. The
              research on this is not ambiguous.
            </li>
          </ul>
        </SafetyCallout>

        <MedicineSection
          id="party-drug"
          eyebrow="A PATTERN"
          heading={<>When MDMA leaves the clinical container.</>}
        >
          <p>
            MDMA has become part of a wider conversation in the conscious
            community. It shows up at ecstatic dance floors, medicine
            retreats, breathwork events, and private ceremonies, in ways
            that echo the role ecstasy once played at raves in the 1990s,
            now wrapped in sacred language. In some of these spaces it is
            offered as a medicine. In others, it is stacked with cannabis,
            with alcohol, with ketamine, or with ayahuasca the following
            night. The presentation is ceremonial. The molecule itself
            doesn&rsquo;t know the difference.
          </p>
          <p>
            Who is holding the room is a question worth asking. Some
            facilitators carrying MDMA are brilliant, deeply trained, and
            paired with clinical care. Others have completed a weekend
            course and now call themselves medicine workers, a beautiful
            title that doesn&rsquo;t automatically come with the training
            to run a cardiac screening, review a medication list for SSRI
            interactions, or recognize the early signs of serotonin
            syndrome. That gap matters less when a dose is 75 mg in a
            clinical trial. It matters a great deal when a dose is 200 mg
            on a dance floor.
          </p>
          <p>
            Something to know about pharmacology: it doesn&rsquo;t bend to
            intention. MDMA&rsquo;s neurotoxicity is dose-dependent and
            frequency-dependent. The stimulant load on the cardiovascular
            system responds to the molecule, not to the setting. A
            45-year-old at a retreat with undiagnosed hypertension carries
            as much risk as a 20-year-old at a festival, often more,
            because the retreat feels safer. Sometimes it is. Sometimes
            what feels safe and what is safe are different things, and
            that difference is where care has to do its work.
          </p>
          <p>
            These compounds are worth exploring. The invitation is to
            hold them with both hands, the ceremonial and the clinical.
            Neither is enough on its own. Both together is where MDMA
            actually becomes the medicine people hope it is.
          </p>

          <MedicinePullquote>
            The medicines don&rsquo;t know if the room is a rave or a
            retreat. The nervous system responds to the pharmacology, not
            the playlist.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="low-dose"
          eyebrow="LOW-DOSE USE"
          heading={<>The somatic-release question.</>}
        >
          <p>
            Some clinicians are exploring low-dose MDMA (25&ndash;75 mg)
            as a somatic release tool &mdash; a way to create just enough
            emotional and bodily openness to process stored trauma without
            entering the full empathogenic state. This is being explored
            in trauma-focused therapy, couples therapy, and MDMA-assisted
            therapy for PTSD in populations sensitive to higher doses
            (older adults, people with complex PTSD). The clinical
            evidence for low-dose MDMA as a standalone modality is still
            thin. Most of the promising research uses full-dose MDMA
            inside a therapeutic container.
          </p>
          <p>
            What is <em>not</em> well-supported is &ldquo;microdosing&rdquo;
            MDMA the way people microdose psilocybin &mdash; small
            sub-perceptual doses taken on a regular schedule. This pattern
            has no research base, carries the same neurotoxicity risk as
            full-dose use on a per-session basis, and the frequency of
            dosing compounds that risk rapidly. Any protocol that involves
            taking MDMA more often than once every 4&ndash;6 weeks is not
            a microdosing protocol. It is a neurotoxicity protocol.
          </p>
        </MedicineSection>

        <MedicineSection
          id="integration"
          eyebrow="AFTER THE SESSION"
          heading={<>The comedown is part of the medicine.</>}
        >
          <p>
            MDMA floods the brain with serotonin during the session. The
            body does not have a bottomless reservoir. The 2&ndash;5 days
            after a session are typically characterized by a serotonin
            dip &mdash; called by some the &ldquo;Tuesday blues&rdquo;
            &mdash; which can feel like depression, irritability,
            sensitivity, tearfulness, or emotional flatness. This is not
            a failure of the session. It is a predictable pharmacological
            echo, and understanding that in advance is part of how people
            move through it without panicking.
          </p>
          <p>
            Supporting the comedown well: hydration, rest, whole foods,
            5-HTP or L-tryptophan starting the day after (not the day of;
            taking tryptophan precursors during or right after the session
            can worsen neurotoxicity), gentle movement, and time with
            people who are patient and warm. Integration work &mdash;
            journaling, therapy, IFS (Internal Family Systems) parts work
            &mdash; is the other half. What surfaced during the session
            becomes workable in the week that follows, not during the
            session itself. The session is the window. Integration is the
            building.
          </p>

          <MedicinePullquote>
            The most important session is not the one you took the
            medicine in. It is the one you have with yourself the Tuesday
            after.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="decision"
          eyebrow="A DECISION FRAMEWORK"
          heading={<>A nurse&rsquo;s honest read.</>}
        >
          <div className="decision-block">
            <p className="decision-block-label">
              <em>MDMA might serve someone who:</em>
            </p>
            <ul className="decision-list">
              <li>
                Is working with a trained facilitator or clinician, not
                doing this alone or at an event
              </li>
              <li>
                Has screened clear of the hard interactions (no SSRIs, no
                MAOIs, no cardiac history, etc.)
              </li>
              <li>
                Has a specific therapeutic aim &mdash; trauma processing,
                a stuck relationship, grief that has not moved
              </li>
              <li>
                Is willing to commit to integration support in the weeks
                after
              </li>
              <li>
                Can afford to wait at least 4&ndash;6 weeks between
                sessions
              </li>
              <li>
                Has tested their substance or is receiving it from a
                clinical source
              </li>
            </ul>
          </div>

          <div className="decision-block">
            <p className="decision-block-label">
              <em>MDMA is probably not the right tool for someone who:</em>
            </p>
            <ul className="decision-list decision-list--not">
              <li>
                Is on an SSRI and hoping to just &ldquo;feel&rdquo; the
                medicine anyway
              </li>
              <li>Is looking for a weekend at an ecstatic dance</li>
              <li>
                Has a heart condition, is pregnant, or has psychiatric
                instability without a care team
              </li>
              <li>
                Is stacking substances &mdash; alcohol, cannabis,
                ayahuasca, ketamine, other psychedelics &mdash; in the
                same 72-hour window
              </li>
              <li>Is hoping MDMA will do the integration work for them</li>
              <li>Is using it weekly or monthly</li>
            </ul>
          </div>

          <MedicinePullquote>
            There is a version of MDMA use that can be profoundly healing,
            and there is a version that is slowly damaging the very people
            who trust it most. The difference is almost never the molecule.
            It is the container.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="member-cta"
          eyebrow="IF YOU ARE PREPARING FOR A SESSION"
          heading={<em>The member site holds the rest.</em>}
        >
          <p>
            If you are preparing to work with MDMA &mdash; with a
            facilitator, a clinician, or inside a research trial &mdash;
            the member site holds the prep protocols, medication
            screening tools, cardiac screening forms, and the 30-day
            integration framework I use with my clients. Access is by
            invitation. If you are working with me or one of our partner
            practitioners, you will receive a magic link to the email on
            file.
          </p>
          <p style={{ marginTop: 28 }}>
            <Link to="/login" className="btn btn-accent">
              Enter member site
            </Link>
          </p>
          <p
            style={{
              marginTop: 20,
              fontSize: 14,
              color: 'var(--ink-mute)',
              lineHeight: 1.6,
            }}
          >
            If you are not currently a client, you are still welcome to
            read everything on the public side of this site. That&rsquo;s
            what it&rsquo;s here for.
          </p>
        </MedicineSection>

        <MedicineSection
          id="further-reading"
          eyebrow="FURTHER READING"
          heading={<>Where to go deeper.</>}
        >
          <ul className="reading-list">
            <li>
              <a
                href="https://maps.org"
                target="_blank"
                rel="noreferrer"
              >
                MAPS &mdash; Multidisciplinary Association for Psychedelic
                Studies
              </a>
            </li>
            <li>
              <a
                href="https://dancesafe.org"
                target="_blank"
                rel="noreferrer"
              >
                DanceSafe &mdash; purity testing, dosing harm reduction,
                community-level education
              </a>
            </li>
            <li>
              <a
                href="https://maps.org/research/"
                target="_blank"
                rel="noreferrer"
              >
                MAPS Phase 3 PTSD trial publications
              </a>
            </li>
            <li>
              <em>The Psychedelic Explorer&rsquo;s Guide</em> &mdash; James
              Fadiman
            </li>
            <li>
              <em>How to Change Your Mind</em> &mdash; Michael Pollan
            </li>
            <li>
              <em>The Body Keeps the Score</em> &mdash; Bessel van der Kolk
              (for trauma context)
            </li>
          </ul>
        </MedicineSection>

        <aside className="legal-disclaimer" role="note">
          <p>
            MDMA is a Schedule I substance under U.S. federal law as of
            2025. It is illegal to possess, distribute, or manufacture
            outside of approved research settings. This page is
            educational. It does not constitute medical advice, legal
            advice, or encouragement to use controlled substances. If you
            are considering working with any medicine discussed on this
            site, consult a licensed healthcare provider and a licensed
            legal professional in your jurisdiction. Harm reduction exists
            precisely because people make decisions despite prohibition.
            The goal here is not to advocate &mdash; it is to ensure that
            those who decide to proceed can do so with the best possible
            information.
          </p>
        </aside>
      </MedicinePageLayout>
    </>
  );
}
