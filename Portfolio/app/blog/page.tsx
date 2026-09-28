import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTA } from "@/components/common/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { articles } from "@/data/site";
import { authorBio, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Amol Kadam Insights | SEO, Ads, Analytics & Growth",
  description:
    "Notes from Amol Kadam on paid media, SEO, analytics and conversion-focused marketing — written from live campaign and measurement work.",
  path: "/blog",
});

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes from the growth desk."
        description="Practical thinking on paid media, search, measurement, experimentation and the systems behind sustainable growth."
      />
      <Breadcrumb items={[{ label: "Insights", href: "/blog" }]} />
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
          <p className="ed-copy" style={{ marginTop: 28 }}>
            {authorBio}{" "}
            <Link className="text-link" href="/about">
              About Amol
            </Link>
          </p>
        </div>
      </section>
      <CTA title="Want to make the thinking useful?" />
    </>
  );
}
