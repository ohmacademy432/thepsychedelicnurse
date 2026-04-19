import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { useAuth } from '../hooks/useAuth';

export default function AuthCallback() {
  const navigate = useNavigate();
  const { session, loading, hasConsent } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (session) {
      navigate(hasConsent ? '/members' : '/consent', { replace: true });
      return;
    }

    // No session found — give Supabase a beat to finish parsing tokens
    // from the URL hash, then fall back to the login page if nothing lands.
    const timeout = setTimeout(() => {
      navigate('/login', { replace: true });
    }, 2500);
    return () => clearTimeout(timeout);
  }, [session, loading, hasConsent, navigate]);

  return (
    <>
      <Seo
        title="Signing you in"
        description="Processing your magic link."
        noIndex
      />
      <section className="section-parchment">
        <div className="container narrow">
          <p className="eyebrow">ONE MOMENT</p>
          <h1>Signing you in&hellip;</h1>
          <p className="subtitle">Hold the link you received &mdash; we&rsquo;re verifying it now.</p>
        </div>
      </section>
    </>
  );
}
