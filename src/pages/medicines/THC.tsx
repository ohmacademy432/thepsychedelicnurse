import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import MedicinePageLayout from '../../components/medicine/MedicinePageLayout';
import MedicineHero from '../../components/medicine/MedicineHero';
import MedicineSection from '../../components/medicine/MedicineSection';
import MedicinePullquote from '../../components/medicine/MedicinePullquote';
import DoseBlock from '../../components/medicine/DoseBlock';
import SafetyCallout from '../../components/medicine/SafetyCallout';

const TOC_ITEMS = [
  { id: 'the-compound', label: 'What THC actually is' },
  { id: 'psychedelic-at-dose', label: 'Psychedelic at dose' },
  { id: 'dosage', label: 'What the dose actually is' },
  { id: 'safety', label: 'Contraindications' },
  { id: 'daily-use', label: 'The cost of daily use' },
  { id: 'cannabis-dmt', label: 'Cannabis and DMT release' },
  { id: 'intentional-use', label: 'When cannabis serves' },
  { id: 'container', label: 'The container' },
  { id: 'integration', label: 'Integration and T-break' },
  { id: 'decision', label: 'Decision framework' },
  { id: 'member-cta', label: 'Member site' },
  { id: 'further-reading', label: 'Further reading' },
];

export default function THC() {
  return (
    <>
      <Seo
        title="THC"
        description="What THC actually does in the body and the nervous system — at three doses: casual, habitual, psychedelic. Honest information, not judgment. Harm reduction for cannabis, held by April Bogle, RN."
      />

      <MedicinePageLayout tocItems={TOC_ITEMS}>
        <MedicineHero
          eyebrow="PSYCHEDELIC AT DOSE · CANNABINOID"
          name="THC"
          subtitle="Δ9-tetrahydrocannabinol"
          intro="THC is the most familiar and the most misunderstood medicine on this site. It sits in a strange place in our culture — treated as casual enough to be a weekend habit, serious enough to be a prescribed treatment, and almost never talked about in the same breath as the other psychedelics. But at the right dose, held the right way, THC is a psychedelic. And at daily habitual use, it does something quiet to the nervous system that I keep watching affect the other medicines in this library. This page is about both of those truths."
        />

        <MedicineSection
          id="the-compound"
          eyebrow="THE COMPOUND"
          heading={<>The cannabinoid, explained.</>}
        >
          <p>
            THC is the primary psychoactive compound in{' '}
            <em>Cannabis sativa</em> and <em>Cannabis indica</em>. It is
            one of over a hundred cannabinoids the plant produces.
            Unlike psilocybin or MDMA, which act on serotonin receptors,
            THC works through the body&rsquo;s{' '}
            <strong>endocannabinoid system</strong> &mdash; a network of
            receptors (CB1 and CB2) that was only discovered in the late
            1980s, named after the plant that revealed it. These
            receptors modulate pain, mood, memory, appetite, sleep,
            stress response, and immune function. Cannabis does not
            impose effects on the body from the outside. It activates a
            system the body already has, which is part of why the
            experience can feel so deeply familiar, and part of why the
            effects ripple into so many systems at once.
          </p>
          <p>
            THC has a long human history. Archaeological evidence places
            cannabis use at least 2,500 years back, probably much
            further, across ceremonial, medicinal, and everyday contexts
            in India, China, Central Asia, the Middle East, and Africa.
            The plant was in the American pharmacopeia until 1942.
            Prohibition in the United States emerged from political
            forces &mdash; including explicit racial rhetoric in the
            1930s &mdash; rather than from new medical evidence. This
            context matters, because it shaped nearly a century of what
            the medical community was allowed to study and what the
            public was told.
          </p>
          <p>
            The THC in a modern dispensary or street supply is not the
            THC of the 1970s. Average potency of cannabis flower in
            legal markets has risen from roughly 3&ndash;5&#37; THC in
            the 1980s to 20&ndash;30&#37; today. Concentrates &mdash;
            shatter, wax, oil, distillate &mdash; can exceed 90&#37; THC.
            Edibles are dosed in ways that can surprise anyone who came
            of age in a different cannabis era. When someone says
            &ldquo;I smoked weed in college and I was fine,&rdquo; that
            sentence is not describing the same compound as a modern dab
            or a 25&#37; flower joint. The molecule is the same. The dose
            is not.
          </p>

          <MedicinePullquote>
            Cannabis is the only medicine on this site most people think
            they already understand. That is the first thing that makes
            it deserve a closer look &mdash; not the molecule, but the
            casualness we bring to it.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="psychedelic-at-dose"
          eyebrow="THE TRUTH ABOUT HIGH DOSES"
          heading={<>Cannabis is psychedelic. Say it out loud.</>}
        >
          <p>
            The dividing line between &ldquo;cannabis&rdquo; and
            &ldquo;psychedelic&rdquo; in most people&rsquo;s minds is a
            cultural artifact, not a pharmacological one. At a
            recreational dose &mdash; a few puffs of flower, a gummy at
            a party &mdash; THC produces relaxation, appetite, mild
            euphoria, and sensory shifts. At a higher dose, especially
            orally, especially on an empty stomach, especially with a
            concentrate, THC produces ego softening, time distortion,
            visual alteration, emotional release, dissolution of the
            self-story, and sometimes full visionary states
            indistinguishable in form from what people describe on
            mushrooms or LSD. This is not hyperbole. It is pharmacology.
          </p>
          <p>
            The mechanism is different from the classical serotonergic
            psychedelics, but the phenomenology overlaps more than the
            culture admits. Higher doses of THC disrupt communication
            between the prefrontal cortex and deeper emotional centers,
            amplify introspective and creative states, distort the
            body&rsquo;s sense of time and scale, and can produce
            experiences of meaning, presence, and ego-loss that are
            functionally indistinguishable from what people call
            mystical experience on other psychedelics. Scientific
            literature reviews, particularly from researchers studying
            high-dose THC in end-of-life care and trauma work, are
            increasingly willing to use the word &ldquo;psychedelic&rdquo;
            in describing what the compound actually does.
          </p>
          <p>
            What intentional high-dose cannabis work looks like is a
            real question with real answers. It is not the same thing
            as getting too high at a party. A therapeutic high-dose
            session uses an oral preparation (edible, tincture, or
            concentrate) at a dose chosen for the person, in a prepared
            setting, with a sober sitter, with intention set, with
            music and integration planned, and with no alcohol or
            other substances in the window. In clinical and hospice
            work, high-dose cannabis has been used to help patients
            approach fear of death, unlock grief that could not be
            reached with talk therapy alone, and create windows of
            somatic release in bodies that had been armored for
            decades.
          </p>
          <p>
            None of this is a suggestion that anyone should try it. It
            is a correction of the record. Cannabis can be a
            psychedelic medicine. It can also be a mild social aid. It
            can also be an everyday habit that slowly costs the user
            access to parts of themselves. The same molecule, held
            three different ways, produces three very different
            relationships, and the reader deserves to know all three.
          </p>

          <MedicinePullquote>
            When I hold people through a high-dose cannabis session
            with intention and a sitter, the work that comes through is
            indistinguishable from what I see on mushrooms. I say that
            carefully, because I know what it sounds like. But I have
            watched it too many times not to say it.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="dosage"
          eyebrow="HARM REDUCTION · DOSE"
          heading={<>What the dose actually is.</>}
        >
          <p>
            Dosing THC is harder than dosing almost any other substance
            on this site, because potency, route, and tolerance vary
            more wildly than anywhere else. Someone saying they
            &ldquo;took an edible&rdquo; is describing something that
            could mean 2 mg or 200 mg, and those are radically different
            experiences. The honest frame for THC dosing is by
            milligrams of actual THC, by route, and by tolerance.
          </p>
          <p style={{ marginTop: 12, color: 'var(--ink-soft)' }}>
            The ranges below are for <strong>oral THC</strong>{' '}
            (edibles, tinctures, capsules) &mdash; where dosing clarity
            matters most, because once it is down, there is no titrating
            in real time.
          </p>

          <DoseBlock label="Microdose (oral THC)">
            <li>1&ndash;2.5 mg</li>
            <li>Sub-perceptual or barely perceptual</li>
            <li>Used for mild mood lift, sleep support, pain, or anxiety</li>
            <li>
              The range where most first-time users should start,
              especially with edibles
            </li>
          </DoseBlock>

          <DoseBlock label="Low dose (oral THC)">
            <li>2.5&ndash;5 mg</li>
            <li>
              Mild euphoria, subtle relaxation, enhanced sensory
              experience
            </li>
            <li>Socially functional for most people with some tolerance</li>
            <li>
              The range most commercial &ldquo;single-dose&rdquo; edibles
              target
            </li>
          </DoseBlock>

          <DoseBlock label="Moderate / recreational dose (oral THC)">
            <li>5&ndash;15 mg</li>
            <li>
              Clear psychoactivity &mdash; time distortion, mood shift,
              introspection
            </li>
            <li>
              Requires a safe setting; not socially functional for many
              people
            </li>
            <li>
              This is where many first-time edible users accidentally
              land and wish they had not
            </li>
          </DoseBlock>

          <DoseBlock label="High / therapeutic / psychedelic dose (oral THC)">
            <li>20&ndash;100+ mg</li>
            <li>
              Full altered-state territory &mdash; visual distortion,
              ego dissolution possible, somatic release, strong time
              dilation
            </li>
            <li>
              Requires prepared set, setting, sober sitter, integration
              plan
            </li>
            <li>
              This is the range where THC becomes psychedelic in the
              clinical sense
            </li>
            <li>
              Enormous variability &mdash; a cannabis-naive person at 20
              mg and a daily user at 20 mg are having fundamentally
              different experiences
            </li>
          </DoseBlock>

          <p>
            <strong>Inhaled</strong> cannabis (smoked or vaporized
            flower, or concentrates) is harder to quantify cleanly
            because absorption varies by technique, device, and
            individual lung capacity. Effects peak within 10 minutes and
            last 1&ndash;3 hours, so a user can titrate in real time.
            Oral cannabis peaks 1&ndash;3 hours after ingestion and
            lasts 4&ndash;8 hours or more, with no way to un-dose once
            it is taken. The single most common source of harm I see
            with cannabis is someone eating an edible, not feeling
            anything at 45 minutes, eating more, and then landing hard
            two hours later with a dose they cannot get down from.
          </p>
          <p>
            The rule &mdash; <strong>start low, wait at least 2 hours,
            then reassess</strong> &mdash; is not optional advice. It
            is the single thing that would prevent most cannabis-related
            emergency visits I have seen.
          </p>

          <MedicinePullquote>
            Tolerance is the silent variable in every cannabis dose
            conversation. A daily user at 20 mg and a sober-curious
            friend at 20 mg are not taking the same substance.
          </MedicinePullquote>
        </MedicineSection>

        <SafetyCallout
          id="safety"
          label="SAFETY · CONTRAINDICATIONS"
          heading="Who THC is not for, and what it can do at the edges."
        >
          <h4 className="safety-callout-subheading">
            Psychiatric contraindications
          </h4>
          <ul>
            <li>
              Personal or first-degree family history of schizophrenia,
              schizoaffective disorder, or primary psychotic disorder.
              Cannabis use &mdash; especially high-potency cannabis,
              daily use, and adolescent use &mdash; is associated with
              increased risk of developing psychotic disorders in
              genetically vulnerable individuals. This is one of the
              best-established risks in cannabis research.
            </li>
            <li>
              Personal history of <strong>bipolar disorder</strong>. THC
              can destabilize mood cycles and trigger manic or
              hypomanic episodes. If you live with bipolar disorder and
              are considering cannabis, this is a conversation to have
              with a psychiatrist familiar with both.
            </li>
            <li>Active psychotic symptoms of any kind</li>
            <li>
              History of severe cannabis-induced panic or dissociative
              episodes
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Physical contraindications
          </h4>
          <ul>
            <li>Pregnancy and breastfeeding</li>
            <li>
              Adolescent brain development &mdash; the research on
              adolescent heavy cannabis use and lasting cognitive
              effects is increasingly clear
            </li>
            <li>
              Cardiovascular disease. THC raises heart rate and can
              trigger arrhythmia; cardiac events in at-risk individuals
              after cannabis use have been documented
            </li>
            <li>
              Certain anesthesia situations &mdash; always disclose
              daily cannabis use before surgery
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Cannabinoid Hyperemesis Syndrome
          </h4>
          <ul>
            <li>
              A condition affecting long-term heavy cannabis users,
              characterized by cyclical severe vomiting, abdominal
              pain, and compulsive hot showering for relief
            </li>
            <li>
              It is underdiagnosed, often because the connection to
              cannabis is not obvious. Paradoxically, the only
              treatment is cessation.
            </li>
            <li>
              If you are a daily user experiencing unexplained cyclical
              vomiting, please consider this diagnosis with a provider.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Sleep and dreams
          </h4>
          <ul>
            <li>
              Regular cannabis use significantly reduces{' '}
              <strong>REM sleep</strong> &mdash; the phase where most
              dreaming happens and where the brain does much of its
              emotional processing and memory consolidation. Many daily
              users report not dreaming, or not remembering dreams.
              This is not imagination. It is measurable REM
              suppression.
            </li>
            <li>
              This is part of why cannabis can feel like it helps with
              sleep: users fall asleep faster and spend less time in
              the dream-rich phases that might otherwise surface
              difficult material. For someone whose sleep has been
              disturbed by trauma or nightmares, this can feel like
              real relief. Over time, it also means the nervous system
              is doing less of the processing work it is designed to
              do during sleep.
            </li>
            <li>
              The vivid dreams people report in the first one to two
              weeks of a tolerance break are <strong>REM rebound</strong>
              {' '}&mdash; the brain catching up on months or years of
              suppressed dream sleep. The dreams can be unusually
              intense, emotionally charged, or strange. This is
              typically a sign the system is recalibrating, not a
              problem. Dreams usually settle back to a normal baseline
              by week three or four.
            </li>
            <li>
              Falling asleep faster is not the same as sleeping well. If
              daily cannabis use is functioning as a sleep aid, that is
              worth exploring with a clinician, because the medication
              itself is shaping the sleep architecture in ways that
              often do not show up until it is removed.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Dependence and withdrawal
          </h4>
          <ul>
            <li>
              <strong>Cannabis is addictive.</strong> THC engages the
              brain&rsquo;s mesolimbic dopamine pathway &mdash; the
              same reward circuitry that underlies addiction to
              nicotine, alcohol, and other substances. The cultural
              idea that cannabis is &ldquo;not addictive&rdquo; is
              neurologically inaccurate. Not everyone who uses it
              becomes dependent, but the mechanism is real and
              measurable, and it deserves the same honest respect we
              bring to any reward-engaging substance.
            </li>
            <li>
              Cannabis use disorder affects roughly 9&#37; of adult
              users and 17&#37; of those who started in adolescence.
              These are not fringe numbers.
            </li>
            <li>
              Withdrawal is real and clinically recognized: irritability,
              insomnia, anxiety, appetite loss, cravings, vivid dreams.
              It typically peaks at days 3&ndash;7 and resolves over
              2&ndash;4 weeks.
            </li>
            <li>
              &ldquo;I can quit whenever I want&rdquo; and &ldquo;I
              never actually try to quit&rdquo; are two sentences that
              frequently live in the same head.
            </li>
          </ul>
        </SafetyCallout>

        <MedicineSection
          id="daily-use"
          eyebrow="A PATTERN"
          heading={<>The quiet toll of habitual daily use.</>}
        >
          <p>
            I want to be careful here, because I am not writing this to
            convince a daily user to stop. I am writing this because
            daily users deserve to know what the research actually shows
            and what I see clinically, and then make their own decision
            with that information. What I see is this: daily cannabis
            use, especially high-potency use, especially starting young,
            changes the endocannabinoid system in specific, measurable
            ways. The receptors downregulate. The system&rsquo;s
            baseline shifts. The person who has been smoking daily for
            years is not experiencing life from the same nervous system
            baseline they had before they started, and that shift is
            often not visible from the inside.
          </p>
          <p>
            The most consistent clinical pattern I see in long-term
            daily users is what I call{' '}
            <strong>emotional flattening</strong>. Not depression
            exactly &mdash; depression has a texture, a heaviness, an
            active suffering. Flattening is different. It is the gradual
            muting of the full dynamic range of human feeling. Peaks of
            joy become smaller. Valleys of grief become less accessible.
            The nervous system, offered a steady exogenous cannabinoid
            signal, stops producing its own with the same
            responsiveness. People often describe realizing in
            retrospect, years after quitting, that they had been
            emotionally offline in ways they could not see while they
            were still in it.
          </p>
          <p>
            The research supports what I see clinically. Heavy long-term
            cannabis use is associated with blunted emotional processing
            in neuroimaging studies, reduced responsiveness to naturally
            rewarding stimuli (the &ldquo;anhedonia&rdquo; effect), and
            altered amygdala function. None of this is an indictment of
            cannabis. It is a description of what happens when you give
            any system a steady exogenous agonist for long enough. The
            body adapts. The adaptation has costs.
          </p>
          <p>
            The invitation I offer daily users is not &ldquo;stop.&rdquo;
            It is <strong>be curious</strong>. A two-week break,
            sometimes called a T-break (tolerance break), is the single
            most useful diagnostic tool in the cannabis conversation.
            Two weeks without THC will not cure anything, but it will
            show you what your nervous system actually feels like
            without the medication you have been giving it. That
            information is yours to have. What you do with it is yours
            to decide.
          </p>

          <MedicinePullquote>
            I am not asking anyone to stop. I am asking them to
            remember what the inside of their own nervous system feels
            like when nothing is in it. That information belongs to
            them.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="cannabis-dmt"
          eyebrow="A CLINICAL OBSERVATION"
          heading={<>THC frequently blunts emotional release in DMT journeys.</>}
        >
          <p>
            Over the years of holding people through 5-MeO-DMT and
            N,N-DMT sessions, I have watched a pattern emerge that is
            not yet written about in the mainstream psychedelic
            literature. I want to name it here because I think it will
            matter to people working with these medicines, and because
            I have not seen anyone else say it plainly.
          </p>
          <p>
            Clients who use cannabis daily, or near-daily, tend to have
            a <strong>noticeably higher threshold for emotional and
            somatic release</strong> in DMT work than clients who do
            not. The same dose that would open a cannabis-free client
            into sobbing, shaking, vocalizing, full-body release
            &mdash; often produces only a fraction of that response in
            a daily THC user. They report beautiful experiences. They
            see the geometry. They have the visions. But the discharge
            &mdash; the bodily arrival of grief, rage, terror, or
            ecstatic release that is typically the therapeutic heart of
            the work &mdash; arrives muted, or sometimes not at all, or
            sometimes only a day or two later in fragments.
          </p>
          <p>
            I have seen this pattern consistently enough that I now
            ask every client about their cannabis use during
            preparation, not as a moral question, but as a clinical
            one. It affects how I plan the session. It affects what
            dose range I will work with. It affects what I tell them
            to expect. And it is part of why I ask clients to consider
            pausing daily THC use for a minimum of two to four weeks
            before a DMT session &mdash; not because cannabis is
            wrong, but because the nervous system that has been held
            in a steady exogenous cannabinoid state appears to have
            less capacity for the kind of acute release that these
            medicines are so good at producing.
          </p>
          <p>
            The mechanism is speculative, but the pattern fits what we
            know about chronic CB1 receptor activation. Daily cannabis
            use downregulates the endocannabinoid system&rsquo;s
            responsiveness. Emotional processing, amygdala reactivity,
            and autonomic flexibility are all partially mediated
            through endocannabinoid tone. A chronically downregulated
            system is a less responsive system. The 5-HT2A flood of a
            DMT experience may simply land differently in a nervous
            system whose baseline has been reshaped by steady cannabis
            use. This is hypothesis, not settled science. What is not
            hypothesis is the clinical pattern.
          </p>
          <p>
            I share this for one reason: people working with DMT
            medicines deserve to know what may be affecting their
            experience. A client who comes to a 5-MeO session expecting
            the kind of release their friend described &mdash; and
            does not get it &mdash; often assumes something is wrong
            with them. Usually, something is not wrong with them.
            Usually, there is a variable in their recent history that
            is shaping the response, and sometimes that variable is
            their relationship with cannabis. Knowing this in advance
            does not take anything away. It gives people back a piece
            of information that is theirs.
          </p>

          <MedicinePullquote>
            The medicines keep showing me things about the other
            medicines. This is one of them. I think daily cannabis and
            deep psychedelic work are harder to hold in the same life
            than has been openly acknowledged so far.
          </MedicinePullquote>

          <div
            style={{
              marginTop: 32,
              padding: '18px 22px',
              border: '0.5px solid var(--rule)',
              borderRadius: 2,
              maxWidth: 680,
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontStyle: 'italic',
                color: 'var(--ink-mute)',
                lineHeight: 1.6,
              }}
            >
              This observation is cross-referenced on the{' '}
              <Link
                to="/medicines/5-meo-dmt"
                style={{ color: 'var(--rust)' }}
              >
                5-MeO-DMT page
              </Link>{' '}
              and the{' '}
              <Link
                to="/medicines/nn-dmt"
                style={{ color: 'var(--rust)' }}
              >
                N,N-DMT page
              </Link>
              . If you are preparing for either of those medicines and
              are a regular cannabis user, the preparation protocols
              in the member site account for this.
            </p>
          </div>
        </MedicineSection>

        <MedicineSection
          id="intentional-use"
          eyebrow="WHEN IT SERVES"
          heading={<>Cannabis held with intention is a different medicine.</>}
        >
          <p>
            Everything in the two sections above is about unintentional
            use &mdash; the background hum of daily THC in a life.
            Intentional use is a different conversation. Cannabis held
            with care has been medicine for thousands of years and is
            medicine now. I have seen it carry people through chronic
            pain that nothing else would touch. I have seen it open
            grief that had been locked for decades. I have seen it
            create enough somatic softness that a body could finally
            feel its own breath. I have watched it help people in
            hospice approach the end of their life without terror.
          </p>
          <p>
            What makes intentional cannabis use different from habitual
            use is not the molecule. It is the frame. Intentional use
            is: chosen in advance, for a specific purpose, at a
            considered dose, in a prepared setting, followed by
            integration, with space between uses. Habitual use is:
            automatic, undirected, at whatever dose, in whatever
            setting, with no integration and no space. The same
            compound, held two different ways, produces two different
            relationships. The relationship is the medicine.
          </p>
          <p>
            If cannabis is serving someone, meaningfully and discernibly
            serving them, that is real and should be respected. What I
            ask people to watch for is the drift. The drift from
            &ldquo;this helps me sleep after hard days&rdquo; to
            &ldquo;I need this to sleep at all.&rdquo; The drift from
            &ldquo;this relaxes my anxiety around social events&rdquo;
            to &ldquo;I cannot be in social situations without
            this.&rdquo; The drift from &ldquo;this unlocks my
            creativity&rdquo; to &ldquo;I cannot write without
            this.&rdquo; The drift itself is not the problem. Not
            noticing the drift is.
          </p>

          <MedicinePullquote>
            The question I ask is not &ldquo;is cannabis helping
            you?&rdquo; It is &ldquo;do you still have a choice about
            it?&rdquo; Those are different questions.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="container"
          eyebrow="THE CONTAINER"
          heading={
            <>
              If you&rsquo;re going to do this as psychedelic work, hold
              it that way.
            </>
          }
        >
          <p>
            At high doses of THC, the container matters as much as the
            dose &mdash; maybe more. The old psychedelic shorthand
            applies here: <strong>set</strong>,{' '}
            <strong>setting</strong>, and <strong>sitter</strong>. Set
            is what you bring to the experience: your mood that day,
            your history, your intention, your relationship to your own
            mind. Setting is the environment: the room, the music, the
            safety, whether your phone is within reach, whether you
            are expected anywhere in the next eight hours. A sitter is
            a sober, steady person who is present with you during the
            experience without participating in it &mdash; their job
            is not to guide, but to hold the room so you can meet
            whatever arises. Together, these three decide what happens
            at a psychedelic dose.
          </p>
          <p>
            A 50 mg edible on an empty stomach, alone, in an
            unprepared mental state, is a setup for the kind of
            difficult experience that gives cannabis its reputation.
            The same 50 mg edible, with intention set, in a prepared
            space, with a sober sitter present, with music curated,
            with integration time blocked out the next day, is a
            completely different container around the same
            pharmacology.
          </p>
          <p>
            The difference between &ldquo;I ate too much and had a bad
            trip&rdquo; and &ldquo;I used high-dose cannabis
            intentionally for somatic release&rdquo; is not a
            difference in the substance. It is a difference in the
            preparation and the holding. If you are going to meet THC
            at the psychedelic end of its range, meet it there
            consciously. That means dosing carefully &mdash; probably
            starting at 20&ndash;25 mg if you are not a daily user, and
            lower if you are new to edibles. It means having someone in
            the room who is not also under the influence. It means
            building integration time into the day after, not going to
            work hungover from your own body&rsquo;s comedown. It means
            knowing in advance that it will last 6&ndash;8 hours and
            not trying to fight the arc.
          </p>
          <p>
            For most people, this kind of intentional high-dose
            cannabis work is best done in collaboration with someone
            who has held it before &mdash; a therapist trained in
            ketamine-assisted or cannabis-assisted therapy, a
            facilitator who has experience holding altered states, a
            trusted friend who has walked this ground themselves. This
            is not a molecule to meet at its psychedelic end for the
            first time alone.
          </p>

          <MedicinePullquote>
            High-dose cannabis at a party is a bad trip waiting to
            happen. High-dose cannabis in a prepared container is
            medicine. The molecule does not choose which one it
            becomes. You do.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="integration"
          eyebrow="AFTER THE SESSION · AFTER DAILY USE"
          heading={
            <>Integration for intentional use. Reset for habitual use.</>
          }
        >
          <p>
            For intentional high-dose cannabis work, the integration
            rules are the same as for any psychedelic. Journal the
            morning after. Talk with someone who understands what the
            experience was. Make one specific change in how you are
            living and hold it for a month. Resist the urge to
            immediately dose again. The neuroplasticity window is
            shorter with cannabis than with psilocybin, but it is real:
            the day after a significant cannabis experience is a window
            where the nervous system is unusually available for new
            patterns.
          </p>
          <p>
            For habitual daily use, the integration practice is
            different. It is a <strong>tolerance break</strong>
            &mdash; a T-break &mdash; and it is the single most useful
            tool I can offer a daily user. Two weeks without THC. No
            flower, no edibles, no concentrates, no CBD-with-trace-THC
            products. What you are doing is giving the endocannabinoid
            system a chance to show you its own baseline. The first
            three days are often the hardest: irritability, sleep
            disruption, vivid dreams, appetite changes. By day five or
            six, most people notice their body&rsquo;s own
            endocannabinoid tone coming back online. By day ten, the
            dreams have usually settled and mood stabilizes. By day
            fourteen, you have meaningful diagnostic information about
            what your nervous system actually feels like without the
            medication.
          </p>
          <p>
            What you do with that information is yours. Some people
            return to cannabis with a different relationship &mdash;
            less frequent, more intentional, at lower doses. Some
            people decide they like themselves off it better than on
            it. Some people discover an underlying condition (anxiety,
            sleep disorder, chronic pain) they had been medicating
            unknowingly and work with a provider to address it
            directly. A few people find the break confirms that
            cannabis was genuinely serving them and return to their
            previous pattern with more confidence. All of those
            outcomes are valid. The break itself is how you earn the
            information to decide from.
          </p>

          <MedicinePullquote>
            Two weeks will not change your life. It will show you what
            your life has actually been doing underneath the cannabis.
            That information is the whole point.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="decision"
          eyebrow="A DECISION FRAMEWORK"
          heading={<>An honest read.</>}
        >
          <div className="decision-block">
            <p className="decision-block-label">
              <em>THC might serve someone who:</em>
            </p>
            <ul className="decision-list">
              <li>
                Uses it intentionally &mdash; for sleep, pain,
                creativity, intimacy, somatic softening &mdash; with
                awareness of dose and frequency
              </li>
              <li>
                Has taken a tolerance break in the past year and knows
                what their baseline feels like without it
              </li>
              <li>
                Is not currently self-treating a serious psychiatric
                condition without clinical support
              </li>
              <li>
                Does not have a personal or first-degree family history
                of psychotic disorder
              </li>
              <li>
                Has no signs of emerging cannabis use disorder (loss of
                choice, withdrawal when stopping, use interfering with
                life)
              </li>
              <li>
                If working with it at psychedelic doses, is doing so
                with a prepared container and a sober sitter
              </li>
            </ul>
          </div>

          <div className="decision-block">
            <p className="decision-block-label">
              <em>THC is probably not the right tool right now for someone who:</em>
            </p>
            <ul className="decision-list decision-list--not">
              <li>
                Has a psychotic disorder personally or in the
                first-degree family
              </li>
              <li>Is pregnant, breastfeeding, or an adolescent</li>
              <li>
                Is using it to avoid feelings that keep showing up
                anyway
              </li>
              <li>
                Is preparing for a journey with any psychedelic
                medicine and has not paused daily use
              </li>
              <li>
                Is experiencing cyclical vomiting that has no other
                medical explanation
              </li>
              <li>
                Is experiencing emotional flatness that has crept in
                over the last several years of daily use
              </li>
              <li>
                Is finding that the answer to &ldquo;when was the last
                time I went 48 hours without THC?&rdquo; is
                &ldquo;I&rsquo;m not sure&rdquo;
              </li>
            </ul>
          </div>

          <MedicinePullquote>
            Cannabis is not the villain the drug war made it. It is
            also not as neutral as the legalization movement needed it
            to be. The truth is in the middle, and it is more
            interesting than either side has let it be.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="member-cta"
          eyebrow="IF YOU ARE PREPARING FOR DEEPER WORK"
          heading={<em>The member site holds the rest.</em>}
        >
          <p>
            If you are preparing for a journey with any medicine in
            this library &mdash; and you are a regular cannabis user
            &mdash; the preparation protocols in the member site
            account for this. They include a cannabis tapering
            framework for the weeks before any psychedelic journey,
            screening questions that factor in daily use, and
            integration tools specifically for people whose emotional
            processing has been shaped by long-term cannabis. Access
            is by invitation.
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
            read everything on the public side of this site.
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
                href="https://nida.nih.gov/research-topics/cannabis-marijuana"
                target="_blank"
                rel="noreferrer"
              >
                NIDA &mdash; National Institute on Drug Abuse, cannabis
                research portal
              </a>
            </li>
            <li>
              <em>Marijuana and the Cannabinoids</em> &mdash; ElSohly,
              ed. (clinical and pharmacological reference)
            </li>
            <li>
              <a
                href="https://projectcbd.org"
                target="_blank"
                rel="noreferrer"
              >
                Project CBD &mdash; research-oriented cannabis education
              </a>
            </li>
            <li>
              <em>A Brief History of Cannabis</em> &mdash; Rudolph
              Gerber
            </li>
            <li>
              <a
                href="https://dancesafe.org"
                target="_blank"
                rel="noreferrer"
              >
                DanceSafe &mdash; harm reduction and drug checking
              </a>
            </li>
            <li>
              For cannabis use disorder resources:{' '}
              <a href="tel:+18006624357">
                SAMHSA National Helpline, 1-800-662-4357
              </a>{' '}
              (free, confidential, 24/7)
            </li>
          </ul>
        </MedicineSection>

        <aside className="legal-disclaimer" role="note">
          <p>
            Cannabis is a Schedule I substance under U.S. federal law
            as of 2025, though recreational use is legal in 24 states
            plus D.C., medical use is legal in 38 states, and reform
            efforts are active in most remaining jurisdictions. Global
            legal status varies widely. This page is educational. It
            does not constitute medical advice, legal advice, or
            encouragement to use controlled substances. If you are
            considering working with cannabis therapeutically &mdash;
            especially at high doses or for a specific condition
            &mdash; consult a licensed healthcare provider. If you are
            struggling with cannabis use, the SAMHSA helpline
            (1-800-662-4357) is free, confidential, and does not
            require insurance. Harm reduction exists because people
            make decisions in the world as it actually is, not as we
            wish it were.
          </p>
        </aside>
      </MedicinePageLayout>
    </>
  );
}
