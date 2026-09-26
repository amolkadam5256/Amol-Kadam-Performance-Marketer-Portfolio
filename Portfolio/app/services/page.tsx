import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { CTA } from "@/components/common/CTA";
import { FAQ } from "@/components/common/FAQ";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceRow } from "@/components/ui/ServiceRow";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Performance Marketing Services",
  description: "Meta Ads, Google Ads, SEO, local SEO, analytics and landing pages — connected as one growth system.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Connected growth systems, not isolated tactics."
        description="Specialist performance marketing support from first campaign structure to clearer reporting and conversion."
      />
      <section className="ed-section">
        <div className="ed-wrap">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.04}>
              <ServiceRow index={i + 1} name={service.name} blurb={service.blurb} href={service.href} />
            </Reveal>
          ))}
        </div>
      </section>
      <FAQ />
      <CTA title="Make your marketing more accountable." />
    </>
  );
}
