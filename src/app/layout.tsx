import type { Metadata } from "next";
import { Dancing_Script, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { SiteAnimations } from "@/components/SiteAnimations";
import { Preloader3D } from "@/components/Preloader3D";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clean & Solutions | Ménage à domicile en Guadeloupe",
  description:
    "Ménage à domicile, locaux professionnels et locations saisonnières en Guadeloupe. Un intérieur impeccable, sans stress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${dancingScript.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-navy">
        <Preloader3D />
        <SiteAnimations />
        <Header />
        <main className="min-w-0 flex-1">{children}</main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
