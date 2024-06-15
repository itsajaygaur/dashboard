import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidemenu from "@/components/sidemenu";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/components/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          // attribute=""
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <div className="drawer md:drawer-open">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />

              {/* Sidebar */}
              <div className="drawer-side z-10">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <aside className="bg-base-200 min-h-full w-72">
                  <h2 className="text-3xl py-4 px-8 font-semibold">-board</h2>
                  <ul className="menu p-4 text-base-content space-y-1 [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-base-300">
                    <Sidemenu />
                  </ul>
                </aside>
              </div>

              {/* Main page content */}
              <div className="drawer-content">
                <Navbar />
                {children}
              </div>
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
