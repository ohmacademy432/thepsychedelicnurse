import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import MedicinePageLayout from '../../components/medicine/MedicinePageLayout';
import MedicineHero from '../../components/medicine/MedicineHero';
import MedicineSection from '../../components/medicine/MedicineSection';
import MedicinePullquote from '../../components/medicine/MedicinePullquote';
import DoseBlock from '../../components/medicine/DoseBlock';
import SafetyCallout from '../../components/medicine/SafetyCallout';

const TOC_ITEMS = [
  { id: 'the-compound', label: 'The mushroom molecule' },
  { id: 'the-tradition', label: 'What the tradition teaches' },
  { id: 'the-research', label: 'Therapeutic research' },
  { id: 'dosage', label: 'What the dose actually is' },
  { id: 'safety', label: 'Contraindications' },
  { id: 'microdosing', label: 'Microdosing as self-treatment' },
  { id: 'container', label: 'The container' },
  { id: 'integration', label: 'After the journey' },
  { id: 'decision', label: 'Decision framework' },
  { id: 'member-cta', label: 'Member site' },
  { id: 'further-reading', label: 'Further reading' },
];

export default function Psilocybin() {
  return (
    <>
      <Seo
        title="Psilocybin — the mushroom molecule"
        description="Psilocybin is often called the safest classical psychedelic. That's physiologically true, and psychologically incomplete. Harm reduction for psilocybin mushroom work, including the microdosing-as-self-treatment question."
        type="article"
        articleSection="Medicine Library"
        articleTags={['psilocybin', 'mushrooms', 'harm reduction', 'microdosing', 'Mazatec']}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Psilocybin — the mushroom molecule',
          description:
            'Psilocybin is often called the safest classical psychedelic. That is physiologically true, and psychologically incomplete.',
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
            '@id': 'https://thepsychedelicnurse.org/medicines/psilocybin',
          },
          articleSection: 'Medicine Library',
          about: [
            { '@type': 'Thing', name: 'Psilocybin' },
            { '@type': 'Thing', name: 'Harm reduction' },
            { '@type': 'Thing', name: 'Microdosing' },
          ],
        }}
      />

      <MedicinePageLayout tocItems={TOC_ITEMS}>
        <MedicineHero
          eyebrow="CLASSICAL PSYCHEDELIC · TRYPTAMINE"
          name="Psilocybin"
          subtitle="4-phosphoryloxy-N,N-dimethyltryptamine"
          intro="Psilocybin is often called the safest of the classical psychedelics — and physiologically, that is largely true. You cannot overdose on mushrooms the way you can on almost any other substance on this site. But physiological safety and psychological safety are two different things, and the distinction matters. This page is a closer look at what psilocybin is, what it can open, and where the risks actually live."
        />

        <MedicineSection
          id="the-compound"
          eyebrow="THE COMPOUND"
          heading={<>The mushroom molecule, explained.</>}
        >
          <p>
            Psilocybin is the primary psychoactive compound in over 200
            species of mushrooms in the <em>Psilocybe</em> genus &mdash;
            most famously <em>Psilocybe cubensis</em>, the species most
            commonly cultivated and consumed worldwide. When you ingest a
            psilocybin mushroom, your body rapidly converts psilocybin
            into its active form, <strong>psilocin</strong> (4-HO-DMT),
            which is what actually crosses the blood-brain barrier and
            produces the experience. So when you read about
            &ldquo;psilocybin&rdquo; doing something, most of the actual
            work is being done by psilocin.
          </p>
          <p>
            Pharmacologically, psilocin is a partial agonist at serotonin
            <strong> 5-HT2A receptors</strong>, the same receptor family
            that LSD, DMT, and mescaline work through. This is why all of
            these substances share a family resemblance: altered
            perception, emotional openness, sense of meaning, visual
            geometry, sometimes ego dissolution. Psilocin also engages
            5-HT1A (which tempers anxiety) and 5-HT2C (which influences
            mood and appetite). The interplay of these three is part of
            why mushrooms feel different from LSD even though they share
            the same primary target.
          </p>
        </MedicineSection>

        <MedicineSection
          id="the-tradition"
          eyebrow="THE LINEAGE"
          heading={<>What the tradition teaches.</>}
        >
          <p>
            Psilocybin mushrooms have been held in ceremonial practice
            in what is now southern Mexico for at least 3,000 years,
            probably much longer. Pre-Columbian stone sculptures and
            codices depict mushroom deities. When Spanish colonizers
            arrived, they encountered the practice and moved quickly to
            suppress it. The mushrooms were called <em>teonanácatl</em>{' '}
            in Nahuatl &mdash; &ldquo;flesh of the gods&rdquo; &mdash;
            and for centuries the ceremonies continued quietly, carried
            through the Mazatec, Mixtec, Nahua, and Zapotec peoples of
            what is now Oaxaca.
          </p>
          <p>
            The tradition preserved what clinical research is only now
            beginning to measure. The mushroom was not understood as a
            drug. It was understood as a teacher. A <em>curandera</em>{' '}
            or <em>curandero</em> would hold a <em>velada</em> &mdash;
            an all-night ceremony in near-darkness &mdash; and ask the
            medicine to speak. Songs were sung. Prayers were offered.
            The medicine was met not with an intention to be
            &ldquo;healed,&rdquo; but with a question to be answered.
            Healing was something the medicine might choose to offer,
            in response.
          </p>
          <p>
            María Sabina, a Mazatec <em>curandera</em> in Huautla de
            Jiménez, received the amateur mycologist R. Gordon Wasson
            into a <em>velada</em> in 1955. What Wasson published in{' '}
            <em>Life</em> magazine in 1957 was the first time most of
            the Western world had heard of these mushrooms. Within a
            few years, psilocybin had been isolated in a Swiss
            laboratory, travelers were arriving in Huautla seeking
            their own <em>velada</em>, and the sacred had become a
            destination. Sabina later said she regretted sharing. She
            felt the medicine had lost power once it became famous,
            that the mushrooms had spoken to her in sacred silence and
            now were being asked to speak inside a noisy world.
          </p>
          <p>
            What the tradition teaches, and what the clinical frame
            sometimes misses, is that the medicine has its own agency.
            It is not a tool to be wielded. It is a presence to be met,
            and the meeting has its own dignity. Integration, in this
            lineage, is not cognitive homework. It is continuing to
            live in relationship with what was offered. The mushroom,
            if this lineage is right, does not forget the people it
            has met.
          </p>

          <MedicinePullquote>
            I think about María Sabina often. She later said sharing
            the mushrooms with outsiders had been a mistake &mdash;
            that the sacredness had drained out once they became
            famous. I don&rsquo;t think her lineage owes us anything,
            but I think we owe it a great deal of care in how we speak
            about this medicine.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="the-research"
          eyebrow="WHAT THE RESEARCH SHOWS"
          heading={<>The clinical evidence is getting harder to ignore.</>}
        >
          <p>
            Over the past two decades, psilocybin has moved from Schedule
            I curiosity to one of the most studied compounds in
            psychiatric research. The most robust evidence base is for
            treatment-resistant depression: Phase 2 trials at Johns
            Hopkins, Imperial College London, Usona Institute, and COMPASS
            Pathways have shown that one or two psilocybin-assisted
            therapy sessions can produce durable reductions in depression
            symptoms lasting months to over a year in patients who had
            not responded to conventional treatment. Some participants
            describe it as the first thing that has ever touched the
            depression at its root.
          </p>
          <p>
            There is also meaningful evidence for psilocybin-assisted
            therapy in end-of-life anxiety and existential distress in
            patients with terminal diagnoses, in alcohol use disorder, in
            tobacco cessation (with response rates that embarrass every
            existing smoking cessation drug), and emerging research in
            anorexia nervosa, obsessive-compulsive disorder, and
            prolonged grief. As of 2025, Australia has authorized
            prescription psilocybin for treatment-resistant depression.
            Oregon and Colorado have established regulated therapeutic
            access programs in the United States. The FDA has not yet
            approved psilocybin therapy, but the research pipeline is
            active and the outcomes are consistent.
          </p>
          <p>
            The mechanism is not fully understood &mdash; that is an
            honest statement, not an evasion. What researchers can see is
            that psilocybin temporarily disrupts the default mode network
            (the brain&rsquo;s self-referential narrative machinery),
            increases neuroplasticity, and appears to allow stuck
            patterns of thought and feeling to become workable again.
            Whether the therapeutic effect comes from the neurochemistry,
            the mystical experience, the therapy relationship, or some
            combination of all three is an open question. The field is
            still building the map.
          </p>

          <MedicinePullquote>
            The research almost always uses the phrase
            &ldquo;psilocybin-assisted therapy.&rdquo; The therapy is not
            a footnote. It is half the medicine.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="dosage"
          eyebrow="HARM REDUCTION · DOSE"
          heading={<>What the dose actually is.</>}
        >
          <p>
            Dosing mushrooms is harder than dosing almost any other
            substance on this site, because potency varies wildly between
            species, between batches of the same species, even between
            fruits on the same flush. Someone saying they &ldquo;took
            three grams&rdquo; is giving you less information than they
            think. The honest frame for dosing is ranges, not numbers.
          </p>
          <p style={{ marginTop: 12, color: 'var(--ink-soft)' }}>
            The ranges below are for <em>Psilocybe cubensis</em> dried
            fruiting bodies &mdash; the most common form.
          </p>

          <DoseBlock label="Microdose range">
            <li>0.1&ndash;0.3 g dried</li>
            <li>Sub-perceptual &mdash; you should not feel &ldquo;high&rdquo;</li>
            <li>
              Used in protocols like Fadiman (1 day on, 2 off) or Stamets
              (4 days on, 3 off)
            </li>
            <li>Cycles typically 4&ndash;8 weeks, then break</li>
          </DoseBlock>

          <DoseBlock label="Low / museum dose">
            <li>0.5&ndash;1.5 g dried</li>
            <li>
              Subtle perceptual shifts, mood lift, enhanced sensory
              experience
            </li>
            <li>
              Often used socially or in nature; not typically visionary
            </li>
            <li>Still real, not &ldquo;nothing.&rdquo; People should not drive</li>
          </DoseBlock>

          <DoseBlock label="Moderate dose">
            <li>1.5&ndash;3.5 g dried</li>
            <li>
              Visual patterns, emotional openness, time distortion,
              meaning-amplification
            </li>
            <li>
              Full journey, requires a safe setting and ideally a sober
              sitter
            </li>
            <li>
              The range most recreational users mean when they say
              &ldquo;a trip&rdquo;
            </li>
          </DoseBlock>

          <DoseBlock label="High / therapeutic / ceremonial dose">
            <li>3.5&ndash;5+ g dried</li>
            <li>Full ego dissolution is possible</li>
            <li>Mystical-type experiences most likely in this range</li>
            <li>
              This is the dose range used in most therapeutic trials,
              with trained clinicians and an entire integration framework
              around them
            </li>
            <li>
              Requires prepared set, setting, sitter, and integration
              plan. Non-negotiable.
            </li>
          </DoseBlock>

          <p>
            Two things to hold about these numbers. First: potency
            varies. Even within <em>cubensis</em>, a 2g dose from one
            batch can hit like a 3.5g dose from another. Second:
            psilocybin mushroom tolerance builds very quickly. If you
            dose on Sunday and again on Wednesday, the Wednesday dose
            will be significantly less potent. This is why therapeutic
            protocols space sessions weeks apart, and why more frequent
            dosing tends to produce diminished returns rather than a
            deeper experience.
          </p>

          <MedicinePullquote>
            The people I have seen have the hardest time with mushrooms
            are not the ones who took too much. They are the ones who
            took a moderate dose, alone, without anyone holding the room,
            and didn&rsquo;t know the medicine could find something they
            weren&rsquo;t ready to look at.
          </MedicinePullquote>
        </MedicineSection>

        <SafetyCallout
          id="safety"
          label="SAFETY · CONTRAINDICATIONS"
          heading="Who psilocybin is not for, and what it does not combine with."
        >
          <h4 className="safety-callout-subheading">
            Hard psychiatric contraindications
          </h4>
          <ul>
            <li>
              Personal history of schizophrenia, schizoaffective disorder,
              or primary psychotic disorder
            </li>
            <li>
              First-degree family history of the above (parent, sibling,
              or child). The risk of latent psychiatric conditions being
              unmasked by psychedelics is not theoretical.
            </li>
            <li>
              Active suicidality or severe unmedicated depression without
              a care team in place
            </li>
            <li>Current psychotic symptoms of any kind</li>
          </ul>

          <h4 className="safety-callout-subheading">
            Proceed only with psychiatric supervision
          </h4>
          <ul>
            <li>
              <strong>Bipolar I disorder.</strong> Psilocybin can trigger
              or worsen manic episodes. It has been studied with caution
              in bipolar populations, and there are clinicians trained to
              work in this context, but it is not a solo undertaking. Any
              work with psilocybin here should happen with a psychiatrist
              in the loop.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Medication interactions
          </h4>
          <ul>
            <li>
              <strong>Lithium</strong> combined with psilocybin has been
              associated with seizures and serotonin syndrome. This
              combination is dangerous. Do not combine.
            </li>
            <li>
              <strong>Tramadol</strong> carries seizure and serotonin
              syndrome risk.
            </li>
            <li>
              <strong>MAOIs</strong> potentiate the experience
              significantly and unpredictably. Ayahuasca is essentially
              psilocybin&rsquo;s sibling combined with an MAOI, which is
              why the brew is as powerful as it is.
            </li>
            <li>
              <strong>SSRIs and SNRIs</strong> generally blunt
              psilocybin&rsquo;s effects. Taking higher doses to
              compensate does not solve this and may increase risk. Safe
              psilocybin work on SSRIs usually requires a supervised
              taper and washout: 2 weeks for most SSRIs, 5&ndash;6 weeks
              for fluoxetine (Prozac) because of its long half-life. Do
              not attempt SSRI tapers without clinical supervision.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Physical contraindications
          </h4>
          <ul>
            <li>Pregnancy and breastfeeding</li>
            <li>
              Uncontrolled cardiovascular disease (psilocybin raises
              blood pressure and heart rate modestly but meaningfully)
            </li>
            <li>Severe liver or kidney disease</li>
            <li>
              Seizure disorder (especially when combined with medications
              above)
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Circumstantial contraindications &mdash; not hard, but honest
          </h4>
          <ul>
            <li>
              Currently in acute crisis (recent bereavement, relationship
              rupture, job loss) without support lined up
            </li>
            <li>Alone, with no sitter, at a dose above 1 g</li>
            <li>Drinking, or having used cannabis heavily that day</li>
            <li>In an unfamiliar or unsafe environment</li>
          </ul>
        </SafetyCallout>

        <MedicineSection
          id="microdosing"
          eyebrow="A PATTERN"
          heading={
            <>Microdosing has become a quiet form of self-treatment.</>
          }
        >
          <p>
            Somewhere in the last five years, microdosing psilocybin
            shifted from a productivity experiment into something
            different: a way people are trying to tend to conditions
            that have been hard to live with. I have had people tell me
            they are microdosing for bipolar depression. For postpartum
            depression. For PTSD. For OCD. For symptoms they have not
            yet felt able to bring to a provider. For treatment-resistant
            conditions that had genuinely not responded to anything
            else. I understand exactly why. The research on full-dose
            psilocybin for depression is genuinely hopeful, conventional
            care has failed a lot of these people, and microdosing can
            feel like a door that is finally open.
          </p>
          <p>
            The complication is that almost none of the research on
            psilocybin is on microdoses. The promising depression trials
            use full therapeutic doses (20&ndash;30 mg psilocybin,
            roughly 3&ndash;5 g of dried mushrooms) inside a therapeutic
            container with professional support. The microdosing
            research that exists is mixed, and several well-designed
            placebo-controlled studies suggest that much of what people
            notice on microdoses is carried by expectation as much as by
            the molecule. That does not make the experience any less
            real to the person having it. It does mean the evidence for
            microdosing as a targeted treatment for specific
            psychiatric conditions is thinner than popular conversation
            tends to assume.
          </p>
          <p>
            The specifics matter. For bipolar disorder, psilocybin at
            any dose can potentially trigger or accelerate manic
            episodes. For people with schizotypal features or a family
            history of psychosis, regular psilocybin exposure may
            unmask conditions that were previously quiet. For active
            PTSD, microdosing without a therapeutic container can
            gently open trauma without any support for processing it:
            the window keeps opening, and no one is in the room when it
            does. A pattern I notice is this: someone microdoses for
            three months, feels subtly better, and later finds the
            underlying condition has not really shifted, or has quietly
            intensified in a way that is hard to see from the inside.
            None of that is a personal failing. It is what happens when
            a real condition is being asked to move without the rest of
            the scaffolding that helps it move.
          </p>
          <p>
            I am not against microdosing. There are genuinely useful
            applications, and the research will clarify which ones over
            the next decade. Where I want to be careful is the quiet
            assumption that because mushrooms are natural and the dose
            is small, the protocol is safe and the supervision optional.
            A small dose is still a dose. A multi-week cycle is still a
            pharmacological path. A condition worth treating is worth
            having support around.
          </p>
          <p>
            If you are microdosing for a real psychiatric condition,
            the most loving thing I can say is this: please bring in a
            clinician who knows about psychedelics. They exist now.
            Fluence, Psychedelic Support, and a growing number of
            psychiatry practices are trained in exactly this. You do
            not have to give up the medicine to have a professional in
            the room. You just deserve someone watching the whole
            picture while you do this.
          </p>

          <MedicinePullquote>
            When someone tells me they are microdosing for bipolar, I
            do not argue with them. I ask who is watching with them.
            Usually the answer is no one, and that is the conversation
            we need to have.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="container"
          eyebrow="THE CONTAINER"
          heading={
            <>The molecule is safe. The container is where the risk lives.</>
          }
        >
          <p>
            The phrase &ldquo;set and setting&rdquo; goes back to
            Timothy Leary in the 1960s, and at this point it has been
            repeated so often that it sounds like a cliché. It is not.
            It is the single most accurate thing anyone has ever said
            about how psychedelic experiences unfold.{' '}
            <strong>Set</strong> is what you bring to the experience
            &mdash; your mood, your history, your intentions, your
            emotional state that day, your relationship to your own
            mind. <strong>Setting</strong> is the environment you take
            the medicine in &mdash; the room, the music, the people,
            the safety, the light, the temperature, whether your phone
            is within reach, whether you are expected anywhere in the
            next eight hours. Dose matters. Set and setting decide what
            happens.
          </p>
          <p>
            A third element that gets added in most frameworks is the{' '}
            <strong>sitter</strong>, a sober, steady person who is
            present during the journey without participating in it. The
            sitter&rsquo;s job is not to guide. It is to hold the room.
            They keep the water nearby, keep the environment calm,
            respond to physical needs, and provide a reassuring presence
            if fear or disorientation arises.
          </p>
          <p>
            For many people working with psilocybin, the person holding
            the room is something more than a sitter. A{' '}
            <strong>guide</strong> &mdash; sometimes called a
            facilitator, a ceremonial worker, a medicine carrier, or in
            the Mazatec tradition a <em>curandero</em> or{' '}
            <em>curandera</em> &mdash; actively holds the spiritual
            frame of the journey. That can mean invocation, song,
            prayer, specific lineage practices, and an intentional
            relationship to the medicine as a teacher rather than only a
            molecule. Guides are not only keeping the room safe. They
            are keeping the ceremonial container coherent, and in the
            right hands that coherence is itself part of the medicine.
          </p>
          <p>
            Clinicians trained in psychedelic-assisted therapy hold a
            parallel container, more medical than ceremonial but with
            intention and integration still central. Both paths are
            real. Both can heal. The question is not which is
            &ldquo;right&rdquo; but which fits the person and the work
            they are trying to do. For a dose above roughly 1.5 grams,
            and especially for anyone journeying for the first time or
            working with unresolved trauma, someone holding the room in
            one of these forms is not a nice-to-have. It is the
            difference between a difficult experience becoming
            integrative and a difficult experience becoming traumatic.
          </p>
          <p>
            The most common preventable harm I see with mushrooms is not
            the dose or the substance. It is someone taking a
            moderate-to-high dose alone, or with people who are also
            under the influence, and having the medicine bring up
            something they cannot hold by themselves. The experience
            itself was not &ldquo;bad.&rdquo; The medicine did what
            medicine does. But without a grounded presence in the room,
            the person had no way back to themselves when they needed
            one.
          </p>
          <p>
            A good sitter or guide does not have to be famous or have a
            particular title. They have to be calm, experienced with the
            medicine or at least with holding people through altered
            states, willing to be fully sober and fully present for the
            entire duration, and trustworthy in a way the journeyer
            feels in their body. If you cannot find that person yet, the
            right answer is to wait until you can. The medicine will
            still be there when the container is.
          </p>

          <MedicinePullquote>
            Mushrooms do not cause bad trips. Unheld containers cause
            bad trips. That distinction matters because one of them is
            fixable and the other sounds like an indictment of the
            medicine.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="integration"
          eyebrow="AFTER THE JOURNEY"
          heading={<>The insight is not the healing.</>}
        >
          <p>
            Psilocybin has a way of showing people things. A memory
            they had buried. A pattern they had been running. A
            relationship that has been hurting them longer than they
            realized. A grief they had been walking around. The
            experience of seeing these things clearly, inside the
            medicine, can feel like the healing itself. It is not. The
            healing is what someone does with that clarity over the
            weeks and months that follow. Integration is the work of
            taking what was shown and making it livable.
          </p>
          <p>
            The neuroplasticity window after a psilocybin journey
            lasts roughly two to four weeks. During that time, the
            brain is unusually available to new patterns &mdash; new
            thoughts, new relationships, new behaviors. This is why
            the research protocols pair every dosing session with
            multiple therapy sessions in the weeks that follow. The
            medicine opens the door. Integration is how someone
            actually walks through it.
          </p>
          <p>
            Practical integration looks like: journaling the morning
            after and again a week later; talking with someone who
            understands what you went through; gentle movement, time
            in nature, less screen time, more sleep; making one
            specific, small change in how you are living and sticking
            to it for a month; resisting the urge to dose again
            immediately, because the integration window itself is part
            of the medicine.
          </p>
          <p>
            For many people, integration also lives in practices that
            are explicitly spiritual: prayer, returning to ceremony,
            time with a teacher or an elder who can help translate
            what the medicine offered, working with song, sitting in
            silence, time at an altar. Psilocybin often shows people
            things that do not land cleanly in clinical language.
            Integration is how those things find their way into a
            life that can hold them.
          </p>
          <p>
            If the last journey has not yet been integrated, the next
            journey is not going to help. It is going to arrive before
            the system is ready to receive it.
          </p>

          <MedicinePullquote>
            The most useful question to ask three days after a journey
            is not &ldquo;what did I see?&rdquo; It is &ldquo;what am
            I going to do differently tomorrow?&rdquo;
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="decision"
          eyebrow="A DECISION FRAMEWORK"
          heading={<>An honest read from both sides of this work.</>}
        >
          <div className="decision-block">
            <p className="decision-block-label">
              <em>Psilocybin might serve someone who:</em>
            </p>
            <ul className="decision-list">
              <li>
                Is psychologically stable and has the emotional
                resources to sit with whatever comes up
              </li>
              <li>
                Has screened clear of the hard psychiatric and
                medication contraindications
              </li>
              <li>
                Has a prepared set, a safe setting, and a trusted
                sitter (or is working inside a legal therapeutic
                program)
              </li>
              <li>
                Is approaching the medicine with a specific intention
                &mdash; grief, a stuck pattern, an existential
                question, a trauma they are ready to look at
              </li>
              <li>
                Can commit to real integration &mdash; therapy,
                journaling, community &mdash; in the weeks after
              </li>
              <li>
                Is willing to wait a minimum of 2&ndash;4 weeks
                between sessions, and longer for higher doses
              </li>
            </ul>
          </div>

          <div className="decision-block">
            <p className="decision-block-label">
              <em>Psilocybin is probably not the right tool right now for someone who:</em>
            </p>
            <ul className="decision-list decision-list--not">
              <li>
                Has a personal or first-degree family history of
                schizophrenia, schizoaffective disorder, or primary
                psychotic disorder
              </li>
              <li>Is currently on lithium or tramadol</li>
              <li>
                Is in acute crisis with no support structure in place
              </li>
              <li>
                Is planning to journey alone at a dose above 1 gram
              </li>
              <li>
                Is hoping microdosing will replace professional care
                for a serious psychiatric condition
              </li>
              <li>
                Is being offered mushrooms in a setting where mental
                safety is not the priority (festivals, parties,
                unfamiliar group settings)
              </li>
              <li>
                Has been running a microdosing protocol for more than
                8 weeks without a break or a clinical check-in
              </li>
            </ul>
          </div>

          <MedicinePullquote>
            Mushrooms reward preparation like almost nothing else I
            have ever worked with. The medicine meets you where you
            come to meet it. Come prepared, and it is generous. Come
            scattered, and it will ask more of you than you meant to
            give.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="member-cta"
          eyebrow="IF YOU ARE PREPARING FOR A JOURNEY"
          heading={<em>The member site holds the rest.</em>}
        >
          <p>
            If you are preparing to work with psilocybin &mdash; at a
            therapeutic dose, with a sitter, a guide, or a facilitator
            &mdash; the member site holds the preparation protocols,
            screening tools, the 30-day integration framework, and
            journey-specific guides I use with my clients. Access is by
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
                href="https://hopkinspsychedelic.org"
                target="_blank"
                rel="noreferrer"
              >
                Johns Hopkins Center for Psychedelic &amp; Consciousness
                Research
              </a>
            </li>
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
                href="https://fluencetraining.com"
                target="_blank"
                rel="noreferrer"
              >
                Fluence &mdash; psychedelic therapy training and
                clinical directory
              </a>
            </li>
            <li>
              <a
                href="https://psychedelic.support"
                target="_blank"
                rel="noreferrer"
              >
                Psychedelic Support &mdash; directory of clinicians
                trained in psychedelic-assisted therapy
              </a>
            </li>
            <li>
              <em>How to Change Your Mind</em> &mdash; Michael Pollan
            </li>
            <li>
              <em>The Psychedelic Explorer&rsquo;s Guide</em> &mdash;
              James Fadiman
            </li>
            <li>
              <em>Sacred Mushroom of Visions: Teonanácatl</em> &mdash;
              Ralph Metzner (on the Mazatec tradition)
            </li>
            <li>
              <em>The Wondrous Mushroom</em> &mdash; R. Gordon Wasson
              (historical and ethnographic context)
            </li>
          </ul>
        </MedicineSection>

        <aside className="legal-disclaimer" role="note">
          <p>
            Psilocybin is a Schedule I substance under U.S. federal law
            as of 2025, though Oregon and Colorado have established
            regulated therapeutic access programs, several cities have
            decriminalized personal possession, and Australia has
            authorized prescription use for treatment-resistant
            depression. Legal status is evolving rapidly and varies
            significantly by jurisdiction. This page is educational. It
            does not constitute medical advice, legal advice, or
            encouragement to use controlled substances. If you are
            considering working with psilocybin, consult a licensed
            healthcare provider and verify current legal status in your
            jurisdiction. Harm reduction exists because people make
            decisions despite prohibition &mdash; the goal here is to
            ensure that those who decide to proceed can do so with the
            best possible information.
          </p>
        </aside>
      </MedicinePageLayout>
    </>
  );
}
