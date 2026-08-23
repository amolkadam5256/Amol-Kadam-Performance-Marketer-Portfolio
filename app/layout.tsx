import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import { LoadingBar } from "@/components/motion/LoadingBar";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Amol Kadam — Performance Marketing & Growth", template: "%s | Amol Kadam" },
  description: "Performance marketing, SEO and measurement systems for ambitious businesses.",
  metadataBase: new URL("https://amolkadam.com"),
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_IN", siteName: "Amol Kadam", title: "Amol Kadam — Performance Marketing & Growth", description: "Performance marketing, SEO and measurement systems for ambitious businesses." },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoadingBar />
        <Navbar />
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
                  name: "Amol Kadam",
                  jobTitle: "Performance Marketing Specialist",
                  telephone: "+91 7709266280",
                  email: "amolkadam1274@gmail.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Pune",
                    addressRegion: "Maharashtra",
                    addressCountry: "IN",
                  },
                  sameAs: [
                    "https://www.linkedin.com/in/amolkadam77",
                    "https://github.com/amolkadam5256",
                    "https://www.instagram.com/_amol5256/",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Amol Kadam",
                  url: "https://amolkadam.com",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
