import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/book", "/events", "/epk", "/contact"].map(path => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path === "/events" ? "weekly" : "monthly", priority: path === "" ? 1 : .8 })); }
