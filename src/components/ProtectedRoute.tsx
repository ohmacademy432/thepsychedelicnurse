import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { session, loading, hasConsent } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <section className="section-parchment">
        <div className="container narrow">
          <p className="eyebrow">ONE MOMENT</p>
        </div>
      </section>
    );
  }

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (!hasConsent && location.pathname !== '/consent') {
    return <Navigate to="/consent" replace />;
  }

  return <>{children}</>;
}
