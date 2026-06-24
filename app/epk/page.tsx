import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Disc3, Download, Headphones, MapPin, Music2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Electronic Press Kit",
  description: "TWB Productions DJ electronic press kit — Amapiano and R&B selectors based in Cape Town.",
  alternates: { canonical: "/epk" },
};

const facts = [
  { icon: MapPin,     label: "Based",     value: "Cape Town, ZA" },
  { icon: Music2,     label: "Sound",     value: "Amapiano × R&B" },
  { icon: Headphones, label: "Format",    value: "Solo / duo DJ sets" },
  { icon: Disc3,      label: "Available", value: "Private · Club · Brand" },
];

const techSpecs = [
  "Industry-standard DJ setup (Pioneer CDJ / Serato)",
  "Scalable PA and monitoring for any venue size",
  "Intelligent lighting and full visual production",
  "Travel-ready — full technical rider available",
];

export default function EpkPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] overflow-hidden pt-20">
        <Image src="/assets/work-hero-background.png" alt="TWB Productions live DJ performance" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/70 to-transparent" />
        <div className="noise pointer-events-none absolute inset-0 opacity-[.07]" />
        <div className="site-shell relative z-10 flex min-h-[88vh] items-end pb-16">
          <div>
            <span className="badge">Official EPK · 2026</span>
            <h1 className="display gradient-text mt-6 max-w-4xl text-[clamp(5rem,14vw,11rem)]">TWB DJs.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/65">Amapiano pulse. R&B soul. Cape Town energy. TWB reads the room and builds a set that belongs to the moment.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="button-primary">Booking enquiry <ArrowRight size={16} /></Link>
              <a href="mailto:info@twbproductions.co.za?subject=TWB%20EPK%20rider" className="button-secondary"><Download size={15} /> Request rider</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Artist profile ── */}
      <section className="section-pad site-shell grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Artist profile</p>
          <h2 className="display mt-4 text-6xl sm:text-7xl">Selectors with production instinct.</h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-white/55">
          <p>TWB Productions sits at the meeting point of DJ culture and technical event craft. That means every performance is considered as a whole: the arc of the set, the pressure in the sound system, the light in the room and the people on the floor.</p>
          <p>Rooted in Amapiano and R&B, TWB moves between deep grooves, familiar voices and left-field moments with a warm, crowd-aware style suited to nightlife, luxury celebrations, brand experiences and festival stages.</p>
        </div>
      </section>

      {/* ── Facts bar ── */}
      <section className="border-y border-white/10 bg-panel/50">
        <div className="site-shell grid sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="border-b border-white/10 p-7 transition-colors hover:bg-white/2.5 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <Icon size={20} className="text-pink" />
              <p className="eyebrow mt-8">{label}</p>
              <p className="display mt-2 text-3xl">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Technical rider ── */}
      <section className="section-pad site-shell">
        <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <div className="relative min-h-120 overflow-hidden rounded-3xl">
            <Image src="/assets/twb-cinematic-production.png" alt="TWB cinematic stage and event production" fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
          </div>
          <div className="glass flex flex-col justify-end rounded-3xl p-8">
            <p className="eyebrow">Technical</p>
            <h2 className="display mt-4 text-5xl">Professional from booth to front-of-house.</h2>
            <ul className="mt-7 space-y-3 text-sm text-white/55">
              {techSpecs.map(spec => (
                <li key={spec} className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink" />
                  {spec}
                </li>
              ))}
            </ul>
            <a href="mailto:info@twbproductions.co.za?subject=TWB%20EPK%20booking" className="button-secondary mt-8">Request full rider</a>
          </div>
        </div>
      </section>

      {/* ── Booking CTA ── */}
      <section className="section-pad relative overflow-hidden border-t border-white/10 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(255,79,216,.08),transparent)]" />
        <div className="site-shell relative">
          <p className="eyebrow">Bookings & press</p>
          <h2 className="display mx-auto mt-5 max-w-3xl text-6xl sm:text-8xl">Put TWB on the lineup.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:info@twbproductions.co.za" className="button-primary">info@twbproductions.co.za</a>
            <Link href="/book" className="button-secondary">Booking form <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
