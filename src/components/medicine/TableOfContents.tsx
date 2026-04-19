import { useState } from 'react';
import { useActiveSection } from './useActiveSection';

export type TocItem = { id: string; label: string };

type Props = {
  items: TocItem[];
};

export default function TableOfContents({ items }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(items.map((i) => i.id));

  return (
    <aside className="medicine-toc" aria-label="Contents">
      <button
        type="button"
        className="medicine-toc-toggle"
        onClick={() => setMobileOpen((v) => !v)}
        aria-expanded={mobileOpen}
      >
        <span>Contents</span>
        <span className="medicine-toc-toggle-icon" aria-hidden="true">
          {mobileOpen ? '−' : '+'}
        </span>
      </button>
      <nav
        className={`medicine-toc-nav ${mobileOpen ? 'is-open' : ''}`}
        aria-label="On this page"
      >
        <ol>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
