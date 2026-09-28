export const site = {
  name: "Amol Kadam",
  url: "https://amolkadam.com",
  email: "amolkadam1274@gmail.com",
  phone: "+91 7709266280",
  phoneHref: "tel:+917709266280",
  whatsapp: "917709266280",
  city: "Pune, Maharashtra, India",
  locality: "Pune",
  region: "Maharashtra",
  country: "India",
  location: "Pune, Maharashtra, India",
  postalCode: "412207",
  linkedin: "https://www.linkedin.com/in/amolkadam77/",
  github: "https://github.com/amolkadam5256",
  instagram: "https://www.instagram.com/_amol5256/",
  facebook: "https://www.facebook.com/profile.php?id=100084178372823",
  facebookPage: "https://www.facebook.com/p/Amol-Tukaram-Kadam-100055943003261/",
  x: "https://x.com/amolkadam1274",
  title: "Amol Kadam | Performance Marketer, SEO & Digital Marketing Specialist",
  description: "Amol Kadam is a Pune-based performance marketer specializing in Meta Ads, Google Ads, SEO, analytics, tracking and conversion-focused digital marketing.",
  languages: ["English", "Hindi", "Marathi"],
  interests: ["Swimming", "Watching documentaries", "Travelling"],
} as const;

export const socialProfiles = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "Instagram", href: site.instagram },
  { label: "Facebook", href: site.facebook },
  { label: "Facebook Page", href: site.facebookPage },
  { label: "X", href: site.x },
  { label: "GitHub", href: site.github },
] as const;

export const whatsappHref = (message?: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    message ?? "Hi Amol, I visited your website and would like to discuss a performance marketing project."
  )}`;

export const mailtoHref = (subject?: string, body?: string) => {
  const parts: string[] = [];
  if (subject) parts.push(`subject=${encodeURIComponent(subject)}`);
  if (body) parts.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${site.email}${parts.length ? `?${parts.join("&")}` : ""}`;
};

export type Service = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  included: string;
  how: string;
  improves: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: "meta-ads",
    name: "Meta Ads",
    blurb: "Lead generation, retargeting and conversion campaigns built around meaningful customer action.",
    description: "Campaign structure, creative testing, audience design and conversion tracking for lead generation and remarketing on Facebook and Instagram.",
    included: "Account structure, offer and creative testing, audience design, WhatsApp or form capture, and Meta Pixel / CAPI event review.",
    how: "Start with the buyer, the offer and the follow-up path. Then build campaigns that can be judged by lead quality, not only click volume.",
    improves: "Clearer cost per lead, faster qualification on WhatsApp or forms, and a remarketing system that stays useful after the first click.",
    href: "/services/meta-ads",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    blurb: "Search and demand-capture programmes that connect high-intent queries to qualified pipeline.",
    description: "Search-led demand capture, keyword strategy and conversion measurement for high-intent customer acquisition.",
    included: "Keyword and negative-keyword architecture, ad copy, landing-page alignment, bidding review and conversion tracking.",
    how: "Map commercial queries to a specific offer and page, then tighten waste before scaling spend.",
    improves: "Better query quality, lower wasted clicks, and reporting that shows which terms create useful enquiries.",
    href: "/services/google-ads",
  },
  {
    slug: "seo",
    name: "SEO",
    blurb: "Technical, on-page and content foundations for durable organic discovery.",
    description: "Technical, on-page and content optimisation to improve commercial search visibility.",
    included: "Technical audit, keyword map, on-page work, internal linking and a content plan tied to commercial pages.",
    how: "Fix crawl and page-quality issues first, then build pages that match search intent and convert the visit.",
    improves: "Stronger visibility on terms that matter, clearer page purpose, and organic traffic that can be measured against enquiries.",
    href: "/services/seo",
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    blurb: "Local discovery systems for businesses that need to show up when nearby customers are ready to act.",
    description: "Google Business Profile, local pages and citation work for Pune and nearby-market discovery.",
    included: "GBP setup and optimisation, local landing pages, review and NAP consistency, and Map Pack tracking.",
    how: "Treat local search as a conversion system: profile, page, call/WhatsApp path and review loop.",
    improves: "More useful local visibility, better call and direction requests, and a profile that matches the real offer.",
    href: "/services/local-seo",
  },
  {
    slug: "analytics",
    name: "Analytics & Tracking",
    blurb: "GA4, GTM, Meta Pixel and reporting systems that make decisions easier to trust.",
    description: "GA4, GTM, Meta Pixel and event tracking designed to make campaign decisions clearer.",
    included: "Event plan, GTM container, GA4 and pixel/CAPI checks, UTMs and a reporting view the team will actually use.",
    how: "Define the actions that matter, implement them once, then reconcile platform numbers before spend increases.",
    improves: "Fewer duplicate or missing events, clearer attribution, and a shared view of lead quality after the click.",
    href: "/services/analytics",
  },
  {
    slug: "web-development",
    name: "Web & Landing Pages",
    blurb: "Fast conversion experiences built with WordPress, Elementor, React and Next.js.",
    description: "Fast, conversion-conscious websites and landing pages built with WordPress, React and Next.js.",
    included: "Page structure, offer copy support, mobile form/WhatsApp paths, speed basics and tracking hooks.",
    how: "Build the page around one job: capture a qualified enquiry without extra friction.",
    improves: "Faster load, clearer next step, and a landing experience that matches the ad that brought the visitor.",
    href: "/services/web-development",
  },
];

