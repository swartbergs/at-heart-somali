import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Om from "./pages/Om";
import Planer from "./pages/Planer";
import Kattungar from "./pages/Kattungar";
import Kullar from "./pages/Kullar";
import Avelshonor from "./pages/Avelshonor";
import Avelshanar from "./pages/Avelshanar";
import Kontakt from "./pages/Kontakt";
import Utstallning from "./pages/Utstallning";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/om" element={<Om />} />
            <Route path="/planer" element={<Planer />} />
            <Route path="/kattungar" element={<Kattungar />} />
            <Route path="/kullar" element={<Kullar />} />
            <Route path="/avelshonor" element={<Avelshonor />} />
            <Route path="/avelshanar" element={<Avelshanar />} />
            <Route path="/utstallning" element={<Utstallning />} />
            <Route path="/kontakt" element={<Kontakt />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
