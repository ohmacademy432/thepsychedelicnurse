type Props = {
  eyebrow: string;
  name: string;
  subtitle: string;
  intro: string;
};

export default function MedicineHero({ eyebrow, name, subtitle, intro }: Props) {
  return (
    <header className="medicine-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{name}</h1>
      <p className="medicine-hero-subtitle">{subtitle}</p>
      <p className="medicine-hero-intro">{intro}</p>
    </header>
  );
}
