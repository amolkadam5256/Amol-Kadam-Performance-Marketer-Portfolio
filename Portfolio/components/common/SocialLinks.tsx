import { Camera, Code, Mail, MessageCircle, Phone } from "lucide-react";
import { site, socialProfiles, whatsappHref } from "@/data/site";

function BrandIcon({ size = 16, path }: { size?: number; path: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <BrandIcon
      size={size}
      path="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0"
    />
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <BrandIcon
      size={size}
      path="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
    />
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <BrandIcon
      size={size}
      path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.822L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    />
  );
}

const profileIcons = {
  LinkedIn: LinkedInIcon,
  Instagram: Camera,
  Facebook: FacebookIcon,
  "Facebook Page": FacebookIcon,
  X: XIcon,
  GitHub: Code,
} as const;

const contactLinks = [
  { href: whatsappHref(), label: "WhatsApp", Icon: MessageCircle },
  { href: site.phoneHref, label: "Call", Icon: Phone },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
] as const;

export function SocialLinks({
  className = "",
  variant = "all",
}: {
  className?: string;
  variant?: "all" | "profiles";
}) {
  const profiles =
    variant === "profiles"
      ? socialProfiles.filter((profile) => profile.label !== "Facebook Page")
      : socialProfiles;

  return (
    <div className={`social-links ${className}`.trim()}>
      {profiles.map(({ href, label }) => {
        const Icon = profileIcons[label];
        return (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
            <Icon size={16} />
          </a>
        );
      })}
      {variant === "all"
        ? contactLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              title={label}
            >
              <Icon size={16} />
            </a>
          ))
        : null}
    </div>
  );
}
