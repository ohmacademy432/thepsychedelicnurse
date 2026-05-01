import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import MedicinePageLayout from '../../components/medicine/MedicinePageLayout';
import MedicineSection from '../../components/medicine/MedicineSection';
import MedicinePullquote from '../../components/medicine/MedicinePullquote';
import SafetyCallout from '../../components/medicine/SafetyCallout';

const TOC_ITEMS = [
  { id: 'opening', label: 'Opening' },
  { id: 'not-a-psychedelic', label: 'Not a classic psychedelic' },
  { id: 'addictive', label: 'Is it addictive?' },
  { id: 'neurotoxicity', label: 'The neurotoxicity question' },
  { id: 'therapeutic-case', label: 'The therapeutic case' },
  { id: 'mixing', label: 'The risks of mixing' },
  { id: 'why-so-often', label: 'Why is it showing up so often?' },
  { id: 'harm-reduction', label: 'Harm reduction frame' },
  { id: 'closing', label: 'Closing thought' },
  { id: 'sources', label: 'Sources & further reading' },
];

export default function MdmaInPlantMedicine() {
  return (
    <>
      <Seo
        title="MDMA in the plant medicine community"
        description="A balanced, science-sourced look at how MDMA differs pharmacologically from classic psychedelics, what the research says about addiction and benefits, and the ethical patterns to watch for when this synthetic substance shows up in plant medicine ceremonies."
        type="article"
        articleSection="Articles"
        articleTags={[
          'MDMA',
          'plant medicine',
          'harm reduction',
          'community ethics',
          'ayahuasca',
          'serotonin syndrome',
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'MDMA in the plant medicine community',
          description:
            'What it is, what it isn’t, and the questions we should be asking.',
          author: { '@type': 'Person', name: 'April Bogle', jobTitle: 'Registered Nurse' },
          publisher: {
            '@type': 'Organization',
            name: 'The Psychedelic Nurse',
            url: 'https://thepsychedelicnurse.org',
          },
          datePublished: '2026-05-01',
          dateModified: '2026-05-01',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://thepsychedelicnurse.org/articles/mdma-in-plant-medicine',
          },
          articleSection: 'Articles',
          about: [
            { '@type': 'Thing', name: 'MDMA' },
            { '@type': 'Thing', name: 'Plant medicine' },
            { '@type': 'Thing', name: 'Harm reduction' },
          ],
        }}
      />

      <MedicinePageLayout tocItems={TOC_ITEMS}>
        {/* Hero / opening */}
        <section id="opening" className="medicine-section">
          <p className="eyebrow">ARTICLE &middot; PLANT MEDICINE COMMUNITY</p>
          <h1>MDMA in the plant medicine community.</h1>
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
            What it is, what it isn&rsquo;t, and the questions we should be
            asking.
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
            Walk into almost any psychedelic retreat circle today and the
            conversation eventually turns to MDMA. It&rsquo;s offered in
            container ceremonies, sandwiched between mushroom journeys, layered
            into ayahuasca weekends, and praised as the &ldquo;heart
            opener&rdquo; that makes the deeper work possible. For some
            participants, that has been true. For others, the experience has
            bonded them to a facilitator, a community, or a substance in ways
            they didn&rsquo;t anticipate. As facilitators, journeyers, and
            seekers, we owe ourselves an honest look at what this molecule
            actually is, what the science says, and where the ethical lines
            are.
          </p>

          <p>
            This piece is not anti-MDMA. It is also not a celebration. It is
            an attempt to lay out the pharmacology, the clinical research, the
            documented risks, and the harder questions about how this medicine
            is being used in spiritual and ceremonial settings &mdash; without
            picking a team.
          </p>
        </section>

        {/* Not a classic psychedelic */}
        <MedicineSection
          id="not-a-psychedelic"
          eyebrow="THE PHARMACOLOGY"
          heading={<>MDMA is not a classic psychedelic.</>}
        >
          <p>
            The word &ldquo;psychedelic&rdquo; gets used as a catch-all, but
            pharmacologically MDMA belongs to a different class altogether.
            Classic psychedelics &mdash; psilocybin, LSD, DMT, mescaline,
            5-MeO-DMT &mdash; work primarily by binding to and activating the
            serotonin 5-HT2A receptor. They are agonists. They sit on the
            receptor and turn it on, which is what generates the visual
            landscapes, ego dissolution, and altered states of consciousness
            most people associate with the word &ldquo;trip.&rdquo;
          </p>
          <p>
            MDMA does something fundamentally different. It is a monoamine
            releasing agent, meaning it forces neurons to dump their stored
            serotonin, dopamine, and norepinephrine all at once. Rather than
            activating a specific receptor, it floods the brain with
            neurotransmitters. The result is not visions &mdash; it is
            empathy, social openness, reduced fear response, and a feeling of
            warmth and safety. Researchers classify MDMA as an
            &ldquo;entactogen&rdquo; or &ldquo;empathogen,&rdquo; a category
            created specifically because it didn&rsquo;t fit anywhere else.
          </p>

          <MedicinePullquote>
            Classic psychedelics turn a key in a receptor lock. MDMA empties
            the cabinet.
          </MedicinePullquote>

          <p>
            This distinction matters for two practical reasons. First,
            MDMA&rsquo;s mechanism is closer to that of stimulants like
            methamphetamine than it is to mushrooms or LSD. It shares a
            chemical backbone with amphetamine. Second, because MDMA depletes
            the brain&rsquo;s serotonin stores rather than simply stimulating
            receptors, the after-effects (the so-called &ldquo;Tuesday
            blues&rdquo; or &ldquo;comedown&rdquo;) and the long-term concerns
            about repeated use are categorically different from what we see
            with classic psychedelics.
          </p>
        </MedicineSection>

        {/* Is it addictive */}
        <MedicineSection
          id="addictive"
          eyebrow="DEPENDENCE"
          heading={<>Is MDMA addictive?</>}
        >
          <p>
            The honest answer is: less than alcohol, opioids, or stimulants
            like cocaine &mdash; but more than classic psychedelics, which are
            not considered addictive in the clinical sense. The National
            Institute on Drug Abuse is clear that MDMA carries dependence
            potential. Some users meet diagnostic criteria for a substance use
            disorder, including continued use despite negative consequences,
            tolerance, and craving.
          </p>
          <p>
            Roughly 60% of regular MDMA users report withdrawal symptoms when
            they stop, including fatigue, depression, loss of appetite, and
            difficulty concentrating. These are not as physically severe as
            opioid or alcohol withdrawal, but they are real, and they shape
            behavior. The drop in mood after MDMA use &mdash; the depleted
            serotonin states that can last days to weeks &mdash; is itself a
            driver of repeat use, because the easiest thing in the world to
            think when you feel flat and disconnected is, &ldquo;I just need
            another ceremony.&rdquo;
          </p>
          <p>
            Psychological dependence on MDMA in ceremonial settings looks
            different from street use, but it is no less real. Bonding with a
            facilitator, a group, or a particular state of openness can become
            its own pull. If a person feels they cannot access connection,
            forgiveness, or grief without the medicine, that is a dependence
            pattern, even if no one calls it addiction.
          </p>
        </MedicineSection>

        {/* Neurotoxicity */}
        <MedicineSection
          id="neurotoxicity"
          eyebrow="THE RESEARCH"
          heading={<>The neurotoxicity question.</>}
        >
          <p>
            This is where the science gets uncomfortable, and where MDMA most
            clearly diverges from classic psychedelics. Decades of animal and
            human research show that repeated MDMA exposure can damage
            serotonergic neurons. Studies in non-human primates have
            documented serotonin neural injury lasting at least seven years
            after exposure &mdash; long enough that researchers consider it
            potentially permanent. Human PET imaging studies of regular users
            show reductions in serotonin transporter binding across multiple
            brain regions.
          </p>
          <p>
            The size of the dose, the frequency of use, ambient temperature
            (heat amplifies neurotoxicity), and individual biology all matter.
            A single therapeutic-dose session under medical supervision is a
            very different risk profile from monthly recreational use, which
            is again different from frequent retreat use across years. But
            &ldquo;a few times a year is probably fine&rdquo; is not a
            conclusion the evidence cleanly supports &mdash; it&rsquo;s a
            reasonable assumption that hasn&rsquo;t been firmly established.
          </p>
          <p>
            It is worth saying plainly: classic psychedelics like psilocybin
            and LSD have not been shown to be neurotoxic. Repeated psilocybin
            use does not damage serotonin neurons. The two substances do not
            belong in the same safety conversation.
          </p>
        </MedicineSection>

        {/* Therapeutic case */}
        <MedicineSection
          id="therapeutic-case"
          eyebrow="THE CLINICAL EVIDENCE"
          heading={<>The therapeutic case.</>}
        >
          <p>
            None of the above erases what MDMA-assisted therapy has done for
            people with treatment-resistant PTSD. The MAPS Phase 3 trials
            (MAPP1 and MAPP2) showed meaningful improvement in PTSD symptoms
            compared with placebo, with a substantial portion of participants
            no longer meeting diagnostic criteria for PTSD after a small
            number of supervised sessions. For combat veterans, sexual assault
            survivors, and people who had failed every other treatment
            available, this work has been life-changing.
          </p>
          <p>
            However, in August 2024, the FDA declined to approve MDMA-assisted
            therapy for PTSD. The Complete Response Letter &mdash; made
            publicly available in September 2025 &mdash; cited concerns about
            cardiovascular safety, functional unblinding (participants and
            therapists could tell who got the drug), and inadequate
            documentation of abuse-related adverse events. The advisory
            committee voted 9&ndash;2 against effectiveness and 10&ndash;1
            that benefits did not outweigh risks under the proposed safety
            controls. Lykos Therapeutics (the company spun out of MAPS) is
            continuing to work with the FDA, but as of this writing
            MDMA-assisted therapy is not an approved treatment in the United
            States.
          </p>
          <p>
            What this means in practice: the data supporting therapeutic
            benefit are real, and they are also messier than the marketing has
            suggested. The medicine helps a meaningful number of people. It
            also did not clear the bar regulators set, partly because of the
            data and partly because of how the trials were run.
          </p>
        </MedicineSection>

        {/* Mixing - safety callout */}
        <SafetyCallout
          id="mixing"
          label="SAFETY &middot; MIXING"
          heading={<>The risks of mixing &mdash; flipping and ayahuasca.</>}
        >
          <p>
            The combinations have nicknames now. <strong>Candy flipping</strong> is
            MDMA&nbsp;+&nbsp;LSD. <strong>Hippie flipping</strong> is
            MDMA&nbsp;+&nbsp;psilocybin. <strong>Jedi flipping</strong> adds a
            third &mdash; MDMA + LSD + psilocybin. In ceremonial settings, the
            most dangerous combination is{' '}
            <strong>MDMA&nbsp;+&nbsp;ayahuasca</strong>, because ayahuasca
            contains MAO inhibitors. Each of these has a specific risk profile
            that should not be glossed over.
          </p>

          <h4 className="safety-callout-subheading">Serotonin syndrome</h4>
          <p>
            MDMA floods the brain with serotonin. Classic psychedelics
            activate serotonin receptors. When these are stacked, serotonin
            signaling can climb into a dangerous range. Serotonin syndrome
            &mdash; characterized by high body temperature, muscle rigidity,
            agitation, rapid heart rate, seizures, and in severe cases cardiac
            arrhythmia and death &mdash; is the worst-case outcome. It is rare
            from any single drug at a normal dose. It becomes meaningfully
            more likely when multiple serotonergic agents are combined,
            especially at high doses, in hot environments, or when other
            serotonergic medications (SSRIs, SNRIs, MAOIs, tramadol, St.
            John&rsquo;s wort) are on board.
          </p>

          <h4 className="safety-callout-subheading">
            MDMA + ayahuasca: the highest-risk combination
          </h4>
          <p>
            Ayahuasca contains harmala alkaloids that act as monoamine oxidase
            inhibitors (MAOIs). MAOIs prevent the breakdown of serotonin,
            dopamine, and norepinephrine &mdash; exactly the neurotransmitters
            MDMA forces neurons to release. The combination raises the risk of
            both serotonin syndrome and hypertensive crisis (dangerously high
            blood pressure that can cause stroke). Medical literature treats
            this as a contraindication, not a guideline. Despite this, the
            combination still appears in some retreat settings, sometimes
            without participants being fully informed.
          </p>

          <h4 className="safety-callout-subheading">
            Cardiovascular and thermoregulatory load
          </h4>
          <p>
            MDMA raises heart rate, blood pressure, and core body temperature.
            Psilocybin and LSD also raise blood pressure and heart rate,
            though more modestly. Stacking them &mdash; especially in a long
            ceremony, with dancing, in a hot room or jungle setting, with
            limited water &mdash; compounds the load on the heart. Most
            reported MDMA fatalities have a cardiovascular or hyperthermic
            component. People with undiagnosed heart conditions, hypertension,
            or those over 50 carry meaningfully more risk.
          </p>

          <h4 className="safety-callout-subheading">Psychological risk</h4>
          <p>
            MDMA&rsquo;s emotional opening, layered with the perceptual
            distortions of psilocybin or LSD, can either deepen processing or
            destabilize someone with unaddressed trauma, dissociative
            tendencies, or a personal/family history of psychosis or bipolar
            disorder. The combination amplifies suggestibility. That is
            precisely the state in which boundary violations &mdash;
            emotional, financial, sexual &mdash; most often occur in
            unregulated settings.
          </p>
        </SafetyCallout>

        {/* The harder question */}
        <MedicineSection
          id="why-so-often"
          eyebrow="THE HARDER QUESTION"
          heading={<>Why is MDMA showing up so often?</>}
        >
          <p>
            Your instinct deserves a serious airing. MDMA produces feelings of
            safety, trust, bonding, and unconditional love. People often
            describe a session as the most meaningful experience of their
            lives. They also frequently feel deep gratitude toward whoever
            facilitated it. None of this is fake &mdash; the neurochemistry is
            real, the experiences are real. But it does mean that MDMA, more
            than almost any other substance, can manufacture loyalty. That
            makes it powerful in a clinical setting where the relationship is
            bounded, transparent, and regulated. It makes it ethically fraught
            in a setting where it is not.
          </p>

          <p>
            The patterns to watch for in any community offering MDMA in
            ceremonial settings:
          </p>

          <ul className="decision-list">
            <li>
              MDMA being added to ceremonies that don&rsquo;t traditionally
              include it (ayahuasca, peyote, San Pedro, Bufo). The traditional
              lineages do not use MDMA. When it shows up, it is a Western
              addition, not an indigenous practice.
            </li>
            <li>
              Escalating frequency: a participant goes from one ceremony to
              monthly, to weekly, often paying significant amounts each time.
            </li>
            <li>
              Facilitators who frame MDMA as essential preparation or
              integration, particularly when paired with claims that the
              participant &ldquo;needs more work.&rdquo;
            </li>
            <li>
              Lack of medical screening for cardiovascular conditions, current
              medications (especially SSRIs, MAOIs, stimulants), and family
              history of mental illness.
            </li>
            <li>
              Sexualized or boundary-blurring behavior from facilitators
              during or after sessions, when participants are still in a
              heightened state of trust.
            </li>
            <li>
              Group structures where leaving the community feels socially or
              emotionally costly.
            </li>
            <li>
              Pricing models that reward repeat attendance more than they
              reward integration outside the container.
            </li>
          </ul>

          <p>
            None of these patterns alone proves harm. All of them, together,
            describe a high-control environment where MDMA&rsquo;s specific
            pharmacology can be used to deepen attachment to the container
            itself. The medicine is not the problem. The container is.
          </p>
        </MedicineSection>

        {/* Harm reduction */}
        <MedicineSection
          id="harm-reduction"
          eyebrow="IF MDMA IS PART OF THE WORK"
          heading={<>A harm reduction frame.</>}
        >
          <p>
            For facilitators and participants who are going to engage with
            this medicine regardless of legality or regulatory status, the
            harm reduction principles are well-established:
          </p>

          <ul className="decision-list">
            <li>
              <strong>Test the substance.</strong> &ldquo;MDMA&rdquo; sold on
              the underground market is frequently cut with or substituted for
              methamphetamine, cathinones, PMA/PMMA (which can be fatal at
              MDMA-typical doses), or fentanyl. Reagent test kits and fentanyl
              test strips are inexpensive and widely available through{' '}
              <a href="https://dancesafe.org" target="_blank" rel="noreferrer">
                DanceSafe
              </a>
              .
            </li>
            <li>
              <strong>Screen medications and conditions.</strong> SSRIs blunt
              MDMA&rsquo;s effects but more importantly raise serotonin
              syndrome risk. MAOIs (including ayahuasca) are a hard
              contraindication. Cardiovascular conditions, uncontrolled
              hypertension, and a personal or family history of psychosis or
              bipolar disorder warrant a serious conversation.
            </li>
            <li>
              <strong>Space sessions far apart.</strong> The harm reduction
              consensus has long been a minimum of 6&ndash;8 weeks between
              MDMA experiences, with many practitioners now recommending 3+
              months. The Phase 3 therapeutic protocols used three sessions
              over roughly three months &mdash; not monthly use.
            </li>
            <li>
              <strong>Manage temperature and hydration without overcorrecting.</strong>{' '}
              Hyperthermia is dangerous; so is water intoxication from
              drinking too much plain water (MDMA promotes water retention).
              Electrolyte balance matters.
            </li>
            <li>
              <strong>
                Avoid mixing with other psychedelics, stimulants, or alcohol.
              </strong>{' '}
              The synergies are not benign. The ceremonial framing of
              &ldquo;flipping&rdquo; does not change the pharmacology.
            </li>
            <li>
              <strong>
                Build integration that does not require returning to the medicine.
              </strong>{' '}
              If insights only stick when another session is on the calendar,
              the work is happening to the person, not through them.
            </li>
            <li>
              <strong>Vet facilitators carefully.</strong> Ask about medical
              training, emergency protocols, ethical guidelines they follow,
              what happens if something goes wrong, and whether they carry any
              form of accountability &mdash; peer, professional, or legal.
            </li>
          </ul>

          <p style={{ marginTop: 28 }}>
            For deeper screening tools and the prep protocols I use with my
            clients, see the{' '}
            <Link to="/medicines/mdma">MDMA medicine page</Link> and the{' '}
            <Link to="/harm-reduction">harm reduction principles</Link> on
            this site.
          </p>
        </MedicineSection>

        {/* Closing */}
        <MedicineSection
          id="closing"
          eyebrow="A CLOSING THOUGHT"
          heading={<>The test of any medicine.</>}
        >
          <p>
            MDMA is a remarkable molecule. It has helped people who suffered
            for decades. It has also been used, knowingly or unknowingly, to
            keep people coming back to spaces that didn&rsquo;t fully serve
            them. Both of these are true at once. The plant medicine
            community, broadly defined, is at a moment where it has to decide
            what kind of relationship it wants with this particular substance
            &mdash; whether it stays a tool used carefully and transparently,
            or whether it becomes a feature of a business model that depends
            on emotional binding.
          </p>
          <p>
            The questions worth sitting with: Who benefits when MDMA becomes a
            regular part of someone&rsquo;s healing path? What integration
            looks like when the medicine is not in the room? Whether the
            facilitator&rsquo;s incentives are aligned with the
            participant&rsquo;s autonomy. And whether the community is built
            to release people back into their lives, or to keep them inside
            the circle.
          </p>

          <MedicinePullquote>
            That last one is the test. A medicine &mdash; any medicine
            &mdash; is doing its job when it makes itself less necessary over
            time.
          </MedicinePullquote>
        </MedicineSection>

        {/* Sources */}
        <MedicineSection
          id="sources"
          eyebrow="SOURCES &amp; FURTHER READING"
          heading={<>The science behind this piece.</>}
        >
          <p>
            All citations link to peer-reviewed sources, regulatory documents,
            and government health agencies where possible.
          </p>

          <h4 style={{ marginTop: 28, marginBottom: 12 }}>
            Pharmacology and mechanism
          </h4>
          <ul className="reading-list">
            <li>
              <a
                href="https://link.springer.com/article/10.1007/s00204-024-03765-8"
                target="_blank"
                rel="noreferrer"
              >
                Liechti, M. (2024). The entactogen MDMA as a treatment aid in
                psychotherapy and its safety concerns
              </a>{' '}
              &mdash; <em>Archives of Toxicology.</em>
            </li>
            <li>
              <a
                href="https://www.nature.com/articles/s41386-025-02313-x"
                target="_blank"
                rel="noreferrer"
              >
                Stereoselective, sex-dependent 5-HT2A receptor modulation of
                cortical plasticity by MDMA
              </a>{' '}
              &mdash; <em>Neuropsychopharmacology.</em>
            </li>
            <li>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11378972/"
                target="_blank"
                rel="noreferrer"
              >
                Altered States and Social Bonds: Effects of MDMA and
                Serotonergic Psychedelics on Social Behavior
              </a>{' '}
              (2024). PMC.
            </li>
            <li>
              <a
                href="https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.863088/full"
                target="_blank"
                rel="noreferrer"
              >
                Entactogens: How the Name for a Novel Class of Psychoactive
                Agents Originated
              </a>{' '}
              &mdash; <em>Frontiers in Psychiatry.</em>
            </li>
          </ul>

          <h4 style={{ marginTop: 28, marginBottom: 12 }}>
            Addiction, dependence, and neurotoxicity
          </h4>
          <ul className="reading-list">
            <li>
              <a
                href="https://nida.nih.gov/research-topics/mdma-ecstasy-molly"
                target="_blank"
                rel="noreferrer"
              >
                MDMA (Ecstasy/Molly)
              </a>{' '}
              &mdash; National Institute on Drug Abuse (NIDA).
            </li>
            <li>
              <a
                href="https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2025.1644599/full"
                target="_blank"
                rel="noreferrer"
              >
                Psychological and neuropsychological effects of MDMA use
                during adolescence: a structured review
              </a>{' '}
              (2025). <em>Frontiers in Psychiatry.</em>
            </li>
            <li>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7878040/"
                target="_blank"
                rel="noreferrer"
              >
                MDMA and the Brain: A Short Review on the Role of
                Neurotransmitters in Neurotoxicity
              </a>{' '}
              &mdash; PMC.
            </li>
            <li>
              <a
                href="https://jamanetwork.com/journals/jamapsychiatry/fullarticle/1151061"
                target="_blank"
                rel="noreferrer"
              >
                Evidence for Chronically Altered Serotonin Function in the
                Cerebral Cortex of Female MDMA Polydrug Users
              </a>{' '}
              &mdash; <em>JAMA Psychiatry.</em>
            </li>
            <li>
              <a
                href="https://www.mirecc.va.gov/cih-visn2/Documents/Provider_Education_Handouts/MDMA-Ecstasy_Information_Sheet_for_BHPs.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Information for Behavioral Health Providers: MDMA (Ecstasy)
              </a>{' '}
              &mdash; U.S. Department of Veterans Affairs.
            </li>
          </ul>

          <h4 style={{ marginTop: 28, marginBottom: 12 }}>
            MDMA-assisted therapy and FDA review
          </h4>
          <ul className="reading-list">
            <li>
              <a
                href="https://maps.org/2025/09/04/fda-public-release-of-crl/"
                target="_blank"
                rel="noreferrer"
              >
                MAPS Statement on FDA&rsquo;s Public Release of the Complete
                Response Letter for MDMA-assisted Therapy
              </a>{' '}
              (Sept 2025).
            </li>
            <li>
              <a
                href="https://www.psychiatrictimes.com/view/fda-releases-complete-response-letter-on-declining-mdma-assisted-therapy-for-ptsd"
                target="_blank"
                rel="noreferrer"
              >
                FDA Releases Complete Response Letter on Declining
                MDMA-Assisted Therapy for PTSD
              </a>{' '}
              &mdash; <em>Psychiatric Times.</em>
            </li>
            <li>
              <a
                href="https://www.npr.org/sections/shots-health-news/2024/08/09/nx-s1-5068634/mdma-therapy-fda-decision-ptsd-psychedelic-treatment"
                target="_blank"
                rel="noreferrer"
              >
                FDA rejects MDMA, disappointing drugmaker Lykos and
                psychedelics industry
              </a>{' '}
              &mdash; NPR (August 2024).
            </li>
            <li>
              <a
                href="https://www.fdli.org/2025/03/from-secret-tests-to-therapy-trials-mdmas-long-road-to-legitimacy/"
                target="_blank"
                rel="noreferrer"
              >
                From Secret Tests to Therapy Trials: MDMA&rsquo;s Long Road to
                Legitimacy
              </a>{' '}
              &mdash; Food and Drug Law Institute.
            </li>
          </ul>

          <h4 style={{ marginTop: 28, marginBottom: 12 }}>
            Mixing MDMA with psychedelics and ayahuasca
          </h4>
          <ul className="reading-list">
            <li>
              <a
                href="https://www.mountainside.com/blog/hippie-flipping-the-risks-of-mixing-mdma-psilocybin/"
                target="_blank"
                rel="noreferrer"
              >
                Hippie Flipping: The Risks of Mixing MDMA &amp; Psilocybin
              </a>{' '}
              &mdash; Mountainside.
            </li>
            <li>
              <a
                href="https://www.freethink.com/health/candy-flipping"
                target="_blank"
                rel="noreferrer"
              >
                &ldquo;Candy flipping&rdquo; &mdash; mixing MDMA and LSD
                &mdash; is hitting the lab
              </a>{' '}
              &mdash; Freethink.
            </li>
            <li>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11114307/"
                target="_blank"
                rel="noreferrer"
              >
                Ayahuasca: A review of historical, pharmacological, and
                therapeutic aspects
              </a>{' '}
              (2024). PMC.
            </li>
            <li>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6749819/"
                target="_blank"
                rel="noreferrer"
              >
                Ceremonial &ldquo;plant medicine&rdquo; use and its
                relationship to recreational drug use
              </a>{' '}
              &mdash; PMC.
            </li>
            <li>
              <a
                href="https://heroicheartsproject.org/dietary-and-medical-guidelines-ayahuasca/"
                target="_blank"
                rel="noreferrer"
              >
                Dietary and Medical Guidelines: Ayahuasca Retreat
              </a>{' '}
              &mdash; Heroic Hearts Project.
            </li>
          </ul>
        </MedicineSection>

        <aside className="legal-disclaimer" role="note">
          <p>
            This piece is educational. It does not constitute medical advice.
            Anyone considering MDMA &mdash; especially in combination with
            other substances, prescription medications, or in a ceremonial
            setting &mdash; should consult a qualified medical professional
            first. MDMA is a Schedule I substance under U.S. federal law as of
            2026; it is illegal to possess, distribute, or manufacture outside
            of approved research settings. Harm reduction exists precisely
            because people make decisions despite prohibition. The goal here
            is not to advocate &mdash; it is to ensure that those who decide
            to proceed can do so with the best possible information.
          </p>
        </aside>
      </MedicinePageLayout>
    </>
  );
}
