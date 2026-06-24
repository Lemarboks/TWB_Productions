import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { equipment } from "@/lib/equipment";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/book", "/events", "/equipment", "/epk", "/contact", ...equipment.map(item => `/equipment/${item.slug}`)].map(path => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path === "/events" ? "weekly" : "monthly", priority: path === "" ? 1 : .8 })); }
