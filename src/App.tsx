import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacidadPage from "./pages/PrivacidadPage";
import CookiesPage from "./pages/CookiesPage";
import AvisoLegalPage from "./pages/AvisoLegalPage";
import TerminosPage from "./pages/TerminosPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacidad" element={<PrivacidadPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/aviso-legal" element={<AvisoLegalPage />} />
          <Route path="/terminos" element={<TerminosPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
