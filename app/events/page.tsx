import type { Metadata } from "next";
import { EventCard } from "@/components/event-card";
import { getUpcomingEvents } from "@/lib/events";
export const metadata: Metadata = { title: "Upcoming Events", description: "Upcoming Amapiano and R&B events from TWB Productions in Cape Town.", alternates: { canonical: "/events" } };
export const revalidate = 300;
export default async function EventsPage() { const events = await getUpcomingEvents(); return <main className="min-h-screen pb-24 pt-36"><header className="site-shell"><p className="eyebrow">TWB calendar</p><h1 className="display gradient-text mt-5 max-w-4xl text-7xl sm:text-9xl">Upcoming events.</h1><p className="mt-6 max-w-xl text-sm leading-7 text-white/55">Amapiano, R&B and live experiences — powered by TWB and made for the room.</p></header><section className="site-shell mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{events.map((event, i) => <EventCard key={event.id} event={event} priority={i < 3} />)}</section></main>; }
