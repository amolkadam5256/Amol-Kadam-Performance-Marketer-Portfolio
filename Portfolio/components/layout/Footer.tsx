import Image from "next/image";
import Link from "next/link";
import { Camera, Code2, Mail, MessageCircle, Phone } from "lucide-react";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { industries, services, site, studies } from "@/data/site";

const serviceLinks: [string, string][] = [
  ...services.map((s) => [s.name, s.href] as [string, string]),
  ["Lead Generation", "/lead-generation-specialist-pune"],
  ["Marketing Consulting", "/contact"],
];

const studyLinks: [string, string][] = [
  ...studies.map((s) => [s.title, `/case-studies/${s.slug}`] as [string, string]),
  ...industries.map((s) => [`${s.name} marketing`, `/industries/${s.slug}`] as [string, string]),
];

const resourceLinks: [string, string][] = [
  ["Blog & insights", "/blog"],
  ["Results dashboard", "/results"],
  ["Experiments", "/experiments"],
  ["Creative library", "/creative-library"],
  ["About Amol", "/about-amol-kadam"],
  ["Contact", "/contact"],
  ["Privacy policy", "/privacy-policy"],
  ["Terms & conditions", "/terms-and-conditions"],
];

export function Footer() {
  return (
    <footer className="platform-footer">
      <div className="ed-wrap">
        <div className="footer-cta">
          <div>
            <p className="ed-kicker">Ready to grow</p>
            <h2>Bring the brief. I’ll bring the system.</h2>
          </div>
          <div>
            <EditorialButton href="/contact" tone="ink">
              Book a consultation
            </EditorialButton>
            <Link className="text-link" href="/case-studies">
              View work
            </Link>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <Image src="/logo.png" alt="" width={36} height={36} />
              AMOL
            </Link>
            <p>
              Performance marketer
              <br />
              SEO specialist
              <br />
              Growth consultant
            </p>
            <p>Meta Ads, Google Ads, SEO, analytics and conversion systems — judged by qualified pipeline.</p>
            <p>{site.city}</p>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <b>Open for freelance, consulting and the right full-time brief.</b>
          </div>
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Work" links={studyLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>
        <div className="footer-social">
          <div>
            <a href={site.linkedin} aria-label="LinkedIn" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0" />
              </svg>
            </a>
            <a href={site.github} aria-label="GitHub" title="GitHub">
              <Code2 size={16} />
            </a>
            <a href={site.instagram} aria-label="Instagram" title="Instagram">
              <Camera size={16} />
            </a>
            <a href={`https://wa.me/${site.whatsapp}`} aria-label="WhatsApp" title="WhatsApp">
              <MessageCircle size={16} />
            </a>
            <a href={site.phoneHref} aria-label="Call Amol" title="Call">
              <Phone size={16} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email Amol" title="Email">
              <Mail size={16} />
            </a>
          </div>
          <p>© 2026 Amol Kadam · <a href="https://growthikmedia.com">Growthik Media</a></p>
          <p>{site.city}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="footer-column">
      <p>{title}</p>
      {links.map(([label, href]) => (
        <Link key={label} href={href}>
          {label}
        </Link>
      ))}
    </div>
  );
}
