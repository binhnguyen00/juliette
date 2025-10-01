import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Root } from "react-dom/client"

import "@/css/index.css";
import { App } from "@/Application";
import { HeroUIProvider } from "@/Provider";

const queryClient = new QueryClient();

const container: HTMLElement | null = document.getElementById("root");
if (container) {
  const root: Root = createRoot(container);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <HeroUIProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </HeroUIProvider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  throw Error("Root element not found");
}
