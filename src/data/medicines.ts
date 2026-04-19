export type Medicine = {
  name: string;
  category: string;
  slug: string;
  description: string;
};

export const MEDICINES: Medicine[] = [
  {
    name: 'Psilocybin',
    category: 'Classical psychedelic',
    slug: 'psilocybin',
    description:
      'The compound in Psilocybe mushrooms. 4–6 hour journey. Low toxicity, high depth.',
  },
  {
    name: 'MDMA',
    category: 'Empathogen (synthetic)',
    slug: 'mdma',
    description:
      'Not a plant medicine. Not a psychedelic in the traditional sense. Why both matter.',
  },
  {
    name: 'THC',
    category: 'Psychedelic at dose',
    slug: 'thc',
    description:
      'The truth about cannabis: healing at intention, dulling at habit.',
  },
  {
    name: '5-MeO-DMT',
    category: 'Short-acting tryptamine',
    slug: '5-meo-dmt',
    description:
      'The God molecule. 15-minute ego dissolution. Handled with extreme care.',
  },
  {
    name: 'N,N-DMT',
    category: 'Classical tryptamine',
    slug: 'nn-dmt',
    description: 'The spirit molecule. Visionary, fast, structured.',
  },
  {
    name: 'Iboga / Ibogaine',
    category: 'Tabernanthe iboga',
    slug: 'iboga',
    description:
      'African root medicine. Cardiac risk is real. Screening is non-negotiable.',
  },
  {
    name: 'Kambo',
    category: 'Amazonian frog secretion',
    slug: 'kambo',
    description:
      'Not a psychedelic. A purge medicine with real contraindications.',
  },
  {
    name: 'Hapè',
    category: 'Amazonian tobacco snuff',
    slug: 'hape',
    description: 'Ceremonial grounding. Used before and around other medicines.',
  },
  {
    name: 'Ayahuasca',
    category: 'DMT + MAOI brew',
    slug: 'ayahuasca',
    description:
      'The vine of souls. Dietary and pharmacological interactions are serious.',
  },
];
