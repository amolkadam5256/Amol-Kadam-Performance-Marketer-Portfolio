import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const trail = [{ label: "Home", href: "/" }, ...items];

  return (
    <JsonLd
      data={breadcrumbJsonLd(
        trail.map((item) => ({
          name: item.label,
          path: item.href ?? "/",
        })),
      )}
    />
  );
}
