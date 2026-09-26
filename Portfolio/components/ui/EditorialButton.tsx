import Link from "next/link";

type Tone = "ink" | "cream" | "ghost";

export function EditorialButton({
  href,
  children,
  tone = "ink",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  external?: boolean;
}) {
  const className = `ed-btn ${tone}`;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
