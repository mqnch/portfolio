import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { BottomNav } from "@/components/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "felix pan",
  description:
    "Portfolio of Felix Pan - Full-stack Developer & AI Enthusiast building performant, user-centric applications.",
  keywords: ["developer", "portfolio", "full-stack", "AI", "web development"],
  authors: [{ name: "Felix Pan" }],
  openGraph: {
    title: "felix pan",
    description:
      "Portfolio of Felix Pan - Full-stack Developer & AI Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
