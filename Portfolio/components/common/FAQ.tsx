"use client";

import { motion } from "framer-motion";

export const defaultFaqs: [string, string][] = [
  [
    "Who is Amol Kadam?",
    "Amol Kadam is a Pune-based digital marketer and performance marketer specializing in paid advertising, SEO, analytics and conversion tracking.",
  ],
  [
    "What does Amol Kadam do?",
    "Amol Kadam works on Meta Ads, Google Ads, SEO, analytics, tracking, lead generation and conversion-focused marketing.",
  ],
  [
    "Where is Amol Kadam based?",
    "Amol Kadam is based in Pune, Maharashtra, India.",
  ],
  [
    "Does Amol Kadam work as a freelancer?",
    "Yes. Amol Kadam works on freelance and consulting projects alongside professional marketing work.",
  ],
  [
    "What tools does Amol Kadam use?",
    "His marketing toolkit includes Meta Ads Manager, Google Ads, GA4, GTM, Looker Studio, SEO tools, WordPress, Elementor and web technologies such as React and Next.js.",
  ],
  [
    "What is Amol Kadam’s professional experience?",
    "He has worked as a Digital Marketing Executive (Media Buyer) at Sateri Digital, as a Digital Marketing & Web Executive at Majestic Realties, and part-time as a Web Developer & SEO Specialist at Shabdbramhand Co.",
  ],
  [
    "How can someone contact Amol Kadam?",
    "Use the contact form, email amolkadam1274@gmail.com, call or WhatsApp +91 7709266280. Pune, Maharashtra, India.",
  ],
];

export const metaAdsFaqs: [string, string][] = [
  [
    "How does Amol Kadam run Meta Ads?",
    "Campaigns are built around the offer, the audience and a capture path — WhatsApp, a form or a landing page — then judged by lead quality, not clicks alone.",
  ],
  [
    "Do you set up Meta Pixel tracking?",
    "Yes. Pixel and event review sits with campaign work so Meta is not trained on empty clicks.",
  ],
  [
    "When is WhatsApp used instead of a lead form?",
    "When the buyer prefers a conversation — as on the published KokanBag mango pulp campaign — Message ads can reduce form drop-off. The choice follows the offer, not a template.",
  ],
];

export const googleAdsFaqs: [string, string][] = [
  [
    "How does Amol Kadam manage Google Ads?",
    "Search campaigns focus on commercial queries, page alignment, negatives and conversion tracking before spend is increased.",
  ],
  [
    "Do you work on conversion tracking for Google Ads?",
    "Yes. GA4 and Google Tag Manager events are checked so bidding is not optimising for the wrong action.",
  ],
  [
    "Is Performance Max always included?",
    "Only when conversion events and assets are clear. It is not used to hide a weak offer or broken measurement.",
  ],
];

export const seoFaqs: [string, string][] = [
  [
    "What SEO work does Amol Kadam do?",
    "Technical SEO, on-page optimisation, keyword research, internal linking and content planning tied to pages that can convert.",
  ],
  [
    "Do you work on local SEO in Pune?",
    "Yes. Local SEO covers Google Business Profile, local pages and consistent business information for nearby discovery.",
  ],
  [
    "How long does SEO take?",
    "Timelines depend on the site, competition and current technical state. No page-one ranking is promised on a fixed calendar.",
  ],
];

export const analyticsFaqs: [string, string][] = [
  [
    "What analytics setup does Amol Kadam provide?",
    "GA4, Google Tag Manager, Meta Pixel, UTM conventions and reporting that can separate qualified, invalid and uncontacted leads where the CRM allows it.",
  ],
  [
    "Why fix tracking before scaling ads?",
    "If the conversion event is wrong, more budget teaches the algorithm faster mistakes.",
  ],
];

export const webDevFaqs: [string, string][] = [
  [
    "Does Amol Kadam build landing pages?",
    "Yes. Pages are built with WordPress, Elementor, React or Next.js so the ad, the offer and the next step match.",
  ],
  [
    "Is web development the main service?",
    "No. Development supports performance marketing: a conversion path that can be measured.",
  ],
];

export const resultsFaqs: [string, string][] = [
  [
    "Which results are published?",
    "The public scoreboard is the KokanBag WhatsApp campaign: 1,714 conversations from ₹22,338 Meta spend, June to 20 August 2026. Other studies stay qualitative unless a complete dataset is available.",
  ],
  [
    "What does “lead” mean on this site?",
    "For KokanBag, a lead is an inbound WhatsApp conversation counted in the campaign period. Qualified, uncontacted and not-qualified statuses are reported separately.",
  ],
  [
    "Where do the KokanBag numbers come from?",
    "They come from the campaign reporting period and CRM tagging described in the case study — not from estimates.",
  ],
];

interface FAQProps {
  items?: [string, string][];
  title?: string;
  eyebrow?: string;
  description?: string;
}

export function FAQ({
  items = defaultFaqs,
  title = "Questions people ask about Amol Kadam.",
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
  description = "Direct answers about who Amol Kadam is, what he works on, and how to get in touch.",
}: FAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: {
        "@type": "Answer",
        text,
      },
    })),
  };

  return (
    <>
      <section className="faq ed-wrap" aria-labelledby="section-faq-title">
        <motion.p
          className="ed-kicker"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          id="section-faq-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="faq-intro"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
        >
          {description}
        </motion.p>

        <div>
          {items.map(([q, a], idx) => (
            <motion.details
              key={q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <summary>
                <span>{q}</span>
                <span aria-hidden="true">+</span>
              </summary>
              <p>{a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
