import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTA } from "@/components/common/CTA";
import { FAQ } from "@/components/common/FAQ";
import { PageHeader } from "@/components/common/PageHeader";
import { services, studies } from "@/data/site";
import { pageMeta } from "@/lib/seo";

const extras: Record<
  string,
  {
    forWho: string;
    problems: string[];
    process: string[];
    tools: string[];
    deliverables: string[];
    related: string[];
    faqs: [string, string][];
  }
> = {
  "meta-ads": {
    forWho: "Businesses that need Facebook and Instagram campaigns tied to WhatsApp, forms or a landing page — not vanity reach.",
    problems: [
      "Spend produces clicks that the sales team cannot use.",
      "Creative is tested without a clear conversion event.",
      "Lead volume looks healthy until invalid and uncontacted chats are counted.",
    ],
    process: ["Clarify the offer and what a qualified lead looks like.", "Build campaign structure, audiences and a capture path.", "Check Pixel events before scaling.", "Review creative, CPL and lead quality together."],
    tools: ["Meta Ads Manager", "Meta Pixel", "Events Manager", "WhatsApp", "Privyr CRM"],
    deliverables: ["Campaign structure", "Creative test plan", "Event review", "Weekly quality read"],
    related: ["kokanbag-mango-pulp", "real-estate-lead-generation"],
    faqs: [
      ["What Meta Ads work does Amol Kadam do?", "Lead generation, remarketing and conversion campaigns on Facebook and Instagram, including WhatsApp-first capture where it fits the offer."],
      ["Do you only run ads, or also the follow-up?", "Campaign work is paired with how leads arrive — WhatsApp, forms or CRM tagging — so quality can be judged after the click."],
    ],
  },
  "google-ads": {
    forWho: "Teams that need high-intent search demand connected to a page and a conversion event.",
    problems: [
      "Budget leaks into research queries the business cannot fulfil.",
      "Ads and landing pages describe different offers.",
      "Bidding is trained on the wrong conversion.",
    ],
    process: ["Map commercial queries to one offer.", "Align ad copy and the landing page.", "Verify conversion tracking.", "Tighten negatives before increasing spend."],
    tools: ["Google Ads", "GA4", "Google Tag Manager", "Google Search Console"],
    deliverables: ["Keyword and negative architecture", "Ad copy", "Conversion checks", "Query quality notes"],
    related: ["hydrella-beauty-science"],
    faqs: [
      ["What Google Ads work does Amol Kadam handle?", "Search-led demand capture, keyword structure, landing-page alignment and conversion measurement."],
      ["Do you run Performance Max?", "Performance Max can be part of an account when the conversion events and asset groups are honest. It is not used as a substitute for a missing offer or broken tracking."],
    ],
  },
  seo: {
    forWho: "Businesses that need commercial organic visibility — service pages, technical foundations and content that can convert.",
    problems: [
      "Pages rank for the wrong intent.",
      "Technical issues waste crawl budget.",
      "Organic traffic is counted without enquiries.",
    ],
    process: ["Audit crawl, index and page quality.", "Map keywords to pages that can convert.", "Fix on-page and internal links.", "Measure organic visits against calls, forms or WhatsApp."],
    tools: ["Google Search Console", "GA4", "SEMrush", "Ahrefs"],
    deliverables: ["Technical notes", "Keyword map", "On-page changes", "Content priorities"],
    related: ["hydrella-beauty-science"],
    faqs: [
      ["What SEO work does Amol Kadam do?", "Technical SEO, on-page work, keyword research, internal linking and content planning tied to commercial pages."],
      ["How is SEO judged?", "By whether the right pages can be discovered and whether those visits become useful enquiries — not by vanity rankings alone."],
    ],
  },
  "local-seo": {
    forWho: "Pune and nearby businesses that need to show up when local customers are ready to call, visit or message.",
    problems: [
      "The Google Business Profile does not match the real offer.",
      "Local pages send people to a homepage with no next step.",
      "Reviews and NAP details are inconsistent.",
    ],
    process: ["Align the profile, categories and services.", "Build or tighten local pages with a call or WhatsApp path.", "Keep name, area and contact details consistent.", "Track calls, directions and conversations."],
    tools: ["Google Business Profile", "Google Search Console", "GA4", "Local landing pages"],
    deliverables: ["Profile recommendations", "Local page structure", "NAP consistency notes", "Review operating loop"],
    related: ["real-estate-lead-generation"],
    faqs: [
      ["Does Amol Kadam work on local SEO in Pune?", "Yes. Local SEO work covers Google Business Profile, local pages and consistent business information for nearby discovery."],
      ["Do you create a separate page for every Pune neighbourhood?", "No. Local pages are created only when they serve a distinct offer or location the business can actually fulfil."],
    ],
  },
  analytics: {
    forWho: "Teams that need GA4, GTM and pixel events they can trust before they increase spend.",
    problems: [
      "Platforms disagree about what a conversion is.",
      "Duplicate or missing events train the algorithm on noise.",
      "Reports cannot separate qualified, invalid and uncontacted leads.",
    ],
    process: ["Define the actions that matter.", "Implement events in GTM.", "Reconcile GA4, ads and CRM.", "Document the remaining gaps so decisions stay honest."],
    tools: ["GA4", "Google Tag Manager", "Meta Pixel", "UTM parameters", "Looker Studio"],
    deliverables: ["Event plan", "Container notes", "UTM conventions", "A reporting view the team will use"],
    related: ["hydrella-beauty-science", "kokanbag-mango-pulp", "real-estate-lead-generation"],
    faqs: [
      ["What analytics and tracking does Amol Kadam set up?", "GA4, Google Tag Manager, Meta Pixel, UTM parameters and reporting views that show whether a lead was useful."],
      ["Do you guarantee perfect attribution?", "No. The aim is a known, stable measurement system. Perfect match across platforms is rare; unexplained gaps are a reason not to scale."],
    ],
  },
  "web-development": {
    forWho: "Campaigns and local offers that need a fast page with one job: capture a qualified enquiry.",
    problems: [
      "Ads send people to a slow or generic homepage.",
      "The form or WhatsApp path is hard to find on mobile.",
      "The page cannot be connected to conversion events.",
    ],
    process: ["Define the one job of the page.", "Build structure, copy support and the capture path.", "Add tracking hooks.", "Check speed and mobile friction."],
    tools: ["WordPress", "Elementor", "React", "Next.js", "GA4", "GTM"],
    deliverables: ["Page structure", "Mobile form or WhatsApp path", "Speed basics", "Tracking hooks"],
    related: ["hydrella-beauty-science", "real-estate-lead-generation"],
    faqs: [
      ["Does Amol Kadam build landing pages?", "Yes. Conversion-conscious pages are built with WordPress, Elementor, React or Next.js, depending on the brief."],
      ["Is development the primary offer?", "No. Web work supports performance marketing: a page that matches the ad and can be measured."],
    ],
  },
};

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMeta({
    title: `${service.name} by Amol Kadam | Performance Marketing, Pune`,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const extra = extras[slug];
  if (!service || !extra) return notFound();

  const related = studies.filter((study) => extra.related.includes(study.slug));

  return (
    <>
      <PageHeader eyebrow="Service" title={service.name} description={service.description} />
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      />
      <section className="ed-wrap ed-detail">
        <article>
          <h2>What it is</h2>
          <p>{service.how}</p>
          <p>{service.included}</p>
        </article>
        <article>
          <h2>Who it is for</h2>
          <p>{extra.forWho}</p>
        </article>
        <article>
          <h2>Problems solved</h2>
          <ul>
            {extra.problems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Process</h2>
          <ol>
            {extra.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>
        <article>
          <h2>Tools</h2>
          <p>{extra.tools.join(", ")}</p>
        </article>
        <article>
          <h2>Deliverables</h2>
          <ul>
            {extra.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{service.improves}</p>
        </article>
      </section>
      <section className="compact-cases ed-wrap">
        <p className="ed-kicker">Relevant projects</p>
        {related.map((study) => (
          <Link href={`/work/${study.slug}`} key={study.slug}>
            <span>{study.type}</span>
            <b>{study.title}</b>
            <i>→</i>
          </Link>
        ))}
      </section>
      <FAQ
        items={extra.faqs}
        title={`Questions about ${service.name}.`}
        eyebrow={`${service.name} FAQs`}
        description={`How ${service.name} is scoped, delivered and measured.`}
      />
      <CTA title={`Discuss ${service.name}.`} copy="Share the offer, the market and how leads are followed up." />
    </>
  );
}
