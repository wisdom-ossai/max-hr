"use client";

import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Inter } from "next/font/google";
import { cn } from "@maxHR/lib/utils";
import { Toaster } from "@maxHR/components/Toast";
import AppProviders from "@maxHR/components/AppProviders";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "MaxHR",
//   description:
//     "A comprehensive hr solution that helps maximize organization man power.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:text-white/75 dark:bg-slate-900 antialiased">
        <AppProviders>
          <Toaster position="top-right" />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
