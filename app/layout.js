import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mezarbakimservisi.com"),
  title: {
    default: "Mezar Bakım Servisi | Bursa Mezar Bakımı ve Temizlik",
    template: "%s | Mezar Bakım Servisi",
  },
  description:
    "Bursa genelinde mezar bakımı, mermer temizleme, çiçek ekimi ve yıllık bakım hizmeti. Profesyonel ekip, fotoğraflı raporlama.",
  keywords: [
    "Bursa mezar bakımı",
    "Bursa mezar temizleme",
    "Bursa mezar mermer temizleme",
    "Bursa mezar çiçek ekimi",
    "Bursa yıllık mezar bakımı",
    "Bursa mezar bakım fiyatları",
  ],
  openGraph: {
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyButtons />
      </body>
    </html>
  );
}
