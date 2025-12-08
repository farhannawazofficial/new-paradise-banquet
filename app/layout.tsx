import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Paradise Banquet - Premier wedding & event venue",
  description:
    "New Paradise Banquet - Premier wedding and event venue. Book halls, catering, photography and decor for unforgettable weddings and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="New Paradise Banquet - Premier wedding and event venue. Book halls, catering, photography and decor for unforgettable weddings and events." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.newparadisebanquet.com/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="New Paradise Banquet - Premier wedding & event venue" />
        <meta property="og:description" content="Book halls, catering, photography and decor for unforgettable weddings and events at New Paradise Banquet." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newparadisebanquet.com/" />
        <meta property="og:image" content="/images/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New Paradise Banquet - Premier wedding & event venue" />
        <meta name="twitter:description" content="Book halls, catering, photography and decor for unforgettable weddings and events at New Paradise Banquet." />
        <meta name="twitter:image" content="/images/logo.png" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* Structured data (LocalBusiness) - replace domain and add address as needed */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "New Paradise Banquet",
          "telephone": "+923191113372",
          "image": "/images/logo.png",
          "url": "https://www.newparadisebanquet.com/",
          "sameAs": [
            "https://www.facebook.com/",
            "https://www.instagram.com/"
          ]
        }) }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <StickyWhatsApp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
