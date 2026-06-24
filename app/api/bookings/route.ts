import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import { bookingSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const parsed = bookingSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Please check the highlighted fields.", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
    if (parsed.data.website) return NextResponse.json({ ok: true });
    const { website: _, ...booking } = parsed.data; void _;
    const supabase = getSupabaseAdmin();
    if (!supabase) return NextResponse.json({ error: "Booking service is not configured yet." }, { status: 503 });
    const { error } = await supabase.from("bookings").insert({ name: booking.name, email: booking.email, phone: booking.phone, event_type: booking.eventType, event_date: booking.eventDate, venue: booking.venue, guest_count: booking.guestCount, budget: booking.budget, services: booking.services, message: booking.message ?? null, source: "website" });
    if (error) throw error;
    if (process.env.RESEND_API_KEY && process.env.BOOKING_NOTIFICATION_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({ from: process.env.RESEND_FROM_EMAIL ?? "TWB Bookings <onboarding@resend.dev>", to: process.env.BOOKING_NOTIFICATION_EMAIL, replyTo: booking.email, subject: `New TWB booking — ${booking.eventType} on ${booking.eventDate}`, text: [`Name: ${booking.name}`, `Email: ${booking.email}`, `Phone: ${booking.phone}`, `Date: ${booking.eventDate}`, `Venue: ${booking.venue}`, `Guests: ${booking.guestCount}`, `Budget: ${booking.budget}`, `Services: ${booking.services.join(", ")}`, `Message: ${booking.message ?? "—"}`].join("\n") });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) { console.error("Booking submission failed", error); return NextResponse.json({ error: "We couldn't submit your booking right now. Please contact us directly." }, { status: 500 }); }
}
