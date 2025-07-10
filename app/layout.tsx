import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "sonner";
export const metadata: Metadata = {
  title: "Orcish Dashboard",
  description:
    "A fully responsive analytics dashboard featuring dynamic charts, interactive tables, a collapsible sidebar, and a light/dark mode theme switcher. Built with modern web technologies, it ensures seamless performance across devices, offering an intuitive user interface for data visualization and exploration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background overscroll-none font-sans antialiased overflow-y-hidden">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
