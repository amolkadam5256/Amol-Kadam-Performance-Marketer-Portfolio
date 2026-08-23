"use client";

import { motion } from "framer-motion";
import { CTA } from "@/components/common/CTA";
import { FAQ, metaAdsFaqs, googleAdsFaqs, seoFaqs, analyticsFaqs, webDevFaqs, defaultFaqs } from "@/components/common/FAQ";
import { studies } from "@/data/site";

export function SeoLanding({ service }: { service: string }) {
  const benefits = [
    { num: "01", title: "Focused strategy", copy: "Start with the audience, offer, conversion path and economics that matter to your business." },
    { num: "02", title: "Reliable setup", copy: "Bring campaigns, landing pages and GA4/GTM tracking into a single operating view." },
    { num: "03", title: "Useful learning", copy: "Use performance signals to improve the next creative, targeting, keyword or page decision." },
  ];

  const lower = service.toLowerCase();
  const pageFaqs = lower.includes("meta")
    ? metaAdsFaqs
    : lower.includes("google")
    ? googleAdsFaqs
    : lower.includes("seo")
    ? seoFaqs
    : lower.includes("analytics") || lower.includes("tracking")
    ? analyticsFaqs
    : lower.includes("web") || lower.includes("lead")
    ? webDevFaqs
    : defaultFaqs;

  return (
    <>
      <section className="page-header shell">
        <motion.p className="overline" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          PUNE PERFORMANCE MARKETING
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {service}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}>
          Practical strategy, hands-on execution and clear measurement for businesses that want marketing connected to commercial progress.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.24 }}>
          <a href="/contact" className="button button-red">
            Book consultation ↗
          </a>
        </motion.div>
      </section>

      <section className="seo-benefits shell">
        {benefits.map((b, idx) => (
          <motion.article
            key={b.num}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <span>{b.num}</span>
            <h2>{b.title}</h2>
            <p>{b.copy}</p>
          </motion.article>
        ))}
      </section>

      <section className="compact-cases shell">
        <p className="overline">RELEVANT WORK</p>
        {studies.slice(0, 3).map((x, idx) => (
          <motion.a
            href={`/case-studies/${x.slug}`}
            key={x.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <span>{x.type}</span>
            <b>{x.title}</b>
            <i>↗</i>
          </motion.a>
        ))}
      </section>

      <FAQ
        items={pageFaqs}
        title={`Questions businesses ask about ${service}.`}
        eyebrow={`${service.toUpperCase()} FAQS`}
        description={`Clear, detailed answers about ${service} strategy, technical setup, and performance measurement.`}
      />

      <CTA title={`Looking for a ${service}?`} />
    </>
  );
}
