import type { Metadata } from "next";
import Script from "next/script";
import FloatingWidget from "@/components/FloatingWidget";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeProvider from "@/components/ThemeProvider";
import LanguageProvider from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "GHC — Companies Connecting Commerce",
  description:
    "We build apps that shape the future of entertainment, data, fashion, and gaming. Australian-based tech company creating disruptive products with global reach.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "GHC — Companies Connecting Commerce",
    description:
      "We build apps that shape the future of entertainment, data, fashion, and gaming.",
    type: "website",
    locale: "en_AU",
    siteName: "GHC",
    images: [
      {
        url: "/images/ghc-opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "GHC — Companies Connecting Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GHC — Companies Connecting Commerce",
    description:
      "We build apps that shape the future of entertainment, data, fashion, and gaming.",
    images: ["/images/ghc-opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=Sora:wght@100;200;300;400;500;600&family=DM+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
        {/* Memberstack */}
        <Script
          data-memberstack-app="app_cmm1n0jv500p80sruhdwk0sov"
          src="https://static.memberstack.com/scripts/v2/memberstack.js"
          strategy="beforeInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ghc-theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <ScrollToTop />
            {children}
            <FloatingWidget />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
