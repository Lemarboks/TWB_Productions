import Link from "next/link";
import { Camera, Mail, MapPin, Music } from "lucide-react";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { navItems, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08040c]">
      <div className="site-shell grid gap-12 py-16 lg:grid-cols-[1.1fr_.6fr_1fr]">
        <div>
          <p className="display text-6xl">TWB</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">Turning sound into an experience — from Cape Town to any room ready to move.</p>
          <div className="mt-6 flex gap-3">
            <a href={`mailto:${siteConfig.email}`} aria-label="Email TWB Productions" className="grid size-10 place-items-center rounded-full border border-white/15 transition hover:border-pink/40 hover:text-pink">
              <Mail size={17} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="TWB Productions on Instagram" className="grid size-10 place-items-center rounded-full border border-white/15 transition hover:border-pink/40 hover:text-pink">
              <Camera size={17} />
            </a>
            <a href="https://soundcloud.com" target="_blank" rel="noreferrer" aria-label="TWB Productions on SoundCloud" className="grid size-10 place-items-center rounded-full border border-white/15 transition hover:border-pink/40 hover:text-pink">
              <Music size={17} />
            </a>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-5">Explore</p>
          {navItems.map(item => (
            <Link className="mb-3 block text-sm text-white/60 transition hover:text-white" key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>
        <div>
          <p className="eyebrow mb-4">Stay in the loop</p>
          <h2 className="display text-3xl">New events. First access.</h2>
          <NewsletterForm />
          <p className="mt-5 flex items-center gap-2 text-xs text-white/40"><MapPin size={14} /> Cape Town, South Africa</p>
        </div>
      </div>
      <div className="site-shell flex flex-col gap-2 border-t border-white/8 py-6 text-[11px] uppercase tracking-widest text-white/35 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} TWB Productions</p>
        <p>Sound · Light · Culture</p>
      </div>
    </footer>
  );
}