export type Study = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  challenge: string;
  strategy: string[];
  results: string;
  learnings: string;
  custom?: boolean;
  liveUrl?: string;
  liveLabel?: string;
};

export const studies: Study[] = [
  {
    slug: "hydrella-beauty-science",
    title: "Hydrella Beauty Science",
    type: "Freelance · Google Ads + SEO",
    summary: "SEO audit, keyword research, on-page work and Google Ads with GA4/GTM conversion tracking for a beauty science brand.",
    challenge: "The brand needed commercial search visibility and a measurement setup that could show whether Google Ads and organic pages were creating useful enquiries, not just traffic.",
    strategy: [
      "SEO audit, keyword research, on-page SEO and content optimisation to improve organic visibility",
      "Google Ads setup aligned to product and search intent",
      "GA4 and GTM conversion tracking so campaign performance could be monitored in one view",
    ],
    results: "The engagement produced a search and measurement system the team could iterate on. Headline lift figures are not published here because they were not independently packaged as a public case.",
    learnings: "Beauty search only becomes useful when the query, the page and the conversion event describe the same offer. Tracking has to be in place before creative or keyword scale.",
    liveUrl: "https://www.instagram.com/hydrellabeautyscience/",
    liveLabel: "Instagram",
  },
  {
    slug: "real-estate-lead-generation",
    title: "Real Estate Lead Generation",
    type: "Job · Meta Ads",
    summary: "Meta Ads for lead generation with audience targeting, landing-page optimisation, Meta Pixel, GA4 and GTM.",
    challenge: "Property demand was arriving through ads, but the team needed cleaner targeting, a clearer landing path and tracking that showed what happened after the lead arrived.",
    strategy: [
      "Meta lead-generation campaigns built around location, project and buyer intent",
      "Landing-page and form friction review so enquiry quality could be judged",
      "Meta Pixel, GA4 and GTM events so spend, leads and follow-up could sit in one view",
    ],
    results: "The engagement produced a tracked acquisition system rather than a one-off burst of form fills. Specific published CPL or ROAS figures are reserved for campaigns with a complete public dataset.",
    learnings: "In real estate, speed-to-lead and location-message fit matter as much as the ad. If tracking stops at the form, the sales team cannot tell the media what quality looks like.",
  },
  {
    slug: "kokanbag-mango-pulp",
    title: "KokanBag Mango Pulp",
    type: "Job · Performance Marketing",
    summary: "Meta Ads for B2B and retail mango pulp and cashew lead generation, with Privyr CRM and WhatsApp follow-up.",
    challenge: "A seasonal FMCG offer needed national wholesale and retail demand without form drop-off, plus a CRM process that could qualify juice centres, distributors and home buyers quickly.",
    strategy: [
      "Meta Message campaigns with a WhatsApp CTA instead of a native lead form",
      "Creative split across mango pulp and cashew, with B2B and retail pricing cues",
      "Manual CRM tagging by business type, city, product interest and temperature",
    ],
    results: "1,714 WhatsApp leads from ₹22,338 spend between June and 20 August 2026 — about ₹13 cost per lead — reaching 20+ Indian states. Qualified pipeline was 738 leads (43.1%); 747 (43.6%) stayed uncontacted; 229 (13.3%) were not qualified.",
    learnings: "For this offer, WhatsApp beat forms. Follow-up speed and sample-order friction decided quality more than the click. Uncontacted volume must stay separate from qualified pipeline.",
    custom: true,
  },
  {
    slug: "elintom-crm",
    title: "ElintOm CRM",
    type: "Job · Marketing Automation",
    summary: "Email, WhatsApp and LinkedIn outreach with CRM automation, audience segmentation and omnichannel lead management.",
    challenge: "Leads were arriving from more than one channel, but follow-up was inconsistent. The business needed segmentation and a nurture path that did not depend on one person remembering to message.",
    strategy: [
      "Segment contacts by source, offer interest and conversation stage",
      "Email, WhatsApp and LinkedIn sequences with a single lead record",
      "Handoff rules so live conversations were not drowned by automation",
    ],
    results: "The work created an omnichannel nurture system. Public conversion totals are not claimed here; the value was operational consistency and cleaner follow-up.",
    learnings: "Automation helps only after the segments are honest. A CRM that tags poorly will scale the wrong message as efficiently as the right one.",
  },
];

