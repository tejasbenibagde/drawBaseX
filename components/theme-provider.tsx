"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Initializing a state to manage theme on the client side
  const [mounted, setMounted] = React.useState(false);

  // Use effect to set mounted to true after first render
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by rendering nothing until mounted
  if (!mounted) return null;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
