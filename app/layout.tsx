import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Miss Tania — Teacher's Day 2026",
  description: "A cinematic interactive Teacher's Day memory.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
