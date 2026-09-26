"use client";

import { motion } from "framer-motion";

export const defaultFaqs: [string, string][] = [
  [
    "Who is Amol Kadam?",
    "Amol Kadam is an independent performance marketing partner and growth specialist based in Pune, India. He helps ambitious businesses scale through Meta Ads, Google Ads, SEO, Local SEO, custom conversion tracking (GA4/GTM), landing page optimization, and end-to-end growth consulting."
  ],
  [
    "What digital marketing and growth services does Amol Kadam provide in Pune?",
    "Services include full-funnel Meta Ads (Facebook & Instagram), high-intent Google Search & Shopping Ads, technical and content SEO, Local SEO for Pune businesses, Server-side & CAPI tracking (GA4, GTM, Meta Pixel), custom landing page development (Next.js, React, WordPress), and growth auditing."
  ],
  [
    "Is Amol Kadam available as a Meta Ads freelancer and consultant in Pune?",
    "Yes. Amol works with growth-focused businesses in Pune and globally to build Meta Ads campaigns targeting qualified leads and direct sales. Work covers creative direction, audience architecture, lead forms, custom conversion pixel setup, and ongoing campaign optimization."
  ],
  [
    "How does Amol manage high-converting Google Ads campaigns?",
    "Google Ads management focuses on capturing high-intent commercial demand. This includes keyword selection, negative keyword curation, ad copy testing, smart bidding strategies, landing page alignment, conversion tracking, and continuous cost-per-lead (CPL) reduction."
  ],
  [
    "Can Amol help with SEO, Local SEO, and Google Business Profile optimization in Pune?",
    "Yes. Local and organic SEO strategies focus on ranking Pune-based businesses for high-intent local search queries. This involves Google Business Profile optimization, technical SEO audits, site speed tuning, on-page keyword targeting, and local citation building."
  ],
  [
    "What industries does Amol Kadam specialize in?",
    "Amol has driven growth across real estate, e-commerce, B2B SaaS, healthcare & skincare, local services, education, FMCG, and digital agencies across India and international markets."
  ],
  [
    "Does Amol handle technical analytics setup including GA4, GTM, and Meta Pixel?",
    "Yes. Reliable data is the backbone of scaling. Amol configures Google Analytics 4 (GA4), Google Tag Manager (GTM), Meta Conversions API (CAPI), custom conversion events, UTM parameters, and looker studio dashboards to provide accurate attribution."
  ],
  [
    "Can Amol design and build high-converting landing pages using Next.js, React, or WordPress?",
    "Yes. High ad spend fails without effective landing pages. Amol designs and builds lightning-fast, mobile-optimized landing pages with compelling copy, social proof, and seamless form integrations built on Next.js, React, or WordPress."
  ],
  [
    "How does performance marketing consulting differ from hiring a traditional agency?",
    "Unlike traditional agencies that delegate work to junior account managers, working directly with Amol gives you founder-level attention, faster iteration cycles, direct access to campaign data, and customized strategies tailored to your unit economics."
  ],
  [
    "Does Amol work with businesses outside Pune or internationally?",
    "Yes. While physically based in Pune, Maharashtra, Amol works remotely with companies across India, UAE, US, UK, and APAC regions using async updates, video consultations, and transparent live dashboards."
  ],
  [
    "How do you measure ROAS, Customer Acquisition Cost (CAC), and lead quality?",
    "Campaign performance is evaluated beyond vanity impressions. Amol measures true return on ad spend (ROAS), verified qualified leads, cost per acquisition (CPA), and pipeline conversion rate by connecting ad platforms to CRM lead outcome data."
  ],
  [
    "What preparation or details are needed before booking a growth consultation?",
    "Sharing your business model, current monthly marketing spend, target customer profile, existing website/landing page links, and primary revenue goals helps ensure the initial 30-minute discovery call provides immediate actionable insights."
  ],
  [
    "What pricing structures, monthly retainers, or project models are available?",
    "Engagements are structured flexibly based on project requirements—ranging from fixed-scope technical audits and landing page builds to monthly performance retainers and revenue-growth consulting."
  ],
  [
    "How can I contact Amol Kadam to start a campaign or request an audit?",
    "You can reach Amol directly via email at amolkadam1274@gmail.com, call/WhatsApp at +91 7709266280, or book a consultation via the contact form on this website. Responses are typically provided within 24 hours."
  ]
];

