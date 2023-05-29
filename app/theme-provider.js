"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
	return <ThemeProvider attribute="color-mode">{children}</ThemeProvider>;
}
