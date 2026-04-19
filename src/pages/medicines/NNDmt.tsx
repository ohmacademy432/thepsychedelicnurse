import type React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import MedicinePageLayout from '../../components/medicine/MedicinePageLayout';
import MedicineHero from '../../components/medicine/MedicineHero';
import MedicineSection from '../../components/medicine/MedicineSection';
import MedicinePullquote from '../../components/medicine/MedicinePullquote';
import DoseBlock from '../../components/medicine/DoseBlock';
import SafetyCallout from '../../components/medicine/SafetyCallout';

const TOC_ITEMS = [
  { id: 'the-compound', label: 'What N,N-DMT actually is' },
  { id: 'distinction', label: 'N,N vs 5-MeO' },
  { id: 'entity-encounters', label: 'Entity encounters' },
  { id: 'dosage', label: 'What the dose actually is' },
  { id: 'safety', label: 'Contraindications' },
  { id: 'container', label: 'The container' },
  { id: 'integration', label: 'Integration' },
  { id: 'decision', label: 'Decision framework' },
  { id: 'member-cta', label: 'Member site' },
  { id: 'further-reading', label: 'Further reading' },
];

const COMPARISON_ROWS: {
  label: string;
  nn: React.ReactNode;
  meo: React.ReactNode;
}[] = [
  {
    label: 'Primary receptor',
    nn: '5-HT2A',
    meo: '5-HT1A (300\u20131000\u00d7 stronger than 5-HT2A)',
  },
  {
    label: 'Character',
    nn: 'Additive, content-rich',
    meo: 'Subtractive, content-empty',
  },
  {
    label: 'Visual experience',
    nn: 'Vivid, colorful, highly geometric, often architectural or biological; vast dreamscapes',
    meo: 'Minimal or absent; often described as \u201cwhiteout\u201d or \u201cclear light\u201d rather than imagery',
  },
  {
    label: 'Entity encounters',
    nn: 'Common: beings, intelligences, sense of being met by others',
    meo: 'Rare: the experience is typically of no-other, pure being without counterpart',
  },
  {
    label: 'Self',
    nn: 'Often remains present as witness or explorer in an external world',
    meo: 'Typically dissolves entirely; no witness remaining',
  },
  {
    label: 'Phenomenological metaphor',
    nn: 'Traveling into a populated dimension',
    meo: 'The dimension dissolving, including you',
  },
  {
    label: 'Emotional character',
    nn: 'Often awe, curiosity, fascination, sometimes fear',
    meo: 'Often peace, dissolution, the feeling of homecoming or ego-death',
  },
  {
    label: 'After-effects',
    nn: 'A sense of having been somewhere and brought something back',
    meo: 'A sense of the ground of being having briefly been touched',
  },
];

