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
