import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "ThreeJS Practice",
  description: "A site to practice three.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="w-full min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
