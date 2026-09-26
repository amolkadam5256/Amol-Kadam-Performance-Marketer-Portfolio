import Link from "next/link";

export function ServiceRow({
  index,
  name,
  blurb,
  href,
}: {
  index: number;
  name: string;
  blurb: string;
  href: string;
}) {
  return (
    <Link href={href} className="ed-service">
      <span>{String(index).padStart(2, "0")}</span>
      <strong>{name}</strong>
      <p>{blurb}</p>
      <i aria-hidden="true">→</i>
    </Link>
  );
}
