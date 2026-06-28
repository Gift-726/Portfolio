import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goodness Ayano | Product Design Portfolio",
  description: "Product Designer translating complex requirements into simple, user-centered solutions across education, gov, fintech, ERP, e-commerce, and community platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-off-white font-sans text-dark-neutral min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
