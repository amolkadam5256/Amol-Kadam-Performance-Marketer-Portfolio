import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA } from "@/components/common/CTA";
import { FAQ, analyticsFaqs, googleAdsFaqs, metaAdsFaqs, seoFaqs, webDevFaqs } from "@/components/common/FAQ";
import { PageHeader } from "@/components/common/PageHeader";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { services } from "@/data/site";

const faqBySlug: Record<string, [string, string][]> = {
  "meta-ads": metaAdsFaqs,
  "google-ads": googleAdsFaqs,
  seo: seoFaqs,
  "local-seo": seoFaqs,
  analytics: analyticsFaqs,
  "web-development": webDevFaqs,
};

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const entry = services.find((item) => item.slug === service);
  if (!entry) return {};
  return {
    title: entry.name,
    description: entry.description,
    alternates: { canonical: entry.href },
  };
}

export default async function Service({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const entry = services.find((item) => item.slug === service);
  if (!entry) notFound();

  return (
    <>
      <PageHeader eyebrow="Service" title={entry.name} description={entry.description}>
        <EditorialButton href="/contact" tone="cream">
          Book a consultation
        </EditorialButton>
      </PageHeader>
      <section className="ed-wrap ed-detail">
        <article>
          <h2>What&apos;s included</h2>
          <p>{entry.included}</p>
        </article>
        <article>
          <h2>How it works</h2>
          <p>{entry.how}</p>
        </article>
        <article>
          <h2>What improves</h2>
          <p>{entry.improves}</p>
        </article>
      </section>
      <FAQ items={faqBySlug[entry.slug]} title={`Questions about ${entry.name}.`} eyebrow={`${entry.name} FAQs`} />
      <CTA title={`Discuss ${entry.name} support.`} />
    </>
  );
}
