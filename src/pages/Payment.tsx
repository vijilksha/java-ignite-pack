import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAccess } from '@/contexts/AccessContext';
import { QrCode, Copy, Check, IndianRupee, Shield } from 'lucide-react';

const UPI_ID = 'vijilksh2011-1@oksbi';

const Payment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { setUserEmail, checkAccess } = useAccess();

  const copyUpiId = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    toast({ title: 'UPI ID Copied!', description: 'Paste it in your payment app.' });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({ title: 'Error', description: 'Please fill in all fields.', variant: 'destructive' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: 'Error', description: 'Please enter a valid email address.', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if already has approved access
      const hasApprovedAccess = await checkAccess(email);
      if (hasApprovedAccess) {
        setUserEmail(email);
        toast({ title: 'Access Granted!', description: 'You already have approved access.' });
        navigate('/');
        return;
      }

      // Check if request already exists
      const { data: existing } = await supabase
        .from('access_requests')
        .select('id, is_approved')
        .eq('email', email)
        .maybeSingle();

      if (existing) {
        setUserEmail(email);
        if (existing.is_approved) {
          toast({ title: 'Access Granted!', description: 'You already have approved access.' });
          navigate('/');
        } else {
          toast({ title: 'Request Pending', description: 'Your access request is pending approval.' });
          setSubmitted(true);
        }
        return;
      }

      // Submit new request
      const { error } = await supabase
        .from('access_requests')
        .insert([{ name: name.trim(), email: email.trim().toLowerCase() }]);

      if (error) throw error;

      setUserEmail(email.trim().toLowerCase());
      setSubmitted(true);
      toast({ title: 'Request Submitted!', description: 'Your access will be activated after verification.' });
    } catch (error: any) {
      console.error('Error submitting request:', error);
      toast({ title: 'Error', description: error.message || 'Failed to submit request.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-primary/20 shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl text-foreground">Thank You!</CardTitle>
            <CardDescription className="text-base">
              Your access will be activated after manual verification. You'll receive access to all Java Training modules once approved.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={() => navigate('/')} variant="outline" className="mt-4">
              Go to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg border-primary/20 shadow-xl">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <IndianRupee className="w-7 h-7 text-primary" />
          </div>
          <CardTitle className="text-2xl text-foreground">Complete Your Payment</CardTitle>
          <CardDescription>Pay via UPI to unlock all Java Training modules</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* UPI Section */}
          <div className="bg-muted/50 rounded-xl p-6 space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">UPI ID</p>
              <div className="flex items-center justify-center gap-2 bg-background rounded-lg p-3 border">
                <code className="text-lg font-semibold text-primary">{UPI_ID}</code>
                <Button size="icon" variant="ghost" onClick={copyUpiId} className="h-8 w-8">
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            {/* QR Code Placeholder */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-48 h-48 bg-white rounded-xl p-2 shadow-inner flex items-center justify-center border">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=${UPI_ID}&pn=JavaTraining`}
                  alt="UPI QR Code"
                  className="w-full h-full"
                />
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <QrCode className="h-3 w-3" /> Scan with any UPI app
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-800 dark:text-amber-200 flex items-start gap-2">
              <Shield className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Pay the course fee and click the button below to request access. Your access will be activated after manual verification.</span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'I Have Paid – Request Access'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
