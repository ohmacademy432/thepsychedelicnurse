import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import MedicinePageLayout from '../../components/medicine/MedicinePageLayout';
import MedicineHero from '../../components/medicine/MedicineHero';
import MedicineSection from '../../components/medicine/MedicineSection';
import MedicinePullquote from '../../components/medicine/MedicinePullquote';
import SafetyCallout from '../../components/medicine/SafetyCallout';
import DoseBlock from '../../components/medicine/DoseBlock';

const TOC_ITEMS = [
  { id: 'the-compound', label: 'What LSD actually is' },
  { id: 'adulteration', label: 'The street reality' },
  { id: 'safety', label: 'Testing is not optional' },
  { id: 'duration', label: 'The long duration' },
  { id: 'dosage', label: 'What the dose actually is' },
  { id: 'microdosing', label: 'Microdosing' },
  { id: 'container', label: 'The container' },
  { id: 'integration', label: 'Integration' },
  { id: 'decision', label: 'Decision framework' },
  { id: 'member-cta', label: 'Member site' },
  { id: 'further-reading', label: 'Further reading' },
];

export default function LSD() {
  return (
    <>
      <Seo
        title="LSD"
        description="The original psychedelic — long, lucid, and more adulterated on the street than almost any other substance. What LSD actually is, what it does, and the harm reduction that matters. Held by April Bogle, RN."
      />

      <MedicinePageLayout tocItems={TOC_ITEMS}>
        <MedicineHero
          eyebrow="CLASSICAL PSYCHEDELIC · SYNTHETIC LYSERGAMIDE"
          name="LSD"
          subtitle="lysergic acid diethylamide"
          intro="LSD is the compound that launched the modern psychedelic era, shaped the counterculture of an entire generation, and then spent fifty years outlawed while the people who had used it quietly grew up, grew older, and often grew curious again. Today it is one of the most studied psychedelics and one of the most adulterated street drugs. This page is a closer look at what LSD is, what it does, and the specific harm reduction realities — especially purity and duration — that make a difference between a beautiful experience and a dangerous one."
        />

        <MedicineSection
          id="the-compound"
          eyebrow="THE COMPOUND"
          heading={<>The molecule, explained.</>}
        >
          <p>
            LSD is a synthetic compound in the lysergamide family, a
            group of molecules structurally related to the naturally
            occurring alkaloids of the ergot fungus. It is not found
            in nature: LSD is laboratory-produced from lysergic acid,
            which is derived from ergot. The compound was first
            synthesized by Swiss chemist Albert Hofmann in 1938,
            while he was researching ergot-derived pharmaceuticals
            at Sandoz Laboratories. Its psychoactive properties were
            accidentally discovered by Hofmann himself in 1943, when
            he unknowingly absorbed a small amount through his skin.
            He then intentionally took the first documented full LSD
            dose three days later, April 19, 1943, an event that
            became known in psychedelic history as{' '}
            <strong>Bicycle Day</strong>, because he famously cycled
            home from the lab in the middle of the experience.
          </p>
          <p>
            Pharmacologically, LSD is a partial agonist at serotonin{' '}
            <strong>5-HT2A receptors</strong>, the same primary
            receptor as psilocin, N,N-DMT, and mescaline, which is
            why the character of an LSD experience shares a family
            resemblance with those medicines. LSD also engages
            5-HT1A, 5-HT2C, dopamine receptors, and several other
            targets, and it binds with unusually tight affinity,
            which is part of why its effects last so much longer
            than other classical psychedelics. At the receptor, LSD
            is essentially &ldquo;stuck&rdquo; for 8 to 12 hours
            before it releases. That duration is not a small detail.
            It shapes everything about how this medicine is used
            well or used badly.
          </p>
          <p>
            LSD is one of the most potent psychoactive compounds
            known. It is active in microgram (millionth-of-a-gram)
            doses, which is why it is typically distributed on
            blotter paper: small absorbent squares that hold a
            consistent drop of LSD solution. A single blotter tab
            typically contains 50 to 150 micrograms. This
            extraordinary potency is pharmacologically remarkable
            and practically hazardous. It means a dose of LSD can
            sit, undetected, on a tiny square of paper, and it also
            means that adulterant compounds that fit on the
            same-sized paper can be much more dangerous per unit of
            exposure. More on this in the adulteration section
            below.
          </p>
          <p>
            LSD was a legal research compound from 1947 until 1968,
            during which time it was extensively studied by
            psychiatrists, investigated by the CIA in the
            now-infamous MK-Ultra program, distributed by Sandoz to
            researchers worldwide, and eventually embraced, and
            then politicized, by the counterculture movement of the
            1960s. The U.S. federal government placed LSD on
            Schedule I in 1968, which halted nearly all legitimate
            research for over thirty years. Research has resumed in
            the past two decades, though less prolifically than for
            psilocybin, and current clinical interest focuses
            particularly on LSD-assisted therapy for end-of-life
            anxiety, depression, and certain forms of addiction.
          </p>

          <MedicinePullquote>
            Most people my age first heard about LSD in the context
            of it being dangerous. The generation before me first
            heard about it in the context of it being sacred. The
            truth sits somewhere between the two, and both
            generations deserve a clearer picture than either of us
            were given.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="adulteration"
          eyebrow="THE STREET REALITY"
          heading={<>What is actually on that blotter.</>}
        >
          <p>
            I want to start this section directly, because the stakes
            are real. A significant portion of what is sold as LSD on
            blotter paper in the United States and Europe is not LSD.
            It is a family of compounds called{' '}
            <strong>NBOMes</strong> &mdash; most commonly 25I-NBOMe,
            25C-NBOMe, and 25B-NBOMe &mdash; that are cheaper to
            produce, easier to synthesize, and nearly indistinguishable
            on blotter paper from real LSD by taste, appearance, or
            initial effect. They are also, pharmacologically, a
            completely different class of compound, with very
            different risk profiles. And they have killed people at
            doses that felt similar to a normal LSD tab.
          </p>
          <p>
            NBOMes are potent full agonists at serotonin receptors
            (LSD is a partial agonist), which means their effects can
            be significantly more intense, longer in some cases, and
            more physiologically stressful. They carry substantially
            higher cardiovascular risk than LSD: rapid heart rate,
            severe hypertension, seizures, hyperthermia, and in
            multiple documented cases, fatalities in otherwise
            healthy young adults who thought they had taken acid. The
            danger is particularly acute at festivals and parties,
            where the combination of heat, physical activity,
            dehydration, and unknown dose makes NBOMe toxicity more
            likely to cross into medical emergency.
          </p>
          <p>
            The practical reality for anyone considering LSD from an
            unregulated source is this: you cannot tell by looking,
            tasting, or feeling. Blotter paper absorbs a colorless
            liquid. Both LSD and NBOMe are colorless and nearly
            tasteless on blotter. The common advice that
            &ldquo;NBOMe tastes bitter and LSD is tasteless&rdquo; is
            partially true but unreliable, because bitterness is
            subjective and low-quality LSD can also taste odd. What
            is reliable is reagent testing.
          </p>
          <p>
            Reagent test kits are cheap, widely available, and
            decisively distinguish between LSD, NBOMes, and most
            other substances that might be sold as acid. The two
            most useful reagents for LSD-assumed blotter are:
          </p>
          <ul className="bullet-list">
            <li>
              <strong>Ehrlich&rsquo;s reagent</strong>: turns purple
              in the presence of real LSD or other indole-containing
              compounds; does not react with NBOMes. This is the
              single most important test.
            </li>
            <li>
              <strong>Hofmann&rsquo;s reagent</strong>: a
              confirmatory reagent specifically for LSD, produces a
              distinctive color change that further narrows
              identification.
            </li>
          </ul>
          <p>
            The kits cost roughly twenty to forty dollars. They test
            multiple samples. They are distributed by{' '}
            <a
              href="https://dancesafe.org"
              target="_blank"
              rel="noreferrer"
            >
              DanceSafe
            </a>{' '}
            and several other harm reduction organizations, and are
            legal to purchase and possess in most jurisdictions. If
            you are buying blotter from any source other than a
            long-trusted and verified chemist, testing is not an
            abundance of caution. It is the basic standard of care
            you would want any friend of yours to take. I have used
            the same language on the MDMA page about test kits. I am
            using it again here because the LSD supply is probably
            more adulterated than the MDMA supply right now, and the
            consequences of not testing are higher.
          </p>

          <MedicinePullquote>
            If I had one piece of advice for every person I know who
            is going to take LSD at some point in their life, it
            would be this: buy the reagent kit. It costs less than
            dinner. It has probably prevented more deaths than any
            harm reduction message in the entire psychedelic space.
          </MedicinePullquote>
        </MedicineSection>

        <SafetyCallout
          id="safety"
          label="SAFETY · TESTING IS NOT OPTIONAL"
          heading="What to know before the blotter goes under your tongue."
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
              The adulteration reality
            </h4>
            <ul>
              <li>
                If your blotter has not been reagent-tested, you do
                not know what is on it.
              </li>
              <li>
                NBOMes on blotter have killed young adults at doses
                that felt normal.
              </li>
              <li>
                Ehrlich&rsquo;s reagent is the single most important
                test. Available from DanceSafe and similar
                organizations.
              </li>
              <li>
                If you cannot test, strongly consider not taking it.
              </li>
            </ul>
          </div>

          <h4 className="safety-callout-subheading">
            Absolute psychiatric contraindications
          </h4>
          <ul>
            <li>
              Personal history of schizophrenia, schizoaffective
              disorder, or primary psychotic disorder
            </li>
            <li>First-degree family history of the above</li>
            <li>Active psychotic symptoms</li>
            <li>Severe untreated dissociative disorder</li>
            <li>
              <strong>HPPD</strong> (Hallucinogen Persisting
              Perception Disorder) from prior psychedelic use. LSD
              has a stronger association with HPPD than most other
              classical psychedelics, and a prior HPPD episode is a
              reason not to take more.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Proceed only with psychiatric supervision
          </h4>
          <ul>
            <li>
              <strong>Bipolar I disorder.</strong> LSD can trigger
              manic or hypomanic episodes, similar to other 5-HT2A
              classical psychedelics. If you live with bipolar I and
              are considering this medicine, the right starting
              place is a conversation with a psychiatrist familiar
              with both bipolar disorder and psychedelic medicine.
              This is not a solo undertaking.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Medication contraindications
          </h4>
          <ul>
            <li>
              <strong>Lithium</strong> combined with LSD has been
              associated with seizures and serotonin syndrome. Do
              not combine.
            </li>
            <li>
              <strong>Tramadol</strong>: seizure risk.
            </li>
            <li>
              <strong>MAOIs</strong>: potentiate dangerously.
            </li>
            <li>
              <strong>SSRIs and SNRIs</strong> significantly blunt
              LSD&rsquo;s effects. Taking higher doses to compensate
              is not a solution, the blunting is at the receptor
              level and added LSD does not overcome it. Safe work
              requires supervised taper: 2 weeks for most SSRIs,
              5&ndash;6 weeks for fluoxetine.
            </li>
            <li>
              <strong>St. John&rsquo;s Wort</strong>: mild MAOI
              activity, potentiates unpredictably.
            </li>
            <li>
              <strong>Ergot-derived migraine medications</strong>{' '}
              (ergotamine, dihydroergotamine). LSD is structurally
              related to ergot alkaloids and additive
              vasoconstrictive effects are concerning.
            </li>
          </ul>

          <h4 className="safety-callout-subheading">
            Physical contraindications
          </h4>
          <ul>
            <li>
              Uncontrolled cardiovascular disease. LSD raises heart
              rate and blood pressure meaningfully for many hours.
            </li>
            <li>
              Severe liver impairment (LSD is hepatically
              metabolized).
            </li>
            <li>Pregnancy and breastfeeding.</li>
            <li>Active seizure disorder.</li>
          </ul>

          <h4 className="safety-callout-subheading">
            Situational considerations
          </h4>
          <ul>
            <li>
              The 8&ndash;12 hour duration is a safety factor in
              itself. See the next section.
            </li>
            <li>
              Being in an unsafe, high-stimulation, or unfamiliar
              environment for the full duration of a strong LSD
              experience can cause lasting psychological difficulty.
            </li>
            <li>
              Taking LSD and driving, being alone at a high dose
              with no sitter, or being in a setting where you
              cannot leave if you need to: all serious risks.
            </li>
          </ul>
        </SafetyCallout>

        <MedicineSection
          id="duration"
          eyebrow="PRACTICAL PREPARATION"
          heading={<>Twelve hours is a different animal.</>}
        >
          <p>
            Most people underestimate the duration of an LSD
            experience until they are inside one. A
            moderate-to-strong dose produces 8 to 12 hours of
            active experience, with peak intensity typically 3 to 5
            hours in and a gradual return over the second half. Then
            there is an afterglow and re-entry period of another 4
            to 8 hours: not fully sober, but no longer peaking,
            when sleep is often difficult and the mind is still
            processing. This means a person who dosed at 11 in the
            morning may not be fully ready for sleep until the early
            hours of the next morning, and may not feel entirely
            themselves again until midday the day after. The full
            arc is closer to 24 hours than to the 12 that is often
            quoted.
          </p>
          <p>
            This duration has practical consequences that shape how
            LSD should be approached. <strong>Dose timing</strong>{' '}
            matters: taking LSD in the late afternoon or evening
            means coming down at 2 AM, sleeping poorly, and facing
            the next day exhausted. Dose earlier (mid-morning is the
            common recommendation) to keep the experience in
            daylight and allow some natural comedown before trying
            to sleep. <strong>Food timing</strong> matters: eat a
            light meal a few hours before, and have comfort food
            available for the second half of the experience when
            appetite returns. <strong>The day after</strong>{' '}
            matters: do not schedule anything demanding. Integration
            begins as soon as the peak passes, and a person forced
            into a meeting or responsibility at hour 14 is not going
            to get the benefit of the experience they just had.
          </p>
          <p>
            The psychological weight of the duration is often the
            most important preparation question. Unlike mushrooms
            (4&ndash;6 hours) or MDMA (4&ndash;6 hours), LSD cannot
            be &ldquo;waited out&rdquo; the way shorter medicines
            can if an experience becomes uncomfortable. The next
            four hours are still ahead when hour four is difficult.
            This is not usually a problem in a well-prepared setting
            with a sitter: difficult patches pass, and often the
            passage itself is where the integration happens. But it
            is a problem in an unsafe setting, at a too-high dose,
            with no one around who can hold steady. The single best
            preparation for the duration is to have nothing on your
            schedule, a safe place to stay, someone steady within
            reach, and no requirement to perform normalcy for
            anyone.
          </p>
          <p>
            If the experience becomes frightening mid-journey,
            there are specific practices that help: lie down,
            breathe slowly and deeply, remember that what is
            happening is temporary and chemical, reorient to the
            body by touching the ground or holding something warm.{' '}
            <strong>Benzodiazepines</strong> such as diazepam
            (Valium) or alprazolam (Xanax) will significantly
            reduce the intensity of an LSD experience if someone
            needs an off-ramp for a genuine emergency, and some
            harm reduction frameworks recommend having a small
            emergency dose on hand. Do not use benzodiazepines
            casually to &ldquo;tune out&rdquo; a challenging
            experience. The difficult parts are often where the
            medicine is doing its work. But having one accessible
            for a real emergency is a reasonable preparation.
          </p>

          <MedicinePullquote>
            The duration of LSD is the part no one prepares you
            for. It is the medicine itself. A short psychedelic
            asks your afternoon. Acid asks your whole day, and you
            had better clear it.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="dosage"
          eyebrow="HARM REDUCTION · DOSE"
          heading={<>What the dose actually is.</>}
        >
          <p>
            LSD dosing is complicated because blotter potency varies
            widely, liquid LSD requires volumetric dosing knowledge,
            and the compound&rsquo;s potency means small dosing
            errors translate to large experiential differences. A
            tab is not a standard unit. It is a delivery mechanism
            for an uncertain dose. The numbers below refer to
            micrograms of actual LSD, not tabs.
          </p>

          <DoseBlock label="Microdose">
            <li>5&ndash;20 micrograms (µg)</li>
            <li>Sub-perceptual or barely perceptual</li>
            <li>
              Used in experimental microdosing protocols, often on
              a schedule (Fadiman: one day on, two off; or one day
              on, three off)
            </li>
            <li>
              More manageable daily than psilocybin microdosing for
              some users because LSD has less body load
            </li>
            <li>
              The self-treatment cautions from the psilocybin page
              apply here (see the next section)
            </li>
          </DoseBlock>

          <DoseBlock label="Threshold / museum dose">
            <li>25&ndash;75 µg</li>
            <li>
              Subtle perceptual shift, enhanced aesthetic
              perception, mood lift
            </li>
            <li>Functional for many people in calm settings</li>
            <li>
              Common for introduction, for social-adjacent use in
              nature, or for returning users reacquainting
              themselves
            </li>
            <li>
              Still requires a safe setting. The duration still
              applies even at lower doses.
            </li>
          </DoseBlock>

          <DoseBlock label="Moderate / standard recreational dose">
            <li>75&ndash;200 µg</li>
            <li>
              Full psychedelic experience: visual patterns,
              emotional openness, time distortion, enhanced
              meaning-perception
            </li>
            <li>
              Most &ldquo;one tab&rdquo; doses historically fell in
              this range; newer blotter is often higher
            </li>
            <li>
              Requires prepared set and setting, ideally a sitter,
              and the full day cleared
            </li>
          </DoseBlock>

          <DoseBlock label="Heroic / therapeutic / breakthrough dose">
            <li>200&ndash;500 µg</li>
            <li>
              Full ego dissolution possible, mystical-type
              experiences most likely in this range
            </li>
            <li>
              This is the range used in most current therapeutic
              research protocols, with full clinical containment
            </li>
            <li>
              Above 300 µg becomes significantly more intense;
              individual response varies widely
            </li>
            <li>
              Requires experienced sitter, prepared integration
              plan, and days of clear calendar after
            </li>
          </DoseBlock>

          <p>
            A few practical specifics. First: blotter potency varies
            wildly. A &ldquo;150 µg tab&rdquo; sold at a festival
            may contain 80 µg or 250 µg; the only way to know is a
            quantitative test (which most street supply does not
            have). Treat any claimed dosage as approximate.
          </p>
          <p>
            Second: LSD tolerance builds very quickly. Taking LSD
            on consecutive days produces rapidly diminishing
            returns. Most users find meaningful response requires at
            least 5&ndash;7 days between doses, and therapeutic
            protocols use sessions weeks apart.
          </p>
          <p>
            Third: cross-tolerance with other 5-HT2A psychedelics
            (psilocybin, mescaline, N,N-DMT) means dosing LSD soon
            after mushrooms (or vice versa) will produce reduced
            effects from the second medicine.
          </p>
          <p>
            Fourth: volumetric dosing from liquid LSD is more
            precise than blotter dosing if you are working with a
            trusted source, but requires understanding how to
            dilute and store solutions. Liquid LSD degrades with
            heat and light and becomes less potent over months if
            stored improperly.
          </p>

          <MedicinePullquote>
            The most common way people take too much LSD is by
            taking a tab, not feeling anything at 45 minutes, and
            taking another one. Then hour two hits. I would ask
            anyone taking LSD for the first time to set a firm
            &ldquo;wait ninety minutes before redosing&rdquo; rule,
            and to mean it.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="microdosing"
          eyebrow="MICRODOSING"
          heading={<>The Silicon Valley version and what I think about it.</>}
        >
          <p>
            LSD microdosing has a particular cultural shape.
            Psilocybin microdosing grew out of James Fadiman&rsquo;s
            research and the broader wellness community. LSD
            microdosing grew, in large part, out of Silicon Valley
            productivity culture: engineers and founders taking
            sub-perceptual doses to enhance focus, creativity, and
            mood. That origin has colored the entire conversation.
            The claims are frequently productivity-framed: more flow
            states, better problem-solving, longer concentration,
            creative breakthroughs. The self-treatment framing I
            name on the psilocybin page (people microdosing for
            serious psychiatric conditions) exists here too, and
            the same cautions apply. But the cultural center of LSD
            microdosing is more often &ldquo;optimization&rdquo;
            than &ldquo;treatment.&rdquo;
          </p>
          <p>
            The research on LSD microdosing specifically is limited
            and mixed. Several placebo-controlled studies have
            shown that much of the reported benefit of microdosing
            may be expectation effect: people who believe they took
            a microdose report benefits whether they actually did or
            not. This does not mean microdosing never helps anyone.
            It does mean that the evidence for specific measurable
            benefits beyond what belief and attention themselves can
            produce is thinner than the cultural conversation
            implies. Some users describe genuine benefits; some
            studies show modest effects on mood and creativity; the
            scientific picture is unsettled.
          </p>
          <p>
            The practical cautions for LSD microdosing are the same
            as for psilocybin microdosing. People with personal or
            first-degree family history of psychosis or bipolar
            disorder should be very careful. Microdosing is not a
            safer version of psychedelic use for these populations;
            it may simply be a less-obvious version. People on
            SSRIs will likely feel little effect. People using
            microdosing as self-treatment for conditions that
            genuinely need professional care should be honest with
            themselves about whether the microdose is a path to
            healing or a way to avoid harder conversations about
            the condition.
          </p>
          <p>
            <strong>Volumetric dosing</strong> is specifically
            relevant for LSD microdosing because accurate
            sub-perceptual doses are difficult to achieve from
            blotter. Typical microdose protocols use a stock
            solution of LSD in distilled water or alcohol, from
            which small measured amounts are drawn. This requires
            more logistical preparation than psilocybin microdosing
            but is more dose-accurate. If you are going to microdose
            LSD, using volumetric dosing from a tested batch is the
            practical harm reduction form. Cutting a blotter tab
            into pieces is notoriously inconsistent. The LSD is not
            distributed evenly across the paper.
          </p>

          <MedicinePullquote>
            I ask people who are microdosing LSD for productivity
            the same question I ask people microdosing mushrooms
            for depression: what happens when you stop? If the
            answer is &ldquo;I go back to how I was, maybe worse,&rdquo;
            the microdose is not the medicine. It is the
            medication. Those are different relationships to the
            same compound.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="container"
          eyebrow="THE CONTAINER"
          heading={<>Set and setting, but held for twice as long.</>}
        >
          <p>
            At a psychedelic dose, the three elements that decide
            what happens are <strong>set</strong> (what you bring to
            the experience: your mood that day, your history, your
            intention, your relationship to your own mind),{' '}
            <strong>setting</strong> (the environment you take the
            medicine in: the room, the music, the safety, who is in
            the space), and a <strong>sitter</strong> (a sober,
            steady person who is present with you during the
            experience without participating in it). For LSD, all
            three matter as much as they do for any classical
            psychedelic. What is different is the duration: the
            container has to hold for twelve hours instead of five
            or six, and the sitter has to sustain their presence
            for twice as long. A friend who is happy to sit with
            you for a four-hour mushroom journey may not have the
            same stamina for a full LSD day, and pretending they do
            sets both people up for strain. A credible LSD sitter
            commits to being present, sober, and available for the
            entire duration, which is a more significant ask than
            shorter medicines require.
          </p>
          <p>
            For first-time LSD users, or for any journey at a dose
            above 150 µg, I would ask for a sitter in the same way
            I would for a mushroom dose above one gram or an
            N,N-DMT breakthrough. The long duration and the
            inability to shorten the experience make a sober,
            steady presence more valuable, not less. The
            sitter&rsquo;s role is the same across medicines: to
            hold the room, keep water accessible, respond to needs,
            provide a reassuring anchor if fear or disorientation
            arises. But the sitter&rsquo;s endurance has to match
            the medicine&rsquo;s. Rotating sitters across a long
            session is one reasonable approach; having one person
            take a two-hour break around the peak is not ideal but
            is common.
          </p>
          <p>
            Setting for LSD tends to work best in spaces that are
            familiar, quiet, and beautiful. Nature in the daytime
            is often mentioned as an ideal LSD setting, and in
            prepared circumstances with a sitter and an accessible
            safe space, it can be. Nature alone, in the dark,
            without transportation home, is not. Home is often the
            safest default setting for a first or early LSD
            experience: known environment, known neighbors, known
            bathroom, known bed for the eventual attempt at sleep.
            Music and art and outdoor time can be incorporated
            during the peak hours, but the base of operations
            should be safe and anchored.
          </p>

          <MedicinePullquote>
            LSD rewards preparation the way few medicines do. Clear
            the day. Clear the house. Tell someone you are doing
            this. Eat. Hydrate. Turn off the phone. The medicine
            does the rest if you have done that much.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="integration"
          eyebrow="AFTER THE JOURNEY"
          heading={<>Where LSD insights land, and where they fade.</>}
        >
          <p>
            Integration after LSD has a specific texture. The
            experience was long enough that significant material
            often surfaced: memories, feelings, meaning-structures,
            relationship patterns, philosophical realizations. The
            afterglow period, usually 1 to 3 days, is where the
            experience is most vivid and most workable. Writing it
            down within the first 24 hours preserves what the next
            week will begin to soften. Within 72 hours, the
            experience often settles from &ldquo;that was
            astonishing&rdquo; to &ldquo;that was interesting, but
            I can see how I was exaggerating.&rdquo; This softening
            is partially real integration and partially the nervous
            system re-establishing its ordinary baseline. The
            challenge is to do the integrative work before the
            intensity fades.
          </p>
          <p>
            Practical integration for LSD: journal within the first
            day, not to create a complete narrative but to capture
            the felt sense, the specific imagery, the insights that
            arrived with certainty; talk with someone who
            understands what happened; gentle movement, nature,
            sleep when you can get it; one specific, small change
            you will make in how you are actually living in
            response to what was shown. The last item is the most
            important and the most commonly skipped. LSD
            experiences often produce a sense of needing to change
            something &mdash; a relationship, a job, a way of being.
            Making that change, in a small and sustainable form, is
            what distinguishes &ldquo;I had a big experience&rdquo;
            from &ldquo;the experience altered my life.&rdquo; The
            experience without the change is a story. The change
            without the experience was always possible. The
            combination is where the medicine actually works.
          </p>
          <p>
            A specific note on the next-day comedown: sleep is
            often difficult after LSD, and the next day can feel
            disoriented, emotionally raw, or physically tired. This
            is a normal part of the experience, not a sign of
            damage or a reason for alarm. Rest, hydrate, eat well,
            and do not make major decisions for 48&ndash;72 hours.
            If emotional rawness persists beyond a week, if you are
            experiencing anxiety, dissociation, or HPPD-like visual
            persistence, bring in a therapist familiar with
            psychedelics. These are uncommon but real outcomes and
            are most treatable when addressed early.
          </p>

          <MedicinePullquote>
            The insights from LSD are clearer than the insights
            from most medicines. The fading of those insights is
            also faster. The week after is everything. Write it
            down. Change one thing. Do not wait.
          </MedicinePullquote>
        </MedicineSection>

        <MedicineSection
          id="decision"
          eyebrow="A DECISION FRAMEWORK"
          heading={<>An honest read.</>}
        >
          <div className="decision-block">
            <p className="decision-block-label">
              <em>LSD might serve someone who:</em>
            </p>
            <ul className="decision-list">
              <li>
                Has tested the blotter with reagents, or is working
                with a trusted and verified source
              </li>
              <li>
                Is psychologically stable and has the support
                structure for a long experience
              </li>
              <li>
                Has screened clear of the hard psychiatric and
                medication contraindications
              </li>
              <li>
                Has cleared a full day and ideally the next day as
                well
              </li>
              <li>
                Has a prepared setting, a sober sitter, and no
                requirements to be anywhere
              </li>
              <li>
                Is approaching the medicine with a specific
                question, intention, or therapeutic aim
              </li>
              <li>
                Can commit to the integration work the experience
                will require
              </li>
            </ul>
          </div>

          <div className="decision-block">
            <p className="decision-block-label">
              <em>
                LSD is probably not the right tool right now for
                someone who:
              </em>
            </p>
            <ul className="decision-list decision-list--not">
              <li>
                Is buying from a source that has not been verified
                and has no reagent testing available
              </li>
              <li>
                Has a personal or first-degree family history of
                schizophrenia or bipolar I
              </li>
              <li>Has had HPPD from prior psychedelic use</li>
              <li>Is currently on lithium or tramadol</li>
              <li>
                Has only the evening free. The duration does not
                fit.
              </li>
              <li>
                Is planning to be at a festival, in a crowd, in an
                unfamiliar city, or in any setting they cannot
                safely leave
              </li>
              <li>
                Is running a long microdosing protocol for a
                serious condition without professional support
              </li>
              <li>
                Is hoping this one experience will change them
                without requiring them to change themselves
              </li>
            </ul>
          </div>

          <MedicinePullquote>
            There is a version of LSD that is one of the most
            lucid, beautiful medicines I know. And there is a
            version sold on blotter at a festival that is not LSD
            at all and can genuinely hurt someone. The gap between
            those versions is a twenty dollar test kit. The gap is
            that small.
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
            Something to know before an LSD journey.
          </h3>
          <p>
            The clinical pattern I observe with daily cannabis use
            and DMT medicines (blunted emotional and somatic
            release) extends, in my observation, to LSD as well,
            though less pronounced than with the DMTs. Regular
            cannabis users often experience LSD&rsquo;s visuals and
            perceptual effects fully, but report that the emotional
            and somatic depth of the experience feels slightly
            muted compared to their pre-cannabis baselines.
          </p>
          <p style={{ marginTop: 16 }}>
            This is discussed in more depth on the THC page. For
            LSD specifically, the practical implication is softer
            than for the DMTs. A pause of two weeks is often enough
            to notice a difference in responsiveness, whereas the
            DMTs benefit from longer breaks. If you are preparing
            for an LSD journey with a specific therapeutic
            intention, worth considering. If you are approaching
            LSD exploratorily, not a dealbreaker.
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
            If you are preparing for an LSD journey, especially a
            first journey or a high-dose therapeutic session, the
            member site holds the prep protocols I use with my own
            clients. Reagent testing guides. Medication interaction
            screening. The pre-session preparation framework. The
            long-duration sitter preparation guide. The 30-day
            integration protocol. Access is by invitation. If you
            are working with me or one of our partner practitioners,
            you will receive a magic link to the email on file.
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
                href="https://dancesafe.org"
                target="_blank"
                rel="noreferrer"
              >
                DanceSafe &mdash; reagent kits, drug checking, harm
                reduction education
              </a>
            </li>
            <li>
              <a
                href="https://erowid.org"
                target="_blank"
                rel="noreferrer"
              >
                Erowid &mdash; the largest independent archive of
                psychoactive drug information and experience reports
              </a>
            </li>
            <li>
              <a
                href="https://maps.org"
                target="_blank"
                rel="noreferrer"
              >
                MAPS &mdash; current LSD research portal
              </a>
            </li>
            <li>
              <a
                href="https://beckleyfoundation.org"
                target="_blank"
                rel="noreferrer"
              >
                The Beckley Foundation &mdash; ongoing LSD research,
                particularly for depression and end-of-life anxiety
              </a>
            </li>
            <li>
              <em>LSD: My Problem Child</em> &mdash; Albert Hofmann
              (the discoverer&rsquo;s own memoir)
            </li>
            <li>
              <em>Acid Dreams</em> &mdash; Martin A. Lee and Bruce
              Shlain (cultural and political history)
            </li>
            <li>
              <em>How to Change Your Mind</em> &mdash; Michael
              Pollan (contemporary context for LSD alongside other
              psychedelics)
            </li>
            <li>
              <a
                href="https://hopkinspsychedelic.org"
                target="_blank"
                rel="noreferrer"
              >
                Johns Hopkins
              </a>{' '}
              and{' '}
              <a
                href="https://www.imperial.ac.uk/psychedelic-research-centre/"
                target="_blank"
                rel="noreferrer"
              >
                Imperial College London
              </a>{' '}
              psychedelic research portals for ongoing clinical work
            </li>
          </ul>
        </MedicineSection>

        <aside className="legal-disclaimer" role="note">
          <p>
            LSD is a Schedule I substance under U.S. federal law as
            of 2025. Possession, distribution, and manufacture
            outside approved research settings is illegal. Legal
            status varies internationally, with limited research
            access in several countries and decriminalization in a
            small number of jurisdictions. This page is educational.
            It does not constitute medical advice, legal advice, or
            encouragement to use controlled substances. The
            adulteration of the street LSD supply with NBOMe
            compounds is a genuine public health issue; reagent
            testing is the single most effective protection. If you
            are considering working with LSD, consult a licensed
            healthcare provider and verify current legal status in
            your jurisdiction. Harm reduction exists because people
            make decisions in the world as it actually is, not as
            we wish it were.
          </p>
        </aside>
      </MedicinePageLayout>
    </>
  );
}