export const metaAdsFaqs: [string, string][] = [
  [
    "How do Meta Ads (Facebook & Instagram) drive qualified leads for Pune businesses?",
    "Meta Ads use granular demographical, interest-based, and behavioral targeting combined with high-converting creative formats (video ads, carousels, instant lead forms). Amol builds full-funnel architectures that filter for purchase intent rather than empty clicks."
  ],
  [
    "What is your technical process for Meta Conversions API (CAPI) and Pixel setup?",
    "Server-side Meta Conversions API (CAPI) is integrated alongside Google Tag Manager (GTM) to bypass iOS 14.5+ ad blockers and browser privacy restrictions. This restores lost conversion attribution and trains Meta's algorithm on verified purchase data."
  ],
  [
    "How do you test and scale Meta ad creatives without ad fatigue or rising CPL?",
    "Creative testing relies on modular frameworks—testing hooks, offer angles, visual assets, and primary text variations systematically. High-performing winning ad combinations are scaled horizontally into lookalike audiences and dynamic creative budgets."
  ],
  [
    "What is the difference between Meta Native Lead Forms vs Landing Page Conversions?",
    "Native Instant Forms deliver higher volume at lower CPL for real estate and local services, while custom landing pages qualify high-ticket B2B/SaaS leads with detailed questionnaires. Amol tests both formats to find your ideal balance of volume and lead score."
  ],
  [
    "How do custom remarketing and lookalike audiences boost Meta Ads ROAS?",
    "By segmenting website visitors, video viewers, and past lead contacts, tailored retargeting ads address specific customer objections. Lookalike audiences generated from high-value customer CRMs enable Meta's algorithm to acquire similar high-intent buyers."
  ],
  [
    "What monthly ad spend is recommended for Meta Ads campaigns in Pune and India?",
    "For local lead generation in Pune, testing starts effectively around ₹20,000–₹50,000/month. For pan-India scaling or e-commerce ROAS campaigns, budgets scale dynamically once profitable cost-per-acquisition (CPA) benchmarks are validated."
  ]
];

export const googleAdsFaqs: [string, string][] = [
  [
    "Why hire a specialized Google Ads freelancer in Pune instead of a digital marketing agency?",
    "Working directly with Amol guarantees senior-level campaign strategy, direct search query optimization, faster iteration cycles, and full account ownership without bloated agency overheads or junior account manager delegation."
  ],
  [
    "How do you optimize Google Search Intent keywords to eliminate wasted ad spend?",
    "Campaigns focus exclusively on high-intent commercial keywords (e.g., 'buy', 'services near me', 'best provider in Pune'). Broad match trap keywords are strictly audited, and extensive negative keyword lists prevent irrelevantly spent budget."
  ],
  [
    "What is your strategy for negative keywords and Google Quality Score optimization?",
    "Quality Scores directly dictate ad cost per click (CPC). By aligning ad copy, tightly themed keyword ad groups (SKAGs/STAGs), and lightning-fast landing page relevance, Quality Scores increase to 8–10/10, significantly reducing click costs."
  ],
  [
    "Do you manage Google Shopping, Performance Max (PMax), and Remarketing campaigns?",
    "Yes. E-commerce and retail brands utilize Google Shopping and Performance Max campaigns powered by custom asset groups, negative audience exclusions, and feed optimization to capture buyers across Search, YouTube, Gmail, and Display."
  ],
  [
    "How do you track offline conversions and CRM lead outcomes from Google Ads?",
    "Google Ads conversion tracking is linked directly with Google Tag Manager, GA4, and CRM systems (Privyr, Salesforce, HubSpot). This allows bid strategies (tCPA, tROAS) to optimize for closed revenue rather than unverified form submits."
  ],
  [
    "What timeframe is required to see profitable ROAS from Google Ads campaigns?",
    "Initial keyword discovery and Quality Score calibration take 2–3 weeks. Once negative keywords are filtered and high-converting search terms are isolated, campaigns typically achieve target CPL and ROAS within 30 to 60 days."
  ]
];

