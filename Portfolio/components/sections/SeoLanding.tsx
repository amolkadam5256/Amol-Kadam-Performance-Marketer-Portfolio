"use client";

import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTA } from "@/components/common/CTA";
import { FAQ, analyticsFaqs, defaultFaqs, googleAdsFaqs, metaAdsFaqs, seoFaqs, webDevFaqs } from "@/components/common/FAQ";
import { PageHeader } from "@/components/common/PageHeader";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { seoLandings, studies } from "@/data/site";

const faqPacks = {
  meta: metaAdsFaqs,
  google: googleAdsFaqs,
  seo: seoFaqs,
  local: seoFaqs,
  analytics: analyticsFaqs,
  web: webDevFaqs,
  default: defaultFaqs,
};

export function SeoLanding({ slug }: { slug: string }) {
  const page = seoLandings.find((item) => item.slug === slug);
  if (!page) return null;

  return (
    <>
      <PageHeader eyebrow="Pune performance marketing" title={page.service} description={page.description}>
        <EditorialButton href="/contact" tone="cream">
          Book a consultation
        </EditorialButton>
      </PageHeader>
      <Breadcrumb items={[{ label: page.service, href: `/${page.slug}` }]} />

      <section className="seo-benefits ed-wrap">
        {page.benefits.map((b, idx) => (
          <motion.article
            key={b.num}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <span>{b.num}</span>
            <div>
              <h2>{b.title}</h2>
              <p>{b.copy}</p>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="compact-cases ed-wrap">
        <p className="ed-kicker">Relevant work</p>
        {studies.map((x, idx) => (
          <motion.a
            href={`/work/${x.slug}`}
            key={x.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <span>{x.type}</span>
            <b>{x.title}</b>
            <i>→</i>
          </motion.a>
        ))}
      </section>

      <FAQ
        items={faqPacks[page.faq]}
        title={`Questions businesses ask about ${page.service}.`}
        eyebrow={`${page.service} FAQs`}
        description={`Clear answers about ${page.service} strategy, setup and measurement.`}
      />

      <CTA title={`Looking for a ${page.service}?`} />
    </>
  );
}
