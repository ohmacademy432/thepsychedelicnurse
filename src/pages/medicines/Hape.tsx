import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import MedicinePageLayout from '../../components/medicine/MedicinePageLayout';
import MedicineHero from '../../components/medicine/MedicineHero';
import MedicineSection from '../../components/medicine/MedicineSection';
import MedicinePullquote from '../../components/medicine/MedicinePullquote';
import SafetyCallout from '../../components/medicine/SafetyCallout';
import DoseBlock from '../../components/medicine/DoseBlock';

const TOC_ITEMS = [
  { id: 'the-compound', label: 'What hapè actually is' },
  { id: 'tobacco', label: 'Sacred and pharmacological' },
  { id: 'lineage', label: 'The lineage' },
  { id: 'application', label: 'Tepi and kuripe' },
  { id: 'safety', label: 'Contraindications' },
  { id: 'dosage', label: 'What the dose actually is' },
  { id: 'adjunct', label: 'Alongside other medicines' },
  { id: 'integration', label: 'Practice and integration' },
  { id: 'decision', label: 'Decision framework' },
  { id: 'member-cta', label: 'Member site' },
  { id: 'further-reading', label: 'Further reading' },
];

export default function Hape() {
  return (
    <>
      <Seo
        title="Hapè"
        description="Hapè is the smallest medicine in this library by effect, and one of the most present. Sacred Amazonian snuff and pharmacologically active tobacco — both truths held with care. Honest harm reduction from April Bogle, RN."
      />

      <MedicinePageLayout tocItems={TOC_ITEMS}>
        <MedicineHero
          eyebrow="AMAZONIAN SACRED SNUFF · CEREMONIAL TOBACCO"
          name="Hapè"
          subtitle="Nicotiana rustica · tree ash · medicinal plant blend"
          intro="Hapè is the smallest medicine in this library by effect, and one of the most present. It shows up at the opening of ayahuasca ceremonies, at the close of kambo sessions, in morning rituals, in grounding moments before hard conversations. It is both sacred snuff and pharmacologically active tobacco, both ceremonial adjunct and standalone medicine. This page is an invitation to understand what hapè actually is, how to be in relationship with it, and why the reverence it commands in the Amazon is something the Western ceremonial world is still learning to hold."
        />

        <MedicineSection
          id="the-compound"
          eyebrow="THE PREPARATION"
          heading={<>Not a drug. Not just a snuff. A prepared medicine.</>}
        >
          <p>
            Hapè (pronounced ha-PAY, sometimes spelled rapé) is a
            finely ground, aromatic powder made primarily from{' '}
            <em>Nicotiana rustica</em>, a species of tobacco native
            to the Americas, combined with ashes from specific
            sacred trees and often other medicinal plants, herbs,
            or seeds. The preparation is ritualistic and varies
            significantly by tribe and by purpose. Tobacco leaves
            are cultivated, harvested, dried, sometimes toasted,
            then ground and sifted to an extremely fine
            consistency. Tree ashes (from trees like Tsunu, Parika,
            Cumaru, or Murici, depending on the tradition) are
            added to increase alkalinity, which enhances the
            bioavailability of the alkaloids when administered. The
            final powder is ceremonially prepared, often with
            prayers and songs, and is considered to carry the
            spirit of both the plants and the maker.
          </p>
          <p>
            Every tribe and every maker produces hapè with
            different ingredients and different intentions. Some
            blends are simple: tobacco and a single tree ash.
            Others contain up to a dozen ingredients, each with
            ceremonial significance. The Yawanawá, Huni Kuin
            (Kaxinawá), Katukina, Nukini, and other peoples of the
            Brazilian and Peruvian Amazon each maintain their own
            preparations, with specific blends for specific
            purposes: grounding, protection, clearing, opening,
            celebration, healing. A &ldquo;Huni Kuin hapè&rdquo;
            and a &ldquo;Yawanawá hapè&rdquo; are not
            interchangeable products. They carry the specific
            character and intention of the tradition that made
            them.
          </p>
          <p>
            The administration is also unlike other tobacco use.
            Hapè is not smoked. It is not chewed. It is blown
            forcefully into each nostril through a bamboo pipe:
            either by a practitioner using a long pipe called a{' '}
            <strong>tepi</strong>, which allows one person to serve
            another, or self-administered with a shorter V-shaped
            pipe called a <strong>kuripe</strong>, which directs
            the breath from the person&rsquo;s own mouth into their
            own nose. The application is intentional and sudden:
            one forceful breath into each nostril, in sequence. The
            powder coats the nasal mucosa, which absorbs the
            alkaloids rapidly. Onset is within seconds; the full
            experience unfolds over 5 to 20 minutes.
          </p>
          <p>
            What hapè does, in the body, is produce a distinct
            sensation of grounding, clarity, and presence, often
            accompanied by initial intensity (tearing, sneezing, a
            rush of heat in the face, sometimes nausea) followed
            by a settled, meditative state. The effect is not what
            most people would call a &ldquo;high.&rdquo; It is more
            like being dropped more fully into your own body. Many
            users describe hapè as the medicine that brings them
            back to themselves: before ceremony, to ground; during
            ceremony, to steady; after ceremony, to integrate; in
            daily practice, to clear the accumulated static of
            modern life. It is this quality, not any psychoactive
            dimension, that makes hapè central to so many Amazonian
            ceremonial traditions.
          </p>

          <MedicinePullquote>
            Hapè is often called a medicine for coming back. Back
            to your body. Back to your breath. Back to the moment
            in front of you. It does not take you anywhere else.
            It brings you here.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="tobacco"
          eyebrow="THE REALITY OF NICOTIANA RUSTICA"
          heading={<>This is sacred medicine. It is also nicotine.</>}
        >
          <p>
            I want to address something directly, because hapè
            sits in a place where two truths coexist and most
            writing about the medicine collapses one of them. The
            first truth is this: <em>Nicotiana rustica</em>, the
            tobacco species in hapè, has been held as sacred
            medicine by indigenous peoples of the Amazon for
            generations. In these traditions, tobacco is not a
            recreational substance or a vice. It is considered a
            master plant, a teacher, a protector, a carrier of
            prayer. The relationship between an Amazonian{' '}
            <em>curandero</em> and their tobacco is a ceremonial
            relationship that has nothing to do with commercial
            cigarette smoking. This is real, and it deserves
            respect.
          </p>
          <p>
            The second truth: <em>Nicotiana rustica</em> is
            pharmacologically serious. It contains nicotine at
            concentrations roughly 9 times higher than commercial
            tobacco (<em>Nicotiana tabacum</em>, the species in
            cigarettes). A typical dose of hapè delivers a
            meaningful amount of nicotine directly to the
            bloodstream through the nasal mucosa. The initial rush
            people experience (the tearing eyes, the pounding
            heart, the brief wave of nausea, the sweat) is not
            mystical. It is the nicotine hitting the bloodstream
            faster than cigarette smoking delivers it. The
            grounding that follows is partially the post-nicotine
            settling of the nervous system. The pharmacology does
            not cancel the sacredness. But it exists.
          </p>
          <p>
            Honoring hapè as sacred medicine includes being honest
            about what it does. A practitioner who treats hapè as
            purely spiritual and dismisses questions about
            nicotine is missing half the picture. A practitioner
            who treats hapè as just nicotine and dismisses the
            ceremonial depth is missing the other half. Both
            halves matter. Both are real.
          </p>
          <p>
            What this means practically: hapè carries all the
            typical pharmacological considerations of nicotine. It
            can elevate heart rate and blood pressure. It can
            interact with certain medications. It is potentially
            habit-forming, as nicotine is, and a regular practice
            requires honest self-awareness about whether you are
            using it ceremonially or seeking a nicotine hit with
            ceremonial wrapping. For people with cardiovascular
            conditions, hapè&rsquo;s pharmacology is not trivial.
            For people without those conditions, it is a substance
            that asks to be respected: used intentionally, not
            habitually, with full awareness of what it is.
          </p>
          <p>
            For a reader considering hapè who has never used
            tobacco or nicotine products: the effect is real but
            brief, and the pharmacological dose in a careful
            ceremonial application is generally well-tolerated by
            healthy adults. For a reader who has a history with
            commercial tobacco or nicotine addiction: hapè is a
            substance that deserves careful thought. Some former
            smokers find hapè&rsquo;s ceremonial context creates a
            different, healthier relationship with nicotine.
            Others find that any nicotine re-exposure risks
            reigniting the addictive pattern they worked to leave.
            Know yourself. Hapè is not a safe way to &ldquo;just
            have a little tobacco again&rdquo; if you are someone
            for whom a little tobacco becomes a lot.
          </p>

          <MedicinePullquote>
            I have watched people approach hapè with reverence and
            receive exactly what the medicine has to offer. I have
            also watched people use ceremonial language to
            rationalize a nicotine habit. The medicine does not
            care which one you are doing. You have to be honest
            with yourself about that.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="lineage"
          eyebrow="THE PEOPLE WHO HAVE CARRIED THIS"
          heading={
            <>
              The specific traditions, and the makers whose hands
              it passes through.
            </>
          }
        >
          <p>
            Hapè is held by many indigenous peoples of the Amazon
            basin, each with their own preparations, their own
            ceremonial contexts, and their own relationships with
            the medicine. The peoples whose hapè is most widely
            encountered in Western ceremonial contexts include the{' '}
            <strong>Yawanawá</strong> and the{' '}
            <strong>Huni Kuin</strong> (Kaxinawá) of Brazil, the{' '}
            <strong>Katukina</strong> of Brazil and Peru, the{' '}
            <strong>Nukini</strong> of Brazil, and the{' '}
            <strong>Shipibo-Conibo</strong> of Peru. Each has
            specific blends associated with specific purposes.
            Yawanawá hapè tends toward grounding and clarity. Huni
            Kuin blends often emphasize spiritual opening and
            connection to the forest. Katukina hapè is known for
            its potency and is often used in warrior ceremonies
            and healing work. These are generalizations; specific
            blends within each tradition vary enormously.
          </p>
          <p>
            The making of hapè is itself a ceremonial practice.
            The maker (often a specific person within the tribe
            who has apprenticed in this work for years) is not
            simply grinding ingredients. They are preparing
            medicine with intention, often with prayer, often with
            song, often over days. The resulting powder is
            considered to carry not only the pharmacological
            properties of the plants but the energetic signature
            of the maker and the ceremony of its preparation. This
            is why indigenous-made hapè is considered to be
            qualitatively different from Western-made imitations,
            even when the ingredient lists are similar. The plant
            is sacred, the preparation is sacred, the maker&rsquo;s
            hands matter.
          </p>
          <p>
            When you receive hapè from a credible Western
            practitioner, a careful question is: where did this
            specific hapè come from, who made it, and what tribe
            does it belong to? A practitioner who can answer this
            specifically (&ldquo;this is Yawanawá hapè made by
            [name], received directly from the community&rdquo;)
            is working with the medicine in relationship to its
            source. A practitioner who can only say &ldquo;it&rsquo;s
            hapè, it&rsquo;s from the Amazon&rdquo; or who has no
            idea where their medicine came from is working with a
            product rather than a relationship. This does not make
            the hapè itself bad, but it tells you about how it is
            being held.
          </p>
          <p>
            The Western ceremonial world&rsquo;s relationship with
            hapè is still being worked out. Some Western
            practitioners have formed deep, ongoing relationships
            with specific indigenous makers and communities,
            purchasing medicine directly and supporting those
            communities economically. Others have built import
            businesses that serve the Western market without much
            direct connection to the peoples whose medicine this
            is. Supporting hapè that flows through direct
            relationship with indigenous communities is one of the
            meaningful things a Western user of this medicine can
            do. It matters where the money goes. It matters whose
            hands prepared the powder. The medicine remembers.
          </p>

          <MedicinePullquote>
            The hapè I work with came from specific makers in
            specific villages, and I know their names. That
            relationship is not a marketing feature. It is part
            of the medicine. When the hapè comes from someone who
            made it as a prayer, that prayer is still in it when
            it reaches you.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="application"
          eyebrow="THE APPLICATION"
          heading={<>The two ways this medicine is given.</>}
        >
          <p>
            Hapè is administered through one of two bamboo pipes.
            The <strong>tepi</strong> is a long, curved pipe,
            typically 10 to 20 inches, designed so that one person
            can blow the medicine into another person&rsquo;s
            nostrils. The tepi is the ceremonial form of
            application, used when a practitioner serves a
            participant or when two people serve each other. The{' '}
            <strong>kuripe</strong> is a shorter V-shaped or
            L-shaped pipe, typically 4 to 6 inches, designed so
            that a person can blow hapè into their own nostrils
            using their own breath. The kuripe is the form most
            commonly used for personal practice and
            self-administration at home.
          </p>
          <p>
            Being served with a tepi is a specific kind of
            ceremonial relationship. The practitioner brings the
            tepi to one side of the participant&rsquo;s face,
            brings their own mouth to the other end, and on a
            signal (often a countdown or a prayer) exhales
            forcefully, delivering the hapè into one nostril. The
            process repeats on the other side. The breath that
            delivers the medicine is itself considered part of the
            ceremony; the practitioner&rsquo;s breath carries
            intention, and in traditional practice is often
            preceded by silent prayer. Being served hapè by a
            skilled practitioner is a markedly different experience
            from self-administering, not because the medicine is
            different but because the relational and ceremonial
            container is fuller.
          </p>
          <p>
            Self-administration with a kuripe is the practice most
            Western practitioners use for daily or personal work.
            A small measured pile of hapè (typically about the
            amount that would fit on a dime) is placed in the bowl
            at one end of the kuripe. The short end is brought to
            the nostril, the long end to the mouth, and on a held
            breath, a sudden exhale delivers the hapè into the
            nasal cavity. The process repeats for the other
            nostril, usually immediately. Learning to dose,
            position, and exhale effectively takes practice; first
            attempts are often too soft (no medicine delivered) or
            too hard (uncomfortable and messy). Most people find
            their technique within a few sessions.
          </p>
          <p>
            A few practical considerations. First: posture matters.
            Sit upright, spine straight, feet grounded. Do not lie
            down to receive hapè. Second: intention matters. Before
            administering, most practitioners pause to set
            intention (a silent prayer, a question, a focus for
            the session). Third: breath matters. The hapè is
            delivered on an exhale, but the moments after are
            about stillness and breath awareness. The initial
            intensity (5 to 30 seconds of burning, watering eyes,
            sometimes sneezing) passes quickly. What follows, the
            10 to 20 minutes of settling into presence, is what
            the medicine is actually for.
          </p>
          <p>
            A note on spitting and blowing the nose. In traditional
            practice, after receiving hapè, participants often spit
            into a bucket or outdoors. The medicine is considered
            to pull energetic material through the sinuses and
            into the mouth, and expelling that material is part of
            the clearing. Many practitioners do not blow their
            nose for some time after: the hapè is still absorbing,
            and blowing the nose interrupts that process. Some
            traditions ask participants not to blow their nose for
            the rest of the day after a ceremonial hapè
            application. Follow the guidance of whoever is holding
            the ceremony.
          </p>

          <MedicinePullquote>
            A kuripe in your own hand is a medicine of self-care.
            A tepi held by someone else is a medicine of
            relationship. Both are hapè, but they are not the
            same experience. I offer people both, and teach them
            to tell the difference.
          </MedicinePullquote>
        </MedicineSection>

        <SafetyCallout
          id="safety"
          label="SAFETY · CONTRAINDICATIONS"
          heading="The nicotine reality, and who hapè is not for."
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
              The nicotine reality
            </h4>
            <ul>
              <li>
                Hapè contains concentrated nicotine from{' '}
                <em>Nicotiana rustica</em>.
              </li>
              <li>
                The pharmacological effects of nicotine are real
                regardless of the ceremonial context.
              </li>
              <li>
                If you have cardiovascular conditions or nicotine
                sensitivity, this is a substance to approach
                carefully.
              </li>
            </ul>
          </div>

          <h4 className="safety-callout-subheading">
            Absolute cardiac contraindications
          </h4>
          <ul>
            <li>
              Recent heart attack, unstable angina, or any acute
              cardiac event
            </li>
            <li>Severe uncontrolled hypertension</li>
            <li>Severe arrhythmias</li>
            <li>History of stroke or TIA</li>
            <li>
              Congenital heart conditions: discuss with cardiologist
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Absolute contraindications
          </h4>
          <ul>
            <li>
              Pregnancy: nicotine is a known teratogen that
              crosses the placenta
            </li>
            <li>
              Breastfeeding: nicotine passes into breast milk
            </li>
            <li>
              Active recovery from nicotine addiction: re-exposure
              can reignite the pattern
            </li>
            <li>
              Severe anxiety or panic disorder where rapid
              physiological arousal could trigger a crisis
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Medication considerations
          </h4>
          <ul>
            <li>
              <strong>Blood pressure medications</strong>: nicotine
              can affect efficacy and acutely raise BP despite
              treatment.
            </li>
            <li>
              <strong>Beta-blockers</strong>: interaction affects
              heart rate response.
            </li>
            <li>
              <strong>Blood thinners</strong>: discuss with
              prescribing physician.
            </li>
            <li>
              <strong>SSRIs and similar</strong>: generally
              compatible, but verify with your practitioner and
              prescribing physician.
            </li>
            <li>
              <strong>MAOIs</strong>: generally compatible, but
              nicotine metabolism can be affected.
            </li>
            <li>
              <strong>Diabetes medications</strong>: nicotine
              affects blood sugar.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Practical considerations
          </h4>
          <ul>
            <li>
              Do not drive for at least 30 minutes after receiving
              hapè.
            </li>
            <li>
              Do not operate heavy machinery during the active
              effect.
            </li>
            <li>
              If you experience unusual symptoms (severe chest
              pain, persistent dizziness, fainting, severe
              headache) seek medical attention.
            </li>
            <li>
              Children should never receive hapè. The dose is
              calibrated for adult physiology.
            </li>
            <li>
              If you have never used tobacco or nicotine products
              and are considering hapè, start with a very small
              dose to assess your response.
            </li>
          </ul>
        </SafetyCallout>

        <MedicineSection
          id="dosage"
          eyebrow="HARM REDUCTION · DOSE"
          heading={<>What a dose of hapè actually looks like.</>}
        >
          <p>
            Hapè dosing is visual and volumetric: measured in
            pinches, small scoops, or dime-sized portions rather
            than milligrams. Individual tolerance varies
            significantly, and different blends have different
            intensities. The guidance below is for most standard
            blends; specific blends known for potency (some
            Yawanawá and Katukina preparations, for example) may
            require half the amount indicated.
          </p>

          <DoseBlock label="First-time dose">
            <li>
              A small pinch per nostril: roughly the size of a
              small grain of rice
            </li>
            <li>Enough to experience the effect without overwhelm</li>
            <li>
              If you have never used tobacco products, start even
              smaller
            </li>
            <li>
              Allow a full 20 minutes before considering a second
              dose
            </li>
          </DoseBlock>

          <DoseBlock label="Standard daily practice dose">
            <li>
              A slightly larger pinch per nostril: roughly
              dime-sized portion per side
            </li>
            <li>
              For established practitioners in personal practice
            </li>
            <li>
              Typically used 1 to 3 times in a session, or once in
              morning ritual
            </li>
          </DoseBlock>

          <DoseBlock label="Ceremonial intensive dose">
            <li>
              Larger portions per side, often administered multiple
              times in sequence
            </li>
            <li>
              For ceremonial contexts with trained practitioners
            </li>
            <li>
              Can produce pronounced effects including brief loss
              of balance, strong emotional release, or significant
              purging
            </li>
            <li>
              Should not be self-administered by people new to the
              medicine
            </li>
          </DoseBlock>

          <DoseBlock label="Warrior or deep work dose">
            <li>
              Intensely larger portions, sometimes with multiple
              applications in close succession
            </li>
            <li>
              Used in specific ceremonial contexts in certain
              tribes (particularly Katukina and some Yawanawá
              traditions)
            </li>
            <li>
              Produces dramatic effects and is not appropriate for
              most Western practice
            </li>
            <li>
              This range is mentioned for completeness, not
              recommendation
            </li>
          </DoseBlock>

          <p>
            A few practical notes on dose. First: hapè dose depends
            heavily on blend potency. A strong Yawanawá or
            Katukina blend at a &ldquo;standard&rdquo; dose can
            hit like an &ldquo;intensive&rdquo; dose from a milder
            preparation. Ask your practitioner about the blend you
            are receiving. Second: tolerance builds with regular
            use, and many practitioners recommend varying or
            cycling blends rather than using the same hapè daily
            for extended periods. A daily hapè practice with the
            same blend can become a nicotine habit dressed in
            ceremonial clothing. Third: the frequency question
            matters. Traditional uses range from ceremonial (a few
            times per year) to regular (weekly or before
            significant events) to daily personal practice. Daily
            use for extended periods carries the same consideration
            any nicotine-containing substance does: honesty with
            yourself about whether it is practice or habit. A week
            off every month or two is a useful check.
          </p>

          <MedicinePullquote>
            The size of the pinch is not the point. The
            relationship to the medicine is the point. A small
            pinch offered with intention does more work than a
            large pinch taken absent-mindedly.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="adjunct"
          eyebrow="CEREMONIAL ADJUNCT"
          heading={
            <>
              Why hapè shows up at the opening and closing of
              other ceremonies.
            </>
          }
        >
          <p>
            Hapè is often the most frequently encountered medicine
            in ceremonial spaces because it sits at the thresholds
            of other ceremonies: opening them, grounding them,
            closing them. Understanding why helps understand what
            hapè is doing when you encounter it there.
          </p>
          <p>
            <strong>Before ayahuasca.</strong> Hapè administered
            before an ayahuasca ceremony is typically used to
            ground the participant, clear sinuses and energetic
            pathways, and help focus intention. The brief
            physiological intensity creates a kind of cleansing
            threshold: many participants describe feeling like
            hapè &ldquo;prepares the channel&rdquo; for the
            medicine that follows. In traditional Shipibo and
            other ayahuasca-holding traditions, hapè is often
            offered as participants gather, with the practitioner
            using it to attune to each person before the longer
            ceremony begins.
          </p>
          <p>
            <strong>Before or after kambo.</strong> Hapè before
            kambo is used primarily to ground and focus; the
            nervous system arousal hapè produces is actually
            useful preparation for the acute physiological event
            that follows. After kambo, hapè is often used to close
            the ceremony, settle the nervous system, and support
            the transition out of the cleansing state. The
            combination is so common that many kambo practitioners
            consider them paired medicines.
          </p>
          <p>
            <strong>
              Alongside 5-MeO-DMT, N,N-DMT, and other psychedelics.
            </strong>{' '}
            Hapè is often used before these medicines to center
            and stabilize the participant, and sometimes after to
            help the return from a deeply altered state. Its
            grounding effect is valued specifically because these
            medicines can leave participants feeling diffuse or
            disoriented; hapè helps bring the nervous system back
            to a settled baseline. Some practitioners consider
            hapè one of the most important tools in their
            ceremonial kit for exactly this reason: a reliable,
            fast, embodied return to presence.
          </p>
          <p>
            <strong>As a standalone medicine.</strong> Many
            practitioners and individuals work with hapè entirely
            on its own, outside the context of other ceremonies.
            Morning practice, integration support, daily
            grounding, pre-decision clearing, relationship repair
            work, meditation support: hapè has applications across
            all of these. Standalone use is not lesser; it is
            simply a different relationship with the same
            medicine. For many practitioners I know, hapè is the
            only plant medicine they work with daily, and the
            relationship they build with it over years is one of
            the deepest medicine relationships they have.
          </p>

          <MedicinePullquote>
            I have watched hapè save ceremonies that were
            wobbling. Someone goes too deep too fast in ayahuasca,
            someone gets caught in a difficult place in 5-MeO,
            someone cannot come all the way back after a
            breathwork session: hapè brings them home. It is the
            medicine that is good at landings.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="integration"
          eyebrow="BUILDING A RELATIONSHIP"
          heading={<>What a hapè practice actually looks like.</>}
        >
          <p>
            Because hapè is often used ceremonially rather than in
            dedicated single-session journeys, the
            &ldquo;integration&rdquo; question is different.
            Integration is not about one big experience; it is
            about what the ongoing relationship with hapè looks
            like in a person&rsquo;s life.
          </p>
          <p>
            For someone who has only encountered hapè within other
            ceremonies (at an ayahuasca retreat, before kambo) the
            integration work is about noticing what the hapè
            moments gave you and carrying that forward. The
            grounding before ceremony, the clearing between
            sessions, the settling afterward: these are not
            incidental to the larger ceremony. They are their own
            teaching. Paying attention to what hapè offered, even
            when you came for a different medicine, is part of
            learning what this medicine does.
          </p>
          <p>
            For someone building a personal practice with a
            kuripe: the practice is most useful when it is
            consistent and intentional. Morning hapè as part of a
            meditation practice. Hapè before a difficult
            conversation. Hapè after a long day when the nervous
            system will not settle. Hapè during transitions:
            starting a new project, ending a relationship, moving
            through grief. What distinguishes a practice from a
            habit is the intentionality. A habit reaches for the
            kuripe unconsciously when the body wants a hit of
            nicotine. A practice opens the box of hapè, sets
            intention, breathes deliberately, receives what is
            offered, and returns to life with the medicine&rsquo;s
            offering. The same action can be either of those
            depending on how it is held.
          </p>
          <p>
            A few practical suggestions for a personal hapè
            practice. Keep your own kuripe, not shared. Rotate
            blends: different blends for different intentions and
            to prevent the medicine from becoming routine. Take
            periodic breaks: a week or two a month without hapè
            is a useful check on the relationship. Watch for the
            signs of the practice becoming habit: reaching for
            hapè without intention, becoming irritable when you
            cannot use it, increasing the frequency or dose over
            time. If you notice these patterns, pause. The
            medicine will be there when you return to it, and it
            will be stronger for the pause.
          </p>

          <MedicinePullquote>
            A relationship with hapè, held well, can be one of
            the most quietly steady medicines a person has in
            their life. It does not ask for weekends. It does not
            ask for retreats. It asks for a few moments of
            intention, most days, and it pays that intention back
            across years.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="decision"
          eyebrow="A DECISION FRAMEWORK"
          heading={<>An honest read from both sides of this work.</>}
        >
          <div className="decision-block">
            <p className="decision-block-label">
              <em>Hapè might serve someone who:</em>
            </p>
            <ul className="decision-list">
              <li>
                Is drawn to the medicine and can approach it with
                respect for its indigenous lineage
              </li>
              <li>
                Has screened clear of cardiac and nicotine-related
                contraindications
              </li>
              <li>
                Wants a grounding, steadying, presence-bringing
                medicine rather than an altered state
              </li>
              <li>
                Is preparing for, in the middle of, or coming out
                of work with other plant medicines
              </li>
              <li>
                Has the self-awareness to recognize if the
                relationship becomes habit rather than practice
              </li>
              <li>
                Is willing to source hapè through practitioners
                or channels connected to the indigenous
                communities whose medicine this is
              </li>
            </ul>
          </div>

          <div className="decision-block">
            <p className="decision-block-label">
              <em>
                Hapè is probably not the right tool right now for
                someone who:
              </em>
            </p>
            <ul className="decision-list decision-list--not">
              <li>
                Has active cardiovascular disease or recent
                cardiac events
              </li>
              <li>
                Is in recovery from nicotine addiction and has
                not thought carefully about the risks of
                re-exposure
              </li>
              <li>Is pregnant or breastfeeding</li>
              <li>
                Is seeking an altered-state psychedelic experience
              </li>
              <li>Has severe anxiety or panic disorder</li>
              <li>
                Is hoping hapè will replace medical treatment for
                conditions that require it
              </li>
              <li>
                Is approaching it as &ldquo;just tobacco&rdquo;
                without understanding what{' '}
                <em>Nicotiana rustica</em> actually is
              </li>
            </ul>
          </div>

          <MedicinePullquote>
            Hapè is not a dramatic medicine. It does not promise
            transformation in a single session. What it offers is
            the quiet, daily work of coming back to yourself, and
            over years, that adds up to transformation of a
            different kind.
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
            A brief note on cannabis and hapè.
          </h3>
          <p>
            The THC and deep-release dynamic discussed on the THC
            page does not apply to hapè in the same way it applies
            to the DMT medicines or ayahuasca. Hapè is not a
            medicine that produces that kind of release. However,
            hapè&rsquo;s grounding effect can be more pronounced
            in people whose baseline nervous system is less dulled
            by regular cannabis use, and some practitioners find
            hapè less effective as a ceremonial grounding tool for
            daily cannabis users.
          </p>
          <p style={{ marginTop: 16 }}>
            This is discussed in depth on the THC page. For hapè
            specifically, the consideration is soft. Cannabis does
            not create a dangerous interaction, and most daily
            cannabis users can work with hapè without issue. The
            practice simply works better with a clearer nervous
            system baseline.
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
          eyebrow="IF YOU ARE BUILDING A PRACTICE"
          heading={<em>The member site holds the rest.</em>}
        >
          <p>
            If you are developing a relationship with hapè
            (ceremonial, personal practice, or as part of your
            work with other medicines) the member site holds the
            frameworks I use with my clients. The sourcing and
            blend guidance. The daily practice protocols. The
            medication interaction review. Practitioner evaluation
            questions for ceremonial settings. Access is by
            invitation. If you are working with me or one of our
            partner practitioners, you will receive a magic link
            to the email on file.
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
            If you are not currently a client, you are still
            welcome to read everything on the public side of this
            site.
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
                href="https://chacruna.net"
                target="_blank"
                rel="noreferrer"
              >
                Chacruna Institute &mdash; indigenous reciprocity
                and cultural context for Amazonian plant medicines
              </a>
            </li>
            <li>
              <a
                href="https://iceers.org"
                target="_blank"
                rel="noreferrer"
              >
                ICEERS &mdash; International Center for
                Ethnobotanical Education, Research and Service
              </a>
            </li>
            <li>
              <a
                href="https://yawanawa.org"
                target="_blank"
                rel="noreferrer"
              >
                The Yawanawá Cultural Center &mdash;
                direct-from-community cultural and medicine
                information
              </a>
            </li>
            <li>
              <em>Rapé: The Amazonian Shamanic Snuff</em> &mdash;
              Fabian B. Anton
            </li>
            <li>
              For hapè sourcing through direct community
              relationships: seek practitioners in your region
              with verifiable ongoing relationships to specific
              indigenous communities. Quality Western-hosted hapè
              sources include organizations that explicitly name
              their makers and return financial support to those
              communities.
            </li>
          </ul>
        </MedicineSection>

        <aside className="legal-disclaimer" role="note">
          <p>
            Hapè is not a controlled substance under U.S. federal
            law and is generally legal to possess and administer
            in most U.S. jurisdictions. The tobacco and tree ash
            components are not regulated at federal levels. Some
            additional plant ingredients in specific blends may be
            subject to regulation depending on the blend; verify
            any specific product. Hapè is not FDA-approved for any
            medical use. This page is educational. It does not
            constitute medical advice. The nicotine content of{' '}
            <em>Nicotiana rustica</em> is pharmacologically
            significant, and cardiovascular screening is
            appropriate for anyone with heart conditions or
            hypertension. If you are considering working with
            hapè, consult a licensed healthcare provider about any
            medical conditions or medications. Harm reduction
            exists because people make decisions in the world as
            it actually is, not as we wish it were.
          </p>
        </aside>
      </MedicinePageLayout>
    </>
  );
}
