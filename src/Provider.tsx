import { useHref, useNavigate } from "react-router-dom";
import type { NavigateOptions } from "react-router-dom";

import { HeroUIProvider as Provider } from "@heroui/system";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export function HeroUIProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <Provider navigate={navigate} useHref={useHref}>
      {children}
    </Provider>
  );
}
