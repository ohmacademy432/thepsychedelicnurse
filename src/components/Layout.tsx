import type { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <Nav />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
}
