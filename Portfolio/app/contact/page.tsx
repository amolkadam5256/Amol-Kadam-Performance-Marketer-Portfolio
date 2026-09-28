import Image from "next/image";
import { FAQ } from "@/components/common/FAQ";
import { ContactForm } from "@/components/common/ContactForm";
import { SocialLinks } from "@/components/common/SocialLinks";
import { pageMeta } from "@/lib/seo";
import { site, socialProfiles, whatsappHref } from "@/data/site";

export const metadata = pageMeta({
  title: "Contact Amol Kadam | Freelance & Marketing Projects",
  description:
    "Contact Amol Kadam in Pune for freelance digital marketing, performance marketing, SEO, Meta Ads, Google Ads and consulting projects.",
  path: "/contact",
});

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-poster">
        <div className="contact-poster-paper" aria-hidden="true" />
        <nav className="contact-poster-links" aria-label="Direct contact">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.phoneHref}>Call</a>
          <a href={whatsappHref()}>WhatsApp</a>
          {socialProfiles.map((profile) => (
            <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer">
              {profile.label}
            </a>
          ))}
        </nav>

        <div className="contact-poster-word">
          <h1>contact</h1>
          <p className="contact-poster-script">let&apos;s talk</p>
        </div>

        <figure className="contact-poster-phone">
          <Image
            src="/red-phone.png"
            alt="Red telephone"
            width={1600}
            height={900}
            priority
          />
        </figure>
      </section>

      <section className="contact-layout ed-wrap" id="enquiry">
        <div>
          <p className="ed-kicker">Enquiry</p>
          <h2>Start with the problem.</h2>
          <p className="ed-copy">Share the business context, what you are trying to improve, and where the friction is showing up.</p>
          <ContactForm />
        </div>
        <aside>
          <p className="ed-kicker">Direct contact</p>
          <h2>Prefer a direct route?</h2>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={whatsappHref()}>WhatsApp</a>
          {socialProfiles.map((profile) => (
            <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer">
              {profile.label}
            </a>
          ))}
          <p>Based in {site.location}.</p>
          <SocialLinks />
        </aside>
      </section>
      <FAQ />
    </main>
  );
}
