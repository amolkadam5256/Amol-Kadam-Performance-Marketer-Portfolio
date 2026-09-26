import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Library",
  description: "Reference patterns for hooks, offers and formats across industries — teaching examples, not live client files.",
  alternates: { canonical: "/creative-library" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
