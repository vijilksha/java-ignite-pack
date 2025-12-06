import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAccess } from '@/contexts/AccessContext';
import { Loader2 } from 'lucide-react';

interface AccessGateProps {
  children: ReactNode;
}

const AccessGate = ({ children }: AccessGateProps) => {
  const { hasAccess, isLoading, userEmail } = useAccess();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // If no email stored or not approved, redirect to payment
  if (!userEmail || !hasAccess) {
    return <Navigate to="/payment" replace />;
  }

  return <>{children}</>;
};

export default AccessGate;