export default function NNDmt() {
  return (
    <>
      <Seo
        title="N,N-DMT"
        description="N,N-DMT is the spirit molecule of cultural imagination and the molecule behind the most consistent strange phenomenon in psychedelic research — the reported encounter with intelligences. Harm reduction and honest framing, held by April Bogle, RN."
      />

      <MedicinePageLayout tocItems={TOC_ITEMS}>
        <MedicineHero
          eyebrow="SHORT-ACTING TRYPTAMINE · THE VISIONARY"
          name="N,N-DMT"
          subtitle="N,N-dimethyltryptamine"
          intro="N,N-DMT is the compound many people mean when they say &ldquo;DMT.&rdquo; It is the spirit molecule of cultural imagination. It is also the molecule that produces the single most consistent strange phenomenon in all of psychedelic research: the reported encounter with intelligences that feel as real as the person encountering them. This page is an invitation to hold the pharmacology and the mystery in the same hand, without collapsing either one."
        />

        <MedicineSection
          id="the-compound"
          eyebrow="THE COMPOUND"
          heading={<>The molecule, explained.</>}
        >
          <p>
            N,N-DMT is a tryptamine, structurally related to serotonin,
            to psilocin, to melatonin, and to its sibling 5-MeO-DMT.
            Pharmacologically, it is primarily a serotonin{' '}
            <strong>5-HT2A receptor agonist</strong>, the same receptor
            that LSD, psilocin, and mescaline act on most strongly.
            This shared receptor target is why N,N-DMT sits in the
            same general family of experience as LSD and mushrooms
            (visual geometry, sensory amplification, perception of
            meaning) while being dramatically shorter in duration and
            more intense at peak.
          </p>
          <p>
            N,N-DMT is one of the most widely distributed psychoactive
            molecules in the natural world. It is present in hundreds
            of plant species, notably <em>Mimosa hostilis</em>,{' '}
            <em>Psychotria viridis</em>, <em>Acacia confusa</em>, and
            dozens of others, as well as in small amounts in the
            bodies of many mammals, including humans. The question of
            why the human body produces DMT, and what role if any
            endogenous DMT plays in ordinary consciousness or dream
            states, is a genuine open scientific question. Research
            on endogenous DMT is ongoing and inconclusive, but the
            molecule is demonstrably present.
          </p>
          <p>
            Administered orally, N,N-DMT alone is inactive &mdash; it
            is rapidly metabolized by monoamine oxidase in the
            digestive system before it can reach the brain.
            Indigenous Amazonian peoples discovered thousands of
            years ago that combining DMT-containing plants with
            another plant containing an MAOI (monoamine oxidase
            inhibitor) allows the DMT to become orally active,
            producing a four-to-six-hour journey rather than a
            fifteen-minute flash. This combination is ayahuasca.
            Ayahuasca is its own medicine, with its own lineage,
            preparation, risks, and protocols, and it receives its
            own dedicated page on this site rather than being folded
            into this one.
          </p>
          <p>
            When N,N-DMT is vaporized, smoked, or administered via
            other routes that bypass the gut, the experience is
            dramatically shorter and more intense than ayahuasca.
            Onset within 30 to 60 seconds. Peak within 2 to 3
            minutes. Return to baseline within 15 to 20 minutes. This
            short-duration form is the N,N-DMT experience this page
            is primarily addressing.
          </p>

          <MedicinePullquote>
            N,N-DMT is the only psychedelic I know of whose raw
            intensity is matched by how briefly it lasts. You do not
            build up to this medicine. You arrive, you meet it, and
            it releases you &mdash; all before the coffee you made
            earlier gets cold.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="distinction"
          eyebrow="THE CRITICAL DISTINCTION"
          heading={<>One methoxy group. Two different medicines.</>}
        >
          <p>
            N,N-DMT and 5-MeO-DMT are siblings. They share the same
            tryptamine backbone. The entire chemical difference
            between them is a single methoxy group (one oxygen and
            one methyl, attached to the fifth position of the indole
            ring) that 5-MeO has and N,N does not. That tiny
            structural difference completely rewrites what the
            molecule does to a human nervous system.
          </p>
          <p>
            This distinction matters because the word &ldquo;DMT&rdquo;
            is often used as if it meant one medicine, when in fact
            it covers two genuinely different experiences. Someone
            who has taken &ldquo;Bufo&rdquo; and someone who has
            smoked N,N-DMT are not describing variations of the same
            experience. They are describing two different
            pharmacological events. Someone preparing for one while
            thinking they are preparing for the other is setting
            themselves up for either disappointment or harm.
          </p>
          <p>
            Below is a clinical comparison of what each medicine
            tends to produce at full dose. Individual variation is
            large, but the pattern differences are consistent enough
            to be diagnostic.
          </p>

          <div className="comparison-table">
            <div className="comparison-col">
              <h4 className="comparison-col-head">
                N,N-DMT at full dose
              </h4>
              {COMPARISON_ROWS.map((row) => (
                <div key={`nn-${row.label}`} className="comparison-row">
                  <span className="comparison-label">{row.label}</span>
                  <p>{row.nn}</p>
                </div>
              ))}
            </div>
            <div className="comparison-col">
              <h4 className="comparison-col-head">
                5-MeO-DMT at full dose
              </h4>
              {COMPARISON_ROWS.map((row) => (
                <div key={`meo-${row.label}`} className="comparison-row">
                  <span className="comparison-label">{row.label}</span>
                  <p>{row.meo}</p>
                </div>
              ))}
            </div>
          </div>

          <p>
            Neither medicine is &ldquo;better.&rdquo; They do
            different work. N,N-DMT tends to be more suited to
            exploration, encounter, creative and philosophical
            inquiry, and the kinds of insights that arrive as
            content. 5-MeO-DMT tends to be more suited to complete
            dissolution, ego-death work, and the kind of healing
            that arrives through the removal of self rather than the
            receipt of information. People who have worked with both
            often describe them as complementary rather than
            redundant. The two medicines ask different questions of
            the nervous system and receive different answers.
          </p>

          <MedicinePullquote>
            I have had clients come to me after a retreat, convinced
            something went wrong with their experience, because their
            N,N-DMT session did not produce what their friend&rsquo;s
            5-MeO session produced. Most of the time, nothing went
            wrong. They just took a different medicine than the one
            they were expecting.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="entity-encounters"
          eyebrow="THE THING THAT KEEPS HAPPENING"
          heading={
            <>
              The most consistent strange phenomenon in psychedelic
              research.
            </>
          }
        >
          <p>
            One of the most documented and least explained features
            of N,N-DMT is the reported encounter with entities.
            Beings. Intelligences. Presences that feel as real to
            the person meeting them as the person reading this
            sentence feels to themselves. I want to report what I
            have observed clinically, and what the research
            literature reports, and then I want to hold carefully
            what I think the honest epistemic position on this is.
          </p>
          <p>
            What is reported, with remarkable consistency across
            users, cultures, dose ranges, and personality types:
            beings that appear to notice the arriving person. That
            appear to have their own agenda, not merely reflect the
            person&rsquo;s. That are frequently described as
            &ldquo;machine elves&rdquo; (Terence McKenna&rsquo;s
            phrase), geometric intelligences, insectoid figures,
            luminous humanoid beings, ancestors, deceased loved
            ones, extraterrestrials, or simply &ldquo;them&rdquo;
            &mdash; intelligences for which the person has no
            cultural reference. Johns Hopkins conducted a large
            survey of N,N-DMT entity encounters and found that the
            majority of respondents rated the experience as more real
            than ordinary reality, that the entities often
            communicated (by gesture, telepathy, or direct knowing
            rather than language), and that the encounters produced
            lasting shifts in the person&rsquo;s worldview and
            sense of meaning &mdash; frequently including people who
            had previously identified as atheist or materialist.
          </p>
          <p>
            What the research cannot say is what these entities are.
            Neuroscience can describe the conditions under which
            these experiences arise &mdash; which receptors are
            active, which brain networks are disrupted, which
            regions are unusually coherent during the peak.
            Neuroscience cannot adjudicate between &ldquo;these are
            generated by neural activity and feel real because
            N,N-DMT produces experiences of ultimate realness&rdquo;
            and &ldquo;consciousness interfaces with a broader
            reality that this molecule makes temporarily
            accessible.&rdquo; Both explanations are compatible with
            everything we currently measure. Serious neuroscientists
            who study psychedelics have acknowledged this openly. It
            is a genuinely unresolved question.
          </p>
          <p>
            The position I have come to, after holding many people
            through this: I take what the people I sit with report
            seriously. I do not tell them their entities were
            &ldquo;really there&rdquo; and I do not tell them their
            entities were &ldquo;just neurons.&rdquo; Neither
            statement is one I am equipped to make, and both
            statements miss what actually happened to the person.
            What actually happened is that they had an experience of
            meeting something that did not feel like themselves,
            that felt intelligent, that often left them changed.
            That is the data. What it means is a question bigger
            than any nurse or neuroscientist can answer
            definitively, and I am suspicious of anyone who claims
            otherwise.
          </p>
          <p>
            What I do tell clients is this: the encounter, whatever
            it was, is yours to integrate. Whether the being was a
            message from beyond, a projection from deep in your own
            psyche, a culturally shaped manifestation of the nervous
            system&rsquo;s native visionary capacity, or some
            combination of these &mdash; the experience happened
            and it is still part of you. Integration is not about
            deciding the metaphysical status of what you met.
            Integration is about letting what you received meet the
            life you are going back to.
          </p>

          <MedicinePullquote>
            I am a nurse and an empathically well-trained guide. I
            believe in what I can measure. I also believe that after
            8 years of sitting beside this medicine, I have no idea
            what it is showing people. I hold both of those things
            at once, and I think everyone who works with this
            molecule honestly eventually does.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="dosage"
          eyebrow="HARM REDUCTION · DOSE"
          heading={<>What the dose actually is.</>}
        >
          <p>
            N,N-DMT dosing is simpler than 5-MeO dosing in one way
            and more complicated in another. It is simpler because
            the experience is less dose-sensitive in terms of
            safety. It is more complicated because the experience
            quality changes radically with dose, and a dose that
            seems fine on paper can under- or over-shoot dramatically
            depending on route and vaporization technique. The
            ranges below assume vaporized or smoked administration.
          </p>

          <DoseBlock label="Threshold dose">
            <li>5&ndash;15 mg vaporized</li>
            <li>
              Mild visual distortion, enhanced colors, sense of
              presence
            </li>
            <li>
              The &ldquo;I felt something was happening but
              didn&rsquo;t go anywhere&rdquo; dose
            </li>
            <li>Experience lasts 3&ndash;8 minutes</li>
          </DoseBlock>

          <DoseBlock label="Light to moderate dose">
            <li>15&ndash;30 mg vaporized</li>
            <li>
              Full visual geometry, strong mood shift, altered time
              sense
            </li>
            <li>
              Usually still internally self-aware; the body is
              present
            </li>
            <li>Experience lasts 5&ndash;12 minutes</li>
          </DoseBlock>

          <DoseBlock label="Full dose (breakthrough)">
            <li>30&ndash;60 mg vaporized</li>
            <li>
              Breakthrough: the complete entry into the DMT
              dimension, entity encounters likely, ego frequently
              softens or dissolves
            </li>
            <li>
              This is what most people mean by &ldquo;doing
              DMT&rdquo;
            </li>
            <li>
              Experience lasts 10&ndash;15 minute peak, full
              experience 15&ndash;20 minutes
            </li>
          </DoseBlock>

          <DoseBlock label="Heroic / deep-dive dose">
            <li>60+ mg vaporized</li>
            <li>
              Rarely meaningfully &ldquo;more&rdquo; of the
              experience. Above roughly 50&ndash;60 mg, most users
              report the experience does not deepen linearly.
            </li>
            <li>
              Increased difficulty returning cleanly, harder for the
              body to metabolize, sometimes produces what is called
              &ldquo;DMT lung&rdquo; (chest heaviness from the harsh
              vapor)
            </li>
            <li>
              This range is the territory of experienced users
              working with specific intentions, not exploration.
            </li>
          </DoseBlock>

          <p>
            A few practical notes. First: vaporization technique
            matters enormously. DMT crystals must be vaporized at
            the right temperature. Too hot and they combust,
            producing harsh lung-irritating smoke without delivering
            the full dose. Too cool and they do not vaporize at all.
            The device matters. The user&rsquo;s inhalation
            technique matters. A 30 mg dose wasted by poor
            vaporization may deliver only 15 mg to the bloodstream.
            This is one reason N,N-DMT sessions are best held by
            someone experienced, not attempted solo on a first
            session.
          </p>
          <p>
            Second: combining N,N-DMT with an MAOI (as in ayahuasca)
            completely transforms the medicine into something
            longer, deeper, and more integratable, but also more
            medically complex. That combination belongs to the
            ayahuasca page, not here.
          </p>
          <p>
            Third: N,N-DMT does not build meaningful tolerance
            between sessions the way psilocybin does, but sessions
            closer than 2&ndash;3 days apart often feel flatter or
            less complete. Most experienced practitioners recommend
            at least a week between sessions, longer for deep work.
          </p>

          <MedicinePullquote>
            The most common underdose I see in ceremonial settings
            is not from the dose being too low. It is from the
            vaporization being wrong, and no one in the room knowing
            enough to recognize that.
          </MedicinePullquote>
        </MedicineSection>

        <SafetyCallout
          id="safety"
          label="SAFETY · CONTRAINDICATIONS"
          heading="Who N,N-DMT is not for, and what it does not combine with."
        >
          <h4 className="safety-callout-subheading">
            Absolute psychiatric contraindications
          </h4>
          <ul>
            <li>
              Personal history of schizophrenia, schizoaffective
              disorder, or primary psychotic disorder
            </li>
            <li>
              First-degree family history of the above. The risk is
              real and not theoretical.
            </li>
            <li>Active psychotic symptoms</li>
            <li>Unprocessed severe dissociative disorder</li>
            <li>
              Active suicidal crisis without a care team in place
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Proceed only with psychiatric supervision
          </h4>
          <ul>
            <li>
              <strong>Bipolar I disorder.</strong> N,N-DMT can
              trigger manic or hypomanic episodes. If you live with
              bipolar I and are considering this medicine, the right
              starting place is a conversation with a psychiatrist
              familiar with both bipolar disorder and psychedelic
              medicine. This is not a solo undertaking.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Absolute medication contraindications
          </h4>
          <ul>
            <li>
              <strong>Any MAOI</strong> &mdash; phenelzine,
              tranylcypromine, moclobemide, and the beta-carbolines
              in ayahuasca &mdash; combined with vaporized N,N-DMT
              produces ayahuasca pharmacology at breakthrough-dose
              intensity, which is much more dangerous than
              intentional ayahuasca. Serotonin syndrome, hypertensive
              crisis, seizures, and fatalities have been reported.
              Minimum 2-week washout for short-acting MAOIs, longer
              for irreversible ones.
            </li>
            <li>
              <strong>SSRIs and SNRIs</strong> blunt the experience
              significantly and carry serotonin syndrome risk. Safe
              work generally requires supervised taper and washout:
              2 weeks for most SSRIs, 5&ndash;6 weeks for fluoxetine
              (Prozac). Do not taper without clinical supervision.
            </li>
            <li>
              <strong>Lithium</strong>: seizure risk. Do not combine.
            </li>
            <li>
              <strong>Tramadol</strong>: serotonin syndrome risk,
              seizure risk.
            </li>
            <li>
              <strong>St. John&rsquo;s Wort</strong>: mild MAOI
              activity, can potentiate unpredictably.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Physical contraindications
          </h4>
          <ul>
            <li>
              Uncontrolled cardiovascular disease, recent cardiac
              event, significant arrhythmia. N,N-DMT transiently
              raises heart rate and blood pressure.
            </li>
            <li>Seizure disorder</li>
            <li>Pregnancy and breastfeeding</li>
            <li>Severe respiratory disease</li>
          </ul>

          <h4 className="safety-callout-subheading">
            Situational considerations
          </h4>
          <ul>
            <li>
              First-time N,N-DMT work done alone is a setup for a
              hard experience. A sitter is not optional for a first
              breakthrough dose.
            </li>
            <li>
              The medicine is extremely rapid in onset. Being in a
              car, in public, or in any setting where the person
              cannot lie down safely is dangerous.
            </li>
            <li>
              Eyes open or eyes closed: experiences differ
              dramatically. Most practitioners recommend eyes
              closed for the first breakthrough session.
            </li>
          </ul>
        </SafetyCallout>

        <MedicineSection
          id="container"
          eyebrow="THE CONTAINER"
          heading={<>What an N,N-DMT session actually needs.</>}
        >
          <p>
            A good N,N-DMT container is simpler than a 5-MeO
            container in some ways &mdash; the medicine is shorter,
            the physical risk profile is somewhat lower, and cardiac
            screening, while wise, is not the critical safety gate it
            is for 5-MeO &mdash; and harder in others. What N,N-DMT
            asks of a container is mostly psychological integrity.
            The person is going to go somewhere intense within thirty
            seconds of exhaling. They need to know the room is safe,
            the sitter is steady, and the return is held.
          </p>
          <p>
            <strong>The facilitator or sitter.</strong> For a
            breakthrough-dose session, at minimum one sober person
            should be present who has either taken the medicine
            themselves or held others through it. The sitter&rsquo;s
            job is to keep the pipe or vaporizer ready for subsequent
            inhalations, to monitor breathing and airway, to keep the
            space quiet, to hold the person physically steady if
            they need it (many people&rsquo;s bodies convulse,
            vocalize, or sit up reflexively during the experience),
            and to provide an anchor voice on return. A good sitter
            is calm, patient, non-interpretive, and does not narrate
            the experience for the journeyer. They hold. They do not
            lead.
          </p>
          <p>
            <strong>The setting.</strong> Quiet, private, and
            pre-arranged so the person does not have to think about
            anything operational. A comfortable surface to lie on,
            because the body goes down. Eyeshades if the person
            wants them. No lighting changes mid-session. Music, if
            used, chosen in advance, not improvised during the
            experience. Water and a blanket nearby for the return. A
            phone within the sitter&rsquo;s reach in case of
            emergency, but never the journeyer&rsquo;s. No pets in
            the room. No interruption from outside the room for at
            least 30 minutes. The container around N,N-DMT does not
            need to be elaborate, but it does need to be intentional.
          </p>

          <MedicinePullquote>
            N,N-DMT is the shortest-duration psychedelic I work
            with, and it is the one where a missing sitter most
            frequently makes the difference between a breakthrough
            and a breakdown.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="integration"
          eyebrow="AFTER THE SESSION"
          heading={<>Bringing back what was received.</>}
        >
          <p>
            Integration after N,N-DMT has a specific shape that
            differs from longer psychedelics. The experience itself
            was brief, often under 20 minutes of active peak, but
            what was received can take months to unfold. The
            shortness is deceptive. People walk away from a
            15-minute breakthrough feeling completely fine, go back
            to their day, and then find themselves processing what
            they encountered in waves over the weeks that follow.
            The integration is not proportional to the duration of
            the experience. It is proportional to what the
            experience opened.
          </p>
          <p>
            Practical integration for N,N-DMT: write it down as soon
            as possible, not to create a narrative, but to capture
            the felt sense, the textures, the specific visual
            imagery, any communications received. N,N-DMT
            experiences fade from memory in a way that is
            well-documented and frequently frustrating to people who
            were just certain they would remember everything.
            Journaling within the first hour preserves more than any
            subsequent attempt. After the initial capture,
            integration continues through: therapy with someone who
            understands visionary experiences (not pathologizing);
            creative expression &mdash; drawing, painting, music,
            movement &mdash; because N,N-DMT content often arrives
            in forms that are easier to express visually than
            verbally; conversation with others who have been there;
            and, specifically, resisting the urge to immediately
            dose again.
          </p>
          <p>
            The tendency to want to go back to N,N-DMT quickly,
            because the experience was short, because the ordinary
            world feels dim afterward, because there is a sense of
            unfinished business with whatever was met, is one I
            want people to be honest with themselves about. The
            integration window is real. What you received cannot be
            integrated if you keep adding new material to the queue.
            Most practitioners I trust recommend a minimum of two to
            four weeks between N,N-DMT sessions for exploratory
            work, and months between sessions for therapeutically
            focused work. The medicine will be there when you are
            ready.
          </p>

          <MedicinePullquote>
            The question after a breakthrough is not &ldquo;when can
            I go again.&rdquo; The question is &ldquo;what did this
            want me to know, and how am I going to live with
            that.&rdquo; The first question keeps people seeking.
            The second one changes lives.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="decision"
          eyebrow="A DECISION FRAMEWORK"
          heading={<>An honest read from both sides of this work.</>}
        >
          <div className="decision-block">
            <p className="decision-block-label">
              <em>N,N-DMT might serve someone who:</em>
            </p>
            <ul className="decision-list">
              <li>
                Has meaningful prior psychedelic experience and
                mature integration practices
              </li>
              <li>
                Has a stable psychological baseline and a support
                structure
              </li>
              <li>
                Has screened clear of the hard contraindications
                above
              </li>
              <li>Is working with an experienced sitter or facilitator</li>
              <li>
                Is approaching the medicine with specific curiosity:
                exploration, creative inquiry, philosophical
                questions, a relationship with their own visionary
                capacity
              </li>
              <li>Can commit to integration work in the weeks after</li>
              <li>Is willing to wait real time between sessions</li>
            </ul>
          </div>

          <div className="decision-block">
            <p className="decision-block-label">
              <em>
                N,N-DMT is probably not the right tool right now for
                someone who:
              </em>
            </p>
            <ul className="decision-list decision-list--not">
              <li>Has any of the hard contraindications</li>
              <li>
                Is seeking their first psychedelic experience. This
                is not a good place to start.
              </li>
              <li>
                Has unprocessed severe trauma and no support team
              </li>
              <li>
                Is trying to access N,N-DMT alone with no experienced
                sitter
              </li>
              <li>
                Is using it recreationally at parties, in cars, or in
                any setting where they cannot safely lie down
              </li>
              <li>
                Is hoping the entity encounter will tell them
                something specific that will solve their life
              </li>
              <li>Is stacking sessions weekly or more frequently</li>
              <li>
                Has not built any relationship to integration
                practices in their ordinary life
              </li>
            </ul>
          </div>

          <MedicinePullquote>
            N,N-DMT is a medicine for people who are prepared to
            meet something they do not understand and return to a
            life that will need them to live differently. If you are
            not prepared for either half of that, this is not the
            medicine for you right now.
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
            Something to know before an N,N-DMT session.
          </h3>
          <p>
            Daily or near-daily cannabis use appears to reduce
            emotional and somatic release in N,N-DMT sessions, just
            as it does in 5-MeO-DMT sessions. The pattern I have
            observed is consistent: clients who use cannabis
            regularly often experience the visual and perceptual
            content of N,N-DMT fully, but the discharge (the
            sobbing, shaking, vocalizing, full-body release that is
            often the therapeutic heart of the work) arrives muted
            or not at all.
          </p>
          <p style={{ marginTop: 16 }}>
            This is discussed in depth on the THC page. The
            practical implication: if you are preparing for N,N-DMT
            work and you use cannabis regularly, I would strongly
            encourage a pause of at least 2&ndash;4 weeks before
            the session. It is not about cannabis being wrong. It
            is about your nervous system having the responsiveness
            this medicine requires.
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
            If you are preparing to work with N,N-DMT &mdash;
            smoked, vaporized, or in an ayahuasca context &mdash;
            the member site holds the prep protocols I use with my
            own clients. Medication interaction screening. SSRI
            tapering frameworks. Cannabis tapering frameworks. The
            full container checklist for evaluating a sitter or
            facilitator. The 30-day integration protocol. Access is
            by invitation. If you are working with me or one of our
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
                href="https://maps.org"
                target="_blank"
                rel="noreferrer"
              >
                MAPS &mdash; Multidisciplinary Association for
                Psychedelic Studies
              </a>
            </li>
            <li>
              <em>DMT: The Spirit Molecule</em> &mdash; Rick
              Strassman, MD (foundational clinical research on
              N,N-DMT)
            </li>
            <li>
              <em>DMT Dialogues</em> &mdash; essays by Strassman,
              Luke, Kent, and others on the entity encounter
              question
            </li>
            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/?term=DMT+entity+encounter"
                target="_blank"
                rel="noreferrer"
              >
                Johns Hopkins Survey of DMT Entity Encounters (via
                PubMed)
              </a>
            </li>
            <li>
              <em>Food of the Gods</em> &mdash; Terence McKenna
              (cultural and ethnobotanical context)
            </li>
            <li>
              <em>The Cosmic Serpent</em> &mdash; Jeremy Narby (the
              ayahuasca/DNA hypothesis, for readers drawn to the
              philosophical question)
            </li>
            <li
              style={{
                fontSize: 13,
                color: 'var(--ink-mute)',
                fontStyle: 'italic',
              }}
            >
              For ayahuasca specifically, see this site&rsquo;s
              dedicated ayahuasca page (coming in Phase 2).
            </li>
          </ul>
        </MedicineSection>

        <aside className="legal-disclaimer" role="note">
          <p>
            N,N-DMT is a Schedule I substance under U.S. federal
            law as of 2025. Possession, distribution, and
            manufacture outside approved research settings is
            illegal. Certain religious contexts &mdash; including
            legally recognized ayahuasca churches such as the
            União do Vegetal and Santo Daime &mdash; have limited
            legal protections in some U.S. jurisdictions. Legal
            status varies globally. This page is educational. It
            does not constitute medical advice, legal advice, or
            encouragement to use controlled substances. If you
            are considering working with N,N-DMT, consult a
            licensed healthcare provider and verify current legal
            status in your jurisdiction. Harm reduction exists
            because people make decisions in the world as it
            actually is, not as we wish it were.
          </p>
        </aside>
      </MedicinePageLayout>
    </>
  );
}
