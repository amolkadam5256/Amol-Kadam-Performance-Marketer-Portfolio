import type { MetadataRoute } from "next";
import { site, sitemapPaths } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPaths.map((url) => ({
    url: `${site.url}${url}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: url === "" ? 1 : 0.7,
  }));
}
