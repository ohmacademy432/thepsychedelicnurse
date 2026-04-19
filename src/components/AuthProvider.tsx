import { useEffect, useState, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { AuthContext, fetchConsent } from '../hooks/useAuth';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const userId = session?.user?.id;
    if (!userId) {
      // Resetting consent when the session clears is a legitimate
      // external-state sync — React's "no setState in effect" heuristic
      // doesn't apply cleanly here.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasConsent(false);
      return;
    }
    let cancelled = false;
    fetchConsent(userId).then((has) => {
      if (!cancelled) setHasConsent(has);
    });
    return () => {
      cancelled = true;
    };
  }, [session?.user?.id]);

  const refreshConsent = async () => {
    const userId = session?.user?.id;
    if (!userId) {
      setHasConsent(false);
      return;
    }
    const has = await fetchConsent(userId);
    setHasConsent(has);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user: session?.user ?? null,
        session,
        loading,
        hasConsent,
        refreshConsent,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
