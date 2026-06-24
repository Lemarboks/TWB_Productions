import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Event } from "@/types/database";
import { formatEventDate } from "@/lib/utils";
import { assetPath } from "@/lib/paths";

export function EventCard({ event, priority = false }: { event: Event; priority?: boolean }) {
  return (
    <article className="group relative min-h-105 overflow-hidden rounded-2xl border border-white/10 bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-violet/30 hover:shadow-[0_20px_60px_rgba(0,0,0,.5),0_0_0_1px_rgba(139,92,246,.18)]">
      <Image
        src={event.image_url ?? assetPath("/assets/work-hero-background.png")}
        alt={`${event.title} event artwork`}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="eyebrow">{formatEventDate(event.starts_at)}</p>
        <h3 className="display mt-2 text-4xl">{event.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-xs text-white/55"><MapPin size={14} /> {event.venue}, {event.city}</p>
        {event.ticket_url
          ? <a className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-[.7rem] font-bold uppercase tracking-widest transition duration-200 hover:border-white/60 hover:bg-white/10" href={event.ticket_url} target="_blank" rel="noreferrer">Get tickets <ArrowUpRight size={14} /></a>
          : <Link className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 text-[.7rem] font-bold uppercase tracking-widest transition duration-200 hover:border-white/50 hover:bg-white/10" href="/book">Enquire <ArrowUpRight size={14} /></Link>
        }
      </div>
    </article>
  );
}
