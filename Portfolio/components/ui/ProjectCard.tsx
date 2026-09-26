import Link from "next/link";

export function ProjectCard({
  href,
  index,
  type,
  title,
  summary,
}: {
  href: string;
  index: number;
  type: string;
  title: string;
  summary: string;
}) {
  return (
    <Link href={href} className="ed-project">
      <div className="ed-project-visual" aria-hidden="true">
        <b>{title.slice(0, 2).toUpperCase()}</b>
        <span>{String(index).padStart(2, "0")}</span>
      </div>
      <p className="ed-kicker">{type}</p>
      <h3>{title}</h3>
      <p>{summary}</p>
      <em>View project</em>
    </Link>
  );
}