export type Industry = {
  slug: string;
  name: string;
  blurb: string;
  challenge: string;
  approach: string;
  measure: string;
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    blurb: "Trust-led acquisition for clinics and health brands that cannot afford noisy, low-intent leads.",
    challenge: "Healthcare demand is cautious. Ads that over-promise, or pages that hide the next step, create enquiries the front desk cannot use.",
    approach: "Lead with the service, location and proof. Use Meta or Google only after the landing path, tracking and follow-up script are clear.",
    measure: "Appointment or consult quality, response time, and which creative or keyword produced a real conversation — not clicks alone.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    blurb: "Location-first paid social and tracking for project discovery and faster sales follow-up.",
    challenge: "Property teams often buy volume and then drown in unverified site-visit requests. Location mismatch and slow callbacks waste both media and inventory attention.",
    approach: "Match the project, the geography and the offer on the ad and the page. Instrument the form or WhatsApp path so quality can be sent back to the campaign.",
    measure: "Cost per verified enquiry, time-to-first-response, and site-visit or site-visit-intent rate by campaign.",
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    blurb: "Product-led paid and organic systems with conversion events the catalogue can learn from.",
    challenge: "Catalogue ads and search spend fail when events, product pages and remarketing audiences disagree about what a conversion is.",
    approach: "Fix product-page clarity and purchase or enquiry events first. Then test creative and bidding against those events.",
    measure: "Purchase or high-intent enquiry rate, contribution by campaign, and whether remarketing is using clean audiences.",
  },
  {
    slug: "local-business",
    name: "Local Business",
    blurb: "Local SEO, Google Business Profile and nearby paid demand for shops and service businesses.",
    challenge: "Local businesses often split effort across random posts, a weak profile and ads that send people to a homepage with no call path.",
    approach: "Make the profile, the local page and the WhatsApp/call action agree. Use ads only to support offers the business can fulfil this week.",
    measure: "Calls, direction requests, WhatsApp conversations and repeat local search visibility — tied to real capacity.",
  },
];

export type SeoLandingPage = {
  slug: string;
  service: string;
  title: string;
  description: string;
  benefits: { num: string; title: string; copy: string }[];
  faq: "meta" | "google" | "seo" | "local" | "analytics" | "web" | "default";
};

