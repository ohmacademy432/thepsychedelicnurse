import { createContext, useContext } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export type AuthValue = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  hasConsent: boolean;
  refreshConsent: () => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthValue | undefined>(undefined);

export async function fetchConsent(userId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('member_consents')
    .select('id')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) {
    console.warn('Consent check failed:', error.message);
    return false;
  }
  return !!data;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
