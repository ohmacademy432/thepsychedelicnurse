import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import MedicinePageLayout from '../../components/medicine/MedicinePageLayout';
import MedicineHero from '../../components/medicine/MedicineHero';
import MedicineSection from '../../components/medicine/MedicineSection';
import MedicinePullquote from '../../components/medicine/MedicinePullquote';
import SafetyCallout from '../../components/medicine/SafetyCallout';
import DoseBlock from '../../components/medicine/DoseBlock';

const TOC_ITEMS = [
  { id: 'the-compound', label: 'What kambo actually is' },
  { id: 'lineage', label: 'The lineage' },
  { id: 'ceremony', label: 'The ceremony' },
  { id: 'hyponatremia', label: 'The water protocol' },
  { id: 'safety', label: 'Contraindications' },
  { id: 'dosage', label: 'What the dose actually is' },
  { id: 'the-frog', label: 'The frog' },
  { id: 'applications', label: 'Clinical applications' },
  { id: 'integration', label: 'Integration' },
  { id: 'decision', label: 'Decision framework' },
  { id: 'member-cta', label: 'Member site' },
  { id: 'further-reading', label: 'Further reading' },
];

export default function Kambo() {
  return (
    <>
      <Seo
        title="Kambo"
        description="Kambo is not a psychedelic. It is a deliberately induced cleansing crisis — frog peptides applied to burned skin that trigger a remarkable physiological reset. Honest harm reduction, including the water protocol that matters most, held by April Bogle, RN."
      />

      <MedicinePageLayout tocItems={TOC_ITEMS}>
        <MedicineHero
          eyebrow="AMAZONIAN PURGE MEDICINE · NOT A PSYCHEDELIC"
          name="Kambo"
          subtitle="Phyllomedusa bicolor · peptide secretion"
          intro="Kambo is not a psychedelic. It will not alter your consciousness in the way the other medicines in this library do. It will make you vomit, sweat, shake, and sometimes briefly faint. It is a deliberately induced cleansing crisis — the most intense physiological stressor I have ever witnessed being intentionally applied to a human body — and it is one of the most remarkable medicines I have encountered for people who are willing to meet it on its terms. This page is an honest look at what kambo does, where it comes from, and why the harm reduction piece that matters most for this medicine is the one almost no one talks about."
        />

        <MedicineSection
          id="the-compound"
          eyebrow="THE MEDICINE"
          heading={<>Frog peptides, applied to burned skin. Let me explain.</>}
        >
          <p>
            Kambo is the dried skin secretion of{' '}
            <em>Phyllomedusa bicolor</em>, a bright green tree frog
            native to the Amazon basin. The frog produces this
            secretion as a defense against predators. When the frog
            is stressed, it sweats a waxy, alkaline substance onto
            its skin that is toxic to most animals that try to eat
            it. Indigenous peoples of the Amazon discovered,
            centuries ago, that this same secretion applied to
            human skin in small quantities produces a dramatic but
            temporary physical cleansing followed by a period of
            enhanced physical and mental clarity. The secretion is
            scraped from the frog in the forest (in ethical
            harvesting, without killing the animal), dried on small
            sticks, and stored for use in ceremony.
          </p>
          <p>
            Pharmacologically, kambo secretion is extraordinarily
            complex. It contains over 100 bioactive{' '}
            <strong>peptides</strong> (small protein molecules)
            including dermorphin, deltorphin, phyllokinin,
            phyllomedusin, sauvagine, and many others. Some act on
            opioid receptors, some on vascular smooth muscle, some
            on digestive system regulation, some on the immune
            system. The peptides are not psychoactive in the way
            tryptamines or phenethylamines are. They do not cause
            hallucinations or altered perception. What they do is
            produce a rapid, whole-body response that manifests as
            severe nausea, vomiting, sweating, facial swelling,
            transient drops in blood pressure, sometimes
            defecation, and intense bodily discomfort, followed
            usually within 30 to 60 minutes by a marked return to
            baseline that participants often describe as lighter,
            clearer, and in some cases euphoric.
          </p>
          <p>
            The application method itself is unusual. Kambo is not
            ingested. It is applied to small superficial burns on
            the skin, called <strong>gates</strong>, made by
            briefly touching a heated vine or incense stick to the
            skin to create a small blister. The topmost layer of
            the blister is removed, and reconstituted kambo paste
            is applied directly to the exposed dermis. The peptides
            absorb into the bloodstream through the capillaries of
            the skin. Onset is rapid (within minutes), and the
            peak typically lasts 15 to 30 minutes before subsiding.
            This application method is uncomfortable on its own,
            and the scars from the burns often remain visible for
            months or years.
          </p>
          <p>
            What is happening physiologically during a kambo
            session: the peptides act on multiple systems
            simultaneously in ways that essentially mimic acute
            illness. Blood pressure drops, heart rate changes, the
            digestive system is rapidly activated, the immune
            system is stimulated, and the body responds as if
            fighting a severe infection or acute stress. The
            vomiting is not a symptom. It is the medicine&rsquo;s
            mechanism of physical elimination. The face swells
            because the peptides affect vascular permeability and
            fluid movement. The sweating, shaking, and temporary
            confusion are the body&rsquo;s full stress response
            activated in compressed time. And then, within half an
            hour, the acute phase subsides and the body moves into
            a recovery window where measurable changes in immune
            markers, inflammation, and nervous system regulation
            can be observed for hours to days afterward.
          </p>
          <p>
            This is what makes kambo unlike anything else in this
            library. Every other medicine works by temporarily
            shifting consciousness so that something in the psyche
            can move. Kambo works by temporarily shocking the body
            so that something in the physiology can move. Both can
            produce healing. But they are genuinely different
            modalities, and expecting one when you encounter the
            other is a setup for confusion.
          </p>

          <MedicinePullquote>
            I have told more than one client: if you are hoping for
            an altered state experience, kambo is not the medicine.
            If you are hoping for your body to do something it has
            been unable to do on its own, kambo may surprise you.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="lineage"
          eyebrow="THE PEOPLE WHO HAVE CARRIED THIS"
          heading={<>Matsés, Kaxinawá, and the story of Kampu.</>}
        >
          <p>
            Kambo is held primarily by two indigenous peoples of
            the Amazon: the <strong>Matsés</strong> of Peru and the{' '}
            <strong>Kaxinawá</strong> (also known as the Huni Kuin)
            of Brazil, along with related peoples including the
            Katukina, the Yawanawá, and others whose traditional
            territories span the Peru-Brazil border region. The
            medicine has likely been used for centuries, though the
            oral traditions that carry its history do not keep
            precise timelines, and archaeological evidence of
            frog-derived medicine use is difficult to establish.
            What is clear is that by the time of European contact,
            kambo was already a deeply embedded practice in the
            ritual and practical lives of these peoples.
          </p>
          <p>
            The origin story varies between tribes but shares a
            core narrative. In the Kaxinawá version, a shaman named{' '}
            <strong>Kampu</strong> saw his village stricken with
            illness and left to seek help. In a vision (in some
            tellings, facilitated by ayahuasca) a spirit in the
            form of a frog taught him how to extract and apply the
            secretion to heal his people. When Kampu died, his
            spirit was said to have entered the frogs, and each
            kambo application since has been a continuation of his
            healing work. The name of the medicine, in most
            dialects, comes from his name.
          </p>
          <p>
            Traditionally, kambo was used in several contexts:
            before hunting expeditions, to increase stamina,
            sharpen senses, reduce human scent detection by game,
            and eliminate what we might now call fatigue toxins;
            to heal physical ailments including infections, snake
            bites, and fevers; and in ritual contexts to clear{' '}
            <em>panema</em>, a concept that translates imperfectly
            to English but means something like &ldquo;bad
            luck,&rdquo; &ldquo;stagnant energy,&rdquo; or
            &ldquo;the cloudiness that settles over a person when
            they are out of right relationship with their life.&rdquo;
            In all these uses, the physical purge was not separate
            from the spiritual work. The clearing of the body was
            understood to be the clearing of the spirit, and the
            two were never held as different events.
          </p>
          <p>
            In the late 20th century, Westerners began encountering
            kambo, initially through anthropologists and
            researchers and then through the same broader
            psychedelic and plant medicine tourism that has
            transformed ayahuasca and iboga. The medicine has now
            spread globally, with practitioners offering ceremonies
            in North America, Europe, and Australia. Some of these
            practitioners have been trained deeply by Matsés or
            Kaxinawá elders and carry their lineage with permission.
            Others have done brief trainings through Western
            certification bodies and built practices. As with every
            other indigenous medicine, quality varies significantly,
            and the ethical landscape around frog sourcing, cultural
            continuity, and adequate screening is still being worked
            out. This page treats the Matsés and Kaxinawá as the
            traditions to whom the gratitude is owed.
          </p>

          <MedicinePullquote>
            Every time I sit with kambo, I think about Kampu. The
            medicine came from a vision of healing. That origin is
            still in the frog, still in the peptides, still in
            whatever the body does when it meets this medicine.
            The respect goes to the people who first received that
            knowledge.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="ceremony"
          eyebrow="THE CEREMONY"
          heading={<>What actually happens when you sit with kambo.</>}
        >
          <p>
            A kambo ceremony in contemporary practice typically
            follows a consistent structure, whether held by an
            indigenous-trained practitioner or a Westerner with
            credible training. The participant arrives fasted,
            typically 8 to 12 hours without food, and brings an
            intention for the work. The ceremony space is usually
            small, quiet, and simple. The participant sits or lies
            on a mat with a bucket beside them for purging and a
            blanket within reach for the cooler phase that follows
            the peak.
          </p>
          <p>
            The practitioner opens the ceremony with prayer,
            invocation, or whatever ceremonial opening aligns with
            their lineage. Often additional medicines are offered
            first: <em>sananga</em> (eye drops made from a specific
            plant, producing burning sensation and considered to
            clear visual and energetic perception), and{' '}
            <em>hapè</em> (ceremonial tobacco snuff, which grounds
            the participant and prepares the nervous system). These
            additions vary by tradition. After these openings, the
            participant is asked to drink 1 to 2 liters of water
            relatively quickly. This is the pre-ceremony hydration
            protocol, and it is the piece of this ceremony where
            the most preventable harm occurs. I am going to spend
            an entire section on why below.
          </p>
          <p>
            Next, the gates are created. The practitioner takes a
            heated vine or stick of incense and briefly touches it
            to the participant&rsquo;s skin, usually on the upper
            arm or shoulder for men, the lower leg or ankle for
            women, following traditional placement. Each touch
            creates a small superficial burn the size of a match
            head, which blisters within seconds. The topmost layer
            of the blister is scraped off, exposing the dermis.
            For a first-timer, typically 3 to 5 gates are made.
            Experienced participants may receive more. The burns
            themselves are brief and uncomfortable but not severe.
            Many participants describe them as similar to a minor
            cigarette burn.
          </p>
          <p>
            The kambo paste (dried secretion reconstituted with a
            small amount of water or saliva) is then applied to
            the exposed gates. The peptides absorb within 30
            seconds. Onset begins almost immediately: a rapid
            flushing, heat moving through the body, nausea
            building, heart rate changes, facial swelling becoming
            visible within the first minute. The peak typically
            occurs 2 to 5 minutes in, with active purging
            (vomiting into the bucket) usually beginning within
            the first 5 minutes and continuing in waves for 15 to
            30 minutes. During the peak the practitioner stays
            close, offers water in small sips between purges if
            appropriate, supports the participant&rsquo;s head and
            body, and sings or prays or simply holds space. As the
            peak subsides, the practitioner wipes off the remaining
            paste, cleans the gates, and typically applies{' '}
            <strong>dragon&rsquo;s blood resin</strong> (a
            traditional tree sap with antimicrobial properties) to
            seal them. The participant rests in <em>savasana</em>{' '}
            (lying flat, often covered with a blanket) for 20 to
            30 minutes as the body recalibrates. Integration
            begins with water, light food, and quiet reflection,
            often in a sharing circle with other participants or
            one-on-one with the practitioner.
          </p>

          <MedicinePullquote>
            The first 15 minutes of a kambo ceremony are some of
            the most physiologically difficult minutes I have ever
            watched a person move through. The 30 minutes after
            are some of the quietest I have ever watched a body
            settle into. Both of those are the medicine.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="hyponatremia"
          eyebrow="THE SAFETY ISSUE ALMOST NO ONE EXPLAINS"
          heading={<>Water intoxication is the most common cause of kambo deaths.</>}
        >
          <p>
            I want to spend extra time on this section because{' '}
            <strong>hyponatremia</strong> (dangerously low blood
            sodium caused by rapid overhydration) is the most common
            cause of kambo fatalities that have been documented,
            and it is almost never adequately explained in kambo
            materials. The standard pre-ceremony water-drinking
            protocol, which is designed to aid purging by giving
            the stomach volume to expel, can cross into medical
            emergency when practitioners don&rsquo;t understand the
            physiology or participants drink more than they are
            told. Your body is not designed to process 2 liters of
            water in 15 minutes without food or electrolytes. My
            ER years taught me this the hard way, watching young
            athletes come in seizing from water intoxication after
            marathons. The same physiology applies to kambo
            ceremonies.
          </p>
          <p>
            The short version: sodium is the electrolyte your
            nervous system uses to function. Normal blood sodium
            is 135&ndash;145 milliequivalents per liter. When
            sodium drops below 130, mild symptoms begin: nausea,
            confusion, headache. Below 125, severe symptoms start:
            seizures, severe confusion, coma. Below 120 can be
            fatal. You lower your sodium by adding water to your
            bloodstream faster than your kidneys can excrete it.
            That is exactly what happens when a person drinks 1
            to 2 liters of water rapidly on an empty stomach
            before kambo.
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
              What proper kambo hydration actually looks like
            </h3>

            <div className="safety-callout-body">
              <h4 className="safety-callout-subheading">
                Before the ceremony (safe protocol)
              </h4>
              <ul>
                <li>
                  Drink water normally in the days leading up.
                  Don&rsquo;t over-drink. Don&rsquo;t under-drink.
                </li>
                <li>
                  The morning of the ceremony, stay lightly
                  hydrated: a glass of water when you wake, perhaps
                  one more later, but don&rsquo;t push fluids.
                </li>
                <li>
                  Consider adding a small pinch of salt or a trace
                  mineral supplement to your morning water to keep
                  your sodium stable (some traditions and credible
                  Western practitioners include this; ask yours).
                </li>
                <li>
                  Arrive to ceremony slightly thirsty, not
                  pre-loaded with fluids.
                </li>
              </ul>

              <h4 className="safety-callout-subheading">
                The pre-ceremony water drink (where the risk lives)
              </h4>
              <ul>
                <li>
                  Credible practitioners typically ask for 1 to 2
                  liters of water drunk over 10 to 20 minutes
                  before the kambo is applied. Not all at once,
                  and not beyond 2 liters total.
                </li>
                <li>
                  The water should ideally contain electrolytes: a
                  pinch of salt or a trace mineral product added
                  specifically to prevent sodium dilution.
                </li>
                <li>
                  Drinking faster than this, or drinking more than
                  2 liters, is not helping the ceremony. It is
                  actively increasing risk of hyponatremia.
                </li>
                <li>
                  A practitioner who asks for 3 or more liters of
                  water, or who tells you to drink as much as you
                  can, is working with an outdated or insufficient
                  understanding of the physiology. This is
                  information.
                </li>
              </ul>

              <h4 className="safety-callout-subheading">
                Warning signs during the ceremony
              </h4>
              <ul>
                <li>
                  Severe headache, especially one that persists or
                  worsens
                </li>
                <li>
                  Confusion beyond the normal mild disorientation
                  of peak kambo
                </li>
                <li>Slurred speech or difficulty forming words</li>
                <li>
                  Muscle weakness or loss of coordination that
                  continues past the acute purge
                </li>
                <li>
                  Severe, persistent nausea that is not relieved
                  by purging
                </li>
                <li>
                  Seizure activity, even minor twitching in unusual
                  patterns
                </li>
                <li>
                  If any of these appear, the ceremony must stop
                  and medical evaluation must happen immediately.
                  A credible practitioner recognizes these signs
                  and acts on them without hesitation.
                </li>
              </ul>

              <h4 className="safety-callout-subheading">
                After the ceremony
              </h4>
              <ul>
                <li>
                  Do not drink large quantities of water
                  immediately afterward. The kidneys have already
                  been stressed.
                </li>
                <li>
                  Light food with some salt, slow rehydration,
                  rest.
                </li>
                <li>
                  If headache, confusion, or unusual fatigue
                  persists beyond a few hours, get medical
                  attention. Do not assume &ldquo;this is just the
                  medicine.&rdquo; Kambo acute effects should
                  subside substantially within 30&ndash;60 minutes.
                  Persistent neurological symptoms are not normal.
                </li>
              </ul>
            </div>
          </div>

          <p>
            Two things to name clearly. First: this is not a
            theoretical risk. Several documented kambo deaths
            involve hyponatremia from the water protocol. These
            deaths are preventable, and they are almost entirely
            about how the water phase is held. Second: a
            facilitator who cannot explain to you why the water is
            limited to 2 liters, who cannot explain what
            hyponatremia is, or who gets annoyed when you ask
            these questions is a facilitator working outside the
            standard of care this medicine requires. Ask the
            questions. The answers should be specific, informed,
            and offered without defensiveness.
          </p>

          <MedicinePullquote>
            Kambo is not going to kill you because the peptides
            are too strong. Kambo deaths happen when someone
            drinks too much water, sits with someone who
            doesn&rsquo;t know the warning signs, and their own
            sodium quietly collapses while everyone thinks they
            are just having a deep ceremony. This is the piece
            that matters. This is the piece I want you to know.
          </MedicinePullquote>
        </MedicineSection>

        <SafetyCallout
          id="safety"
          label="SAFETY · OTHER CONTRAINDICATIONS"
          heading="Beyond the water protocol: who kambo is not for."
        >
          <div
            style={{
              paddingBottom: 18,
              marginBottom: 20,
              borderBottom: '0.5px solid var(--rule)',
            }}
          >
            <h4
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Iowan Old Style', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 22,
                lineHeight: 1.3,
                color: 'var(--forest)',
                marginBottom: 12,
              }}
            >
              The hyponatremia reality
            </h4>
            <ul>
              <li>
                The water protocol before kambo is where the most
                preventable harm occurs.
              </li>
              <li>
                Never drink more than 2 liters in the pre-ceremony
                hydration phase.
              </li>
              <li>
                Electrolytes (salt or trace minerals) reduce the
                risk.
              </li>
              <li>
                Review the full hyponatremia section above for
                warning signs.
              </li>
            </ul>
          </div>

          <h4 className="safety-callout-subheading">
            Absolute physical contraindications
          </h4>
          <ul>
            <li>
              Cardiac conditions including arrhythmia, heart
              failure, recent MI, or any structural heart disease.
              Kambo acutely stresses the cardiovascular system.
            </li>
            <li>Uncontrolled hypertension or severe hypotension</li>
            <li>
              Kidney disease, especially anything affecting fluid
              balance
            </li>
            <li>Severe liver disease</li>
            <li>Stroke history</li>
            <li>Active seizure disorder</li>
            <li>Pregnancy and breastfeeding</li>
            <li>
              Recent major surgery or currently in acute recovery
            </li>
            <li>
              Active cancer treatment. Many chemo and
              immune-suppressing therapies are incompatible with
              kambo&rsquo;s immune-stimulating effect.
            </li>
            <li>
              Significant underweight or active eating disorder.
              The stress on the body is too much.
            </li>
            <li>Aneurysm, diagnosed or suspected</li>
          </ul>

          <h4 className="safety-callout-subheading">
            Absolute psychiatric contraindications
          </h4>
          <ul>
            <li>
              Personal history of schizophrenia, schizoaffective
              disorder, or primary psychotic disorder
            </li>
            <li>
              Personal history of bipolar I with active mood
              cycling
            </li>
            <li>
              Active severe psychiatric crisis without a care team
            </li>
            <li>
              Severe panic disorder. The acute experience can
              trigger panic cascades in vulnerable people.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Medication considerations
          </h4>
          <ul>
            <li>
              <strong>Blood pressure medications</strong>: discuss
              with facilitator and prescribing physician.
            </li>
            <li>
              <strong>Blood thinners</strong>: ask specifically.
            </li>
            <li>
              <strong>Diuretics</strong>: hyponatremia risk is
              significantly increased; careful evaluation required.
            </li>
            <li>
              <strong>Immunosuppressants</strong>: kambo&rsquo;s
              immune-stimulating effect may interact.
            </li>
            <li>
              <strong>SSRIs</strong> are generally okay for kambo
              (unlike ayahuasca or DMT medicines) but check with
              your facilitator.
            </li>
            <li>
              <strong>Opioid pain medications</strong>: the
              peptides interact with opioid receptors; disclose.
            </li>
            <li>
              <strong>Steroids</strong>: discuss specifically.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Situational considerations
          </h4>
          <ul>
            <li>
              A practitioner who does not require detailed medical
              screening: that is information.
            </li>
            <li>
              A practitioner who cannot explain hyponatremia
              clearly: that is information.
            </li>
            <li>
              A practitioner pushing more water than 2 liters:
              that is information.
            </li>
            <li>
              A setting without a clear path to emergency medical
              care: reconsider.
            </li>
          </ul>
        </SafetyCallout>

        <MedicineSection
          id="dosage"
          eyebrow="HARM REDUCTION · DOSE"
          heading={<>What the dose actually is.</>}
        >
          <p>
            Kambo dosing is not in milligrams. It is in{' '}
            <strong>gates</strong> (the number of small burns to
            which secretion is applied) and in the size of each
            dot of paste applied to each gate. The experience
            scales with both, and the practitioner adjusts based on
            the participant&rsquo;s size, experience level,
            intention, and response to previous ceremonies if any.
          </p>

          <DoseBlock label="First-time participant">
            <li>3 to 5 gates, small dots</li>
            <li>The minimum effective dose for a first ceremony</li>
            <li>
              Allows the body to meet the medicine without
              overwhelming
            </li>
            <li>
              A practitioner who offers more than 5 gates on a
              first ceremony is pushing too hard.
            </li>
          </DoseBlock>

          <DoseBlock label="Returning participant (2nd to 5th session)">
            <li>5 to 7 gates, slightly larger dots</li>
            <li>Standard range for established participants</li>
            <li>
              The body has known this medicine before and can
              handle a fuller dose
            </li>
          </DoseBlock>

          <DoseBlock label="Experienced participant">
            <li>7 to 10 gates, varying dot sizes</li>
            <li>
              For participants who have established a relationship
              with kambo
            </li>
            <li>
              Specific treatment protocols (for chronic conditions,
              Lyme, addiction) may use higher gate counts guided
              by a trained practitioner
            </li>
          </DoseBlock>

          <DoseBlock label="Traditional or intensive work">
            <li>
              10+ gates, often in sequence across multiple sessions
            </li>
            <li>
              Used in traditional contexts and in some Western
              therapeutic protocols
            </li>
            <li>
              Requires an experienced practitioner and careful
              medical monitoring
            </li>
            <li>
              This range is not for exploration. It is for specific
              therapeutic intention.
            </li>
          </DoseBlock>

          <p>
            A few practical notes on dose. First: the spacing
            between ceremonies matters. Most traditions and
            credible practitioners recommend at least 7 to 14 days
            between kambo sessions, with longer gaps as sessions
            accumulate. Doing kambo on consecutive days or within
            a few days is not deeper work. It is cumulative
            physiological stress.
          </p>
          <p>
            Second: the intensity of a kambo experience is not
            predictable from gate count alone. An experienced
            participant with 10 gates on a day when they are
            well-rested and grounded may have a gentler experience
            than a first-timer with 4 gates on a day they are
            dehydrated and exhausted. The body&rsquo;s state meets
            the medicine; the gate count is one variable among
            several.
          </p>
          <p>
            Third: practitioners who compete with each other or
            with the participant on gate count (&ldquo;last session
            I gave someone 20 gates&rdquo;) are doing performance,
            not medicine. Walk away from that.
          </p>

          <MedicinePullquote>
            More gates does not mean more medicine. It means more
            stress applied to the body. The right dose is the one
            the particular body on that particular day can use,
            not the highest number the practitioner is willing to
            offer.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="the-frog"
          eyebrow="THE FROG"
          heading={<>A word about the being whose secretion this is.</>}
        >
          <p>
            <em>Phyllomedusa bicolor</em>, the giant monkey frog,
            is a living being, and kambo is literally its defense
            secretion extracted for human use. This is worth
            naming clearly because the plant medicine world has
            not always centered this reality, and the frog is not
            a consumable resource in the same way plants can be
            sustainably harvested. The frog is captured, strings
            are tied to its legs to stretch it, and the secretion
            is scraped from its back after the animal has been
            stressed into producing it. In ethical harvest, the
            frog is then released back into the same tree from
            which it came. In less careful contexts, the animal is
            handled roughly, kept in stressful conditions, or
            injured.
          </p>
          <p>
            Populations of <em>Phyllomedusa bicolor</em> are not
            yet endangered, but the rising global demand for
            kambo has created real pressure on local ecosystems in
            the Amazon. The species is currently listed as
            &ldquo;Least Concern&rdquo; by the IUCN, but
            conservation biologists have raised flags about the
            sustainability of current harvesting practices if
            demand continues to grow. Indigenous communities,
            particularly the Matsés and Kaxinawá, have traditional
            protocols for respectful harvest that emphasize not
            depleting any single area, not harvesting during
            breeding seasons, and maintaining the relationship
            with the frog as a living being rather than a resource.
          </p>
          <p>
            If you are going to work with kambo, ask your
            practitioner where their kambo comes from. A credible
            answer traces back to a specific community or supplier
            with ethical harvesting practices.{' '}
            &ldquo;I don&rsquo;t really know, my teacher provides
            it&rdquo; is not sufficient. There has been
            considerable conversation about the ethics of{' '}
            <em>Bufo alvarius</em> sourcing in recent years.{' '}
            <em>Phyllomedusa bicolor</em> deserves the same
            attention. The frog is part of this medicine. Honoring
            the frog is part of the work.
          </p>

          <MedicinePullquote>
            I cannot take this medicine without thinking about the
            frog. It is the frog&rsquo;s gift, whether the frog
            consents to it or not. The least I can do is make
            sure the frog my kambo came from was handled with the
            respect that making medicine requires.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="applications"
          eyebrow="CLINICAL APPLICATIONS"
          heading={
            <>What the research and the practice suggest kambo can do.</>
          }
        >
          <p>
            The therapeutic applications of kambo are less
            well-studied than those of classical psychedelics, but
            the research that exists, combined with the pattern of
            what practitioners and participants consistently
            report, suggests several areas where kambo may
            genuinely help. I want to frame this carefully. The
            claims made for kambo in marketing materials are often
            wildly overstated, and the evidence base for most of
            those claims is thin. But there are areas where both
            the pharmacology and the clinical observation suggest
            real potential.
          </p>
          <p>
            <strong>Chronic inflammation and autoimmune
            conditions.</strong> Several of the peptides in kambo
            have demonstrated anti-inflammatory activity in
            laboratory studies, and participants with conditions
            like rheumatoid arthritis, chronic Lyme disease, and
            inflammatory bowel conditions have reported significant
            improvements in symptoms following kambo treatment
            series. This is the area where the pharmacological
            rationale is strongest. The peptides do affect immune
            function, and the acute stress response kambo produces
            can trigger beneficial downstream immune recalibration.
            This is also the area where self-treatment without
            medical guidance can be problematic, because the
            immune effects can interact unpredictably with
            autoimmune medications.
          </p>
          <p>
            <strong>Chronic pain.</strong> The peptides in kambo
            include compounds with significant pain-modulating
            effects. Dermorphin, for example, is a potent opioid
            receptor agonist. Many participants report reduced
            chronic pain following kambo, including conditions
            like fibromyalgia and chronic musculoskeletal pain.
            The effects can last days to weeks, with repeat
            treatments sometimes extending the relief window.
            This is not a replacement for proper pain management,
            but it can be a genuine adjunct.
          </p>
          <p>
            <strong>Addiction interruption, mood conditions, and
            post-viral fatigue.</strong> These are areas where the
            evidence is more anecdotal but the reports are
            consistent enough to mention. Some participants with
            substance use disorders have reported dramatic
            reductions in cravings following kambo ceremonies.
            Some participants with depression and anxiety report
            extended periods of improved mood and reduced
            symptoms. Participants dealing with post-viral fatigue
            conditions (including long COVID) have reported kambo
            as one of the few interventions that moves the needle
            for them. The pharmacological basis for these effects
            is plausible but not fully understood; the clinical
            evidence is still building. I mention them because the
            reports are real, while being honest that the research
            has not yet caught up to what practitioners and
            participants are experiencing.
          </p>

          <MedicinePullquote>
            Kambo is not a miracle cure, and anyone who tells you
            it is should be regarded carefully. It is a real
            medicine with real applications, and for certain
            conditions, it can produce effects that nothing else I
            know of produces. Both of those things are true.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="integration"
          eyebrow="AFTER THE CEREMONY"
          heading={<>What the body and mind need in the days after.</>}
        >
          <p>
            Integration after kambo is different from integration
            after the psychedelic medicines because the work was
            primarily physical rather than introspective. There is
            no vision to interpret, no insight to integrate, no
            ego dissolution to make peace with. What there is is a
            body that has just undergone an intense physiological
            event and a nervous system that has been shaken and is
            now resettling. The integration practice is to support
            both of those processes.
          </p>
          <p>
            In the immediate hours and days after: rest is the
            primary medicine. The body has done significant work
            and needs sleep, simple food, warmth, and quiet. Avoid
            strenuous exercise for 24 to 48 hours. Avoid alcohol
            and recreational substances for at least a few days.
            The body is in recovery. Hydrate slowly with water
            that contains electrolytes, not just plain water.
            Many participants report one to three days of lingering
            fatigue followed by a noticeable energy lift. This
            pattern is common and doesn&rsquo;t need to be fought.
            Rest when tired, move when energized.
          </p>
          <p>
            In the week after: many participants notice subtle
            changes that are easy to miss if they aren&rsquo;t
            paying attention. Sleep quality often improves.
            Appetite shifts. Mood may stabilize or lift. Chronic
            symptoms may quieten. These changes are often
            attributed to the specific healing kambo is said to
            produce; some of them may simply be the aftermath of
            the deep rest and dietary simplicity most people
            undertake around a ceremony. The integration practice
            is to notice what changes and to keep whatever of it
            seems worth keeping. If your sleep is better, keep
            whatever you did differently. If your appetite shifted
            toward simpler food, follow that. If the chronic
            rumination of anxiety is quieter, notice what is
            holding that quiet and cultivate it. Kambo&rsquo;s
            gifts are often less dramatic than the psychedelic
            medicines, but they can be more durable if they are
            integrated with intention rather than left to fade.
          </p>

          <MedicinePullquote>
            Kambo doesn&rsquo;t ask for the kind of integration
            that writing in a journal for a month provides. It
            asks for the kind of integration that notices how your
            body actually feels, what your actual capacity is,
            what your actual needs are, and then adjusts your life
            to meet them. That is harder than a journal, and more
            useful.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="decision"
          eyebrow="A DECISION FRAMEWORK"
          heading={<>An honest read from both sides of this work.</>}
        >
          <div className="decision-block">
            <p className="decision-block-label">
              <em>Kambo might serve someone who:</em>
            </p>
            <ul className="decision-list">
              <li>
                Has specific physical health concerns that align
                with kambo&rsquo;s demonstrated or plausible
                effects (chronic inflammation, autoimmune
                conditions, chronic pain, post-viral fatigue)
              </li>
              <li>
                Has screened clear of the hard cardiac, renal,
                and psychiatric contraindications
              </li>
              <li>
                Is working with a practitioner who has detailed
                training, can explain hyponatremia clearly, and
                requires thorough medical screening
              </li>
              <li>
                Is approaching the medicine with respect for its
                indigenous lineage and its physical intensity
              </li>
              <li>
                Has realistic expectations: this is not a
                psychedelic, it is a physical cleansing medicine
              </li>
              <li>
                Can take the day of ceremony and the day after
                off for recovery
              </li>
              <li>
                Is comfortable with the burn scars that will
                remain for months
              </li>
            </ul>
          </div>

          <div className="decision-block">
            <p className="decision-block-label">
              <em>
                Kambo is probably not the right tool right now for
                someone who:
              </em>
            </p>
            <ul className="decision-list decision-list--not">
              <li>
                Has any cardiac condition, kidney disease, or
                history of stroke or aneurysm
              </li>
              <li>
                Is attempting kambo without proper medical
                screening
              </li>
              <li>
                Is considering a practitioner who cannot explain
                the hyponatremia risk
              </li>
              <li>Is in acute psychiatric crisis</li>
              <li>
                Is pregnant, breastfeeding, or in active cancer
                treatment
              </li>
              <li>
                Is expecting an altered-state psychedelic
                experience
              </li>
              <li>
                Is hoping kambo will solve a psychological issue
                without any other work. The physical medicine does
                not substitute for therapy, integration, or
                relational work.
              </li>
              <li>
                Has any sign of eating disorder or significant
                underweight. The physical stress of kambo on an
                undernourished body is not safe.
              </li>
            </ul>
          </div>

          <MedicinePullquote>
            Kambo is not a general-purpose medicine. It is a
            specific tool for specific situations. When it fits,
            it can be remarkable. When it doesn&rsquo;t fit, the
            ceremony is just a hard day on the floor with nothing
            to show for it. Match the tool to the work.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="member-cta"
          eyebrow="IF YOU ARE PREPARING FOR A CEREMONY"
          heading={<em>The member site holds the rest.</em>}
        >
          <p>
            If you are preparing for a kambo ceremony, the member
            site holds the prep protocols I use with my own
            clients. A detailed medical screening checklist to walk
            through before you book. The full hyponatremia
            conversation with practitioner questions you can bring
            to the interview. A post-ceremony observation protocol
            for the 48 hours after, including the specific signs
            that warrant medical attention. Access is by
            invitation. If you are working with me or one of our
            partner practitioners, you will receive a magic link to
            the email on file.
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
                href="https://iakp.org"
                target="_blank"
                rel="noreferrer"
              >
                International Association of Kambo Practitioners
                (IAKP) &mdash; training standards, practitioner
                directory, and safety protocols
              </a>
            </li>
            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/?term=phyllomedusa+bicolor"
                target="_blank"
                rel="noreferrer"
              >
                PubMed &mdash; peer-reviewed research on{' '}
                <em>Phyllomedusa bicolor</em> peptides and their
                pharmacology
              </a>
            </li>
            <li>
              <a
                href="https://chacruna.net"
                target="_blank"
                rel="noreferrer"
              >
                Chacruna Institute &mdash; cultural context,
                indigenous reciprocity, and ethical frameworks
                across plant medicines
              </a>
            </li>
            <li>
              <a
                href="https://iceers.org"
                target="_blank"
                rel="noreferrer"
              >
                ICEERS &mdash; research and harm reduction resources
                across Amazonian medicines including kambo
              </a>
            </li>
            <li>
              <em>Kambo: The Spirit of the Shaman</em> &mdash;
              Karim Lajnef (a practitioner&rsquo;s account of
              training and ceremony)
            </li>
            <li>
              <em>Sapo in My Soul: The Matse Frog Medicine</em>{' '}
              &mdash; Peter Gorman (one of the earliest Western
              accounts of kambo among the Matsés, with the
              cultural context intact)
            </li>
          </ul>
        </MedicineSection>

        <aside className="legal-disclaimer" role="note">
          <p>
            Kambo itself is not a controlled substance under U.S.
            federal law. It contains no scheduled compounds. This
            does not mean kambo is risk-free or legally
            unambiguous. Practitioners operate in a loosely
            regulated space, training standards vary, and medical
            oversight is often absent. Documented fatalities exist,
            most connected to hyponatremia from the water protocol
            or to inadequate screening of cardiac conditions. This
            page is educational. It does not constitute medical
            advice, legal advice, or encouragement to use any
            substance or undergo any ceremonial practice. If you
            are considering kambo, consult a licensed healthcare
            provider regarding the contraindications listed above,
            and verify the training and screening practices of any
            practitioner you are considering. Harm reduction exists
            because people make decisions in the world as it
            actually is, not as we wish it were.
          </p>
        </aside>
      </MedicinePageLayout>
    </>
  );
}
