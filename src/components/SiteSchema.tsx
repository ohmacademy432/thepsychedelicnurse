import { Helmet } from 'react-helmet-async';

const SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Psychedelic Nurse',
  url: 'https://thepsychedelicnurse.org',
  description:
    'A trauma-informed, clinically grounded harm reduction resource for psychedelic and plant medicine work.',
  publisher: {
    '@type': 'Organization',
    name: 'The Psychedelic Nurse',
    founder: {
      '@type': 'Person',
      name: 'April Bogle',
      jobTitle: 'Registered Nurse',
      description:
        'Emergency nurse with 32 years of clinical experience and 8 years of plant medicine work. Founder of Ohm Academy of Healing.',
    },
  },
};

export default function SiteSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(SITE_SCHEMA)}
      </script>
    </Helmet>
  );
}
