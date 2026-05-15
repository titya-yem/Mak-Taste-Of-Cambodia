import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/app/provider";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "Mak Taste Of Cambodia",
  description: "Cambodian seasoning made in USA",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full antialiased", notoSerif.variable)}
    >
      <body className="min-h-full bg-[#FDF9F3] font-serif">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
