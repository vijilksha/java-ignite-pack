import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessProvider } from "@/contexts/AccessContext";
import AccessGate from "@/components/AccessGate";
import Index from "./pages/Index";
import DayDetail from "./pages/DayDetail";
import Curriculum from "./pages/Curriculum";
import Resources from "./pages/Resources";
import Payment from "./pages/Payment";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AccessProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/payment" element={<Payment />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            
            {/* Protected routes */}
            <Route path="/" element={<AccessGate><Index /></AccessGate>} />
            <Route path="/day/:dayNumber" element={<AccessGate><DayDetail /></AccessGate>} />
            <Route path="/curriculum" element={<AccessGate><Curriculum /></AccessGate>} />
            <Route path="/resources" element={<AccessGate><Resources /></AccessGate>} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AccessProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
