import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services/audit-assurance", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/management-consulting", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/tax-accounting-payroll", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/corporate-fiduciary", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/investment-family-office", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date("2026-07-20"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
