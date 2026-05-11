import type { Metadata } from "next";
import { DM_Sans, Shippori_Mincho } from "next/font/google";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thikepro.example"),
  title: {
    default: "Thike Profesionale",
    template: "%s | Thike Profesionale",
  },
  description:
    "Premium Damascus and Japanese-style knives from Tirana, Albania. Luxury editorial presentation with handcrafted steel and free personalization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${shippori.variable} ${dmSans.variable}`}>
      <body className="site-shell">
        <LoadingScreen />
        <CustomCursor />
        <div className="pointer-events-none fixed inset-0 z-0 hero-grid opacity-20" />
        <div className="pointer-events-none fixed inset-0 z-0 paper-noise opacity-60" />
        <Navbar />
        <main className="relative z-10 flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
