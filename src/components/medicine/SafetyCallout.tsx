import type { ReactNode } from 'react';

type Props = {
  id?: string;
  label?: string;
  heading?: ReactNode;
  children: ReactNode;
};

export default function SafetyCallout({
  id,
  label = 'SAFETY',
  heading,
  children,
}: Props) {
  return (
    <aside id={id} className="safety-callout" role="note">
      <p className="safety-callout-label">{label}</p>
      {heading && <h3 className="safety-callout-heading">{heading}</h3>}
      <div className="safety-callout-body">{children}</div>
    </aside>
  );
}
