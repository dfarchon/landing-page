import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const isDevMode = process.env['NODE_ENV'] === 'development';
const siteUrl = 'https://dfmud.xyz';

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
  title: "Dark Forest Mud — A Decentralized Journey to Conquer the Cosmos",
  description: "A real‑time strategy game built on EVM using zkSNARKs technology. Explore an infinite procedurally generated universe.",
  keywords: ["Dark Forest", "Ethereum", "zkSNARKs", "Web3 Game", "Blockchain Game", "Strategy Game"],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Dark Forest Mud — A Decentralized Journey to Conquer the Cosmos",
    description: "A real‑time strategy game built on EVM using zkSNARKs technology",
    url: siteUrl,
    siteName: "Dark Forest Mud",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Dark Forest Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Forest Mud — A Decentralized Journey to Conquer the Cosmos",
    description: "A real‑time strategy game built on EVM using zkSNARKs technology",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
