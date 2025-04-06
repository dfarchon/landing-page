import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WebSite, WithContext } from "schema-dts";

const isDevMode = process.env.NODE_ENV === 'development';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (isDevMode ? 'http://localhost:3000' : 'https://dfmud.xyz');

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // set metadataBase url when we are not development mode
  // @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
  metadataBase: !isDevMode ? new URL(siteUrl) : undefined,
  title: "Dark Forest MUD — Prototype of Onchain Reality Universe",
  description: "A space-themed decentralized RTS built on EVM with zkSNARKs — the prototype of onchain reality universe.",
  keywords: ["Dark Forest", "Ethereum", "zkSNARKs", "onchain reality", "Crypto Game", "Web3 Game", "Blockchain Game", "Strategy Game"],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Dark Forest MUD — Prototype of Onchain Reality Universe",
    description: "A space-themed decentralized RTS built on EVM with zkSNARKs — the prototype of onchain reality universe.",
    url: siteUrl,
    siteName: "Dark Forest MUD",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Dark Forest MUD",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Forest MUD — Prototype of Onchain Reality Universe",
    description: "A space-themed decentralized RTS built on EVM with zkSNARKs — the prototype of onchain reality universe.",
    images: ["/og-image.svg"],
  },
};

const structuredData: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dark Forest MUD",
  headline: "Dark Forest MUD — Prototype of Onchain Reality Universe",
  description: "A space-themed decentralized RTS built on EVM with zkSNARKs — the prototype of onchain reality universe.",


  url: siteUrl,
  image: {
    "@type": "ImageObject",
    url: `${siteUrl}/og-image.svg`,
    width: "1200",
    height: "630",
    caption: "Dark Forest Game"
  },
  keywords: ["Dark Forest", "Ethereum", "zkSNARKs", "onchain reality", "Crypto Game", "Web3 Game", "Blockchain Game", "Strategy Game"],
  inLanguage: "en_US",
  publisher: {
    "@type": "Organization",
    name: "DFArchon team",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon.svg`,
      width: "512",
      height: "512"
    },
    sameAs: [
      "https://x.com/darkforest_mud",
      "https://x.com/dfarchon",
      "https://discord.gg/kH725yZPVQ",
      "https://github.com/dfarchon"
    ],
    description: "A space-themed decentralized RTS built on EVM with zkSNARKs — the prototype of onchain reality universe.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* 
          Structured Data for SEO (Google Search Indexing)
          @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld
        */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }} />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ERTZ7ZEZTE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ERTZ7ZEZTE');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}