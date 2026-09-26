import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA } from "@/components/common/CTA";
import { FAQ } from "@/components/common/FAQ";
import { PageHeader } from "@/components/common/PageHeader";
import { industries } from "@/data/site";

export function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params;
  const entry = industries.find((item) => item.slug === industry);
  if (!entry) return {};
  return {
    title: `${entry.name} marketing`,
    description: entry.blurb,
    alternates: { canonical: `/industries/${entry.slug}` },
  };
}

export default async function Industry({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const entry = industries.find((item) => item.slug === industry);
  if (!entry) notFound();

  return (
    <>
      <PageHeader eyebrow="Industry focus" title={entry.name} description={entry.blurb} />
      <section className="ed-wrap ed-detail">
        <article>
          <h2>Common challenge</h2>
          <p>{entry.challenge}</p>
        </article>
        <article>
          <h2>Useful approach</h2>
          <p>{entry.approach}</p>
        </article>
        <article>
          <h2>What to measure</h2>
          <p>{entry.measure}</p>
        </article>
      </section>
      <FAQ title={`Questions about ${entry.name.toLowerCase()} growth.`} />
      <CTA title={`Discuss ${entry.name.toLowerCase()} acquisition.`} />
    </>
  );
}
