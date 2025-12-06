import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AccessContextType {
  hasAccess: boolean;
  isLoading: boolean;
  userEmail: string | null;
  checkAccess: (email: string) => Promise<boolean>;
  setUserEmail: (email: string) => void;
}

const AccessContext = createContext<AccessContextType | undefined>(undefined);

export const AccessProvider = ({ children }: { children: ReactNode }) => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const checkAccess = async (email: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase
        .from('access_requests')
        .select('is_approved')
        .eq('email', email)
        .maybeSingle();

      if (error) {
        console.error('Error checking access:', error);
        return false;
      }

      const approved = data?.is_approved || false;
      setHasAccess(approved);
      return approved;
    } catch (error) {
      console.error('Error checking access:', error);
      return false;
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
      checkAccess(storedEmail).finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem('userEmail', userEmail);
    }
  }, [userEmail]);

  return (
    <AccessContext.Provider value={{ hasAccess, isLoading, userEmail, checkAccess, setUserEmail }}>
      {children}
    </AccessContext.Provider>
  );
};

export const useAccess = () => {
  const context = useContext(AccessContext);
  if (context === undefined) {
    throw new Error('useAccess must be used within an AccessProvider');
  }
  return context;
};
