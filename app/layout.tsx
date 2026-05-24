import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "INFRA BAU GmbH – Leitungsbau, Betonbau, Freileitungsbau, Erdbau",
    template: "%s – INFRA BAU GmbH",
  },
  description:
    "INFRA BAU GmbH – Ihr Spezialist für Leitungsbau, Betonbau, Freileitungsbau und Hangsicherung in Österreich. Nordstraße 5, 5301 Eugendorf. Seit 2012. ANKÖ-zertifiziert.",
  keywords: [
    "Leitungsbau",
    "Betonbau",
    "Freileitungsbau",
    "Erdbau",
    "Hangsicherung",
    "Tiefbau",
    "Mastfundamente",
    "Kanalisation",
    "Wasserleitung",
    "Österreich",
    "Salzburg",
    "ANKÖ",
    "Bauunternehmen",
    "Eugendorf",
  ],
  authors: [{ name: "INFRA BAU GmbH" }],
  creator: "INFRA BAU GmbH",
  publisher: "INFRA BAU GmbH",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "INFRA BAU GmbH",
    title: "INFRA BAU GmbH – Leitungsbau, Betonbau, Freileitungsbau, Erdbau",
    description:
      "Ihr verlässlicher Partner für Infrastrukturbau in Österreich. Seit 2012. ANKÖ-zertifiziert.",
    images: [
      {
        url: "https://infrabau.at/images/infrabau-bauunternehmen-eugendorf-salzburg.jpg",
        width: 800,
        height: 200,
        alt: "INFRA BAU GmbH Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <head>
        {/* Security headers as meta tags (for static hosting) */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://infrabau.at https://maps.googleapis.com https://maps.gstatic.com; frame-src https://www.google.com; connect-src 'self'"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
