import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "TWB Productions | Cape Town DJ & Event Production", template: "%s | TWB Productions" },
  description: siteConfig.description,
  keywords: ["Cape Town DJ", "Amapiano DJ", "R&B DJ", "event production Cape Town", "AV hire Cape Town"],
  openGraph: { type: "website", locale: "en_ZA", siteName: siteConfig.name, images: [{ url: "/assets/twb-hero-background.png", width: 1717, height: 916, alt: "TWB Productions DJ event" }] },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#050208", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description, areaServed: { "@type": "City", name: "Cape Town" }, address: { "@type": "PostalAddress", addressLocality: "Cape Town", addressCountry: "ZA" }, priceRange: "$$$" };
  return <html lang="en" className={`${inter.variable} ${bebas.variable}`}><body><Header />{children}<Footer /><WhatsAppButton /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
