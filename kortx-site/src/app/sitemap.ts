import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kortx.pro";

  const pages = [
    { path: "", priority: 1.0 },
    { path: "/servicos", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/sobre", priority: 0.7 },
    { path: "/contato", priority: 0.8 },
    { path: "/ai-first", priority: 0.9 },
  ];

  const locales = ["pt-BR", "en-US"];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page.priority,
    }))
  );
}
