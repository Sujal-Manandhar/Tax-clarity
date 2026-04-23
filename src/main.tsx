import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import TaxCalculator from "./components/home/TaxCalculator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
const calculatorElement = document.getElementById("tax-calculator-root");

if (calculatorElement) {
  // Partial Mount: Render ONLY the Tax Calculator for WordPress
  createRoot(calculatorElement).render(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TaxCalculator />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
} else if (rootElement) {
  // Full Mount: Standard SPA behavior
  createRoot(rootElement).render(<App />);
}

