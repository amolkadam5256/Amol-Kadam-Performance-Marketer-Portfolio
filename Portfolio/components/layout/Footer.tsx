import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/common/SocialLinks";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { site, studies } from "@/data/site";

const workLinks: [string, string][] = [
  ...studies.map((study) => [study.title, `/work/${study.slug}`] as [string, string]),
  ["All work", "/work"],
];

const exploreLinks: [string, string][] = [
  ["About", "/about"],
  ["Journey", "/journey"],
  ["Freelance", "/freelance"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];

const resourceLinks: [string, string][] = [
  ["Insights", "/blog"],
  ["Results", "/results"],
  ["Experiments", "/experiments"],
  ["Creative library", "/creative-library"],
  ["Resume", "/resume"],
  ["Experience", "/experience"],
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
          <div className="footer-cta-actions">
            <EditorialButton href="/contact" tone="ink">
              Book a consultation
            </EditorialButton>
            <Link className="text-link" href="/work">
              View work
            </Link>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <Image src="/logo.png" alt="" width={36} height={36} />
              AMOL KADAM
            </Link>
            <p className="footer-role">Performance Marketer · SEO · Growth</p>
            <p className="footer-blurb">
              Meta Ads, Google Ads, SEO, analytics and conversion systems — judged by qualified pipeline.
            </p>
            <address className="footer-contact">
              <span>{site.location}</span>
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
            <SocialLinks variant="profiles" />
            <p className="footer-open">Open for freelance, consulting and full-time briefs.</p>
          </div>
          <FooterColumn title="Work" links={workLinks} />
          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>

        <div className="footer-bar">
          <p>
            © 2026 Amol Kadam · Site produced with{" "}
            <a href="https://growthikmedia.com">Growthik Media</a>
          </p>
          <nav className="footer-legal" aria-label="Legal">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
          </nav>
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
        <Link key={`${label}-${href}`} href={href}>
          {label}
        </Link>
      ))}
    </div>
  );
}
