# SEO & launch notes

Things the code cannot do from a terminal. April (or a future session) handles these before/after first deploy.

## 1. Generate `public/og-default.png` (required for rich social previews)

The SEO component references `/og-default.png` as the default Open Graph image (the preview that appears when someone shares any page to iMessage, Slack, LinkedIn, WhatsApp, Facebook).

1. Open `public/og-default-template.html` in Chrome.
2. DevTools → toggle device toolbar → set dimensions to **1200 × 630**.
3. DevTools → … menu → *Capture full size screenshot* (or `Ctrl+Shift+P` → "Capture screenshot").
4. Crop/confirm the image is exactly 1200 × 630. Save as **`public/og-default.png`**.
5. Verify preview by pasting `https://thepsychedelicnurse.org` into <https://www.opengraph.xyz/> after deploy.

Fonts used in the template match the site: **Cormorant Garamond** (display) + **Jost** (eyebrow/sans).

## 2. Generate `public/apple-touch-icon.png` and `public/favicon.ico`

iOS home-screen shortcuts and older browsers want raster versions of the favicon.

1. Open `public/favicon-template.html` in Chrome.
2. DevTools → Elements → right-click the `.icon` div → *Capture node screenshot*.
3. Save the 180×180 output as **`public/apple-touch-icon.png`**.
4. Convert the same image to **`public/favicon.ico`** using an online converter (e.g. <https://realfavicongenerator.net/> or <https://favicon.io/favicon-converter/>) — include 16×16, 32×32, and 48×48 in the single .ico file.

Until these exist, browsers will fall back to `favicon.svg` silently (no broken image displayed).

## 3. Supabase — invite-only access

The Login page UI now uses "if on file" framing, but the access gate itself lives in Supabase. Two one-time settings:

1. **Disable public signups.** Supabase dashboard → *Authentication* → *Providers* → *Email* → toggle **"Allow new users to sign up"** OFF.
2. **Adding a member.** Supabase dashboard → *Authentication* → *Users* → *Invite user* → enter email. Takes ~30 seconds. The user can then visit `/login`, enter that email, and receive a magic link. Unknown emails receive nothing (no signal, by design).

## 4. Lighthouse audit (post-deploy)

Cannot run from a terminal build environment — requires Chrome DevTools against the live site. Run once the site is deployed to <https://thepsychedelicnurse.org>:

1. Open Chrome → the live site.
2. DevTools → *Lighthouse* tab → *Mode: Navigation* → *Device: Desktop* → *Analyze page load*. Repeat for *Device: Mobile*.
3. Run on: `/`, `/medicines/mdma`, `/medicines/iboga`, `/medicines/ayahuasca`.
4. Targets: Performance 90+ / Accessibility 95+ / Best Practices 95+ / SEO 100.

Common issues + fixes if any category comes in low:

- **Render-blocking fonts** → already mitigated by `<link rel="preconnect">` in `index.html`.
- **Missing alt text** → run a scan: `grep -n "<img" src/` — every `<img>` should have `alt="..."`.
- **Color contrast** → site palette is designed for contrast; Lighthouse usually only flags subtle mutes. If flagged, adjust the specific element.
- **Unused JS** → the main bundle is ~240 KB gzipped. Acceptable. Code-splitting can be revisited later.

## 5. Submit sitemap to Google (post-deploy)

Once deployed and DNS verified:

1. Google Search Console → *Add property* → `https://thepsychedelicnurse.org`.
2. Verify via DNS TXT record (Netlify DNS settings).
3. *Sitemaps* → submit `https://thepsychedelicnurse.org/sitemap.xml`.

Bing Webmaster Tools: same flow at <https://www.bing.com/webmasters>.

## 6. Responsive / mobile check (pre-deploy)

Because Lighthouse can't be run from this environment, do a manual mobile sanity check before launch:

1. `npm run dev`
2. Open the site in Chrome → DevTools → toggle device toolbar → cycle through: *iPhone 14 Pro*, *iPhone SE*, *Pixel 7*, *iPad mini*.
3. Verify on each viewport: hero reads, medicine TOC collapses gracefully, dose blocks stay readable, safety callouts don't overflow, sticky nav doesn't cover content, decision blocks (✓ / ✗) stack correctly.
4. Tap around through at least one full medicine page (recommend ayahuasca — has the most components).

## 7. Deployment checklist (first push)

- [ ] `public/og-default.png` generated (Section 1 above)
- [ ] `public/apple-touch-icon.png` generated (Section 2)
- [ ] `public/favicon.ico` generated (Section 2)
- [ ] Supabase: public signups disabled (Section 3.1)
- [ ] Supabase: first client(s) invited (Section 3.2)
- [ ] Netlify: DNS pointed to thepsychedelicnurse.org
- [ ] Netlify: HTTPS enforced
- [ ] Post-deploy: Lighthouse pass (Section 4)
- [ ] Post-deploy: sitemap submitted to Google + Bing (Section 5)
