import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "MonsterKong - Become YouTube Famous Fast",
  description: "MonsterKong helps entrepreneurs, coaches, creators & influencers gain 20k+ organic subscribers within the first 360 days. No bots, no fake followers and 100% TOS compliant.",
  keywords: "youtube growth, youtube marketing, youtube subscribers, youtube monetization, youtube shorts, youtube seo, youtube automation",
  authors: [{ name: "MonsterKong Team" }],
  creator: "MonsterKong",
  publisher: "MonsterKong",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monsterkong.com",
    title: "MonsterKong - Become YouTube Famous Fast",
    description: "Get 20k+ YouTube subscribers in 360 days, guaranteed.",
    siteName: "MonsterKong",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonsterKong - Become YouTube Famous Fast",
    description: "Get 20k+ YouTube subscribers in 360 days, guaranteed.",
    creator: "@monsterkong",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