export const seoLandings: SeoLandingPage[] = [
  {
    slug: "meta-ads-consultant-pune",
    service: "Meta Ads Consultant in Pune",
    title: "Meta Ads Consultant in Pune",
    description: "Hands-on Facebook and Instagram campaign systems for Pune businesses that need qualified WhatsApp or form leads, not just cheaper clicks.",
    benefits: [
      { num: "01", title: "Offer-first structure", copy: "Campaigns are built around the buyer, the offer and the follow-up path — Message, form or landing page." },
      { num: "02", title: "Creative that can be judged", copy: "Hooks, products and audiences are separated so you can see what earned the conversation." },
      { num: "03", title: "Pixel and CAPI hygiene", copy: "Events are checked before spend scales, so Meta is not training on noise." },
    ],
    faq: "meta",
  },
  {
    slug: "google-ads-freelancer-pune",
    service: "Google Ads Freelancer in Pune",
    title: "Google Ads Freelancer in Pune",
    description: "Direct search-account work for Pune and India businesses that want high-intent queries connected to a page and a conversion event.",
    benefits: [
      { num: "01", title: "Commercial queries only", copy: "Keyword and negative lists are built to protect budget from research traffic you cannot fulfil." },
      { num: "02", title: "Page and ad alignment", copy: "The search term, the ad and the landing page describe the same offer." },
      { num: "03", title: "Conversion before scale", copy: "GA4/GTM events are verified so bidding is not optimising for the wrong action." },
    ],
    faq: "google",
  },
  {
    slug: "seo-consultant-pune",
    service: "SEO Consultant in Pune",
    title: "SEO Consultant in Pune",
    description: "Technical, on-page and content SEO for businesses that need commercial visibility in Pune and national search — not a monthly report of vanity rankings.",
    benefits: [
      { num: "01", title: "Fix the foundations", copy: "Crawl, speed and index issues are handled before content volume is increased." },
      { num: "02", title: "Pages that sell", copy: "Keyword work is attached to service and location pages that can convert." },
      { num: "03", title: "Measure the enquiry", copy: "Organic traffic is read against calls, forms and WhatsApp — not sessions alone." },
    ],
    faq: "seo",
  },
  {
    slug: "local-seo-expert-pune",
    service: "Local SEO Expert in Pune",
    title: "Local SEO Expert in Pune",
    description: "Google Business Profile, Map Pack and local-page work for Pune shops and service businesses that need nearby customers to call or visit.",
    benefits: [
      { num: "01", title: "Profile that matches the offer", copy: "Categories, services, photos and posts are aligned to what you actually sell." },
      { num: "02", title: "Local pages with a path", copy: "Area and service pages send people to call, WhatsApp or directions." },
      { num: "03", title: "Reviews as an operating loop", copy: "Reputation work is treated as a weekly system, not a one-time request." },
    ],
    faq: "local",
  },
  {
    slug: "performance-marketer-pune",
    service: "Performance Marketer in Pune",
    title: "Performance Marketer in Pune",
    description: "A single operator who connects Meta, Google, SEO, landing pages and tracking so Pune businesses can judge marketing by pipeline, not activity.",
    benefits: [
      { num: "01", title: "One operating view", copy: "Paid, organic and conversion events are planned together so reports do not contradict each other." },
      { num: "02", title: "Execution, not decks", copy: "Campaigns, tags and pages are implemented — then iterated from the numbers." },
      { num: "03", title: "Honest proof", copy: "Published case numbers stay attached to real datasets, starting with KokanBag." },
    ],
    faq: "default",
  },
  {
    slug: "lead-generation-specialist-pune",
    service: "Lead Generation Specialist in Pune",
    title: "Lead Generation Specialist in Pune",
    description: "WhatsApp-first and form-based lead systems for Pune businesses that need volume they can actually follow up.",
    benefits: [
      { num: "01", title: "Capture that matches the buyer", copy: "Message ads, forms or landing pages are chosen for the offer — not habit." },
      { num: "02", title: "Qualification in the CRM", copy: "Leads are tagged by intent, location and product so the team knows who to call first." },
      { num: "03", title: "Cost read against quality", copy: "CPL is only useful when invalid, uncontacted and qualified leads are counted separately." },
    ],
    faq: "web",
  },
];

export const testimonials = [
  {
    quote: "Amol sees the business behind the brief. He didn't just improve our paid performance—he changed how we thought about growth.",
    initials: "RM",
    name: "Rohan Mehta",
    role: "Founder, Casa Studios",
  },
  {
    quote: "The work brought structure to our acquisition efforts. We could finally see what was working, what needed attention, and what to test next.",
    initials: "SK",
    name: "Sonal Kulkarni",
    role: "Marketing Lead, HealthFirst",
  },
  {
    quote: "Amol connected the ads, landing page and reporting into one clear system. The team moved faster because the decisions became easier to trust.",
    initials: "AP",
    name: "Amit Patil",
    role: "Director, Urbanly",
  },
];

