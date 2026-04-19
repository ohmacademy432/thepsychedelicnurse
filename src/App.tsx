function App() {
  const swatches: { name: string; token: string; ink?: 'light' | 'dark' }[] = [
    { name: 'parchment', token: '--parchment', ink: 'dark' },
    { name: 'parchment-warm', token: '--parchment-warm', ink: 'dark' },
    { name: 'bone', token: '--bone', ink: 'dark' },
    { name: 'forest', token: '--forest', ink: 'light' },
    { name: 'forest-soft', token: '--forest-soft', ink: 'light' },
    { name: 'sage', token: '--sage', ink: 'dark' },
    { name: 'sage-deep', token: '--sage-deep', ink: 'light' },
    { name: 'rust', token: '--rust', ink: 'light' },
    { name: 'rust-deep', token: '--rust-deep', ink: 'light' },
    { name: 'ink', token: '--ink', ink: 'light' },
    { name: 'ink-soft', token: '--ink-soft', ink: 'light' },
    { name: 'ink-mute', token: '--ink-mute', ink: 'light' },
    { name: 'rule', token: '--rule', ink: 'dark' },
  ];

  return (
    <main>
      <section style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <p className="eyebrow">MILESTONE A · DESIGN SYSTEM PROOF</p>
          <h1 style={{ marginTop: 16 }}>
            The <em>Psychedelic</em> Nurse
          </h1>
          <p style={{ marginTop: 24, maxWidth: 620, fontSize: 17 }}>
            If you can read this in Inter, the headline above in Fraunces (with
            the word <em>Psychedelic</em> in italic Fraunces), and see the
            parchment background — fonts and colors are live.
          </p>

          <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Primary Button</button>
            <button className="btn btn-secondary">Secondary Button</button>
            <button className="btn btn-accent">Accent Button</button>
          </div>

          <hr className="divider" style={{ margin: '64px 0' }} />

          <p className="eyebrow">TYPOGRAPHY SCALE</p>
          <h1 style={{ marginTop: 16 }}>Heading 1 · Fraunces 48</h1>
          <h2 style={{ marginTop: 24 }}>Heading 2 · Fraunces 32</h2>
          <h3 style={{ marginTop: 24 }}>Heading 3 · Fraunces 22</h3>
          <p style={{ marginTop: 24, maxWidth: 720 }}>
            Body · Inter 16, line-height 1.7. The goal of this space is not to
            advocate for their use. It is to ensure that those who choose to
            work with them can do so with the highest possible margin of safety.
          </p>
          <p style={{ marginTop: 16, maxWidth: 720, color: 'var(--ink-soft)' }}>
            Secondary body · <em>ink-soft</em>. Italic Fraunces is the brand's
            emotional signature and should appear generously.
          </p>
          <p className="meta" style={{ marginTop: 16 }}>
            Meta / caption · Inter 13, ink-mute.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--parchment-warm)' }}>
        <div className="container">
          <p className="eyebrow">COLOR TOKENS</p>
          <h2 style={{ marginTop: 16 }}>Botanical Field Guide palette</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 16,
              marginTop: 40,
            }}
          >
            {swatches.map((s) => (
              <div
                key={s.token}
                style={{
                  background: `var(${s.token})`,
                  color: s.ink === 'light' ? 'var(--parchment)' : 'var(--ink)',
                  padding: 24,
                  border: '0.5px solid var(--rule)',
                  borderRadius: 4,
                  minHeight: 120,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <span className="eyebrow" style={{ color: 'inherit', opacity: 0.75 }}>
                  {s.name}
                </span>
                <code style={{ fontSize: 13, fontFamily: 'ui-monospace, Consolas, monospace' }}>
                  {s.token}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--forest)' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--sage)' }}>
            DARK SURFACE CHECK
          </p>
          <h2 style={{ color: 'var(--parchment)', marginTop: 16 }}>
            <em>Sacred medicine, grounded in clinical rigor.</em>
          </h2>
          <p style={{ color: 'var(--parchment)', marginTop: 24, maxWidth: 620 }}>
            Forest background, parchment text, sage eyebrow — this is the
            footer and closing-CTA treatment.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
