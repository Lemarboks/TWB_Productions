import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Play, Quote } from "lucide-react";
import { Countdown } from "@/components/countdown";
import { EventCard } from "@/components/event-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getUpcomingEvents } from "@/lib/events";
import { services } from "@/lib/constants";
import { assetPath } from "@/lib/paths";

const gallery = ["home-event-crowd-1.jpg", "home-event-crowd-2.jpg", "twb-cinematic-production.png", "home-event-crowd-3.jpg", "home-event-crowd-4.jpg"];
const testimonials = [
  { quote: "TWB understood the energy we wanted and made the room feel bigger, warmer and completely alive.", name: "Private event client", role: "Cape Town" },
  { quote: "Calm technical execution, beautiful sound and a dance floor that never lost momentum.", name: "Event organiser", role: "Brand experience" },
  { quote: "From the first brief to the last song, the team was responsive, precise and genuinely easy to work with.", name: "Corporate producer", role: "Live event" },
];

const heroStats = [
  ["250+", "Events produced"],
  ["8+", "Years in the game"],
  ["Cape Town", "& beyond"],
];

export default async function Home() {
  const events = await getUpcomingEvents();
  const featured = events[0];

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative flex min-h-svh items-end overflow-hidden pb-14 pt-32 sm:pb-20">
        <Image src={assetPath("/assets/twb-hero-background.png")} alt="DJs performing at a TWB Productions event" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,2,8,.82),rgba(5,2,8,.18)),linear-gradient(0deg,#050208_0%,transparent_55%)]" />
        <div className="grid-fade absolute inset-0" />
        <div className="noise pointer-events-none absolute inset-0 opacity-[.09]" />

        <div className="site-shell relative z-10">
          <Reveal>
            <p className="eyebrow">Amapiano × R&B · Cape Town</p>
            <h1 className="display gradient-text mt-5 max-w-5xl text-[clamp(4.5rem,12vw,10.5rem)]">We turn sound into an experience.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">DJ-led sound, lighting and production for nightlife, private celebrations and events people talk about after the lights come up.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-primary" href="/book">Book your event <ArrowRight size={16} /></Link>
              <Link className="button-secondary" href="#gallery">See us in motion <Play size={15} /></Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/[.08] pt-8">
              {heroStats.map(([n, l]) => (
                <div key={n}>
                  <p className="display text-3xl text-white">{n}</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[.18em] text-white/40">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <a href="#intro" aria-label="Scroll to introduction" className="absolute bottom-5 right-6 hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/45 sm:flex">Scroll <ArrowDown size={15} /></a>
      </section>

      {/* ── Marquee ── */}
      <div className="overflow-hidden border-y border-white/10 bg-white/3 py-4">
        <div className="marquee flex w-max">
          <p className="display whitespace-nowrap text-2xl text-white/35">
            Amapiano nights <span className="text-pink">·</span> R&B sessions <span className="text-pink">·</span> Premium AV <span className="text-pink">·</span> Private celebrations <span className="text-pink">·</span> Cape Town energy <span className="text-pink">·</span>&nbsp;
          </p>
          <p className="display whitespace-nowrap text-2xl text-white/35" aria-hidden="true">
            Amapiano nights <span className="text-pink">·</span> R&B sessions <span className="text-pink">·</span> Premium AV <span className="text-pink">·</span> Private celebrations <span className="text-pink">·</span> Cape Town energy <span className="text-pink">·</span>&nbsp;
          </p>
        </div>
      </div>

      {/* ── Intro ── */}
      <section id="intro" className="section-pad site-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
        <Reveal><p className="eyebrow">More than a playlist</p></Reveal>
        <Reveal delay={.08}>
          <h2 className="display text-5xl sm:text-7xl lg:text-8xl">A room should <span className="text-pink">feel</span> as good as it sounds.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">TWB brings culture and technical craft into one signal path. The selectors, sound, lighting and staging all move together — tailored to your people, your venue and your moment.</p>
        </Reveal>
      </section>

      {/* ── Services ── */}
      <section id="services" className="section-pad border-y border-white/8 bg-panel/45">
        <div className="site-shell">
          <SectionHeading eyebrow="What we do" title="One crew. Every layer of the experience." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.number} delay={i * .05} className="group bg-ink p-7 transition-colors duration-300 hover:bg-[#08020f] sm:p-10">
                <span className="display text-2xl text-pink">{service.number}</span>
                <h3 className="display mt-12 text-4xl sm:text-5xl">{service.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/50">{service.text}</p>
                <span className="mt-6 flex items-center gap-2 text-[.68rem] font-bold uppercase tracking-widest text-white/0 transition-all duration-300 group-hover:text-pink/75">
                  Learn more <ArrowRight size={12} />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured event ── */}
      {featured && (
        <section className="section-pad site-shell">
          <div className="grid overflow-hidden rounded-3xl border border-violet/20 bg-panel shadow-[0_0_60px_rgba(139,92,246,.08)] lg:grid-cols-2">
            <div className="relative min-h-105">
              <Image src={featured.image_url ?? assetPath("/assets/work-hero-background.png")} alt={`${featured.title} event artwork`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-panel/30 lg:bg-gradient-to-l" />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-12">
              <span className="badge w-fit">Next up</span>
              <h2 className="display mt-5 text-6xl sm:text-7xl">{featured.title}</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/55">{featured.description}</p>
              <div className="mt-8"><Countdown target={featured.starts_at} /></div>
              <div className="mt-8"><Link href="/events" className="button-secondary">All events <ArrowRight size={15} /></Link></div>
            </div>
          </div>
        </section>
      )}

      {/* ── Events grid ── */}
      <section className="section-pad bg-[#09050d]">
        <div className="site-shell">
          <div className="flex items-end justify-between gap-5">
            <SectionHeading eyebrow="Upcoming" title="Meet us on the dance floor." />
            <Link href="/events" className="hidden flex-shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 transition hover:text-white sm:flex">All dates <ArrowRight className="ml-1" size={15} /></Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {events.slice(0, 3).map((event, i) => (
              <Reveal key={event.id} delay={i * .07}><EventCard event={event} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="section-pad site-shell">
        <div className="flex items-end justify-between gap-5">
          <SectionHeading eyebrow="In the room" title="The lights. The people. The feeling." copy="A glimpse of TWB nights, production builds and the moments between the first cue and final track." />
        </div>
        <div className="mt-12 grid auto-rows-[210px] grid-cols-2 gap-3 md:auto-rows-[280px] md:grid-cols-4">
          {gallery.map((image, i) => (
            <Reveal key={image} className={i === 2 ? "relative col-span-2 row-span-2 overflow-hidden rounded-2xl" : "relative overflow-hidden rounded-2xl"}>
              <Image
                src={assetPath(`/assets/${image}`)}
                alt={`TWB Productions event moment ${i + 1}`}
                fill
                sizes={i === 2 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                className="object-cover transition duration-700 hover:scale-105"
              />
              {i === 2 && (
                <span className="absolute inset-0 grid place-items-center bg-black/15">
                  <span className="grid size-16 place-items-center rounded-full border border-white/40 bg-black/30 backdrop-blur transition duration-300 hover:border-pink/60 hover:bg-black/50">
                    <Play fill="white" size={21} />
                  </span>
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-pad border-y border-white/8 bg-panel/40">
        <div className="site-shell">
          <SectionHeading eyebrow="Client notes" title="Good energy travels." />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * .07} className="glass rounded-2xl p-7">
                <div className="flex items-center justify-between">
                  <Quote className="text-pink" size={25} />
                  <span className="text-base text-pink" aria-label="5 out of 5 stars">★★★★★</span>
                </div>
                <blockquote className="mt-6 text-lg leading-8 text-white/80">&ldquo;{item.quote}&rdquo;</blockquote>
                <p className="mt-8 text-xs font-bold uppercase tracking-widest">{item.name}</p>
                <p className="mt-1 text-xs text-white/35">{item.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section-pad relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_50%,rgba(139,92,246,.14),transparent)]" />
        <div className="site-shell relative text-center">
          <Reveal>
            <p className="eyebrow">Your date. Your room. Your story.</p>
            <h2 className="display mx-auto mt-5 max-w-4xl text-6xl sm:text-8xl">Let&apos;s make it impossible to stand still.</h2>
            <Link href="/book" className="button-primary mt-9">Start your booking <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
