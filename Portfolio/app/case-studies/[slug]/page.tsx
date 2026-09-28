import { redirect } from "next/navigation";
import { studies } from "@/data/site";

export function generateStaticParams() {
  return studies.map(({ slug }) => ({ slug }));
}

export default async function CaseStudyAlias({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/work/${slug}`);
}
