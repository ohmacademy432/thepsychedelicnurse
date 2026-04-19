import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';

export default function Consent() {
  const { user, hasConsent, refreshConsent } = useAuth();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (hasConsent) navigate('/members', { replace: true });
  }, [hasConsent, navigate]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!user) return;
    setSubmitting(true);
    setErrorMsg('');
    const { error } = await supabase.from('member_consents').insert({
      user_id: user.id,
      user_agent: navigator.userAgent,
    });
    // Postgres 23505 = unique_violation. The row already exists, which
    // means consent is recorded — treat it the same as a fresh insert.
    if (error && error.code !== '23505') {
      setErrorMsg(error.message);
      setSubmitting(false);
      return;
    }
    await refreshConsent();
    navigate('/members', { replace: true });
  }

  return (
    <>
      <Seo
        title="Informed consent"
        description="Review and sign informed consent for member access."
        noIndex
      />
      <section className="section-parchment">
        <div className="container narrow prose">
          <p className="eyebrow">INFORMED CONSENT</p>
          <h1>Before you enter the member site</h1>
          <p>
            The member site is educational and spiritual in nature. It is not
            medical advice, and nothing inside it substitutes for personalized
            care from a licensed healthcare provider.
          </p>
          <p>
            Plant medicines and psychedelic compounds carry real risks &mdash;
            cardiac, psychiatric, legal, relational, and spiritual. The
            materials here are designed to reduce harm by helping you
            understand those risks. They do not reduce the risks to zero.
          </p>
          <p>
            Participation in any practice, protocol, or integration work
            suggested on the member site is entirely voluntary. April Bogle,
            Ohm Academy of Healing, and The Psychedelic Nurse cannot and do
            not take responsibility for choices made outside a direct
            therapeutic relationship.
          </p>
          <p>
            By checking the box below, you confirm that you have read these
            terms, that you understand this site is educational rather than
            medical, and that you assume personal responsibility for how you
            use what you learn here.
          </p>

          <form onSubmit={onSubmit} className="consent-form">
            <label className="consent-checkbox">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <span>I have read and agree to these terms.</span>
            </label>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!checked || submitting}
            >
              {submitting ? 'Saving...' : 'Continue'}
            </button>
            {errorMsg && <p className="auth-error">{errorMsg}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
