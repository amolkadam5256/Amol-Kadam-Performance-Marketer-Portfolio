import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Amol Kadam handles enquiry information shared through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Privacy policy"
        description="This site collects only information you choose to share through the contact form, email, phone or WhatsApp."
      />
      <section className="legal ed-wrap">
        <h2>Information handling</h2>
        <p>
          Name, email, topic and context submitted through the contact form are used only to open a reply via email or WhatsApp. They are not sold or shared for unrelated marketing.
        </p>
        <h2>Direct channels</h2>
        <p>
          Messages sent to {site.email} or {site.phone} are handled for the same purpose: responding to the enquiry.
        </p>
        <h2>Analytics</h2>
        <p>No third-party analytics package is installed on this site at the time of writing. This policy will be updated if that changes.</p>
      </section>
    </>
  );
}
