import { PageHeader } from "@/components/common/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms & Conditions | Amol Kadam",
  description: "Terms for using Amol Kadam’s website and portfolio materials.",
  path: "/terms-and-conditions",
});

export default function Terms() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Terms & conditions"
        description="Information on this website is provided for general informational and professional portfolio purposes."
      />
      <section className="legal ed-wrap">
        <h2>Use of this website</h2>
        <p>Content may not be reproduced or represented as client work without permission. Specific deliverables, timelines and scope are agreed separately for each engagement.</p>
        <h2>Accuracy</h2>
        <p>Published campaign numbers are limited to datasets prepared for this site, currently the KokanBag study. Other project pages describe the system of work without invented metrics.</p>
      </section>
    </>
  );
}
