import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTA } from "@/components/common/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { articles } from "@/data/site";
import { articleJsonLd, authorBio, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return pageMeta({
    title: `${article.title} | Amol Kadam Insights`,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== article.slug);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.excerpt,
          path: `/blog/${article.slug}`,
        })}
      />
      <Breadcrumb
        items={[
          { label: "Insights", href: "/blog" },
          { label: article.title, href: `/blog/${article.slug}` },
        ]}
      />
      <article className="article-page ed-wrap">
        <p className="ed-kicker">
          {article.category} · {article.minutes} min read
        </p>
        <h1>{article.title}</h1>
        <p className="article-lede">{article.excerpt}</p>
        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <aside className="author-bio">
          <p>
            <Link href="/about">Amol Kadam</Link> — {authorBio}
          </p>
        </aside>
        <Link className="text-link" href="/blog">
          All insights
        </Link>
        {related.length ? (
          <section style={{ marginTop: 48 }}>
            <p className="ed-kicker">Related articles</p>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
      <CTA title="Want this applied to your account?" />
    </>
  );
}
