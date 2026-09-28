import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Creative Library | Amol Kadam",
  description: "Reference patterns for hooks, offers and formats across industries — teaching examples, not live client files.",
  path: "/creative-library",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
