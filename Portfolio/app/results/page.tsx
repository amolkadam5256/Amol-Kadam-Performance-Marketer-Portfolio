import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";
import { GrowthDashboard } from "@/components/charts/GrowthDashboard";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTA } from "@/components/common/CTA";
import { FAQ, resultsFaqs } from "@/components/common/FAQ";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Amol Kadam Marketing Results | Paid Media, SEO & Lead Generation",
  description:
    "Published marketing results from Amol Kadam, including the KokanBag WhatsApp campaign: 1,714 conversations from ₹22,338 spend, June–20 August 2026.",
  path: "/results",
});

export default function Results() {
  return (
    <>
      <PageHeader
        eyebrow="RESULTS DASHBOARD"
        title="A clearer view of the growth system."
        description="The numbers below are from the published KokanBag WhatsApp campaign. Other studies are described without invented scoreboards."
      />
      <Breadcrumb items={[{ label: "Results", href: "/results" }]} />
      <section className="ed-wrap dashboard-reveal">
        <GrowthDashboard />
      </section>
      <section className="results-layout ed-wrap">
        <div className="result-notes result-notes-wide">
          <article>
            <span>PUBLISHED PROOF</span>
            <h2>KokanBag mango pulp</h2>
            <p>1,714 WhatsApp conversations from ₹22,338 Meta spend, June to 20 August 2026. Qualified 738 · Uncontacted 747 · Not qualified 229. A “lead” here means an inbound WhatsApp conversation in that period, not a closed order.</p>
            <Link href="/work/kokanbag-mango-pulp">Read the full study ↗</Link>
          </article>
          <article>
            <span>PAID MEDIA</span>
            <h2>What the dashboard is for</h2>
            <p>Read volume, spend and quality together. CPL only means something after invalid and uncontacted leads are split out.</p>
          </article>
          <article>
            <span>CONVERSION</span>
            <h2>Lead management</h2>
            <p>Tracking the handoff from capture to follow-up across CRM workflows — the operational half of the KokanBag result.</p>
          </article>
        </div>
      </section>
      <FAQ
        items={resultsFaqs}
        title="Questions about growth reporting & attribution."
        eyebrow="REPORTING FAQS"
        description="How campaign metrics, quality splits and blended reporting should be read."
      />
      <CTA title="Need reporting you can actually use?" />
    </>
  );
}
