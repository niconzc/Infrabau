import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "INFRA BAU GmbH – Leitungsbau, Betonbau, Freileitungsbau, Erdbau",
  description:
    "INFRA BAU GmbH – Ihr Spezialist für Leitungsbau, Betonbau, Freileitungsbau und Hangsicherung in Österreich und der DACH-Region. Seit 2012. ANKÖ-zertifiziert.",
  keywords:
    "Leitungsbau, Betonbau, Freileitungsbau, Erdbau, Hangsicherung, Tiefbau, Österreich, Salzburg, ANKÖ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
