import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Grain from "@/components/Grain";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alric — Designer UI/UX & Développeur",
  description:
    "Portfolio d'Alric, designer UI/UX & développeur freelance. Je conçois des interfaces et des expériences digitales nettes, haut de gamme et centrées utilisateur.",
  keywords: [
    "Designer UI/UX",
    "Développeur freelance",
    "Web Design",
    "Landing Page",
    "UI Design Figma",
    "Webflow",
    "Portfolio",
  ],
  authors: [{ name: "Alric" }],
  openGraph: {
    title: "Alric — Designer UI/UX & Développeur",
    description:
      "Je conçois des interfaces & des expériences digitales nettes, haut de gamme et centrées utilisateur.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-paper text-ink min-h-full">
        <SmoothScroll>
          <Cursor />
          <ScrollProgress />
          {children}
          <Grain />
        </SmoothScroll>
      </body>
    </html>
  );
}
