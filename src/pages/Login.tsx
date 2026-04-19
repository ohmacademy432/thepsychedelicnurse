import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const { session, hasConsent } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate(hasConsent ? '/members' : '/consent', { replace: true });
    }
  }, [session, hasConsent, navigate]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
    } else {
      setStatus('sent');
    }
  }

  return (
    <>
      <Seo
        title="Member Access"
        description="Enter the email April has on file to receive a magic sign-in link."
        noIndex
      />
      <section className="section-parchment">
        <div className="container narrow">
          <p className="eyebrow">MEMBER ACCESS</p>
          <h1>Enter the member site</h1>
          <p className="subtitle">
            Access is by invitation. Enter the email April has on file and a
            magic link will be sent to your inbox.
          </p>

          {status === 'sent' ? (
            <p className="lede" style={{ marginTop: 48 }}>
              Check your email. The magic link will sign you in.
            </p>
          ) : (
            <form className="auth-form" onSubmit={onSubmit}>
              <label className="auth-field">
                <span className="eyebrow">EMAIL</span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </label>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
                style={{ alignSelf: 'flex-start' }}
              >
                {status === 'sending' ? 'Sending...' : 'Send magic link'}
              </button>
              {errorMsg && <p className="auth-error">{errorMsg}</p>}
            </form>
          )}
        </div>
      </section>
    </>
  );
}
