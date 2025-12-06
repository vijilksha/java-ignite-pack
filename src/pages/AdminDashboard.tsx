import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Shield, LogOut, Check, Clock, Users, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';

interface AccessRequest {
  id: string;
  name: string;
  email: string;
  requested_at: string;
  is_approved: boolean;
  approved_at: string | null;
}

const AdminDashboard = () => {
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [approvingId, setApprovingId] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const fetchRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('access_requests')
        .select('*')
        .order('requested_at', { ascending: false });

      if (error) throw error;
      setRequests(data || []);
    } catch (error: any) {
      console.error('Error fetching requests:', error);
      toast({ title: 'Error', description: 'Failed to load access requests.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin');
      return;
    }

    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (!roleData) {
      await supabase.auth.signOut();
      navigate('/admin');
      return;
    }

    fetchRequests();
  };

  useEffect(() => {
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        navigate('/admin');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleApprove = async (id: string) => {
    setApprovingId(id);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const { error } = await supabase
        .from('access_requests')
        .update({ 
          is_approved: true, 
          approved_at: new Date().toISOString(),
          approved_by: session?.user?.id 
        })
        .eq('id', id);

      if (error) throw error;

      setRequests(prev => 
        prev.map(r => r.id === id 
          ? { ...r, is_approved: true, approved_at: new Date().toISOString() } 
          : r
        )
      );
      
      toast({ title: 'Access Granted', description: 'Student can now access all modules.' });
    } catch (error: any) {
      console.error('Error approving request:', error);
      toast({ title: 'Error', description: 'Failed to approve access.', variant: 'destructive' });
    } finally {
      setApprovingId(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const pendingCount = requests.filter(r => !r.is_approved).length;
  const approvedCount = requests.filter(r => r.is_approved).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage access requests</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{requests.length}</p>
                  <p className="text-sm text-muted-foreground">Total Requests</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{pendingCount}</p>
                  <p className="text-sm text-muted-foreground">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{approvedCount}</p>
                  <p className="text-sm text-muted-foreground">Approved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Table */}
        <Card>
          <CardHeader>
            <CardTitle>Access Requests</CardTitle>
            <CardDescription>Review and approve student access requests</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8 text-muted-foreground">Loading...</div>
            ) : requests.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No access requests yet.</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Requested</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.name}</TableCell>
                        <TableCell>{request.email}</TableCell>
                        <TableCell>
                          {format(new Date(request.requested_at), 'MMM d, yyyy h:mm a')}
                        </TableCell>
                        <TableCell>
                          {request.is_approved ? (
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                              <Check className="w-3 h-3 mr-1" /> Approved
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                              <Clock className="w-3 h-3 mr-1" /> Pending
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          {!request.is_approved && (
                            <Button 
                              size="sm"
                              onClick={() => handleApprove(request.id)}
                              disabled={approvingId === request.id}
                            >
                              {approvingId === request.id ? 'Approving...' : 'Grant Access'}
                            </Button>
                          )}
                          {request.is_approved && request.approved_at && (
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(request.approved_at), 'MMM d, yyyy')}
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
