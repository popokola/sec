import { Toaster } from "sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth - Orcish Dashboard",
  description: "Login or reset your password to access your dashboard.",
};


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen w-full bg-background font-sans antialiased flex items-center justify-center">
      <div className="w-full px-6 py-8">
        {children}
      </div>
      <Toaster />
    </div>
  );
}
