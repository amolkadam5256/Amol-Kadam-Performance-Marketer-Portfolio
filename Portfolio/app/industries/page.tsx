import Link from "next/link";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHeader } from "@/components/common/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Industries | Amol Kadam Performance Marketing",
  description: "Performance marketing approaches for healthcare, real estate, ecommerce and local businesses.",
  path: "/industries",
});

export default function Industries() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Growth systems adapted to the market."
        description="The channel may be familiar. The buyer, sales process, trust signals and conversion path are always specific."
      />
      <Breadcrumb items={[{ label: "Industries", href: "/industries" }]} />
      <section className="ed-section">
        <div className="ed-wrap ed-work-grid">
          {industries.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.05}>
              <Link href={`/industries/${item.slug}`} className="ed-project">
                <div className="ed-project-visual" aria-hidden="true">
                  <b>{item.name.slice(0, 2).toUpperCase()}</b>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="ed-kicker">Industry</p>
                <h3>{item.name}</h3>
                <p>{item.blurb}</p>
                <em>Explore</em>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
