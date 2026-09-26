import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { FAQ } from "@/components/common/FAQ";
import { ContactForm } from "@/components/common/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a performance marketing, SEO or measurement conversation with Amol Kadam in Pune.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start with the problem."
        description="Share the business context, what you are trying to improve, and where the friction is showing up."
      />
      <section className="contact-layout ed-wrap">
        <ContactForm />
        <aside>
          <p className="ed-kicker">Direct contact</p>
          <h2>Prefer a direct route?</h2>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.linkedin}>LinkedIn profile</a>
          <p>Based in {site.locality}, Maharashtra.</p>
        </aside>
      </section>
      <FAQ />
    </>
  );
}