export type Experiment = {
  type: string;
  title: string;
  copy: string;
  problem: string;
  hypothesis: string;
  execution: string;
  insight: string;
};

export const experiments: Experiment[] = [
  {
    type: "Creative format",
    title: "Video vs image creative",
    copy: "Testing format fit at the awareness-to-lead transition.",
    problem: "A campaign can win attention with video and still lose the click-to-message if the still frame carries the offer more clearly.",
    hypothesis: "Video earns more thumb-stop; a still with price or WhatsApp intent often earns more conversations on Message campaigns.",
    execution: "Run the same audience and offer with a short video and a static, then read results at conversation or qualified-lead — not thumb-stop alone.",
    insight: "Format is a job, not a winner. Use video to earn context; use a still when the next action must be obvious in one glance.",
  },
  {
    type: "Audience design",
    title: "Broad vs interest targeting",
    copy: "Understanding when algorithmic expansion can outperform manual constraints.",
    hypothesis: "Once the pixel has enough quality events, broad can find cheaper conversations than stacked interests.",
    problem: "Interest stacks feel safer but often starve delivery or train the algorithm on a narrow, expensive pocket.",
    execution: "Keep creative and offer constant. Compare a constrained interest set against a broader demographic with the same conversion event.",
    insight: "Broad only works after the event is clean. If 'lead' includes junk, the algorithm will find more junk faster.",
  },
  {
    type: "Messaging",
    title: "Long copy vs short copy",
    copy: "Comparing clarity, context and offer framing for lead quality.",
    problem: "Short copy can get cheap clicks that bounce; long copy can pre-qualify and raise CPL while improving sales-team time.",
    hypothesis: "For considered B2B offers, extra context on who the product is for will reduce invalid leads more than it hurts volume.",
    execution: "Test one primary-text length against another on the same visual, then score leads as qualified, uncontacted or not qualified.",
    insight: "Copy length is a filter. Measure quality split, not only CPL, before you declare a winner.",
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  minutes: number;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "best-ad-is-not-highest-converting",
    category: "Experiments",
    title: "Why your best ad is probably not your highest converting one.",
    minutes: 8,
    excerpt: "Thumb-stop and conversion are different jobs. The ad that wins the feed often loses the conversation.",
    body: [
      "Teams often scale the ad with the strongest hook because the dashboard makes that number look like the winner. The hook is only the first job. The converting ad is the one that makes the next action obvious to the right buyer.",
      "On WhatsApp-first campaigns, a cinematic video can earn cheap reach while a quieter still with price, pack size or a direct Message CTA produces the lead. If you only read thumb-stop or CTR, you will scale entertainment.",
      "A useful test keeps audience and offer constant, then splits format or hook. Judge the set on qualified conversations, not the metric that is easiest to screenshot.",
      "The practical rule: name the job of the ad before you name the winner. Awareness creative and conversion creative can live in the same account. They should not share the same success metric.",
    ],
  },
  {
    slug: "demand-capture-vs-demand-creation",
    category: "Marketing strategy",
    title: "The difference between demand capture and demand creation.",
    minutes: 6,
    excerpt: "Google often harvests existing intent. Meta often has to create it. Budgets fail when those jobs are swapped.",
    body: [
      "Demand capture meets someone already looking. Search, Shopping and some branded social do this work. The creative job is relevance and proof. The waste is usually the wrong keyword or a page that does not match the query.",
      "Demand creation interrupts someone who was not searching. Most Meta prospecting sits here. The creative job is to make a problem or offer feel urgent enough to start a conversation. The waste is usually a weak offer or a capture path with too much friction.",
      "Budgets go wrong when a capture channel is asked to invent demand, or a creation channel is asked to behave like a high-intent search term. The report then looks like a channel problem. It is a job problem.",
      "Plan the two motions separately: capture what is already being asked, create demand where the category is quiet, and measure each against the action it can honestly produce.",
    ],
  },
  {
    slug: "tracking-questions-before-scaling",
    category: "Analytics",
    title: "Three tracking questions to ask before scaling spend.",
    minutes: 5,
    excerpt: "If the event is wrong, more budget only teaches the algorithm faster mistakes.",
    body: [
      "First: what exactly fires as a conversion? A button click, a form view, a WhatsApp tap and a qualified CRM status are different events. If the pixel counts the tap, the algorithm will buy more taps.",
      "Second: do GA4, the ad platform and the CRM agree closely enough to make a decision? Perfect match is rare. A known, stable gap is fine. An unexplained 3x gap is not a licence to scale.",
      "Third: can you separate qualified, uncontacted and invalid leads? KokanBag is the reminder: 1,714 conversations is not 1,714 opportunities. Uncontacted volume is an operations number, not a media win.",
      "When those three answers are written down, spend increases become a test. Until then, scale is a louder version of the current confusion.",
    ],
  },
];

