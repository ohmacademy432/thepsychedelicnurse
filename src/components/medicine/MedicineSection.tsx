import type { ReactNode } from 'react';

type Props = {
  id: string;
  eyebrow: string;
  heading: ReactNode;
  children: ReactNode;
};

export default function MedicineSection({ id, eyebrow, heading, children }: Props) {
  return (
    <section id={id} className="medicine-section">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{heading}</h2>
      <div className="medicine-section-body">{children}</div>
    </section>
  );
}
