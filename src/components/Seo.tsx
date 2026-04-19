import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'The Psychedelic Nurse';
const SITE_URL = 'https://thepsychedelicnurse.org';
const DEFAULT_TITLE = `${SITE_NAME} — Harm reduction for psychedelic and plant medicine work`;
const DEFAULT_DESCRIPTION =
  'A trauma-informed, clinically grounded harm reduction resource for those preparing for, moving through, or integrating a journey with psychedelic compounds and plant medicines. Held by April Bogle, RN.';

type SeoProps = {
  title?: string;
  description?: string;
  noIndex?: boolean;
  image?: string;
};

export default function Seo({ title, description, noIndex, image }: SeoProps) {
  const location = useLocation();
  const url = `${SITE_URL}${location.pathname}`;
  const fullTitle = title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE;
  const desc = description || DEFAULT_DESCRIPTION;
  const ogImage = image ? `${SITE_URL}${image}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