export const creatives = [
  { category: "Real Estate", type: "Lead form", body: "Location-first hooks and property-led offer framing.", note: "Reference pattern — not a live client file." },
  { category: "SaaS", type: "Carousel", body: "Education-led messaging for a considered B2B conversation.", note: "Reference pattern — not a live client file." },
  { category: "Ecommerce", type: "Image", body: "Product clarity, use case and direct retail action.", note: "Reference pattern — not a live client file." },
  { category: "Local Business", type: "Video", body: "A familiar local cue with a simple conversion path.", note: "Reference pattern — not a live client file." },
  { category: "Healthcare", type: "UGC", body: "Trust-building social proof designed for attention and relevance.", note: "Reference pattern — not a live client file." },
  { category: "Education", type: "Landing Page", body: "Structured proof and clear programme enquiry flows.", note: "Reference pattern — not a live client file." },
];

export const homepageResults = [
  {
    metric: "1,714",
    label: "WhatsApp leads",
    note: "Jun–Aug 2026",
    type: "KokanBag · Meta Ads",
    color: "blue",
    barValues: [40, 70, 55, 88, 62, 95, 100],
    barColor: "#7a9c8e",
    href: "/work/kokanbag-mango-pulp",
  },
  {
    metric: "~₹13",
    label: "Cost per lead",
    note: "₹22,338 spend",
    type: "KokanBag · CRM",
    color: "orange",
    barValues: [28, 44, 38, 60, 52, 78, 90],
    barColor: "#d89f67",
    href: "/work/kokanbag-mango-pulp",
  },
  {
    metric: "20+",
    label: "States reached",
    note: "Pan-India coverage",
    type: "KokanBag · WhatsApp",
    color: "green",
    barValues: [22, 40, 35, 58, 50, 72, 86],
    barColor: "#8fb676",
    href: "/work/kokanbag-mango-pulp",
  },
];

export const careerTimeline = [
  {
    date: "June 2026 — Present",
    company: "Sateri Digital",
    companyHref: "https://www.linkedin.com/company/sateri-digital/",
    role: "Digital Marketing Executive (Media Buyer)",
    location: "",
    description: "Meta Ads for FMCG, retail and SaaS; Privyr CRM and WhatsApp lead management; email, WhatsApp and LinkedIn outreach; ElintOm CRM automation.",
    items: [
      "Managed Meta Ads campaigns for clients across FMCG, retail and SaaS, including lead generation, remarketing and conversion campaigns.",
      "Planned and optimised campaigns for mango pulp and cashew, focusing on audience targeting, creatives and lead generation.",
      "Managed leads using Privyr CRM and WhatsApp, coordinated with sales teams, and improved follow-up through automation workflows.",
      "Executed email marketing, WhatsApp marketing and LinkedIn outreach campaigns to generate and nurture B2B leads.",
      "Supported marketing automation and omnichannel engagement for ElintOm CRM, including tracking, segmentation and reporting.",
    ],
  },
  {
    date: "May 2025 — June 2026",
    company: "Majestic Realties",
    companyHref: "https://www.linkedin.com/company/majesticrealties/",
    role: "Digital Marketing & Web Executive",
    location: "Pune, Maharashtra",
    description: "Meta Ads for real estate, SEO, WordPress/Elementor/React/Next.js landing pages, Meta Pixel, GTM, GA4, and social content production.",
    items: [
      "Managed Meta Ads campaigns including lead generation, traffic, reach and engagement for real estate projects, open plots and residential properties.",
      "Performed SEO, including keyword research, on-page SEO, content optimisation and landing-page optimisation.",
      "Built and optimised real estate websites and landing pages using WordPress, Elementor, React.js and Next.js.",
      "Configured Meta Business Manager, Meta Pixel, Google Tag Manager and Google Analytics 4 for conversion and event tracking.",
      "Created social media content, planned and assisted in reel shoots, and edited with Canva, CapCut and Adobe Photoshop.",
    ],
  },
  {
    date: "Part-Time",
    company: "Shabdbramhand Co",
    companyHref: "https://www.shabdbramhandco.com",
    role: "Web Developer & SEO Specialist",
    location: "Pune, Maharashtra",
    description: "Responsive websites and landing pages in HTML, CSS, JavaScript and Tailwind CSS, plus on-page, technical and local SEO.",
    items: [
      "Developed responsive websites and landing pages using HTML, CSS, JavaScript and Tailwind CSS.",
      "Handled SEO including on-page, technical, local, keyword research and website optimisation.",
    ],
  },
] as const;

