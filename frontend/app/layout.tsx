import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/app/provider";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "Mak Taste Of Cambodia",
  description: "Cambodian seasoning made in USA",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("h-full antialiased", notoSerif.variable)}>
      <body className="min-h-full bg-[#FDF9F3] font-serif">
        <Providers>
          <Toaster position="top-center" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
