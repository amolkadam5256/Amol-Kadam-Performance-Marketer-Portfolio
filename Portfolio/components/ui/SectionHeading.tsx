export function SectionHeading({
  kicker,
  title,
  copy,
  light = false,
}: {
  kicker: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <header className={`ed-heading${light ? " light" : ""}`}>
      <p className="ed-kicker">{kicker}</p>
      <h2>{title}</h2>
      {copy ? <p className="ed-copy">{copy}</p> : null}
    </header>
  );
}
