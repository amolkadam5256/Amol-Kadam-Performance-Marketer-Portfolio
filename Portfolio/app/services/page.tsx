import Link from "next/link";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTA } from "@/components/common/CTA";
import { FAQ } from "@/components/common/FAQ";
import { PageHeader } from "@/components/common/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceRow } from "@/components/ui/ServiceRow";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/site";
import { pageMeta, professionalServiceJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Digital Marketing Services by Amol Kadam | SEO, Meta Ads & Google Ads",
  description:
    "Digital marketing services by Amol Kadam in Pune: Meta Ads, Google Ads, SEO, local SEO, analytics, tracking and conversion-focused landing pages.",
  path: "/services",
});

const serviceFaqs: [string, string][] = [
  [
    "What services does Amol Kadam provide?",
    "Amol Kadam works on Meta Ads, Google Ads, SEO, local SEO, analytics, tracking, landing pages, lead generation and conversion-focused marketing.",
  ],
  [
    "Who are these services for?",
    "They are for businesses that need an operator for paid media, search and measurement — including freelance and consulting briefs in Pune and remote work.",
  ],
  [
    "How do I start a project?",
    "Share the offer, the market and the follow-up path through the contact form, email or WhatsApp. The next step is a scoped conversation, not a packaged guarantee.",
  ],
];

export default function Services() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd()} />
      <PageHeader
        eyebrow="Services"
        title="Digital Marketing Services by Amol Kadam"
        description="Paid media, SEO, analytics and conversion systems — scoped around the offer, the buyer and a follow-up path the team can actually run."
      />
      <Breadcrumb items={[{ label: "Services", href: "/services" }]} />
      <section className="ed-section">
        <div className="ed-wrap">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.04}>
              <ServiceRow index={index + 1} name={service.name} blurb={service.blurb} href={`/services/${service.slug}`} />
            </Reveal>
          ))}
          <p className="ed-copy" style={{ marginTop: 32 }}>
            Looking for freelance delivery rather than a capability overview? Read{" "}
            <Link className="text-link" href="/freelance">
              freelance digital marketing
            </Link>{" "}
            or{" "}
            <Link className="text-link" href="/contact">
              start a project
            </Link>
            .
          </p>
        </div>
      </section>
      <FAQ
        items={serviceFaqs}
        title="Questions about working together."
        eyebrow="Services FAQs"
        description="What Amol Kadam offers, who it is for, and how a project starts."
      />
      <CTA title="Start a project." copy="Bring the brief. I will bring a system that can be judged." />
    </>
  );
}