export const education = [
  {
    title: "Master of Science in Computer Science",
    detail: "Bharati Vidyapeeth Deemed University · Pursuing, Sep 2025 — Present",
  },
  {
    title: "Bachelor of Science in Computer Science",
    detail: "Bharati Vidyapeeth Deemed University · Sep 2022 — Jul 2025",
  },
] as const;

export const certifications = [
  {
    title: "Meta Advertising Certification",
    detail: "IIDE — The Digital School · Meta Ads, audience targeting, Meta Pixel and conversion tracking",
    href: "https://drive.google.com/file/d/15bHHqUw-bdM8e1GrcyRmC4P_6K4qQtZm/view?usp=sharing",
  },
  {
    title: "CSMS-DEEP Diploma",
    detail: "Digital education and professional development focused on web and content creation",
    href: "https://drive.google.com/drive/folders/1u-LEw7LO7XRSDpxKzhB57LxNWEbmcOFY?usp=sharing",
  },
] as const;

export const skillGroups = [
  {
    title: "Media & measurement",
    items: ["Meta Ads Manager", "Google Ads (Search, Display, Performance Max)", "Media buying", "Lead generation", "Campaign optimisation", "Audience targeting", "Remarketing", "Meta Pixel", "Conversion tracking", "UTM tracking", "GA4", "GTM", "Looker Studio", "Meta Events Manager"],
  },
  {
    title: "CRM & outreach",
    items: ["Privyr CRM", "ElintOm CRM", "WhatsApp marketing", "Email marketing", "LinkedIn outreach", "Lead management", "Audience segmentation", "Marketing automation"],
  },
  {
    title: "Search, web & creative",
    items: ["On-page SEO", "Technical SEO", "Local SEO", "Keyword research", "Google Search Console", "SEMrush", "Ahrefs", "WordPress", "Elementor", "Amazon product listings", "Flipkart Seller", "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Git", "VS Code", "Vercel", "Canva", "Adobe Photoshop", "CapCut", "AI design tools"],
  },
] as const;
export const freelanceStudies = studies.filter((study) => study.type.startsWith("Freelance"));
export const jobStudies = studies.filter((study) => study.type.startsWith("Job"));

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Freelance", href: "/freelance" },
  { label: "Journey", href: "/journey" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
] as const;

export const navMenus = [
  {
    label: "Work",
    href: "/work",
    items: studies.map((s) => [s.title, `/work/${s.slug}`] as [string, string]),
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      ["Creative Library", "/creative-library"],
      ["Experiments", "/experiments"],
      ["Results Dashboard", "/results"],
      ["Industries", "/industries"],
      ["Insights & Blog", "/blog"],
      ["Testimonials", "/testimonials"],
    ] as [string, string][],
  },
];

export const sitemapPaths = [
  "",
  "/about",
  "/journey",
  "/experience",
  "/freelance",
  "/resume",
  "/services",
  ...services.map((s) => `/services/${s.slug}`),
  "/work",
  ...studies.map((s) => `/work/${s.slug}`),
  "/results",
  "/blog",
  ...articles.map((s) => `/blog/${s.slug}`),
  "/contact",
  "/testimonials",
  "/resources",
  "/creative-library",
  "/experiments",
  "/industries",
  ...industries.map((s) => `/industries/${s.slug}`),
  ...seoLandings.map((s) => `/${s.slug}`),
  "/privacy-policy",
  "/terms-and-conditions",
];
