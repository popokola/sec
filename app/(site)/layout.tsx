import { Header } from "@/components/header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col gap-4">
            <div className="flex-1">{children}</div>
          </div>
        </div>
    </>
  );
}

