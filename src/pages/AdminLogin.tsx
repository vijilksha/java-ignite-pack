import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Shield, Lock, UserPlus } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) throw error;

      // Check if user has admin role
      const { data: roleData, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', data.user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (roleError) throw roleError;

      if (!roleData) {
        await supabase.auth.signOut();
        toast({ 
          title: 'Access Denied', 
          description: 'You do not have admin privileges. Contact the administrator.', 
          variant: 'destructive' 
        });
        return;
      }

      toast({ title: 'Welcome, Admin!', description: 'Login successful.' });
      navigate('/admin/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      toast({ 
        title: 'Login Failed', 
        description: error.message || 'Invalid credentials.', 
        variant: 'destructive' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const redirectUrl = `${window.location.origin}/admin`;
      
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: redirectUrl
        }
      });

      if (error) throw error;

      toast({ 
        title: 'Account Created!', 
        description: 'Your admin account has been created. Please contact the system administrator to grant admin access, then log in.' 
      });
      setIsSignUp(false);
    } catch (error: any) {
      console.error('Sign up error:', error);
      toast({ 
        title: 'Sign Up Failed', 
        description: error.message || 'Failed to create account.', 
        variant: 'destructive' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-primary/20 shadow-xl">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <CardTitle className="text-2xl text-foreground">
            {isSignUp ? 'Create Admin Account' : 'Admin Login'}
          </CardTitle>
          <CardDescription>
            {isSignUp ? 'Sign up for admin access' : 'Sign in to manage access requests'}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-11 font-semibold"
              disabled={isLoading}
            >
              {isSignUp ? (
                <>
                  <UserPlus className="w-4 h-4 mr-2" />
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </>
              )}
            </Button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-primary hover:underline"
              >
                {isSignUp ? 'Already have an account? Sign in' : 'Need an admin account? Sign up'}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
