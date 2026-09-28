import type { Metadata } from "next";
import { site, socialProfiles } from "@/data/site";

export const brand = {
  name: "Amol Kadam",
  jobTitle: "Performance Marketer",
  location: "Pune, Maharashtra, India",
  locality: "Pune",
  region: "Maharashtra",
  country: "IN",
  specialties: ["Performance Marketing", "SEO", "Meta Ads", "Google Ads", "Analytics & Tracking", "Conversion Optimization"],
} as const;

export const authorBio =
  "Amol Kadam is a Pune-based performance marketer specializing in digital advertising, SEO, analytics and conversion-focused marketing.";

export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_IN",
      siteName: site.name,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: brand.name,
    jobTitle: brand.jobTitle,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: authorBio,
    address: {
      "@type": "PostalAddress",
      addressLocality: brand.locality,
      addressRegion: brand.region,
      addressCountry: brand.country,
    },
    image: `${site.url}/Ai_Avtar_Full.png`,
    knowsAbout: [...brand.specialties],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Bharati Vidyapeeth Deemed University",
    },
    sameAs: socialProfiles.map((profile) => profile.href),
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Amol Kadam Performance Marketing",
    url: `${site.url}/services`,
    description:
      "Performance marketing, SEO, Meta Ads, Google Ads, analytics and conversion systems from Amol Kadam in Pune, Maharashtra, India.",
    provider: {
      "@type": "Person",
      name: brand.name,
      url: site.url,
      jobTitle: brand.jobTitle,
    },
    areaServed: {
      "@type": "City",
      name: brand.locality,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: brand.locality,
      addressRegion: brand.region,
      addressCountry: brand.country,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: site.url,
    description:
      "Personal portfolio and professional website of Amol Kadam, a performance marketer specializing in digital marketing, paid media, SEO and analytics.",
    publisher: {
      "@type": "Person",
      name: brand.name,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? site.url : `${site.url}${item.path}`,
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${site.url}${path}`,
    author: {
      "@type": "Person",
      name: brand.name,
      url: `${site.url}/about`,
      jobTitle: brand.jobTitle,
    },
    publisher: {
      "@type": "Person",
      name: brand.name,
      url: site.url,
    },
  };
}
