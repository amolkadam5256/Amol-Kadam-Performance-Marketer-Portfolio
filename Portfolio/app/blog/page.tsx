import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";
import { CTA } from "@/components/common/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { articles } from "@/data/site";

export const metadata: Metadata = {
  title: "Insights & Blog",
  description: "Notes on paid media, search, measurement and the systems behind sustainable growth.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes from the growth desk."
        description="Practical thinking on paid media, search, measurement, experimentation and the systems behind sustainable growth."
      />
      <section className="ed-section">
        <div className="ed-wrap ed-insights">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.05}>
              <Link href={`/blog/${article.slug}`} className="ed-insight">
                <span>
                  {article.category} · {article.minutes} min
                </span>
                <strong>{article.title}</strong>
                <p className="ed-copy">{article.excerpt}</p>
                <em>Read article</em>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA title="Want to make the thinking useful?" />
    </>
  );
}
