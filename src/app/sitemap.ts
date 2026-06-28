import type { MetadataRoute } from "next";

const BASE_URL = "https://www.amstudio.ink";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/salons", "/handwerker", "/impressum", "/datenschutz"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/salons" || route === "/handwerker" ? 0.8 : 0.3,
  }));
}
