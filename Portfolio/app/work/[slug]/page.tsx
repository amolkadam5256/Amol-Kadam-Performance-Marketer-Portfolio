import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTA } from "@/components/common/CTA";
import { PageHeader } from "@/components/common/PageHeader";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { KokanbagCaseStudy } from "@/components/case-studies/KokanbagCaseStudy";
import { JsonLd } from "@/components/seo/JsonLd";
import { studies } from "@/data/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return studies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = studies.find((item) => item.slug === slug);
  if (!study) return {};
  const title =
    slug === "kokanbag-mango-pulp"
      ? "KokanBag Mango Pulp — Meta Ads & Lead Generation Case Study"
      : `${study.title} | Amol Kadam Case Study`;
  return pageMeta({
    title,
    description: study.summary,
    path: `/work/${study.slug}`,
  });
}

export default async function Study({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studies.find((item) => item.slug === slug);
  if (!study) return notFound();

  const related = studies.filter((item) => item.slug !== study.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: study.title, path: `/work/${study.slug}` },
  ];

  if (study.custom || slug === "kokanbag-mango-pulp") {
    return (
      <>
        <JsonLd data={breadcrumbJsonLd(crumbs)} />
        <KokanbagCaseStudy />
        <RelatedWork current={study.slug} items={related} />
      </>
    );
  }

  return (
    <>
      <PageHeader eyebrow={`Case study · ${study.type}`} title={study.title} description={study.summary}>
        {study.liveUrl ? (
          <EditorialButton href={study.liveUrl} tone="cream" external>
            {study.liveLabel ?? "View live"} ↗
          </EditorialButton>
        ) : null}
      </PageHeader>
      <Breadcrumb items={[{ label: "Work", href: "/work" }, { label: study.title, href: `/work/${study.slug}` }]} />
      <section className="study-body ed-wrap">
        <aside>
          <a href="#overview">Overview</a>
          <a href="#problem">Problem</a>
          <a href="#strategy">Strategy</a>
          <a href="#results">Results</a>
          <a href="#learn">Learnings</a>
        </aside>
        <div>
          <section id="overview">
            <h2>Overview</h2>
            <p>{study.summary}</p>
            <p>
              <strong>Project:</strong> {study.title}
              <br />
              <strong>Type:</strong> {study.type}
            </p>
          </section>
          <section id="problem">
            <h2>Business problem</h2>
            <p>{study.challenge}</p>
          </section>
          <section id="strategy">
            <h2>Strategy and execution</h2>
            <ul>
              {study.strategy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section id="results">
            <h2>Results</h2>
            <p>{study.results}</p>
            <p>
              Published figures stay attached to complete datasets. Where a public scoreboard is not available, the outcome is described as the system that was built — not as an estimated lift.
            </p>
          </section>
          <section id="learn">
            <h2>Learnings</h2>
            <p>{study.learnings}</p>
          </section>
          <section id="limitations">
            <h2>Limitations</h2>
            <p>
              This write-up uses only information that can be verified from the engagement. It does not add estimated ROAS, rankings or conversion totals.
            </p>
          </section>
        </div>
      </section>
      <RelatedWork current={study.slug} items={related} />
      <CTA title="Talk through your next growth system." />
    </>
  );
}

function RelatedWork({
  current,
  items,
}: {
  current: string;
  items: typeof studies;
}) {
  return (
    <section className="compact-cases ed-wrap">
      <p className="ed-kicker">Related projects</p>
      {items
        .filter((item) => item.slug !== current)
        .map((item) => (
          <Link href={`/work/${item.slug}`} key={item.slug}>
            <span>{item.type}</span>
            <b>{item.title}</b>
            <i>→</i>
          </Link>
        ))}
    </section>
  );
}
