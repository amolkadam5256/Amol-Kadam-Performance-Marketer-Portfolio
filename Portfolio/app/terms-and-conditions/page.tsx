import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for using Amol Kadam’s website and portfolio materials.",
  alternates: { canonical: "/terms-and-conditions" },
};

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
