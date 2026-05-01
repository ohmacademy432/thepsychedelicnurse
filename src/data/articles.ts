/**
 * Articles index.
 *
 * To add a new article:
 *   1. Create the page component in src/pages/articles/YourArticle.tsx
 *   2. Add a route in src/App.tsx
 *   3. Add a new entry to the array below — newest at the top
 */

export type Article = {
  slug: string;        // URL path after /articles/
  title: string;       // Used on the article list page and home page
  subtitle: string;    // The italic subtitle / dek
  excerpt: string;     // Short blurb for the index card
  publishedDate: string; // ISO date, e.g. '2026-05-01'
  publishedLabel: string; // Human-readable, e.g. 'May 2026'
  readTime: string;    // e.g. '12 min read'
  tags: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: 'ibogaine-cardiac-safety',
    title:
      "Ibogaine is moving into clinical trials. The cardiac questions haven't moved with it.",
    subtitle:
      "An emergency nurse's guide to QT, CYP2D6, and the questions every facilitator and journeyer should be asking.",
    excerpt:
      'In late April 2026, the White House signed an executive order accelerating federal review of psychedelic compounds — naming ibogaine specifically — and the FDA cleared the first US ibogaine clinical trial. The regulatory timeline is moving faster than the cardiac safety conversation. A clinical, harm-reduction look at what the QT interval actually is, why ibogaine prolongs it, who is at higher risk, and the questions every journeyer should bring to a facilitator.',
    publishedDate: '2026-05-01',
    publishedLabel: 'May 2026',
    readTime: '11 min read',
    tags: ['ibogaine', 'iboga', 'cardiac safety', 'harm reduction', 'facilitator ethics'],
  },
  {
    slug: 'mdma-in-plant-medicine',
    title: 'MDMA in the plant medicine community',
    subtitle: "What it is, what it isn't, and the questions we should be asking.",
    excerpt:
      'MDMA is showing up everywhere in plant medicine spaces — sandwiched into mushroom journeys, layered into ayahuasca weekends, sold as the heart opener that makes the deeper work possible. Some of it is beautiful. Some of it is dependence dressed up as healing. A balanced, science-sourced look at the pharmacology, the addiction question, the FDA decision, the dangers of mixing, and the patterns to watch for.',
    publishedDate: '2026-05-01',
    publishedLabel: 'May 2026',
    readTime: '12 min read',
    tags: ['MDMA', 'plant medicine', 'community ethics', 'harm reduction'],
  },
];
