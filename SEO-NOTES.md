# SEO & launch notes

## 1. Generated image assets (in place — regenerate only if the visual identity changes)

- **`public/og-default.png`** (1200×630) — default Open Graph preview for social shares (iMessage, Slack, LinkedIn, WhatsApp, Facebook, etc.). Generated from `public/og-default-template.html` via headless Edge.
- **`public/apple-touch-icon.png`** (180×180) — iOS home-screen shortcut. Flat parchment tile with forest leaf; iOS applies its own rounded-corner mask.
- **`public/favicon.ico`** (32×32 PNG-in-ICO) — browser tab fallback for older browsers. Modern browsers use `favicon.svg` first.
- **`public/favicon.svg`** — primary favicon, vector, scales to any size.

### To regenerate (if brand marks or colors change)

**OG image (1200×630, uses Cormorant Garamond + Jost from Google Fonts):**

1. Open `public/og-default-template.html` in Chrome/Edge.
2. DevTools → toggle device toolbar → *Responsive* → set dimensions to **1200 × 630**.
3. DevTools → … menu → *Capture screenshot*.
4. Save as **`public/og-default.png`**.

**Favicon + apple-touch-icon:**

Headless Edge can't reliably capture at favicon-scale viewports on Windows — its effective CSS viewport doesn't match `--window-size`. Use `@resvg/resvg-js` (a small Rust-in-WASM SVG rasterizer) as a one-off:

```sh
npm install --save-dev @resvg/resvg-js
# Write a rasterize.cjs — see the commit history for the reference script —
# that renders the favicon SVG at 180×180 (flat background for apple-touch-icon)
# and 32×32 (rounded tile for favicon.ico), and wraps the 32×32 PNG in an ICO header.
node rasterize.cjs
npm uninstall @resvg/resvg-js   # keep runtime deps minimal
```

## 2. Supabase — invite-only access (done)

1. ✅ Public signups disabled. Supabase dashboard → *Authentication* → *Providers* → *Email* → "Allow new users to sign up" is OFF.
2. **Adding a new member going forward.** Supabase dashboard → *Authentication* → *Users* → *Invite user* → enter email. The user can then visit `/login`, enter that email, and receive a magic link. Unknown emails receive nothing (no signal, by design).

## 3. Lighthouse audit (post-deploy)

Can't run from a terminal build environment — requires Chrome DevTools against the live site. Run once deployed to <https://thepsychedelicnurse.org>:

1. Open Chrome → the live site.
2. DevTools → *Lighthouse* tab → *Mode: Navigation* → *Device: Desktop* → *Analyze page load*. Repeat for *Device: Mobile*.
3. Run on: `/`, `/medicines/mdma`, `/medicines/iboga`, `/medicines/ayahuasca`.
4. Targets: Performance 90+ / Accessibility 95+ / Best Practices 95+ / SEO 100.

Common issues + fixes if any category comes in low:

- **Render-blocking fonts** → already mitigated by `<link rel="preconnect">` in `index.html`.
- **Missing alt text** → no `<img>` tags exist in `src/` today; verify with `grep -n "<img" src/` if any are added later.
- **Color contrast** → site palette is designed for contrast; Lighthouse usually only flags subtle mutes. If flagged, adjust the specific element.
- **Unused JS** → the main bundle is ~250 KB gzipped. Acceptable. Code-splitting can be revisited later.

## 4. Submit sitemap to Google (post-deploy)

Once deployed and DNS verified:

1. Google Search Console → *Add property* → `https://thepsychedelicnurse.org`.
2. Verify via DNS TXT record (Netlify DNS settings).
3. *Sitemaps* → submit `https://thepsychedelicnurse.org/sitemap.xml`.

Bing Webmaster Tools: same flow at <https://www.bing.com/webmasters>.

## 5. Responsive / mobile check (pre-deploy)

Because Lighthouse can't run from this environment, do a manual mobile sanity check before launch:

1. `npm run dev`
2. Open the site in Chrome → DevTools → toggle device toolbar → cycle through: *iPhone 14 Pro*, *iPhone SE*, *Pixel 7*, *iPad mini*.
3. Verify on each viewport: hero reads, medicine TOC collapses gracefully, dose blocks stay readable, safety callouts don't overflow, sticky nav doesn't cover content, decision blocks (✓ / ✗) stack correctly.
4. Tap around through at least one full medicine page (recommend ayahuasca — has the most components).

## 6. Deployment checklist (first push)

- [x] `public/og-default.png` generated
- [x] `public/apple-touch-icon.png` generated
- [x] `public/favicon.ico` generated
- [x] Supabase: public signups disabled
- [ ] Supabase: first client(s) invited
- [ ] Netlify: DNS pointed to thepsychedelicnurse.org
- [ ] Netlify: HTTPS enforced
- [ ] Post-deploy: Lighthouse pass (Section 3)
- [ ] Post-deploy: sitemap submitted to Google + Bing (Section 4)
- [ ] Pre-deploy: manual mobile QA (Section 5)