export const seoFaqs: [string, string][] = [
  [
    "How does Local SEO help Pune businesses dominate Google Map Pack and local search?",
    "Local SEO optimizes your Google Business Profile (GBP), builds location-relevant citations, targets geo-targeted keywords (e.g., 'SEO consultant in Pune'), and collects verified customer reviews, securing top 3 positions in local Map Packs."
  ],
  [
    "What technical SEO audits are conducted for site speed, crawling, and Core Web Vitals?",
    "Technical SEO audits inspect crawl errors, XML sitemaps, robots.txt, canonical tags, structured schema markup, mobile responsiveness, and Core Web Vitals (LCP, INP, CLS) to maximize Google indexing efficiency."
  ],
  [
    "How do you conduct commercial keyword research for organic traffic growth?",
    "Keyword research targets high-intent search terms with commercial intent rather than vanity search volume. Competitor content gaps and searcher intent categories (Informational, Commercial, Transactional) guide the content strategy."
  ],
  [
    "How long does it take for an SEO campaign to achieve Page 1 Google rankings in Pune?",
    "Local SEO and low-competition keywords often reach Google Page 1 within 60 to 90 days. High-competition organic industry keywords typically require 4 to 6 months of continuous technical optimization and authoritative content authority."
  ],
  [
    "How do on-page content strategy and internal linking drive organic conversions?",
    "Content is structured with clear H1-H3 hierarchy, semantic entities, schema markup, and clear calls-to-action (CTAs). Internal linking routes link equity directly to revenue-generating service pages and contact forms."
  ]
];

export const analyticsFaqs: [string, string][] = [
  [
    "Why is custom GA4 and Google Tag Manager (GTM) tracking required before scaling ad spend?",
    "Scaling ad spend without precise analytics is like driving blind. GTM and GA4 configuration establishes single-source-of-truth attribution, identifying exactly which ad creative, keyword, or campaign generates profitable customer revenue."
  ],
  [
    "What server-side tracking and Meta Conversions API (CAPI) setups do you implement?",
    "Server-side tagging routes user events directly through a secure cloud server to Meta CAPI, Google Ads, and GA4. This restores 20–30% of lost browser conversion data caused by ad blockers, Safari ITP, and iOS privacy features."
  ],
  [
    "How do custom UTM parameters and Looker Studio dashboards improve campaign visibility?",
    "Standardized UTM naming conventions track campaign, source, medium, ad set, and creative ID. Custom Looker Studio dashboards synthesize ad spend, leads, ROAS, and cost-per-lead into an interactive single-page view."
  ],
  [
    "Can you fix broken tracking pixels, iOS 14.5 attribution gaps, and duplicate event counts?",
    "Yes. Amol audits existing tracking code to remove duplicate triggers, fix unverified domain settings, repair broken event parameters, and re-establish accurate conversion value reporting."
  ]
];

export const webDevFaqs: [string, string][] = [
  [
    "Why do custom Next.js and React landing pages convert better than standard WordPress themes?",
    "Next.js and React produce server-side rendered (SSR) or statically generated (SSG) pages that load in under 1 second. Zero layout shift, instant page responses, and custom interactive UI components increase conversion rates significantly."
  ],
  [
    "What Conversion Rate Optimization (CRO) principles are engineered into landing pages?",
    "Landing pages utilize high-contrast CTA placement, directional visual cues, trust badges, sticky contact buttons, mobile-optimized form layouts, social proof carousels, and minimal cognitive load messaging."
  ],
  [
    "Are your custom landing pages pre-configured with GA4, GTM, and Meta Pixel tracking?",
    "Yes. Every landing page build includes pre-tested Google Tag Manager containers, Meta Pixel event triggers, lead form submission events, click-to-call tracking, and WhatsApp button analytics out of the box."
  ]
];

export const resultsFaqs: [string, string][] = [
  [
    "How transparent is your performance reporting and analytics dashboard?",
    "Clients receive 24/7 access to live Looker Studio dashboards and structured weekly status reports detailing ad spend, impressions, clicks, leads, verified lead quality, CPL, and ROAS metrics."
  ],
  [
    "What key performance indicators (KPIs) do you prioritize during a growth campaign?",
    "While agencies focus on vanity reach or impressions, Amol prioritizes bottom-line commercial metrics: Cost Per Qualified Lead (CPL), Customer Acquisition Cost (CAC), Conversion Rate %, and Return on Ad Spend (ROAS)."
  ],
  [
    "How is blended ROAS calculated across Meta Ads, Google Ads, and organic search?",
    "Blended ROAS divides total marketing-generated revenue by total combined ad spend across all paid channels, providing a holistic view of overall marketing profitability."
  ]
];

interface FAQProps {
  items?: [string, string][];
  title?: string;
  eyebrow?: string;
  description?: string;
}

export function FAQ({
  items = defaultFaqs,
  title = "Questions businesses ask before they scale.",
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
  description = "Clear, honest answers about performance marketing, Meta Ads, Google Ads, SEO, conversion tracking, and growth consulting.",
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
