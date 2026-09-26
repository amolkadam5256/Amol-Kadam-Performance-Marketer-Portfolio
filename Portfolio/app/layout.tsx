import type { Metadata } from "next";
import { Anton, DM_Sans, Great_Vibes, Oswald } from "next/font/google";
import "./globals.css";
import "./editorial.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageTransition } from "@/components/motion/PageTransition";
import { LoadingBar } from "@/components/motion/LoadingBar";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { site } from "@/data/site";

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

export const metadata: Metadata = {
  title: { default: site.title, template: "%s | Amol Kadam" },
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable} ${poster.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoadingBar />
        <Navbar />
        <Breadcrumb />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: site.name,
                  jobTitle: "Performance Marketing Specialist",
                  url: site.url,
                  telephone: site.phone,
                  email: site.email,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Pune",
                    addressRegion: "Maharashtra",
                    addressCountry: "IN",
                  },
                  sameAs: [site.linkedin, site.github, site.instagram],
                },
                {
                  "@type": "WebSite",
                  name: site.name,
                  url: site.url,
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
