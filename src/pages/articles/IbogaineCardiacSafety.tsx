import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import MedicinePageLayout from '../../components/medicine/MedicinePageLayout';
import MedicineSection from '../../components/medicine/MedicineSection';
import MedicinePullquote from '../../components/medicine/MedicinePullquote';
import SafetyCallout from '../../components/medicine/SafetyCallout';

const TOC_ITEMS = [
  { id: 'opening', label: 'Opening' },
  { id: 'what-it-does', label: 'What ibogaine actually does' },
  { id: 'qt-interval', label: 'The QT interval, in plain English' },
  { id: 'why-prolongs', label: 'Why ibogaine prolongs the QT' },
  { id: 'risk-factors', label: 'Who is at higher risk' },
  { id: 'monitored-care', label: 'What "monitored" should mean' },
  { id: 'questions-to-ask', label: 'Questions to bring to a facilitator' },
  { id: 'regulatory-landscape', label: 'The new regulatory landscape' },
  { id: 'closing', label: 'Closing' },
  { id: 'sources', label: 'Sources & further reading' },
];

export default function IbogaineCardiacSafety() {
  return (
    <>
      <Seo
        title="Ibogaine is moving into clinical trials. The cardiac questions haven't moved with it."
        description="An emergency nurse's guide to QT prolongation, CYP2D6 metabolism, and the questions every facilitator and journeyer should be asking before sitting with iboga or ibogaine — written for the new regulatory landscape."
        type="article"
        articleSection="Articles"
        articleTags={[
          'ibogaine',
          'iboga',
          'cardiac safety',
          'harm reduction',
          'QT interval',
          'plant medicine',
          'facilitator ethics',
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline:
            "Ibogaine is moving into clinical trials. The cardiac questions haven't moved with it.",
          description:
            "An emergency nurse's guide to QT, CYP2D6, and the questions every facilitator and journeyer should be asking.",
          author: {
            '@type': 'Person',
            name: 'April Bogle',
            jobTitle: 'Registered Nurse',
          },
          publisher: {
            '@type': 'Organization',
            name: 'The Psychedelic Nurse',
            url: 'https://thepsychedelicnurse.org',
          },
          datePublished: '2026-05-01',
          dateModified: '2026-05-01',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id':
              'https://thepsychedelicnurse.org/articles/ibogaine-cardiac-safety',
          },
          articleSection: 'Articles',
          about: [
            { '@type': 'Thing', name: 'Ibogaine' },
            { '@type': 'Thing', name: 'Cardiac safety' },
            { '@type': 'Thing', name: 'Harm reduction' },
            { '@type': 'Thing', name: 'QT interval' },
          ],
        }}
      />

      <MedicinePageLayout tocItems={TOC_ITEMS}>
        {/* Opening */}
        <section id="opening" className="medicine-section">
          <p className="eyebrow">ARTICLE &middot; CARDIAC SAFETY &amp; IBOGA</p>
          <h1>
            Ibogaine is moving into clinical trials. The cardiac questions
            haven&rsquo;t moved with it.
          </h1>
          <p
            style={{
              fontSize: 22,
              lineHeight: 1.5,
              fontStyle: 'italic',
              color: 'var(--ink-mute)',
              marginTop: 8,
              marginBottom: 28,
            }}
          >
            An emergency nurse&rsquo;s guide to QT, CYP2D6, and the questions
            every facilitator and journeyer should be asking &mdash; written
            for the new regulatory landscape.
          </p>
          <p
            style={{
              fontSize: 14,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--ink-mute)',
              marginBottom: 36,
            }}
          >
            By April Bogle, RN &middot; 32 years emergency medicine
          </p>

          <p>
            In late April 2026, two things happened in the same week. On April
            18, the White House signed an executive order directing the FDA
            and DEA to accelerate review of psychedelic compounds, with
            ibogaine specifically named in the order. On April 24, the FDA
            cleared the first US clinical study of an ibogaine-derived
            treatment for alcohol use disorder.
          </p>

          <p>
            I work in the world of plant medicine and harm reduction. I am
            also a nurse who spent thirty-two years in emergency departments.
            When I see ibogaine moving toward the clinical mainstream, I feel
            two things at once. The first is gratitude &mdash; for people
            facing opioid use disorder and PTSD, ibogaine has produced clinical
            results that other medicines have not. The second is concern
            &mdash; because the regulatory timeline is moving faster than the
            cardiac safety conversation, and the people most likely to seek
            out this medicine in the next twelve months are not the
            participants in monitored clinical trials. They are people
            sitting in retreat centers, in private homes, in community
            ceremonies, often without anyone in the room who has read an EKG
            before.
          </p>

          <p>
            This piece is for those people, and for the facilitators who serve
            them. I want you to walk in knowing what your heart is being
            asked to do.
          </p>
        </section>

        {/* What ibogaine actually does */}
        <MedicineSection
          id="what-it-does"
          eyebrow="THE PHARMACOLOGY"
          heading={<>What ibogaine actually does.</>}
        >
          <p>
            Ibogaine is the principal psychoactive alkaloid in{' '}
            <em>Tabernanthe iboga</em>, a shrub native to Central Africa. In
            ceremonial contexts, it has been used for generations by Bwiti
            practitioners. In clinical contexts, it has shown remarkable
            ability to reduce cravings and withdrawal symptoms in people with
            opioid and stimulant use disorders, often after a single
            administration.
          </p>
          <p>
            It also produces a long, intense, often physically demanding
            journey &mdash; typically twelve to thirty-six hours &mdash; and
            during that journey, it does something to the heart that no other
            psychedelic does in the same way.
          </p>

          <MedicinePullquote>
            It prolongs the QT interval. Of all the medicines on this site,
            this is the only one I would insist on a 12-lead EKG before
            sitting with &mdash; every time, no exceptions.
          </MedicinePullquote>
        </MedicineSection>

        {/* The QT interval */}
        <MedicineSection
          id="qt-interval"
          eyebrow="THE PHYSIOLOGY"
          heading={<>The QT interval, in plain English.</>}
        >
          <p>
            Every heartbeat is an electrical event. A wave of electricity
            sweeps through the upper chambers, then the lower chambers, then
            the heart resets and waits for the next signal.
          </p>
          <p>
            The QT interval is the time it takes for the lower chambers
            &mdash; the ventricles, the workhorses of your circulation
            &mdash; to complete one electrical cycle and reset. It begins
            when the ventricles start to depolarize and ends when they finish
            repolarizing. On an EKG tracing, it is the distance from the
            start of the QRS complex to the end of the T wave.
          </p>
          <p>
            A normal QT interval, corrected for heart rate (the
            &ldquo;QTc&rdquo;), is generally under 450 milliseconds in men
            and under 460 milliseconds in women. When the QT lengthens past
            about 500 milliseconds, the risk of a particular arrhythmia
            called torsades de pointes &mdash; a rapid, chaotic ventricular
            rhythm &mdash; increases sharply.
          </p>
          <p>
            Torsades de pointes can stop the heart.
          </p>
          <p>
            This is not a theoretical risk in the ibogaine literature. It is
            the risk. The cardiac deaths reported with iboga have largely come
            from this exact mechanism: a prolonged QT interval that crossed
            into arrhythmic territory in someone whose heart had not been
            checked beforehand.
          </p>
        </MedicineSection>

        {/* Why ibogaine prolongs the QT */}
        <MedicineSection
          id="why-prolongs"
          eyebrow="THE MECHANISM"
          heading={<>Why ibogaine prolongs the QT.</>}
        >
          <p>
            In the cardiac muscle cell, repolarization depends on potassium
            flowing out through specific channels. The most important of
            these for QT physiology is called the hERG channel (sometimes
            written I<sub>Kr</sub>).
          </p>
          <p>
            Ibogaine and its primary metabolite, noribogaine, both block hERG
            channels. When you slow the outward potassium current, you slow
            repolarization, which lengthens the QT.
          </p>
          <p>
            This is not a quirky side effect. It is part of how the drug
            interacts with cardiac tissue, and it is dose-dependent. The
            higher the plasma concentration, the more pronounced the QT
            prolongation. And because noribogaine has a long half-life
            &mdash; measured in days, not hours &mdash; the prolongation can
            persist long after the journey ends.
          </p>
          <p>
            A 2026 scoping review in <em>Molecules</em> summarized the cardiac
            safety picture this way: clinical translation of ibogaine remains
            substantially constrained by unresolved cardiac risk, even as
            novel structural congeners (oxa-iboga compounds, 18-MC) are being
            developed specifically to retain anti-addictive efficacy without
            the hERG block.
          </p>
          <p>
            In other words, the field knows the heart problem. The field is
            working on it. But the iboga most people are sitting with today
            is the same iboga that has been associated with cardiac deaths
            for decades.
          </p>
        </MedicineSection>

        {/* Risk factors - safety callout */}
        <SafetyCallout
          id="risk-factors"
          label="SAFETY &middot; KNOW YOUR RISK"
          heading={<>Who is at higher risk.</>}
        >
          <p>
            Plenty of people sit with iboga and have no cardiac event. The
            question is not whether it is universally dangerous &mdash; it is
            not. The question is whether <em>you specifically</em> are in a
            higher-risk group, and whether that has been assessed.
          </p>

          <h4 className="safety-callout-subheading">
            Medications that prolong the QT
          </h4>
          <p>
            This is the longest list and the most overlooked. Methadone is
            the most clinically significant &mdash; many people seeking
            ibogaine for opioid use disorder are on or recently coming off
            methadone, which itself prolongs QT. Other QT-prolonging
            medications include certain antidepressants (citalopram and
            escitalopram in higher doses, and others), antipsychotics
            (haloperidol, ziprasidone), antibiotics (azithromycin,
            levofloxacin, moxifloxacin), antifungals (fluconazole),
            antiemetics (ondansetron in higher doses), and several more.{' '}
            <a href="https://www.crediblemeds.org/" target="_blank" rel="noreferrer">
              CredibleMeds
            </a>{' '}
            maintains a public database that lists them by risk category
            &mdash; every facilitator should know it exists.
          </p>

          <h4 className="safety-callout-subheading">
            Electrolyte abnormalities
          </h4>
          <p>
            Low potassium, low magnesium, and low calcium all extend the QT.
            Anyone who has been vomiting, fasting heavily, using diuretics,
            or in a state of dehydration before a ceremony is at higher risk.
            Some preparation protocols for ibogaine specifically include
            fasting, which is exactly the wrong direction for electrolytes.
          </p>

          <h4 className="safety-callout-subheading">
            Pre-existing cardiac conditions
          </h4>
          <p>
            Congenital long QT syndrome, prior arrhythmias, structural heart
            disease, congestive heart failure, or a family history of sudden
            cardiac death &mdash; particularly in young relatives &mdash;
            should all be flagged in screening. Some long QT syndromes are
            silent until they aren&rsquo;t.
          </p>

          <h4 className="safety-callout-subheading">CYP2D6 status</h4>
          <p>
            This is the one most facilitators have never heard of. Ibogaine
            is metabolized to noribogaine primarily through the liver enzyme
            CYP2D6. About five to ten percent of people of European descent
            are &ldquo;poor metabolizers&rdquo; of CYP2D6 &mdash; they
            convert ibogaine more slowly, which means the parent drug stays
            in their system longer, which means more cumulative hERG channel
            block. CYP2D6 genotyping is increasingly available and is part
            of best-practice protocols in the most rigorous clinical
            settings.
          </p>

          <h4 className="safety-callout-subheading">Female sex</h4>
          <p>
            Women generally have a longer baseline QT than men. This is not
            a reason not to sit. It is a reason for closer baseline
            assessment.
          </p>
        </SafetyCallout>

        {/* What monitored should mean */}
        <MedicineSection
          id="monitored-care"
          eyebrow="THE STANDARD OF CARE"
          heading={<>What &ldquo;monitored&rdquo; should mean.</>}
        >
          <p>
            When I talk about monitoring, I am not being dramatic. I mean the
            same standard of care a hospital uses when administering any
            QT-prolonging IV medication.
          </p>
          <p>A monitored ibogaine setting should include:</p>

          <ul className="decision-list">
            <li>
              A <strong>12-lead EKG</strong> before administration, read by
              someone trained to read one. This is not optional. A
              pre-treatment QTc gives the baseline against which everything
              else is measured.
            </li>
            <li>
              <strong>Continuous cardiac telemetry</strong> during the dosing
              window and for hours afterward. The patient is connected to a
              monitor; someone watches the rhythm strip; alarms are set for
              QTc thresholds and rhythm changes. This is what a hospital
              tele unit does for any patient on a QT-prolonging drug.
            </li>
            <li>
              <strong>Functioning emergency equipment in the room.</strong> A
              defibrillator. IV access. Magnesium sulfate available &mdash;
              it is the first-line treatment for torsades de pointes. A
              clinician with ACLS or equivalent training within reach, not
              down the hall.
            </li>
            <li>
              <strong>A medication and electrolyte review.</strong> Real,
              comprehensive, current. Not a one-line intake form. Recent
              labs for potassium, magnesium, and calcium are appropriate.
            </li>
            <li>
              <strong>A post-treatment monitoring window.</strong> Because
              of noribogaine&rsquo;s long half-life, QT prolongation can
              persist for days. Discharge planning needs to account for that.
            </li>
          </ul>

          <p style={{ marginTop: 28 }}>
            The St. Kitts cohort published by Dr. Deborah Mash and colleagues
            &mdash; 191 patients on continuous EKG telemetry with CYP2D6
            genotyping &mdash; saw transient QT prolongation that returned to
            baseline, with no clinically significant arrhythmias,
            hospitalizations, or deaths. That is what proper monitoring looks
            like, and the safety record reflects it. The deaths reported in
            the literature have largely come from settings that did not look
            like that.
          </p>
        </MedicineSection>

        {/* Questions to ask */}
        <MedicineSection
          id="questions-to-ask"
          eyebrow="WHAT TO ASK A FACILITATOR"
          heading={<>Questions to bring to any facilitator.</>}
        >
          <p>
            If you are considering an iboga or ibogaine ceremony, here is
            what I would ask, in plain language:
          </p>

          <ol className="decision-list">
            <li>
              Will I have a 12-lead EKG before the ceremony, and will a
              clinician read it?
            </li>
            <li>
              Will I be reviewed for medications that prolong the QT
              interval, including methadone, certain antidepressants,
              antibiotics, and antifungals?
            </li>
            <li>
              Will I have current labs for potassium, magnesium, and
              calcium?
            </li>
            <li>
              Will I be screened for personal or family history of cardiac
              arrhythmias or sudden cardiac death?
            </li>
            <li>
              Will I be on continuous cardiac monitoring during and after
              dosing?
            </li>
            <li>
              Is there functioning emergency equipment in the room &mdash; a
              defibrillator, IV access, IV magnesium sulfate?
            </li>
            <li>
              Who in the room is trained in ACLS or equivalent, and how
              quickly can emergency services reach us if needed?
            </li>
            <li>
              What is the post-treatment monitoring plan, given that
              noribogaine&rsquo;s effects on the heart can persist for days?
            </li>
          </ol>

          <p style={{ marginTop: 28 }}>
            A facilitator who takes ibogaine seriously will welcome these
            questions. A facilitator who deflects them, dismisses them, or
            tells you that &ldquo;the medicine takes care of you&rdquo; is
            telling you something important about what kind of room you are
            about to walk into.
          </p>

          <MedicinePullquote>
            I am not telling you that ibogaine is too dangerous to consider.
            I am telling you that the level of preparation you would expect
            for any other QT-prolonging medical treatment is the level of
            preparation you should expect for this one.
          </MedicinePullquote>
        </MedicineSection>

        {/* Regulatory landscape */}
        <MedicineSection
          id="regulatory-landscape"
          eyebrow="THE NEW LANDSCAPE"
          heading={
            <>What the new regulatory landscape changes &mdash; and what it doesn&rsquo;t.</>
          }
        >
          <p>
            The April 18, 2026 executive order accelerated federal review of
            psychedelic compounds and named ibogaine specifically. The FDA
            cleared the first US ibogaine clinical trial. The DEA increased
            production quotas. There is real momentum, and that momentum
            will produce more rigorous data, more standardized protocols,
            and &mdash; eventually &mdash; modified compounds like oxa-iboga
            and 18-methoxycoronaridine that may carry the therapeutic
            benefit without the cardiac shadow.
          </p>
          <p>
            What the regulatory motion has not changed: the cardiac
            physiology of the iboga most people will sit with in 2026. That
            has not moved. The hERG channel still blocks. The QT still
            prolongs. The same medications, electrolytes, and genetic
            factors still matter. A federal headline does not screen your
            heart.
          </p>
          <p>
            If anything, the next year is the year to be most careful,
            because more people will seek out this medicine, more retreat
            centers will open, and the gap between the most rigorous and
            the most casual settings will widen before it narrows.
          </p>
        </MedicineSection>

        {/* Closing */}
        <MedicineSection
          id="closing"
          eyebrow="A CLOSING THOUGHT"
          heading={<>Respect for the medicine includes respect for the heart.</>}
        >
          <p>
            I have great respect for what iboga does for people. I have
            witnessed lives turn on a single ceremony. I would not write any
            of this if I did not also believe that the medicine is worth the
            careful preparation it asks of us.
          </p>
          <p>
            But respect for a medicine includes respect for what it asks of
            your body. Ibogaine asks something of your heart that no other
            psychedelic asks in the same way. You &mdash; and the
            facilitator who is going to sit with you &mdash; should both be
            able to answer for it before you begin.
          </p>

          <MedicinePullquote>
            If the answers are clear, the science says you can sit safely.
            If the answers are vague, please pause. Your heart is
            irreplaceable. The medicine will still be there when you are
            ready.
          </MedicinePullquote>

          <p style={{ marginTop: 28 }}>
            For more on iboga as a medicine, see the{' '}
            <Link to="/medicines/iboga">iboga medicine page</Link>. For the
            broader harm reduction frame this article sits within, see the{' '}
            <Link to="/harm-reduction">harm reduction principles</Link> on
            this site.
          </p>
        </MedicineSection>

        {/* Sources */}
        <MedicineSection
          id="sources"
          eyebrow="SOURCES &amp; FURTHER READING"
          heading={<>The science behind this piece.</>}
        >
          <p>
            All citations link to peer-reviewed sources, regulatory
            documents, and government health agencies where possible.
          </p>

          <h4 style={{ marginTop: 28, marginBottom: 12 }}>
            Cardiac safety and pharmacology
          </h4>
          <ul className="reading-list">
            <li>
              <a
                href="https://www.mdpi.com/1420-3049/31/3/545"
                target="_blank"
                rel="noreferrer"
              >
                Ibogaine: Therapeutic Potential, Cardiac Safety, and
                Translational Perspectives in the Treatment of Substance Use
                Disorders &mdash; A Scoping Review
              </a>{' '}
              (2026). <em>Molecules.</em>
            </li>
            <li>
              <a
                href="https://onlinelibrary.wiley.com/doi/10.1111/add.70319"
                target="_blank"
                rel="noreferrer"
              >
                Brunt et al., Rare but relevant: Ibogaine and cardiovascular
                complications &mdash; prolonged QT interval and ventricular
                arrhythmias
              </a>{' '}
              (2024). <em>Addiction.</em>
            </li>
            <li>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4382526/"
                target="_blank"
                rel="noreferrer"
              >
                The Anti-Addiction Drug Ibogaine and the Heart: A Delicate
                Relation
              </a>{' '}
              &mdash; PMC.
            </li>
            <li>
              <a
                href="https://www.nature.com/articles/s41467-024-51856-y"
                target="_blank"
                rel="noreferrer"
              >
                Oxa-Iboga alkaloids lack cardiac risk and disrupt opioid use
                in animal models
              </a>{' '}
              &mdash; <em>Nature Communications.</em>
            </li>
            <li>
              <a
                href="https://www.crediblemeds.org/"
                target="_blank"
                rel="noreferrer"
              >
                CredibleMeds QTdrugs list
              </a>{' '}
              &mdash; the standard public registry of QT-prolonging
              medications.
            </li>
          </ul>

          <h4 style={{ marginTop: 28, marginBottom: 12 }}>
            Clinical context and the executive order
          </h4>
          <ul className="reading-list">
            <li>
              <a
                href="https://www.whitehouse.gov/presidential-actions/2026/04/accelerating-medical-treatments-for-serious-mental-illness/"
                target="_blank"
                rel="noreferrer"
              >
                Executive Order: Accelerating Medical Treatments for Serious
                Mental Illness
              </a>{' '}
              (April 18, 2026). The White House.
            </li>
            <li>
              <a
                href="https://www.npr.org/2026/04/18/nx-s1-5789859/psychedelic-treatments-mental-health"
                target="_blank"
                rel="noreferrer"
              >
                Trump signs order fast-tracking review of psychedelics for
                mental health disorders
              </a>{' '}
              (April 2026). NPR.
            </li>
            <li>
              <a
                href="https://www.cnn.com/2026/04/24/health/fda-psychedelic-drugs-priority-vouchers"
                target="_blank"
                rel="noreferrer"
              >
                FDA moves to fast-track review of psilocybin and methylone
                for mental health
              </a>{' '}
              (April 24, 2026). CNN.
            </li>
            <li>
              <a
                href="https://www.frierlevitt.com/articles/psychedelics-executive-order-fda-priority-vouchers-ibogaine/"
                target="_blank"
                rel="noreferrer"
              >
                The Psychedelics Executive Order: Priority Review Vouchers,
                Ibogaine&rsquo;s Cardiac Shadow, and the Road Ahead
              </a>{' '}
              (2026). Frier Levitt.
            </li>
            <li>
              <a
                href="https://www.medscape.com/viewarticle/ibogaine-psychiatric-illness-federal-policy-push-meets-2026a1000dvc"
                target="_blank"
                rel="noreferrer"
              >
                Ibogaine for Psychiatric Illness: Federal Policy Push Meets
                Safety Concerns
              </a>{' '}
              (2026). Medscape.
            </li>
            <li>
              <a
                href="https://www.marijuanamoment.net/dea-boosts-legal-production-levels-for-psychedelics-like-psilocybin-and-dmt-in-final-rule-for-2026/"
                target="_blank"
                rel="noreferrer"
              >
                DEA Boosts Legal Production Levels for Psychedelics in Final
                Rule for 2026
              </a>{' '}
              &mdash; Marijuana Moment.
            </li>
          </ul>
        </MedicineSection>

        <aside className="legal-disclaimer" role="note">
          <p>
            This piece is educational. It does not constitute medical advice
            and is not a substitute for evaluation by a clinician who knows
            your history. Ibogaine is a Schedule I substance under U.S.
            federal law as of 2026; it is illegal to possess, distribute, or
            manufacture outside of approved research settings. If you are
            considering ibogaine for opioid use disorder, please seek a
            setting with full cardiac monitoring and clinical oversight.
            Harm reduction exists precisely because people make decisions
            despite prohibition. The goal here is not to advocate &mdash; it
            is to ensure that those who decide to proceed can do so with the
            best possible information.
          </p>
        </aside>
      </MedicinePageLayout>
    </>
  );
}
