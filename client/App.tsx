import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import Consulting from "./pages/services/Consulting";
import Performance from "./pages/services/Performance";
import GrowthStrategy from "./pages/services/GrowthStrategy";
import Database from "./pages/services/Database";
import Security from "./pages/services/Security";
import Cloud from "./pages/services/Cloud";
import AiMl from "./pages/services/AiMl";
import Ecommerce from "./pages/services/Ecommerce";
import Enterprise from "./pages/services/Enterprise";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />
            <Route
              path="/services/app-development"
              element={<AppDevelopment />}
            />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/performance" element={<Performance />} />
            <Route
              path="/services/growth-strategy"
              element={<GrowthStrategy />}
            />
            <Route path="/services/database" element={<Database />} />
            <Route path="/services/security" element={<Security />} />
            <Route path="/services/cloud" element={<Cloud />} />
            <Route path="/services/ai-ml" element={<AiMl />} />
            <Route path="/services/ecommerce" element={<Ecommerce />} />
            <Route path="/services/enterprise" element={<Enterprise />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
