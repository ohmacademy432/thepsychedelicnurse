import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import MedicinePageLayout from '../../components/medicine/MedicinePageLayout';
import MedicineHero from '../../components/medicine/MedicineHero';
import MedicineSection from '../../components/medicine/MedicineSection';
import MedicinePullquote from '../../components/medicine/MedicinePullquote';
import DoseBlock from '../../components/medicine/DoseBlock';
import SafetyCallout from '../../components/medicine/SafetyCallout';

const TOC_ITEMS = [
  { id: 'the-compound', label: 'What iboga and ibogaine are' },
  { id: 'bwiti', label: 'The Bwiti lineage' },
  { id: 'ceremonial', label: 'Ceremonial iboga' },
  { id: 'clinical', label: 'Clinical ibogaine' },
  { id: 'cardiac', label: 'The cardiac conversation' },
  { id: 'safety', label: 'Contraindications' },
  { id: 'dosage', label: 'What the dose actually is' },
  { id: 'container', label: 'The container' },
  { id: 'integration', label: 'Integration' },
  { id: 'decision', label: 'Decision framework' },
  { id: 'member-cta', label: 'Member site' },
  { id: 'further-reading', label: 'Further reading' },
  { id: 'addiction-resources', label: 'If you are in addiction' },
];

export default function Iboga() {
  return (
    <>
      <Seo
        title="Iboga and Ibogaine — the cardiac conversation"
        description="Iboga has the most serious cardiac risk profile of any medicine on this site, and the most remarkable addiction-interruption effects in modern psychiatry. A nurse's honest guide to iboga safety, ibogaine treatment, and the Bwiti tradition this medicine comes from."
        type="article"
        articleSection="Medicine Library"
        articleTags={['iboga', 'ibogaine', 'harm reduction', 'addiction', 'Bwiti', 'QT prolongation', 'cardiac safety']}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Iboga and Ibogaine — the cardiac conversation',
          description:
            'Iboga has the most serious cardiac risk profile of any medicine on this site, and the most remarkable addiction-interruption effects in modern psychiatry.',
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
            '@id': 'https://thepsychedelicnurse.org/medicines/iboga',
          },
          articleSection: 'Medicine Library',
          about: [
            { '@type': 'Thing', name: 'Iboga' },
            { '@type': 'Thing', name: 'Ibogaine' },
            { '@type': 'Thing', name: 'Addiction treatment' },
            { '@type': 'Thing', name: 'Bwiti' },
          ],
        }}
      />

      <MedicinePageLayout tocItems={TOC_ITEMS}>
        <MedicineHero
          eyebrow="TWO MEDICINES · ONE MOLECULE FAMILY"
          name="Iboga & Ibogaine"
          subtitle="Tabernanthe iboga · 12-methoxyibogamine"
          intro="Iboga is the most clinically serious medicine in this library. It is also one of the most powerful, with a documented ability to interrupt opioid and stimulant addiction in a single session — something no conventional medicine has ever matched. This page teaches both the whole-root Bwiti ceremonial medicine and the extracted ibogaine used in clinical settings. It teaches them carefully, because the margin for error with this medicine is smaller than with any other medicine on this site, and because the people considering it often have the most to gain and the most to lose."
        />

        <MedicineSection
          id="the-compound"
          eyebrow="THE COMPOUND"
          heading={<>The root, the alkaloid, and the difference between them.</>}
        >
          <p>
            Iboga refers to the root bark of{' '}
            <em>Tabernanthe iboga</em>, a perennial shrub that grows
            naturally in the tropical rainforests of West Central
            Africa, primarily Gabon, Cameroon, the Republic of the
            Congo, and Equatorial Guinea. The word{' '}
            <em>iboga</em> translates roughly to &ldquo;to care
            for&rdquo; or &ldquo;to heal&rdquo; in multiple Bantu
            languages of the Congo basin. Dried and ground, the root
            bark contains a family of alkaloids, the most studied of
            which is ibogaine. It also contains ibogamine,
            tabernanthine, noribogaine, and over a dozen other active
            compounds that interact with each other in ways
            pharmacologists are still mapping.
          </p>
          <p>
            <strong>Ibogaine</strong>, specifically, is the single
            alkaloid most associated with both the therapeutic and
            the psychoactive effects of iboga. In clinical research
            and medical settings, ibogaine is typically extracted
            from the plant and administered in purified form, usually
            as ibogaine hydrochloride (ibogaine HCl). A clinical
            ibogaine session uses the isolated compound at a measured
            dose, under medical supervision, almost always in the
            context of addiction treatment. A Bwiti ceremonial
            session uses whole-root preparations that contain
            ibogaine alongside its alkaloid siblings, often at
            different effective doses, in a ritual and spiritual
            container rather than a clinical one.
          </p>
          <p>
            Pharmacologically, ibogaine is complex. It binds to
            multiple receptor systems (NMDA, sigma-2, kappa-opioid,
            and several serotonin receptors) in a combination that is
            unusual and not fully understood. It is also metabolized
            in the liver into <strong>noribogaine</strong>, a
            long-acting metabolite that stays in the body for days to
            weeks after a single session and appears to contribute to
            the extended therapeutic effects. This metabolic profile
            is part of why ibogaine works the way it does for
            addiction: the body is not &ldquo;back to normal&rdquo;
            the day after the session, and cravings often remain
            suppressed for weeks.
          </p>
          <p>
            The most important thing for anyone considering this
            medicine to understand pharmacologically is this:
            ibogaine prolongs the <strong>QT interval</strong> on an
            electrocardiogram. The QT interval is a measurement of
            how long the heart&rsquo;s electrical system takes to
            reset between beats. When it is prolonged too far (by
            ibogaine, by certain medications, by electrolyte
            imbalances, or by combinations of these) it creates the
            conditions for a dangerous arrhythmia called{' '}
            <strong>torsades de pointes</strong>, which can progress
            to cardiac arrest. This is the mechanism underneath the
            iboga deaths that do occur. It is not a mystery. It is
            not a curse. It is a specific, measurable, preventable
            cardiac vulnerability that proper screening identifies in
            advance.
          </p>

          <MedicinePullquote>
            Iboga deaths are not random. In almost every case I have
            read about, the person who died had a cardiac risk factor
            that would have been caught by an EKG and a careful
            medication review. Screening is the medicine&rsquo;s
            safety net. Skipping it is not bravery &mdash; it is the
            one thing this medicine does not forgive.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="bwiti"
          eyebrow="THE LINEAGE"
          heading={<>Where this medicine comes from, and who has carried it.</>}
        >
          <p>
            Iboga is not a medicine discovered by the West. It is a
            medicine held by the <strong>Bwiti</strong> (a spiritual
            and healing tradition native to Gabon, Cameroon, and
            neighboring regions) for at least several centuries, and
            probably much longer. The earliest known users were
            Pygmy forest forager peoples, including the Aka and
            Baka, whose knowledge passed over time to Bantu-speaking
            peoples including the Fang, Mitsogo, and Apindji, who
            integrated iboga into increasingly structured ritual
            practice. Bwiti emerged as a syncretic spiritual
            tradition, blending animism, ancestor veneration, and
            later, elements of Christianity introduced through
            colonial contact, with iboga as its central sacrament.
          </p>
          <p>
            In Bwiti, iboga is called a holy wood. It is used in
            initiation ceremonies that mark the passage from
            childhood into adulthood, in healing work for physical
            and spiritual ailments, in divination, and in communal
            ritual. The ceremonies are held by <em>ngangas</em>,
            sometimes spelled nganga, nima, or kombo depending on
            the regional branch and the specific role. These are
            trained ceremonial leaders whose apprenticeships can
            span years or decades. The two major branches most
            encountered in the modern ceremonial world are the Fang
            branch, emphasizing initiation, and the Missoko Bwiti of
            the Mitsogo people, emphasizing healing and divination.
            Both are living traditions with active practitioners in
            Gabon today.
          </p>
          <p>
            A Bwiti initiation is not a weekend experience. The
            traditional process spans seven to ten days and includes
            preparatory cleansing with plant diets, shamanic
            treatments, dialogue with elders, and the ceremonial
            ingestion of escalating doses of iboga &mdash; sometimes
            to the point of a so-called &ldquo;flood&rdquo;
            experience that can last 24 to 48 hours and is structured
            around ancestors, drumming and <em>ngombi</em> harp
            music, ritual fire, and the guidance of the{' '}
            <em>nganga</em>. The integration phase continues for
            weeks afterward. This is the form iboga has taken for
            generations, and it is a completely different thing from
            a Western retreat or a clinic visit.
          </p>
          <p>
            The Bwiti have been generous with outsiders. In the
            twentieth century, particularly after a French naval
            doctor brought iboga samples to Europe in 1864 and
            ibogaine was isolated in 1901, the medicine crossed into
            Western pharmacology, Western spirituality, and
            eventually Western addiction treatment. The ngangas of
            Gabon have, in many cases, openly welcomed Westerners to
            come learn. Some have come to Gabon and apprenticed
            formally. Others have received limited teachings and
            returned home to hold their own ceremonies. The range of
            how seriously Westerners have honored this lineage varies
            widely, and the record is uneven. I share this not to
            adjudicate but so that anyone considering iboga
            understands that there is a living tradition behind this
            medicine, there are real ngangas doing real work in real
            villages in Gabon today, and the respect owed is to them
            and their people &mdash; not to generic &ldquo;African
            wisdom&rdquo; phrasing that erases specifics.
          </p>

          <MedicinePullquote>
            When I speak of Bwiti, I am speaking of specific people,
            in a specific country, holding a specific living
            practice. That matters. The medicine did not come from
            the ether. It came from the ngangas and their ancestors.
            Everything I teach about iboga is rooted in that
            gratitude.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="ceremonial"
          eyebrow="WHOLE-ROOT MEDICINE"
          heading={<>What a Bwiti-style ceremony actually looks like.</>}
        >
          <p>
            A ceremonial iboga session, whether held in Gabon or in a
            Western setting following Bwiti protocols with varying
            fidelity, uses the whole root bark, often prepared as
            ground powder, sometimes mixed with a small amount of
            water. The dose is given in increments over hours,
            usually beginning in the evening and extending overnight,
            with the nganga or facilitator monitoring the participant
            closely throughout. A ceremonial &ldquo;flood&rdquo; dose
            ranges from roughly 10 to 50 grams of dried root bark,
            though effective dose varies significantly by root
            quality, source, and participant sensitivity. The
            experience unfolds over 24 to 36 hours, not 4 to 6.
          </p>
          <p>
            Physically, ceremonial iboga is demanding.{' '}
            <strong>Ataxia</strong> (loss of coordination, inability
            to stand or walk) is near-universal during the peak and
            is part of what the Bwiti consider the medicine&rsquo;s
            &ldquo;grounding&rdquo; of the participant. Nausea and
            vomiting are common; iboga is traditionally considered a
            purge medicine on the physical level. Heart rate and
            blood pressure changes occur. The participant is
            typically unable to move for many hours, during which
            visions, memories, ancestral encounters, and deep
            psychological review unfold. Bwiti practitioners describe
            the medicine as allowing the person to &ldquo;see
            themselves as they truly are&rdquo; &mdash; a complete
            life review experience that can be overwhelming,
            revelatory, healing, or all three at once.
          </p>
          <p>
            Ceremonial iboga tends to be chosen by people drawn to
            spiritual initiation, to ancestral work, to deep personal
            transformation, or to the tradition itself. It is less
            commonly the form chosen for targeted addiction treatment.
            For that, clinical ibogaine is typically more appropriate
            and more medically manageable. The two forms of this
            medicine serve different purposes. Anyone considering
            ceremonial iboga specifically should know: the experience
            is longer, the aftercare window is longer, the physical
            demands are greater, and the relationship being entered
            is not just with a molecule but with a living tradition
            that has its own expectations and its own gravity.
          </p>

          <MedicinePullquote>
            Ceremonial iboga is not a lighter version of clinical
            ibogaine. It is a longer, different medicine with a
            different shape. I have seen it change people, and I
            have seen it break people who were not prepared for what
            it asks.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="clinical"
          eyebrow="CLINICAL MEDICINE"
          heading={
            <>
              Ibogaine and addiction: what the clinical evidence
              actually shows.
            </>
          }
        >
          <p>
            The single most dramatic therapeutic effect of ibogaine,
            the effect that has drawn medical research attention for
            over fifty years, is its ability to interrupt opioid
            addiction. A single ibogaine session, administered under
            medical supervision, has been repeatedly documented to
            eliminate physical opioid withdrawal within hours, reset
            the dopamine receptor system that drives craving, and
            produce a period of weeks to months during which the
            person in recovery has genuine breathing room to rebuild
            their life without the constant physical pull of the
            addiction. No conventional medication does this. No
            other psychedelic does this at this scale. It is
            genuinely unusual, and it is the reason ibogaine clinics
            exist.
          </p>
          <p>
            The research base, while limited by ibogaine&rsquo;s
            Schedule I status in most countries, is real and
            growing. Long-term follow-up studies on ibogaine patients
            show reduced opioid use, reduced cravings, and improved
            quality of life at 1, 6, and 12 months post-treatment in
            substantial percentages of participants. The effect
            extends to methamphetamine, cocaine, and alcohol use
            disorders, though opioid addiction is where the evidence
            is strongest. The most recent substantial study, the
            Stanford trial on ibogaine for traumatic brain injury in
            Special Operations veterans, also showed unexpectedly
            dramatic improvements in PTSD, depression, anxiety, and
            cognitive function, suggesting applications beyond
            addiction.
          </p>
          <p>
            Clinical ibogaine protocols vary, but the standard
            approach involves: extensive pre-screening (EKG,
            bloodwork, medication review, psychiatric history,
            detailed medical history); a graduated dosing protocol
            usually using ibogaine HCl or a total alkaloid extract;
            continuous cardiac monitoring throughout the session;
            medical staff trained in cardiac emergencies present for
            the entire duration; 24 to 36 hours of active effects
            and monitoring; several days of post-session medical
            observation; and an aftercare plan including therapy,
            community support, and often ongoing noribogaine
            metabolite monitoring. This is medicine delivered in a
            hospital-like setting, not a retreat center.
          </p>
          <p>
            Because ibogaine is Schedule I in the United States,
            medically supervised ibogaine treatment is not legally
            available within U.S. borders. Most clinical ibogaine
            treatment in the world happens in Mexico, where ibogaine
            is unscheduled and legitimate clinics operate, and in a
            small number of facilities in Brazil, Portugal, the
            Netherlands, Costa Rica, and New Zealand. Quality varies
            enormously between facilities. A reputable clinic
            requires medical screening, has a physician present,
            uses continuous cardiac monitoring, and has emergency
            cardiac capability on site. A less reputable one may
            skip any of these and charge the same price. The
            screening and safety sections of this page are meant
            partly as a checklist someone can use to evaluate a
            clinic before committing.
          </p>
          <p>
            I want to be direct about something. For someone in
            active opioid use disorder who has tried multiple
            conventional treatments without lasting success,
            ibogaine may be one of the most important medical
            options available in the world right now. That is a real
            statement, not hyperbole. It is also a statement that
            must sit next to the cardiac reality: ibogaine has a
            nonzero fatality rate, the fatalities are almost always
            preventable with proper screening, and a clinic that
            cuts corners on screening is not a clinic. It is a
            gamble. The harm reduction task is to make sure anyone
            considering this medicine knows both halves of that
            truth: the profound therapeutic promise and the real
            clinical requirements for accessing it safely.
          </p>

          <MedicinePullquote>
            I have watched ibogaine give people a life back that no
            amount of conventional treatment had been able to reach.
            I have also watched people go to cheap clinics with no
            screening and come home in a different kind of trouble.
            The medicine is genuinely remarkable. The container
            around it is not optional. Both of those things are
            true.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="cardiac"
          eyebrow="THE CARDIAC CONVERSATION"
          heading={<>What the screening is actually checking for.</>}
        >
          <p>
            I want to spend extra time on this section because the
            cardiac risks of iboga are specific, measurable, and
            well-understood, and because most of the iboga deaths
            that have occurred could have been prevented by
            screening that takes less than an hour. This is the
            information that belongs on the public internet and
            that most sites leave out. I am going to walk through it
            as a nurse, because I am one, and because the reader
            deserves to know what proper screening actually looks
            like.
          </p>
          <p>
            Ibogaine&rsquo;s primary cardiac risk is{' '}
            <strong>QT interval prolongation</strong>. The QT
            interval, measured on an EKG (electrocardiogram),
            represents the time the heart&rsquo;s electrical system
            takes to reset between beats. Certain medications,
            electrolyte imbalances, and underlying cardiac
            conditions can lengthen this interval. When ibogaine is
            added on top of any of those, the combined prolongation
            can cross a threshold where a dangerous arrhythmia
            called <strong>torsades de pointes</strong> becomes
            possible. Torsades is a specific ventricular rhythm
            disturbance that can progress rapidly to ventricular
            fibrillation and cardiac arrest. This is not
            theoretical. This is the mechanism underneath the
            documented iboga deaths.
          </p>

          <div
            style={{
              marginTop: 48,
              marginBottom: 48,
              padding: '32px 28px',
              border: '0.5px solid var(--sage)',
              borderRadius: 2,
              maxWidth: 680,
            }}
          >
            <h3
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Iowan Old Style', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 24,
                color: 'var(--forest)',
                marginBottom: 24,
                paddingBottom: 14,
                borderBottom: '0.5px solid var(--rule)',
              }}
            >
              The actual screening checklist
            </h3>

            <div className="safety-callout-body">
              <h4 className="safety-callout-subheading">
                Baseline cardiac screening
              </h4>
              <ul>
                <li>
                  <strong>12-lead EKG</strong> with specific
                  attention to the QTc (corrected QT) interval. A
                  normal QTc is under 440 ms in men and under 460 ms
                  in women. A QTc over 500 ms is a contraindication
                  for iboga in almost any protocol. A QTc between
                  460&ndash;500 ms requires careful case-by-case
                  assessment by a physician familiar with ibogaine.
                </li>
                <li>
                  Assessment for structural heart disease: history
                  of heart attack, known coronary artery disease,
                  heart failure, cardiomyopathy, or significant
                  valve disease. Any of these is typically a hard
                  contraindication.
                </li>
                <li>
                  Assessment for pre-existing arrhythmia: atrial
                  fibrillation, bradycardia below 50, any history
                  of ventricular arrhythmia. Case-by-case.
                </li>
                <li>
                  Blood pressure check: uncontrolled hypertension
                  is a contraindication until managed.
                </li>
              </ul>

              <h4 className="safety-callout-subheading">
                Electrolyte panel
              </h4>
              <ul>
                <li>
                  <strong>Potassium</strong> must be within normal
                  range. Low potassium significantly prolongs QT
                  and is one of the most common contributors to
                  iboga cardiac events.
                </li>
                <li>
                  <strong>Magnesium</strong> must be within normal
                  range. Low magnesium also prolongs QT; many
                  iboga protocols supplement magnesium in the days
                  before the session specifically for this reason.
                </li>
                <li>
                  Sodium, calcium, and basic chemistry panel for
                  completeness.
                </li>
              </ul>

              <h4 className="safety-callout-subheading">
                Medication review
              </h4>
              <p>
                Any of the following is either a hard
                contraindication or requires medical management
                before the session.
              </p>
              <ul>
                <li>
                  <strong>SSRIs and SNRIs</strong> (Prozac, Zoloft,
                  Lexapro, Cymbalta, Effexor, and others): serotonin
                  syndrome risk plus QT effects. Require supervised
                  taper and washout, typically 2 weeks for most
                  SSRIs, 5&ndash;6 weeks for fluoxetine due to long
                  half-life.
                </li>
                <li>
                  <strong>MAOIs</strong>: do not combine.
                </li>
                <li>
                  <strong>Tricyclic antidepressants</strong>: QT
                  prolongation.
                </li>
                <li>
                  <strong>Antipsychotics</strong> (haloperidol,
                  risperidone, olanzapine, quetiapine, ziprasidone,
                  and others): significant QT prolongation.
                </li>
                <li>
                  <strong>Antiarrhythmic drugs</strong> (amiodarone,
                  sotalol, dofetilide, quinidine): severe QT
                  prolongation.
                </li>
                <li>
                  <strong>Certain antibiotics</strong>, especially
                  the macrolides (erythromycin, clarithromycin,
                  azithromycin) and fluoroquinolones (ciprofloxacin,
                  levofloxacin, moxifloxacin).
                </li>
                <li>
                  <strong>Certain antifungals</strong> (fluconazole,
                  ketoconazole).
                </li>
                <li>
                  <strong>Methadone</strong>: significant QT
                  prolongation plus complex interactions with
                  ibogaine&rsquo;s addiction interruption effect.
                  Methadone tapering and washout is required and is
                  typically one of the harder parts of preparing
                  for ibogaine addiction treatment.
                </li>
                <li>
                  <strong>Tramadol, lithium, dextromethorphan
                  (DXM)</strong>: all carry serotonin or seizure
                  risk.
                </li>
                <li>
                  <strong>Stimulants</strong> (amphetamines,
                  cocaine, methamphetamine): cardiovascular
                  stacking.
                </li>
                <li>
                  <strong>Any QT-prolonging drug listed on{' '}
                  <a
                    href="https://crediblemeds.org"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--rust)' }}
                  >
                    crediblemeds.org
                  </a>
                  </strong>, a comprehensive public database
                  nurses and physicians use to check QT risk for
                  any medication.
                </li>
              </ul>

              <h4 className="safety-callout-subheading">
                Also required
              </h4>
              <ul>
                <li>
                  Liver function panel. Ibogaine is processed
                  through the liver; impaired function changes
                  metabolism.
                </li>
                <li>Kidney function (same reasoning).</li>
                <li>
                  Pregnancy test for anyone capable of pregnancy.
                </li>
                <li>
                  Psychiatric history with attention to the hard
                  contraindications listed in the Safety section
                  below.
                </li>
              </ul>
            </div>
          </div>

          <p>
            This checklist is not exhaustive. It is meant to show
            the reader what thoroughness actually looks like so
            they can assess whether the clinic or facilitator they
            are considering is doing this work. If a facilitator
            does not require an EKG, does not require an electrolyte
            panel, does not ask you about every medication you
            take, or cannot explain to you in clinical detail why
            these things matter, that is information. That is the
            single most important information you can have before
            committing to this medicine. A facilitator who gets
            offended at the question &ldquo;what does your
            pre-session screening include?&rdquo; is telling you
            something important about the quality of their practice.
          </p>

          <MedicinePullquote>
            I tell every person I know considering iboga: ask about
            the screening. If they cannot answer in specifics, do
            not go. I mean it gently, but I mean it. The screening
            is the medicine&rsquo;s safety net. Without it, you are
            the safety net.
          </MedicinePullquote>
        </MedicineSection>

        <SafetyCallout
          id="safety"
          label="SAFETY · CONTRAINDICATIONS"
          heading="Who iboga is not for, and what it does not combine with."
        >
          <h4 className="safety-callout-subheading">
            Absolute cardiac contraindications
          </h4>
          <ul>
            <li>
              Any history of structural heart disease, heart attack,
              heart failure, or significant arrhythmia
            </li>
            <li>
              Long QT syndrome (personal or family history)
            </li>
            <li>QTc on baseline EKG above 500 ms</li>
            <li>Uncontrolled hypertension</li>
            <li>
              Current cardiac medication that cannot be safely
              tapered
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Absolute psychiatric contraindications
          </h4>
          <ul>
            <li>
              Personal history of schizophrenia, schizoaffective
              disorder, or primary psychotic disorder
            </li>
            <li>Personal history of bipolar I disorder</li>
            <li>First-degree family history of the above</li>
            <li>Active psychosis</li>
            <li>Severe untreated dissociative disorder</li>
          </ul>

          <h4 className="safety-callout-subheading">
            Absolute medication contraindications (without supervised
            taper and washout)
          </h4>
          <ul>
            <li>
              SSRIs, SNRIs, MAOIs, tricyclic antidepressants,
              antipsychotics, antiarrhythmics
            </li>
            <li>Methadone, tramadol, lithium</li>
            <li>
              Any medication listed on{' '}
              <a
                href="https://crediblemeds.org"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--rust)' }}
              >
                crediblemeds.org
              </a>{' '}
              as causing QT prolongation
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Physical contraindications
          </h4>
          <ul>
            <li>Significant liver or kidney impairment</li>
            <li>Pregnancy and breastfeeding</li>
            <li>Recent major surgery</li>
            <li>Active seizure disorder</li>
            <li>
              Severe electrolyte abnormality that cannot be
              corrected before the session
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Situational considerations
          </h4>
          <ul>
            <li>
              Attempting iboga at a facility that does not require
              EKG screening is an absolute circumstantial
              contraindication, regardless of your own medical
              fitness.
            </li>
            <li>
              Iboga taken alone, without a sitter, without medical
              backup: this is not iboga medicine. This is an
              unacceptable risk that I cannot frame any other way.
            </li>
          </ul>
        </SafetyCallout>

        <MedicineSection
          id="dosage"
          eyebrow="HARM REDUCTION · DOSE"
          heading={<>What the dose actually is.</>}
        >
          <p>
            Dosing iboga and ibogaine is harder than dosing most
            medicines on this site because the active content varies
            dramatically by form. Whole root bark alkaloid content
            varies by source and batch. Total alkaloid extract (TA)
            is more concentrated but less pure than ibogaine HCl.
            Ibogaine HCl is the most precisely measurable form.
            Doses below are ranges; actual dosing should always be
            determined by a qualified practitioner based on body
            weight, screening results, and session goals.
          </p>

          <DoseBlock label="Low / microdose range (ibogaine HCl equivalent)">
            <li>25&ndash;200 mg</li>
            <li>
              Sub-perceptual to mildly stimulating; some users
              report subtle mood and energy effects
            </li>
            <li>
              Used in some experimental microdosing protocols;
              research base is thin
            </li>
            <li>
              Even low doses carry cardiac risk for people with
              underlying vulnerabilities. Microdose is not
              synonymous with safe.
            </li>
          </DoseBlock>

          <DoseBlock label="Threshold / psycho-spiritual range">
            <li>
              200&ndash;500 mg ibogaine HCl, or 2&ndash;8 g whole
              root bark
            </li>
            <li>
              Noticeable effects including introspection, mild
              visuals, body sensations
            </li>
            <li>
              Used in some ceremonial contexts for gentler
              initiation or integration work
            </li>
            <li>Still requires full screening</li>
          </DoseBlock>

          <DoseBlock label="Therapeutic range (addiction interruption)">
            <li>
              500&ndash;1,500 mg ibogaine HCl, typically dosed at
              10&ndash;20 mg per kg of body weight
            </li>
            <li>
              Produces the full ibogaine experience including full
              addiction interruption effects
            </li>
            <li>
              Standard range for opioid use disorder treatment at
              reputable clinics
            </li>
            <li>
              Session typically lasts 24&ndash;36 hours; medical
              observation continues for days
            </li>
            <li>
              Only administered under continuous cardiac monitoring
              in a clinical setting
            </li>
          </DoseBlock>

          <DoseBlock label="Ceremonial flood dose (whole root)">
            <li>
              10&ndash;50 g dried root bark, dosed incrementally
              over hours
            </li>
            <li>Traditional Bwiti initiation and deep ceremonial work</li>
            <li>
              Experience extends 24&ndash;48 hours; integration much
              longer
            </li>
            <li>
              Same cardiac screening requirements apply. Ceremonial
              context does not reduce the pharmacological risk.
            </li>
          </DoseBlock>

          <p>
            Two things worth naming. First: the therapeutic and
            ceremonial doses are similar in scale but different in
            form. Clinical ibogaine HCl is more predictable and
            more studied; whole-root ceremonial work has a different
            texture and a longer lineage. Neither is safer than the
            other in the cardiac sense; both require the same
            screening.
          </p>
          <p>
            Second: noribogaine, ibogaine&rsquo;s long-acting
            metabolite, stays in the body for days to weeks. This is
            why you cannot take ibogaine again soon after a session.
            The medicine is still in your system, the receptor
            effects are ongoing, and subsequent dosing compounds
            cardiac risk in ways that are poorly studied. Reputable
            clinics typically recommend a minimum of 3&ndash;6 months
            between therapeutic ibogaine sessions, sometimes longer.
            The integration window is the medicine as much as the
            session is.
          </p>

          <MedicinePullquote>
            Ibogaine is one of the few medicines I know where the
            week after the session is still the medicine. The
            noribogaine is still working. Going back in before that
            is finished is not deepening the work. It is risking
            something the first session did not.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="container"
          eyebrow="THE CONTAINER"
          heading={<>Everything I would ask of a credible iboga facility.</>}
        >
          <p>
            Iboga requires more medical infrastructure than any
            other medicine on this site. Everything I am going to
            say in this section is the minimum standard I would ask
            of any facility or facilitator before I would send a
            person I love to them. These are not luxuries. These are
            the basic requirements of this medicine.
          </p>
          <p>
            <strong>The screening.</strong> Already detailed above.
            Any facility that does not require EKG and a full
            electrolyte panel before the session is a facility you
            walk away from. I do not care how good the reviews are.
            I do not care how beautiful the setting is. This is the
            single non-negotiable.
          </p>
          <p>
            <strong>The medical staff.</strong> A credible clinical
            ibogaine facility has a licensed physician or advanced
            practice nurse present for the entirety of the session,
            trained in cardiac emergencies, with emergency cardiac
            equipment on site including continuous EKG monitoring,
            crash cart, defibrillator, IV access capability, and
            emergency medications including magnesium sulfate (the
            first-line treatment for torsades de pointes). For a
            Bwiti-style ceremonial setting held outside a clinical
            facility, the honest truth is that the equivalent
            medical backup is rarely present, which is why
            ceremonial iboga in the West carries higher medical risk
            than clinical ibogaine in a proper Mexican clinic. A
            reputable ceremonial facility at least has a medical
            professional accessible, a nearby hospital, and the
            same screening requirements.
          </p>
          <p>
            <strong>The integration and aftercare plan.</strong>{' '}
            Ibogaine is not a one-session medicine in terms of
            integration. The noribogaine metabolite is active for
            days to weeks. The addiction interruption window is
            real but temporary; without aftercare, the person
            returns to the same life, same triggers, same
            relationships that drove the addiction in the first
            place, and the cravings re-emerge. A credible clinic
            does not just dose and discharge. It builds ongoing
            support: therapy, community, sober living options,
            follow-up contact, and often noribogaine metabolite
            monitoring. Without aftercare, ibogaine is an expensive
            preview of recovery. With aftercare, it can be the
            doorway.
          </p>

          <MedicinePullquote>
            Ibogaine without aftercare is a missed opportunity.
            Ibogaine with aftercare is the only thing I have ever
            seen that can offer someone in opioid use disorder a
            real chance at something completely different.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="integration"
          eyebrow="AFTER THE SESSION"
          heading={
            <>What this medicine asks in the weeks and months after.</>
          }
        >
          <p>
            Integration after iboga or ibogaine is longer and more
            practical than after most other medicines. The insight
            arrives during the session &mdash; the life review, the
            visions, the sense of what needs to change. The healing
            happens in the months of actually changing it.
            Ibogaine&rsquo;s aftermath is not subtle. For people who
            have done the work inside it, the craving landscape is
            genuinely different afterward: not gone, but quieter,
            more workable. The person has a window. What they do
            with that window is what determines whether the session
            becomes a turning point or a beautiful memory.
          </p>
          <p>
            Practical integration includes: medical follow-up in the
            days and weeks after (energy fluctuations, mood changes,
            and physical recovery are common); gentle days with no
            major decisions immediately after; therapy with someone
            who understands ibogaine, not someone who will
            pathologize the experience; community &mdash; other
            people who have done the work, whether through the
            specific facility&rsquo;s aftercare network, sober
            recovery community, Bwiti-informed integration circles,
            or twelve-step if it fits; and, specifically,
            environmental change. If the person returns to the same
            apartment, same people, same patterns, the medicine&rsquo;s
            window closes quickly. Real change often requires moving,
            ending relationships, finding different work, or
            fundamentally restructuring how daily life is set up.
          </p>
          <p>
            For people who did ibogaine for addiction specifically:
            the clinical reality is that ibogaine works best when it
            is part of a recovery plan, not a replacement for one.
            The session is the beginning, not the event. The most
            successful outcomes I have seen involve ongoing
            relationship with a recovery community, ongoing therapy,
            and an honest acknowledgment that the addiction had
            meaning in the person&rsquo;s life that is not
            addressed by the medicine alone. The feelings the
            addiction was medicating are still there, and they need
            to be met. The medicine gives the space. The person
            does the rebuilding.
          </p>

          <MedicinePullquote>
            Ibogaine does not cure addiction. It gives someone a
            window in which cure becomes possible. The cure happens
            in the rebuilding. The medicine is the doorway, not the
            house.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="decision"
          eyebrow="A DECISION FRAMEWORK"
          heading={<>An honest read from both sides of this work.</>}
        >
          <div className="decision-block">
            <p className="decision-block-label">
              <em>Iboga or ibogaine might serve someone who:</em>
            </p>
            <ul className="decision-list">
              <li>
                Is in opioid, stimulant, or alcohol use disorder
                that has not responded to other treatments and is
                committed to a full recovery plan around the session
              </li>
              <li>
                Is considering ceremonial Bwiti work with genuine
                respect for the tradition and an experienced nganga
                or Bwiti-trained facilitator
              </li>
              <li>
                Has passed full cardiac screening: EKG with normal
                QTc, normal electrolytes, no structural heart
                disease, no QT-prolonging medications
              </li>
              <li>
                Has a qualified medical team around the session and
                a real aftercare plan
              </li>
              <li>
                Is emotionally prepared for a long, physically
                demanding experience
              </li>
              <li>
                Has support &mdash; therapy, community,
                relationships &mdash; that will hold them in the
                weeks after
              </li>
            </ul>
          </div>

          <div className="decision-block">
            <p className="decision-block-label">
              <em>
                Iboga is probably not the right tool right now for
                someone who:
              </em>
            </p>
            <ul className="decision-list decision-list--not">
              <li>Has any hard cardiac contraindication</li>
              <li>
                Is on an SSRI, antipsychotic, methadone, or other
                QT-prolonging medication and is not in a position
                to safely taper off with medical supervision
              </li>
              <li>
                Is considering a facility that does not require
                EKG screening
              </li>
              <li>
                Is looking for a weekend retreat or a casual
                ceremony experience
              </li>
              <li>
                Is seeking their first psychedelic experience. This
                is not a good place to start.
              </li>
              <li>
                Has untreated severe psychiatric illness without a
                care team
              </li>
              <li>
                Does not have the financial, social, or logistical
                capacity to do real aftercare in the months
                following
              </li>
              <li>
                Is in acute crisis and hoping one session will fix
                things without further work
              </li>
            </ul>
          </div>

          <MedicinePullquote>
            There is a version of iboga work that is one of the most
            healing things I have ever witnessed, particularly for
            people in opioid use disorder. And there is a version
            that gets people hurt or killed. The difference is
            almost always the container, almost always the
            screening, and almost always the aftercare. The medicine
            is extraordinary. Everything else determines whether
            that potential is reached or not.
          </MedicinePullquote>
        </MedicineSection>

        <aside
          style={{
            marginTop: 56,
            marginBottom: 56,
            padding: '28px 24px',
            border: '0.5px solid var(--rule)',
            borderRadius: 2,
            maxWidth: 680,
          }}
        >
          <p
            className="eyebrow"
            style={{ color: 'var(--sage-deep)', marginBottom: 12 }}
          >
            IF YOU ARE A REGULAR CANNABIS USER
          </p>
          <h3
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Iowan Old Style', Georgia, serif",
              fontWeight: 400,
              fontSize: 22,
              lineHeight: 1.3,
              color: 'var(--forest)',
              marginBottom: 16,
            }}
          >
            Something to know before an iboga session.
          </h3>
          <p>
            Daily or near-daily cannabis use appears to affect
            emotional and somatic release in ceremonial iboga work
            as it does in 5-MeO-DMT and N,N-DMT sessions. The
            pattern I have observed: clients who use cannabis
            regularly often go through the visions and the life
            review fully, but the physical and emotional discharge
            that typically accompanies iboga&rsquo;s &ldquo;seeing&rdquo;
            tends to arrive muted.
          </p>
          <p style={{ marginTop: 16 }}>
            This is discussed in depth on the THC page. The practical
            implication: if you are preparing for ceremonial iboga
            work and you use cannabis regularly, I would strongly
            encourage a pause of at least 2&ndash;4 weeks before
            the session. Note that this is a separate consideration
            from the cardiac screening. Cannabis does not itself
            prolong QT meaningfully, but regular use may affect what
            the medicine can do. For clinical ibogaine specifically,
            the clinic&rsquo;s medical protocol will guide what is
            required.
          </p>
          <Link
            to="/medicines/thc"
            className="rust-link"
            style={{ marginTop: 20 }}
          >
            Read more on the THC page &rarr;
          </Link>
        </aside>

        <MedicineSection
          id="member-cta"
          eyebrow="IF YOU ARE PREPARING FOR A SESSION"
          heading={<em>The member site holds the rest.</em>}
        >
          <p>
            If you are preparing to work with iboga or ibogaine,
            ceremonial or clinical, the member site holds the prep
            protocols I use with my own clients. The full cardiac
            screening checklist in usable form. Medication
            interaction review. The pre-session magnesium and
            potassium protocols used at reputable clinics. The
            evaluation framework for choosing a clinic or
            facilitator. The 30-day aftercare integration protocol.
            Access is by invitation. If you are working with me or
            one of our partner practitioners, you will receive a
            magic link to the email on file.
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
            If you are not currently a client, you are still welcome
            to read everything on the public side of this site.
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
                href="https://crediblemeds.org"
                target="_blank"
                rel="noreferrer"
              >
                CredibleMeds &mdash; the public QT-prolonging drug
                database to check any medication you take
              </a>
            </li>
            <li>
              <a
                href="https://maps.org"
                target="_blank"
                rel="noreferrer"
              >
                MAPS &mdash; iboga and ibogaine research portal
              </a>
            </li>
            <li>
              <a
                href="https://ibogainealliance.org"
                target="_blank"
                rel="noreferrer"
              >
                GITA &mdash; Global Ibogaine Therapy Alliance
                (clinical standards, facility directory, ongoing
                research)
              </a>
            </li>
            <li>
              <a
                href="https://iceers.org"
                target="_blank"
                rel="noreferrer"
              >
                ICEERS &mdash; International Center for Ethnobotanical
                Education, Research and Service (plant medicine
                research including iboga)
              </a>
            </li>
            <li>
              <em>Ibogaine Explained</em> &mdash; Peter Frank
              (clinical and practical context)
            </li>
            <li>
              <em>The Dao of Iboga</em> &mdash; Moughenda Mikala
              (from a practicing Bwiti lineage holder)
            </li>
            <li>
              Documentaries: <em>I&rsquo;m Dangerous With Love</em>{' '}
              and <em>From Shock to Awe</em> for context on addiction
              and psychedelic healing
            </li>
          </ul>
        </MedicineSection>

        <MedicineSection
          id="addiction-resources"
          eyebrow="IF YOU ARE CURRENTLY IN ADDICTION"
          heading={<em>You are not alone, and you have options.</em>}
        >
          <p>
            If you are reading this because you or someone you love
            is in active opioid, stimulant, or alcohol use disorder,
            I want to say a few things directly. Ibogaine can be a
            remarkable medicine. It is not the only option, and it is
            not the right first option for everyone. It is expensive,
            it is not legal in the United States, it requires travel,
            and the cardiac requirements are real. If it is not
            accessible to you right now, that does not mean hope is
            not accessible to you.
          </p>
          <p>
            Conventional addiction treatment has gotten genuinely
            better in the past decade. Medication-assisted treatment
            with buprenorphine, methadone, or naltrexone is
            lifesaving for many people. Recovery community (twelve-
            step, SMART Recovery, Refuge Recovery, and others) is
            free and has helped millions. Therapy with someone
            experienced in addiction is more accessible than it used
            to be. These are not lesser paths. They are different
            paths, and for many people they are the right ones.
          </p>
          <p>
            If ibogaine is right for you, the resources above will
            help you explore it carefully. If it is not, or if it is
            not accessible right now, please know this: the work of
            healing from addiction is real and possible, regardless
            of which medicine or program carries you through it. You
            deserve a life where the substance is not running the
            show. That life is reachable, and many people have
            reached it in many different ways.
          </p>

          <div
            style={{
              marginTop: 40,
              padding: '24px 28px',
              background: 'var(--bone)',
              border: '0.5px solid var(--rule)',
              borderRadius: 2,
              maxWidth: 680,
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: 14,
                lineHeight: 1.8,
              }}
            >
              <li style={{ marginTop: 0 }}>
                <strong>SAMHSA National Helpline</strong>:{' '}
                <a href="tel:+18006624357">1-800-662-4357</a> (free,
                confidential, 24/7)
              </li>
              <li style={{ marginTop: 10 }}>
                <strong>Suicide &amp; Crisis Lifeline</strong>:{' '}
                <a href="tel:988">988</a>
              </li>
              <li style={{ marginTop: 10 }}>
                <strong>Recovery Dharma</strong>{' '}
                (
                <a
                  href="https://recoverydharma.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  recoverydharma.org
                </a>
                ) &mdash; secular Buddhist recovery community
              </li>
              <li style={{ marginTop: 10 }}>
                <strong>SMART Recovery</strong>{' '}
                (
                <a
                  href="https://smartrecovery.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  smartrecovery.org
                </a>
                ) &mdash; science-based, secular recovery
              </li>
              <li style={{ marginTop: 10 }}>
                <strong>National Harm Reduction Coalition</strong>{' '}
                (
                <a
                  href="https://harmreduction.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  harmreduction.org
                </a>
                ) &mdash; resources for active users who are not yet
                ready to stop
              </li>
            </ul>
          </div>
        </MedicineSection>

        <aside className="legal-disclaimer" role="note">
          <p>
            Ibogaine is a Schedule I substance under U.S. federal
            law as of 2025. Possession, distribution, and
            manufacture outside approved research settings is
            illegal in the United States. Ibogaine is legal and
            medically administered in several other countries
            including Mexico, Brazil, Portugal, and New Zealand.{' '}
            <em>Tabernanthe iboga</em> is subject to additional
            regulation due to conservation concerns, as wild
            populations in Gabon face pressure from global demand.
            This page is educational. It does not constitute medical
            advice, legal advice, or encouragement to use controlled
            substances. If you are considering working with iboga or
            ibogaine, consult a licensed healthcare provider and a
            qualified facility with full cardiac screening capacity.
            The cardiac risk is real, and the screening is the
            single most important element of safe iboga work. Harm
            reduction exists because people make decisions in the
            world as it actually is, not as we wish it were.
          </p>
        </aside>
      </MedicinePageLayout>
    </>
  );
}
