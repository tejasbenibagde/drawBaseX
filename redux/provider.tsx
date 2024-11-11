// redux/provider.tsx
"use client"; // Add this because Next.js requires client-side code here

import { Provider } from "react-redux";
import { store } from "./store";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
