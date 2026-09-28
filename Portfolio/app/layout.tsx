import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans, Great_Vibes, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./editorial.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import { LoadingBar } from "@/components/motion/LoadingBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const poster = Anton({
  variable: "--font-poster",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: site.title, template: "%s | Amol Kadam" },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable} ${poster.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoadingBar />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <JsonLd data={personJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
