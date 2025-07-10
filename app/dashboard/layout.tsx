// app/(dashboard)/layout.tsx
import { cookies } from "next/headers";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ActiveThemeProvider } from "@/components/active-theme";
import { cn } from "@/lib/utils";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get("active_theme")?.value;
  const isScaled = activeThemeValue?.endsWith("-scaled");

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <ActiveThemeProvider initialTheme={activeThemeValue}>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              "min-h-screen w-full flex bg-background font-sans antialiased overscroll-none",
              activeThemeValue ? `theme-${activeThemeValue}` : "",
              isScaled ? "theme-scaled" : ""
            )}
          >
            <AppSidebar variant="inset" />
            <SidebarInset className="w-full">
              <SiteHeader />
              <div className="flex flex-1 flex-col w-full">
                <div className="@container/main flex flex-1 flex-col gap-2 w-full">
                  <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6 w-full">
                    {children}
                  </div>
                </div>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </ActiveThemeProvider>
    </ThemeProvider>
  );
}
