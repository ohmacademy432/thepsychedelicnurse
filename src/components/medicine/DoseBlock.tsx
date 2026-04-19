import type { ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
};

export default function DoseBlock({ label, children }: Props) {
  return (
    <div className="dose-block">
      <p className="dose-block-label">{label}</p>
      <ul className="dose-block-list">{children}</ul>
    </div>
  );
}
