import type { ReactNode } from 'react';
import TableOfContents, { type TocItem } from './TableOfContents';

type Props = {
  tocItems: TocItem[];
  children: ReactNode;
};

export default function MedicinePageLayout({ tocItems, children }: Props) {
  return (
    <div className="medicine-page">
      <TableOfContents items={tocItems} />
      <div className="medicine-content">{children}</div>
    </div>
  );
}
