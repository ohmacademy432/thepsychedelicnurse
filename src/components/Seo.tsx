import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'The Psychedelic Nurse';
const SITE_URL = 'https://thepsychedelicnurse.org';
const DEFAULT_OG_IMAGE = '/og-default.png';
const DEFAULT_TITLE = `${SITE_NAME} — Harm reduction for psychedelic and plant medicine work`;
const DEFAULT_DESCRIPTION =
  'A trauma-informed, clinically grounded harm reduction resource for those preparing for, moving through, or integrating a journey with psychedelic compounds and plant medicines. Held by April Bogle, RN.';

type SeoProps = {
  title?: string;
  description?: string;
  noIndex?: boolean;
  image?: string;
  pathname?: string;
  type?: 'website' | 'article';
  articleSection?: string;
  articleTags?: string[];
  jsonLd?: object | object[];
};

export default function Seo({
  title,
  description,
  noIndex,
  image,
  pathname,
  type = 'website',
  articleSection,
  articleTags,
  jsonLd,
}: SeoProps) {
  const location = useLocation();
  const resolvedPath = pathname ?? location.pathname;
  const url = `${SITE_URL}${resolvedPath}`;
  const fullTitle = title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE;
  const desc = description || DEFAULT_DESCRIPTION;
  const ogImagePath = image || DEFAULT_OG_IMAGE;
  const ogImageUrl = `${SITE_URL}${ogImagePath}`;
  const jsonLdBlocks = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd])
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="author" content="April Bogle, RN" />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImageUrl} />

      {type === 'article' && (
        <meta property="article:author" content="April Bogle, RN" />
      )}
      {type === 'article' && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      {type === 'article' &&
        articleTags &&
        articleTags.map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}

      {jsonLdBlocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}
