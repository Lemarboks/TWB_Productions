export const siteConfig = {
  name: "TWB Productions",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://twbproductions.co.za",
  email: "info@twbproductions.co.za",
  description: "Cape Town DJ-led sound, lighting, staging and event production for Amapiano, R&B, private and corporate experiences.",
};

export const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/equipment", label: "Equipment" },
  { href: "/epk", label: "EPK" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  { number: "01", title: "DJ experiences", text: "Amapiano and R&B selectors for private celebrations, nightlife, launches and culture-forward rooms." },
  { number: "02", title: "Sound production", text: "Professional PA, monitoring, microphones and engineering tuned to the venue and audience." },
  { number: "03", title: "Lighting & staging", text: "Show-ready lighting, atmosphere, truss and staging that turns a room into a moment." },
  { number: "04", title: "Visual & streaming", text: "LED displays, playback, multi-camera capture and dependable hybrid event delivery." },
] as const;
