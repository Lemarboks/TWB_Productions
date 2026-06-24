import { getSupabasePublic } from "@/lib/supabase";
import { assetPath } from "@/lib/paths";
import type { Event } from "@/types/database";
const fallbackEvents: Event[] = [
  { id: "sample-1", title: "Exclusive Saturdays", slug: "exclusive-saturdays", description: "Amapiano meets R&B in a room built for late-night energy.", venue: "Cape Town", city: "Cape Town", starts_at: "2027-02-06T20:00:00+02:00", image_url: assetPath("/assets/work-event-exclusive-saturdays.jpg"), ticket_url: null, status: "published", featured: true },
  { id: "sample-2", title: "Friday Service", slug: "friday-service", description: "The backyard edition — selectors, people and pure atmosphere.", venue: "Cape Town", city: "Cape Town", starts_at: "2027-03-12T19:00:00+02:00", image_url: assetPath("/assets/work-event-friday-service.jpg"), ticket_url: null, status: "published", featured: false },
  { id: "sample-3", title: "Student Fest", slug: "student-fest", description: "A full-production campus experience powered by TWB.", venue: "Cape Town", city: "Cape Town", starts_at: "2027-04-10T16:00:00+02:00", image_url: assetPath("/assets/work-event-student-fest.jpg"), ticket_url: null, status: "published", featured: false },
];
export async function getUpcomingEvents(): Promise<Event[]> { const supabase = getSupabasePublic(); if (!supabase) return fallbackEvents; const { data, error } = await supabase.from("events").select("*").eq("status", "published").gte("starts_at", new Date().toISOString()).order("starts_at").limit(12); if (error) { console.error("Unable to load events", error.message); return fallbackEvents; } return data?.length ? data as Event[] : fallbackEvents; }
