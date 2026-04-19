import type { ReactNode } from 'react';

export default function MedicinePullquote({ children }: { children: ReactNode }) {
  return <blockquote className="medicine-pullquote">{children}</blockquote>;
}
