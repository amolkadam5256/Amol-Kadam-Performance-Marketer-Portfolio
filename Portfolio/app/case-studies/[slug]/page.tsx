import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA } from "@/components/common/CTA";
import { PageHeader } from "@/components/common/PageHeader";
import { studies } from "@/data/site";
import { KokanbagCaseStudy } from "@/components/case-studies/KokanbagCaseStudy";

export function generateStaticParams() {
  return studies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = studies.find((item) => item.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default async function Study({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studies.find((item) => item.slug === slug);
  if (!study) return notFound();

  if (study.custom || slug === "kokanbag-mango-pulp") {
    return <KokanbagCaseStudy />;
  }

  return (
    <>
      <PageHeader eyebrow={`Case study · ${study.type}`} title={study.title} description={study.summary} />
      <section className="study-body ed-wrap">
        <aside>
          <a href="#challenge">Challenge</a>
          <a href="#strategy">Strategy</a>
          <a href="#results">Results</a>
          <a href="#learn">Learnings</a>
        </aside>
        <div>
          <section id="challenge">
            <h2>Challenge & goal</h2>
            <p>{study.challenge}</p>
          </section>
          <section id="strategy">
            <h2>Strategy & execution</h2>
            <ul>
              {study.strategy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section id="results">
            <h2>What this engagement produced</h2>
            <p>{study.results}</p>
          </section>
          <section id="learn">
            <h2>Key learning</h2>
            <p>{study.learnings}</p>
          </section>
        </div>
      </section>
      <CTA title="Talk through your next growth system." />
    </>
  );
}
