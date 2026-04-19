import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import MedicinePageLayout from '../../components/medicine/MedicinePageLayout';
import MedicineHero from '../../components/medicine/MedicineHero';
import MedicineSection from '../../components/medicine/MedicineSection';
import MedicinePullquote from '../../components/medicine/MedicinePullquote';
import SafetyCallout from '../../components/medicine/SafetyCallout';
import DoseBlock from '../../components/medicine/DoseBlock';

const TOC_ITEMS = [
  { id: 'the-compound', label: 'What ayahuasca actually is' },
  { id: 'lineage', label: 'The lineage' },
  { id: 'dieta', label: 'The dieta' },
  { id: 'ceremony', label: 'The ceremony' },
  { id: 'safety', label: 'Contraindications' },
  { id: 'tourism', label: 'Vetting a retreat' },
  { id: 'dosage', label: 'What the dose actually is' },
  { id: 'integration', label: 'Integration' },
  { id: 'decision', label: 'Decision framework' },
  { id: 'member-cta', label: 'Member site' },
  { id: 'further-reading', label: 'Further reading' },
];

export default function Ayahuasca() {
  return (
    <>
      <Seo
        title="Ayahuasca"
        description="Ayahuasca is not a molecule — it is a brewed preparation of two Amazonian plants, a ceremony, a dieta, and a living tradition held by indigenous peoples for generations. Honest harm reduction for the Western seeker, held by April Bogle, RN."
      />

      <MedicinePageLayout tocItems={TOC_ITEMS}>
        <MedicineHero
          eyebrow="AMAZONIAN PLANT MEDICINE · LIVING TRADITION"
          name="Ayahuasca"
          subtitle="Banisteriopsis caapi · Psychotria viridis"
          intro="Ayahuasca is not one plant, not one compound, and not one ceremony. It is a brewed preparation of two plants — a vine and a leaf — that do nothing alone and become one of the most profound medicines on earth when combined. It is held by indigenous peoples across the Amazon basin in living traditions with songs, dietas, and ceremonial forms that span generations. And it is now being sought out by Westerners at unprecedented scale, with outcomes that vary from genuinely life-changing to genuinely harmful, depending almost entirely on who is holding the ceremony. This page is an invitation to understand what this medicine actually is, where it comes from, and how to approach it with the respect it asks for."
        />

        <MedicineSection
          id="the-compound"
          eyebrow="THE BREW"
          heading={
            <>
              Two plants, held together in a way no one should have
              figured out.
            </>
          }
        >
          <p>
            Ayahuasca is a brew, not a plant. It is typically
            prepared by combining two plants: the woody vine{' '}
            <em>Banisteriopsis caapi</em>, called &ldquo;ayahuasca&rdquo;
            or &ldquo;yagé&rdquo; in different traditions and
            sometimes translated as &ldquo;vine of souls&rdquo; or
            &ldquo;vine of the spirits,&rdquo; and the leafy shrub{' '}
            <em>Psychotria viridis</em>, called &ldquo;chacruna&rdquo;
            in Peru. Other plants are sometimes added by specific
            traditions. In some Colombian and Ecuadorian lineages,
            chaliponga (<em>Diplopterys cabrerana</em>) takes the
            place of chacruna. But the two-plant base structure is
            consistent.
          </p>
          <p>
            What makes this combination pharmacologically remarkable
            is that neither plant does much on its own. Chacruna
            contains <strong>N,N-DMT</strong>, the same molecule
            found in many other plants and in small amounts in the
            human body. But N,N-DMT taken orally is destroyed almost
            instantly by monoamine oxidase (MAO) enzymes in the
            digestive system, long before it can reach the brain.
            The caapi vine contains{' '}
            <strong>beta-carboline alkaloids</strong> (harmine,
            harmaline, and tetrahydroharmine) that are monoamine
            oxidase inhibitors (MAOIs). The MAOIs in the vine
            temporarily disable the enzyme that would destroy the
            DMT, allowing it to cross into the bloodstream and
            reach the brain. Only in combination do these plants
            produce the ayahuasca experience.
          </p>
          <p>
            That indigenous peoples of the Amazon figured out this
            specific combination &mdash; out of tens of thousands of
            plants, they combined the exact two that reveal each
            other &mdash; is one of the genuinely mysterious pieces
            of ethnobotany. Traditional practitioners do not say
            they figured it out. They say the plants told them. How
            that knowledge arrived is a question that invites
            humility from anyone who takes the combination
            seriously.
          </p>
          <p>
            The resulting experience, when the brew is consumed in
            ceremony, lasts 4 to 6 hours with a peak typically 1 to
            3 hours in. Unlike the 15-minute flash of smoked or
            vaporized N,N-DMT, ayahuasca&rsquo;s MAOI-extended
            duration allows for a sustained journey with space for
            content, for purging, for integration within the
            experience itself. It is the longer, fuller, more
            relational cousin of a DMT breakthrough, held within a
            ceremonial container that shapes the experience as much
            as the molecules do.
          </p>

          <MedicinePullquote>
            When I finally understood that the plants in ayahuasca
            found each other first, and that indigenous peoples
            received that knowledge before they figured it out, I
            stopped treating this medicine like a psychedelic and
            started treating it like a relationship.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="lineage"
          eyebrow="THE PEOPLE WHO HAVE CARRIED THIS"
          heading={<>Ayahuasca is not a Western medicine. It never will be.</>}
        >
          <p>
            Ayahuasca has been held by indigenous peoples of the
            Amazon basin for generations. How many generations is a
            question without a clean answer, because these traditions
            are oral and because the brew may predate some of the
            traditions that now center it. Archaeological evidence of
            ayahuasca or related brews extends at least 1,000 years
            back, and likely much further. What is certain is that
            by the time of European contact, ayahuasca was already a
            central spiritual and medicinal practice for dozens of
            distinct indigenous peoples across what is now Peru,
            Ecuador, Colombia, Brazil, Bolivia, and Venezuela.
          </p>
          <p>
            The traditions are not monolithic. Among the many peoples
            who hold ayahuasca: the <strong>Shipibo-Conibo</strong>{' '}
            of Peru are known for their intricate <em>ícaros</em>{' '}
            (the songs sung during ceremony) and for the geometric
            patterns that appear in their traditional art, which
            many Shipibo practitioners say come directly from the
            visions of ayahuasca. The <strong>Asháninka</strong>,{' '}
            <strong>Shuar</strong>, <strong>Achuar</strong>,{' '}
            <strong>Yawanawá</strong>, <strong>Huni Kuin</strong>,{' '}
            <strong>Kichwa</strong>, <strong>Cofán</strong>, and
            Santo Daime-associated peoples each hold the medicine
            within their own cultural, spiritual, and practical
            frameworks. The songs differ. The preparations differ.
            The dietas differ. The cosmologies differ. A ceremony
            held in a Shipibo village is not the same event as one
            held by a Huni Kuin <em>pajé</em> (shaman), and
            conflating them, as Western ayahuasca culture often
            does, is itself a form of erasure.
          </p>
          <p>
            In the 20th century, two major syncretic religious
            movements emerged in Brazil that incorporated ayahuasca
            into explicitly Christian frameworks:{' '}
            <strong>Santo Daime</strong>, founded by Raimundo Irineu
            Serra in the 1930s, and the{' '}
            <strong>União do Vegetal (UDV)</strong>, founded by José
            Gabriel da Costa in 1961. Both traditions preserve
            ayahuasca use within legally recognized religious
            contexts. The UDV has had Supreme Court-protected
            religious exemption in the United States since 2006 for
            its sacramental use. These traditions are their own
            lineages, held by their own members, and a ceremony in a
            Santo Daime or UDV church is a specific religious event,
            not a generic &ldquo;ayahuasca ceremony.&rdquo;
          </p>
          <p>
            When Westerners began seeking ayahuasca in significant
            numbers in the 1980s and 1990s, many indigenous
            communities welcomed that interest. Some welcomed it
            generously. Some welcomed it reluctantly. Some accepted
            it because the economic reality of working with
            foreigners offered a form of cultural and land
            preservation that other options did not. Today, a
            significant portion of indigenous ayahuasca
            practitioners&rsquo; livelihoods depends on Western
            visitors. This has been a complicated arrangement for
            the traditions. Some <em>curanderos</em> and{' '}
            <em>pajés</em> have trained Westerners deeply and sent
            them back to their countries with permission and
            blessing. Others have watched their ceremonial practices
            be lifted, modified, and rebranded by people who never
            earned the right to hold them. Both of these things are
            happening simultaneously, and anyone approaching
            ayahuasca as a Westerner is entering a context that
            requires understanding and care.
          </p>

          <MedicinePullquote>
            The question I ask every client considering ayahuasca
            is: who holds the tradition you are going to drink
            within? If the honest answer is &ldquo;a Westerner who
            did two apprenticeships,&rdquo; that is not
            disqualifying, but it is information.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="dieta"
          eyebrow="PREPARATION · THE DIETA"
          heading={<>The dieta is not a diet. It is the work.</>}
        >
          <p>
            The <em>dieta</em> (with various spellings:{' '}
            <em>dieta</em>, <em>diet</em>, <em>samá</em> in some
            traditions) is the preparatory practice that traditional
            ayahuasca work is built around. It is not a detox
            protocol, though it shares some dietary restrictions
            with one. It is not a set of rules, though it has
            structure. The dieta is more accurately understood as
            an act of <strong>showing the plant that you are
            preparing to meet it</strong>: a period of
            simplification, purification, and attention that
            signals both to your own body and to the medicine
            itself that you are approaching the work with
            seriousness.
          </p>
          <p>
            Different traditions hold dieta differently, and deep
            dieta &mdash; the extended retreat practice where a{' '}
            <em>dietero</em> spends weeks or months in isolation
            with a specific master plant &mdash; is its own full
            subject I am not going to cover here. What follows is
            the standard pre-ceremony dieta most Western ayahuasca
            settings ask for, and what I ask for from clients who
            come to me for preparation coaching before a retreat.
            This is a working minimum; some traditions ask for more.
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
              The standard pre-ayahuasca dieta
            </h3>

            <div className="safety-callout-body">
              <h4 className="safety-callout-subheading">
                Two to four weeks before
              </h4>
              <ul>
                <li>
                  <strong>
                    Eliminate all foods and substances containing
                    tyramine.
                  </strong>{' '}
                  This is not aesthetic. It is pharmacological.
                  Ayahuasca&rsquo;s MAOIs remain active in your
                  body and combining them with tyramine-rich foods
                  can cause hypertensive crisis: dangerously high
                  blood pressure that can lead to stroke. Foods to
                  eliminate include aged cheeses (parmesan,
                  cheddar, blue cheese, swiss); cured and fermented
                  meats (salami, pepperoni, prosciutto, smoked
                  fish); fermented foods (sauerkraut, kimchi, miso,
                  soy sauce, tempeh, kombucha); most alcohol,
                  especially red wine and beer; broad beans (fava
                  beans); overripe fruit; most soy products. Ask
                  your facilitator for their specific dieta list;
                  some are stricter than others.
                </li>
                <li>
                  Eliminate all recreational drugs, including
                  cannabis. The blunting of emotional and somatic
                  release discussed on the THC page applies here
                  especially.
                </li>
                <li>
                  Begin reducing caffeine significantly. Not because
                  caffeine interacts dangerously, but because the
                  nervous system that is chronically caffeinated
                  does not meet the medicine from the same
                  baseline.
                </li>
                <li>
                  Eliminate sugar-heavy and processed foods; move
                  toward simple, whole foods.
                </li>
                <li>
                  Begin the inner work: reflect on intention, on
                  what you are carrying, on what you hope to bring
                  to the ceremony. This is not optional
                  preparation. This is the work.
                </li>
              </ul>

              <h4 className="safety-callout-subheading">
                One week before
              </h4>
              <ul>
                <li>
                  Eliminate all remaining alcohol if you have not
                  already.
                </li>
                <li>Reduce salt significantly.</li>
                <li>
                  Eliminate all spicy foods, garlic, onion in heavy
                  quantities (many traditions eliminate these
                  entirely).
                </li>
                <li>Eliminate pork entirely.</li>
                <li>
                  Begin eating primarily simple foods: rice, fish
                  (not smoked), steamed vegetables, simple grains,
                  fruits (not overripe), minimal seasoning.
                </li>
                <li>
                  No sexual activity in many traditions. This is
                  tradition-specific; ask the facilitator.
                </li>
                <li>
                  Begin gentle practices: meditation, time in
                  nature, silence, journaling.
                </li>
              </ul>

              <h4 className="safety-callout-subheading">
                Three days before
              </h4>
              <ul>
                <li>
                  Diet becomes quite simple: rice, plantain, boiled
                  fish, mild vegetables.
                </li>
                <li>
                  No sugar, no salt beyond minimum, no processed
                  anything.
                </li>
                <li>Sleep becomes priority.</li>
                <li>
                  Integration begins before the ceremony begins.
                  You are already in the dieta field.
                </li>
              </ul>

              <h4 className="safety-callout-subheading">
                Day of ceremony
              </h4>
              <ul>
                <li>
                  Fast from all food for 6 to 8 hours before the
                  ceremony. Some traditions ask for 10 to 12 hours.
                </li>
                <li>
                  Water only during the fast, and limited water
                  close to ceremony time.
                </li>
                <li>
                  Some traditions allow a small amount of rice or
                  plantain in the morning; follow your
                  facilitator&rsquo;s guidance exactly.
                </li>
                <li>
                  Bring the intention you have been building.
                  Arrive simple. Arrive quiet.
                </li>
              </ul>

              <h4 className="safety-callout-subheading">
                Continuing the dieta after
              </h4>
              <ul>
                <li>
                  Traditional dieta typically continues for 7 days
                  after the final ceremony, with gradual
                  reintroduction of restricted foods.
                </li>
                <li>
                  Some traditions hold longer post-ceremony
                  restrictions. A full dieta can extend 30 days,
                  with some items (pork, sexual activity, extreme
                  salt) restricted the full period.
                </li>
                <li>
                  The integration is not separate from the dieta.
                  The dieta continues to hold what the ceremony
                  opened.
                </li>
              </ul>
            </div>
          </div>

          <p>
            A few things about the dieta. First: the MAOI safety
            piece, the tyramine restriction, is not tradition. It
            is pharmacology. Violating it can cause a medical
            emergency. Every other piece of the dieta carries its
            own meaning and its own weight, but the tyramine
            restriction is the non-negotiable.
          </p>
          <p>
            Second: every tradition holds dieta differently, and
            your facilitator&rsquo;s specific list takes precedence
            over any general guide, including this one. Ask. Follow
            exactly.
          </p>
          <p>
            Third: a &ldquo;dieta&rdquo; that only lasts three days
            and excludes almost nothing is not dieta. It is a
            liability waiver disguised as preparation. A credible
            ayahuasca facility walks you through a dieta of at
            least a week with specific guidance and checks in with
            you about your adherence before ceremony.
          </p>

          <MedicinePullquote>
            People often ask me if the dieta is really necessary.
            The honest answer is that the dieta is the work. By the
            time you arrive at ceremony, if you have done the
            dieta, you are already halfway into the medicine. If
            you have not, you are asking the ayahuasca to do work
            you have not been willing to begin.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="ceremony"
          eyebrow="THE CEREMONY"
          heading={<>What actually happens when you drink.</>}
        >
          <p>
            Ayahuasca ceremony varies tradition to tradition, but a
            standard Peruvian or Ecuadorian mestizo-shamanic
            ceremony, the form most Westerners encounter, has a
            consistent shape. The ceremony is held at night,
            typically in a <em>maloca</em> (a ceremonial open-walled
            structure) or a darkened indoor space. Participants
            arrive having completed dieta, having fasted for the
            required hours, and having set their intention. Each
            participant sits on a mattress or mat with a bucket
            beside them. Ayahuasca commonly causes{' '}
            <strong>purging</strong>, through vomiting, crying,
            yawning, trembling, or other forms, and the bucket is
            both practical and spiritual. Purging is not considered
            a side effect in the tradition; it is considered part
            of the medicine&rsquo;s work.
          </p>
          <p>
            The <em>curandero</em> or <em>ayahuasquero</em> (or in
            Santo Daime settings, the <em>padrinho</em> or{' '}
            <em>madrinha</em>) holds the ceremony. They typically
            begin with prayers, invocations, and opening songs
            before dispensing the brew: a cup per participant,
            sometimes with a second cup offered later for those
            who feel called to deepen. After the drinking, the
            space quiets. Participants lie or sit with eyes closed.
            The effects begin within 20 to 60 minutes, depending on
            the brew&rsquo;s strength and the person&rsquo;s body,
            and build over the next hour.
          </p>
          <p>
            During the peak, the curandero sings <em>ícaros</em>,
            the medicine songs that guide the ceremony. Ícaros are
            not entertainment. They are considered active medicine,
            sung in languages that include Quechua, Shipibo,
            Spanish, and sometimes whistled melodies without words.
            Each ícaro is said to carry specific energetic
            qualities: for protection, for cleansing, for calling
            specific plant spirits, for calming difficult journeys.
            A skilled curandero reads the room and sings what is
            needed. Participants often experience the ícaros as
            having direct, tangible effects on the content and
            texture of their experience.
          </p>
          <p>
            The peak typically lasts 2 to 3 hours. As the effects
            subside, the curandero may close the ceremony with
            closing prayers, blessings, or additional songs.
            Participants often rest in the space for several more
            hours; sleep in the ceremony space is common.
            Post-ceremony integration begins the next morning,
            often with shared breakfast, circle sharing, and
            opportunity to talk with facilitators. Multi-day
            retreats typically hold 2 to 4 ceremonies over 5 to 10
            days, with rest days in between, because ayahuasca is a
            medicine that asks for recovery time and because
            consecutive-night ceremonies deepen the work in
            specific ways.
          </p>

          <MedicinePullquote>
            People sometimes ask whether they should keep their
            eyes open or closed during ceremony. The honest answer
            is: the medicine will tell you. The ícaros will tell
            you. Your body will tell you. What I can say is that
            the ceremony is not something you direct. It is
            something you receive.
          </MedicinePullquote>
        </MedicineSection>

        <SafetyCallout
          id="safety"
          label="SAFETY · CONTRAINDICATIONS"
          heading="What not to combine, and who this medicine is not for."
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
              The MAOI reality
            </h4>
            <ul>
              <li>
                Ayahuasca contains MAOIs. Many common medications
                and foods are contraindicated.
              </li>
              <li>
                The contraindications below are not optional.
                Combinations can produce hypertensive crisis
                (stroke risk) or serotonin syndrome (potentially
                fatal).
              </li>
              <li>
                Ask your facilitator for their complete list and
                follow it exactly.
              </li>
            </ul>
          </div>

          <h4 className="safety-callout-subheading">
            Absolute medication contraindications (require
            supervised taper and washout)
          </h4>
          <ul>
            <li>
              <strong>SSRIs and SNRIs</strong> (Prozac, Zoloft,
              Lexapro, Cymbalta, Effexor, and others). Require
              supervised taper: 2 weeks for most SSRIs, 5&ndash;6
              weeks for fluoxetine (Prozac) due to long half-life.
              Do not attempt without clinical supervision.
            </li>
            <li>
              <strong>MAOIs</strong> (phenelzine, tranylcypromine,
              moclobemide). Do not combine. Ayahuasca already
              contains MAOIs and stacking is dangerous.
            </li>
            <li>
              <strong>Tricyclic antidepressants</strong>: serotonin
              syndrome risk.
            </li>
            <li>
              <strong>Tramadol</strong>: serotonin syndrome and
              seizure risk.
            </li>
            <li>
              <strong>Stimulants</strong> (amphetamines,
              methamphetamine, cocaine): hypertensive crisis risk.
            </li>
            <li>
              <strong>Lithium</strong>: seizure risk. Some ayahuasca
              deaths have involved lithium combinations.
            </li>
            <li>
              <strong>Dextromethorphan (DXM)</strong>: in many
              cough medicines; serotonin syndrome risk.
            </li>
            <li>
              <strong>St. John&rsquo;s Wort</strong>: contains
              MAOI-like compounds; do not combine.
            </li>
            <li>
              <strong>Opioid medications</strong>, including
              methadone and buprenorphine. Consult a physician
              familiar with ayahuasca.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Absolute food contraindications (the tyramine list)
          </h4>
          <ul>
            <li>
              Aged cheeses, cured meats, fermented foods, kombucha,
              most alcohol (especially red wine and beer)
            </li>
            <li>Broad beans (fava beans)</li>
            <li>
              Overripe fruit, especially overripe bananas and
              avocados
            </li>
            <li>Most soy products</li>
            <li>
              Complete list available from facilitators; follow
              exactly.
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
            <li>Active psychotic symptoms</li>
            <li>Severe dissociative disorder</li>
            <li>
              Active suicidal crisis without a care team in place
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Absolute physical contraindications
          </h4>
          <ul>
            <li>
              Uncontrolled cardiovascular disease, recent cardiac
              event
            </li>
            <li>Severe liver or kidney disease</li>
            <li>
              Active GI bleeding or severe GI disease. Ayahuasca
              causes significant GI activity.
            </li>
            <li>Pregnancy and breastfeeding</li>
            <li>Active seizure disorder</li>
          </ul>
        </SafetyCallout>

        <MedicineSection
          id="tourism"
          eyebrow="WHAT I’M SEEING"
          heading={
            <>
              The retreat landscape is not uniform. Here is how to
              read it.
            </>
          }
        >
          <p>
            Ayahuasca tourism in Peru, Ecuador, Colombia, Costa
            Rica, and increasingly in North American and European
            underground settings is now a significant industry.
            Some of what is offered is genuinely rooted in
            indigenous lineage and held with integrity. Some of it
            is competent facilitation by respectful Western-trained
            practitioners. Some of it is commodification: retreats
            marketed on Instagram, run by people whose training is
            thin, with ceremony structures borrowed from multiple
            traditions without coherence. And some of it is
            actively dangerous. I want to walk through what I look
            for when a client is considering a retreat, because the
            quality variance is real and the consequences are not
            small.
          </p>

          <p>
            <strong>First: Lineage.</strong> A credible ayahuasca
            retreat centers indigenous practitioners or
            practitioners who have completed substantial
            apprenticeships (typically years) under named
            indigenous lineage holders, with ongoing relationship
            to those teachers. &ldquo;Trained by shamans in
            Peru&rdquo; means nothing specific.
            &ldquo;Apprenticed for seven years under maestra [name]
            of the Shipibo tradition, with whom I maintain ongoing
            teaching relationship&rdquo; means something specific.
            Ask for specifics. Credible facilitators are happy to
            name their teachers; evasive answers about lineage are
            information.
          </p>

          <p>
            <strong>Second: Screening.</strong> A credible retreat
            requires a detailed intake form covering medical
            history, psychiatric history, all medications
            (including over-the-counter), dietary supplements, and
            specific contraindications. They follow up with
            questions if anything is unclear. They have a physician
            on call or on staff who can review medical concerns.
            They turn people away who are not cleared. A retreat
            that takes your money without asking about your SSRI,
            or that waves off your medication list with
            &ldquo;you&rsquo;ll be fine,&rdquo; is not a retreat I
            would send anyone I loved to.
          </p>

          <p>
            <strong>Third: Container.</strong> Credible retreats
            have an appropriate ratio of participants to
            facilitators (not 30 participants and one{' '}
            <em>curandero</em>); space for ceremony that is safe
            and private; bathroom access that is easy and dignified
            during active ceremony; medical capability on site for
            emergencies; a clear code of conduct including zero
            tolerance for sexual misconduct by facilitators;
            post-ceremony integration built into the structure, not
            treated as optional; and a way to contact the retreat
            after you return home if you need support. Sexual
            misconduct by Western and indigenous ayahuasca
            facilitators is a documented and ongoing problem. Any
            retreat where a facilitator seeks out inappropriate
            contact with participants, especially during or
            immediately after ceremony, is a retreat where the
            container is broken.
          </p>

          <p>
            <strong>Fourth: Dieta guidance.</strong> A credible
            retreat sends detailed dieta instructions weeks in
            advance, checks in with you about adherence, and gives
            you specific guidance about your individual situation.
            A retreat whose &ldquo;dieta&rdquo; is a three-paragraph
            email telling you to avoid wine and spicy food for
            three days before arrival is not doing dieta. They are
            doing marketing.
          </p>

          <p>
            If the retreat you are considering fails on lineage,
            screening, container, or dieta guidance, consider
            whether the cost of the retreat has come out of the
            safety and ethics line of its budget. That is the gap
            that decides whether someone comes home healed or
            harmed.
          </p>

          <MedicinePullquote>
            A retreat&rsquo;s marketing will tell you what they
            want you to think. The questions you ask them before
            booking will tell you what they are actually capable
            of offering. Ask the hard questions. If they respond
            with defensiveness or vagueness, you have your answer.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="dosage"
          eyebrow="HARM REDUCTION · DOSE"
          heading={<>Ayahuasca dosing is not like dosing other medicines.</>}
        >
          <p>
            Ayahuasca dosing is less standardized than other
            medicines because ayahuasca is a brew, not a compound.
            The concentration of DMT and beta-carbolines varies by
            recipe, by batch, by who made it and when, by the
            specific plants used, by how long it was cooked.
            Traditional ayahuasqueros dose by volume (typically a
            small cup poured from a larger pot) and calibrate the
            strength of the brew itself to what they believe the
            ceremony calls for. There are no standard milligram
            doses for participants; there are experienced
            facilitators who read what the medicine has offered
            that night and pour accordingly.
          </p>

          <DoseBlock label="What a ceremony cup usually looks like">
            <li>
              A traditional cup is roughly 30&ndash;60 mL of brew
              (about 2&ndash;4 tablespoons)
            </li>
            <li>
              Strength varies dramatically. A &ldquo;strong&rdquo;
              cup from one brewer may be weaker than a
              &ldquo;weak&rdquo; cup from another.
            </li>
            <li>
              Most facilitators offer a second cup partway through
              the ceremony for those who want to deepen
            </li>
            <li>
              Some ceremonies include a smaller &ldquo;testing&rdquo;
              cup first, then a fuller dose once the group has
              calibrated
            </li>
            <li>
              First-time participants are often given a smaller
              dose on their first night of a retreat, with capacity
              to deepen in subsequent nights
            </li>
            <li>
              Never pressure to drink more. A credible facilitator
              never pressures, and the medicine is not deeper
              because the cup is fuller.
            </li>
          </DoseBlock>

          <p>
            Two practical notes about dose. First: you cannot know
            the strength of the brew until you are in it. A cup
            that looks like any other cup may produce a gentle
            introspective evening or an overwhelming journey,
            depending on variables that are not visible. This is
            one of the reasons the facilitator&rsquo;s experience
            matters. A skilled <em>curandero</em> knows their brew
            and doses accordingly, and is present to respond if
            someone has a stronger experience than expected.
          </p>
          <p>
            Second: ayahuasca is the one medicine on this site
            where a participant often consumes the medicine
            multiple times in a single week. A standard 5-to-10
            day retreat will typically include 3 to 5 ceremonies,
            sometimes on consecutive nights. This is not the same
            as taking other psychedelics consecutively. Ayahuasca
            is held within a larger structure where each night
            builds on the last, and the dieta extends through the
            entire retreat. Still, the cumulative effect is
            significant. Participants should expect the second or
            third ceremony to feel different from the first, often
            deeper or more challenging, as the medicine works on
            progressively deeper material.
          </p>
          <p>
            Third: purging is part of the dose, in a sense. The
            physical cleansing the medicine produces &mdash;
            vomiting, yawning, shaking, sweating, crying, and yes,
            sometimes diarrhea &mdash; is considered in the
            tradition to be the medicine completing its work, not
            a failure of the experience. A ceremony without
            purging is not necessarily less medicine; a ceremony
            with purging is not necessarily worse. It is what the
            particular body needs that particular night.
          </p>

          <MedicinePullquote>
            The first time I drank ayahuasca, I thought the purging
            was something to get through. By the third ceremony, I
            understood that the purging was the medicine arriving.
            The body was letting something go that I had not known
            I was carrying.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="integration"
          eyebrow="AFTER THE CEREMONY"
          heading={<>What ayahuasca asks for in the weeks and months after.</>}
        >
          <p>
            Integration after ayahuasca has a specific shape that
            comes from the medicine&rsquo;s depth and the retreat
            structure. Unlike a single-session psychedelic where
            integration begins the day after, ayahuasca integration
            often begins during the retreat itself: in the morning
            circles, in the days between ceremonies, in the silence
            of the retreat space. Then there is the return home,
            which is its own integration phase, and then the
            months that follow, which is where the actual work of
            living the experience happens.
          </p>
          <p>
            In the immediate days after a retreat: the dieta
            continues. Most traditions hold 7 to 30 days of
            post-ceremony dietary restrictions, gentle re-entry
            into sexuality if it was paused, and minimal exposure
            to highly stimulating environments. Journaling, time
            in nature, minimal social obligations, simple food,
            good sleep. This is not optional. The post-dieta is
            how the medicine&rsquo;s work settles in. Breaking it
            too soon, many traditions teach, can unseat what the
            ceremony put in place.
          </p>
          <p>
            In the first month: the integration often looks like
            small, specific changes. Relationships that were shown
            to be unsustainable begin to feel undeniable. Work
            that is not aligned with who you are becomes harder to
            perform. Patterns that the medicine named explicitly
            come up for decision. This phase can be destabilizing,
            in the best way and sometimes in difficult ways.
            Therapy with someone who understands ayahuasca work,
            not someone who will pathologize it, is often
            essential. Integration groups with other people who
            have been to ceremony can be invaluable. Ohm Academy
            holds a weekly integration circle for this reason, and
            many other communities offer similar spaces.
          </p>
          <p>
            In the months to a year after: the real test is whether
            the insights become life. A ceremony that revealed you
            needed to leave a job, and then you stayed in the job,
            is not ayahuasca&rsquo;s failure; that is an unlived
            insight. The medicine can show anything. What happens
            next is yours. Some people integrate beautifully. Some
            people drift back to their prior life and describe the
            experience in the past tense as something that
            happened once. The difference is almost entirely about
            whether they made small, actual changes in the weeks
            and months that followed. One change, held steady,
            matters more than a dozen insights written in a
            journal and then shelved.
          </p>

          <MedicinePullquote>
            Ayahuasca does not heal you. Ayahuasca shows you what
            healing would require. What you do with that
            information, in the months after, is the healing
            itself.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="decision"
          eyebrow="A DECISION FRAMEWORK"
          heading={<>An honest read from both sides of this work.</>}
        >
          <div className="decision-block">
            <p className="decision-block-label">
              <em>Ayahuasca might serve someone who:</em>
            </p>
            <ul className="decision-list">
              <li>
                Is approaching the medicine with respect for its
                indigenous lineage and the people who have carried
                it
              </li>
              <li>
                Has a retreat or ceremony selected based on
                genuine lineage, thorough screening, clear
                container, and real dieta guidance
              </li>
              <li>
                Has screened clear of the hard medication and food
                contraindications, or has completed a supervised
                taper
              </li>
              <li>
                Is willing to commit to the full dieta, not a
                shortened version
              </li>
              <li>
                Can clear time for the retreat, the post-retreat
                dieta, and meaningful integration
              </li>
              <li>
                Is approaching with a specific intention &mdash;
                healing, discernment, grief, stuck patterns,
                spiritual questions
              </li>
              <li>Has a support structure at home for re-entry</li>
              <li>
                Is willing to let the medicine show what it shows
                and respond to it
              </li>
            </ul>
          </div>

          <div className="decision-block">
            <p className="decision-block-label">
              <em>
                Ayahuasca is probably not the right tool right now
                for someone who:
              </em>
            </p>
            <ul className="decision-list decision-list--not">
              <li>
                Has any of the hard contraindications and cannot
                safely address them
              </li>
              <li>
                Is considering a retreat that does not require
                full screening, full dieta, or full integration
                support
              </li>
              <li>
                Is on an SSRI and hoping the ceremony will work
                anyway
              </li>
              <li>
                Is seeking their first psychedelic experience.
                This is not a good place to start.
              </li>
              <li>
                Is in acute crisis without a support structure at
                home
              </li>
              <li>
                Is attending primarily for tourism, Instagram, or
                curiosity without willingness to do the dieta and
                the integration
              </li>
              <li>
                Is looking for a single ceremony to change a life
                they are not willing to change
              </li>
            </ul>
          </div>

          <MedicinePullquote>
            Ayahuasca is one of the most respected medicines I
            know, and one of the most abused. The difference
            between those is almost entirely about who is holding
            it, how it is being approached, and whether the person
            receiving it is prepared to meet what they ask for.
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
            Something to know before ayahuasca.
          </h3>
          <p>
            The clinical pattern I observe with daily cannabis use
            and psychedelic work applies to ayahuasca as well.
            Regular cannabis users often experience the visual
            content of ayahuasca fully, but the emotional and
            somatic release &mdash; the sobbing, the deep purging,
            the full-body discharge that is typically central to
            ayahuasca&rsquo;s therapeutic work &mdash; tends to
            arrive muted.
          </p>
          <p style={{ marginTop: 16 }}>
            This is discussed in depth on the THC page. For
            ayahuasca specifically, cannabis is already part of
            the standard dieta restriction. Most credible
            ayahuasca traditions ask for 2 to 4 weeks without
            cannabis before ceremony. Follow your
            facilitator&rsquo;s specific guidance, and treat it as
            non-negotiable dieta, not optional suggestion.
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
          eyebrow="IF YOU ARE PREPARING FOR A CEREMONY"
          heading={<em>The member site holds the rest.</em>}
        >
          <p>
            If you are preparing for an ayahuasca ceremony or
            retreat, the member site holds the prep protocols I
            use with my own clients. The full dieta framework with
            daily guidance. Medication interaction screening for
            the MAOI reality. A retreat evaluation checklist with
            specific questions to ask facilitators before booking.
            The 30-day integration protocol structured specifically
            for the post-ceremony period. Access is by invitation.
            If you are working with me or one of our partner
            practitioners, you will receive a magic link to the
            email on file.
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
                href="https://iceers.org"
                target="_blank"
                rel="noreferrer"
              >
                ICEERS &mdash; International Center for
                Ethnobotanical Education, Research and Service
                (research, ethical frameworks, and harm reduction
                specific to ayahuasca)
              </a>
            </li>
            <li>
              <a
                href="https://chacruna.net"
                target="_blank"
                rel="noreferrer"
              >
                Chacruna Institute &mdash; psychedelic research,
                cultural context, and indigenous reciprocity
              </a>
            </li>
            <li>
              <a
                href="https://sacredplantsalliance.org"
                target="_blank"
                rel="noreferrer"
              >
                The Council for the Protection of Sacred Plants
              </a>
            </li>
            <li>
              <em>The Cosmic Serpent</em> &mdash; Jeremy Narby
              (the DNA hypothesis and philosophical context)
            </li>
            <li>
              <em>Singing to the Plants</em> &mdash; Stephan Beyer
              (deep ethnographic study of mestizo{' '}
              <em>ayahuasquero</em> practice)
            </li>
            <li>
              <em>The Ayahuasca Reader</em> &mdash; edited by Luis
              Eduardo Luna (essays from multiple traditions and
              perspectives)
            </li>
            <li>
              <em>The Yagé Letters</em> &mdash; William S.
              Burroughs and Allen Ginsberg (early Western accounts,
              literary and dated)
            </li>
            <li>
              For Santo Daime specifically:{' '}
              <a
                href="https://santodaimeusa.org"
                target="_blank"
                rel="noreferrer"
              >
                santodaimeusa.org
              </a>
            </li>
            <li>
              For UDV:{' '}
              <a
                href="https://udv.org"
                target="_blank"
                rel="noreferrer"
              >
                udv.org
              </a>
            </li>
          </ul>
        </MedicineSection>

        <aside className="legal-disclaimer" role="note">
          <p>
            Ayahuasca contains N,N-DMT, which is a Schedule I
            substance under U.S. federal law as of 2025. However,
            ayahuasca has unique legal standing in the United
            States through religious exemptions. The União do
            Vegetal (UDV) and Santo Daime have Supreme
            Court-recognized religious protection for sacramental
            use, and several other ayahuasca-using religious
            organizations operate under various legal frameworks.
            Legal status in countries where ayahuasca retreats
            commonly occur (Peru, Ecuador, Brazil, Colombia, Costa
            Rica) varies, with ayahuasca being legal or explicitly
            protected in most of these jurisdictions. This page is
            educational. It does not constitute medical advice,
            legal advice, or encouragement to use controlled
            substances. If you are considering working with
            ayahuasca, consult a licensed healthcare provider about
            medication interactions and the MAOI reality, and
            verify current legal status in your jurisdiction. Harm
            reduction exists because people make decisions in the
            world as it actually is, not as we wish it were.
          </p>
        </aside>
      </MedicinePageLayout>
    </>
  );
}
