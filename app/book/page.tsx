import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { BookingForm } from "@/components/forms/booking-form";

export const metadata: Metadata = {
  title: "Book a DJ or Event Production",
  description: "Book TWB Productions for DJ, sound, lighting and event production in Cape Town.",
  alternates: { canonical: "/book" },
};

const trustPoints = [
  { color: "bg-cyan", label: "We respond within 24 hours" },
  { color: "bg-pink", label: "Custom quote for every event" },
  { color: "bg-violet", label: "100% free to enquire" },
];

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_80%_10%,rgba(139,92,246,.16),transparent_35%)] pb-24 pt-36">
      <div className="site-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Booking enquiry</p>
          <h1 className="display mt-5 text-6xl sm:text-7xl">Tell us what the room needs to feel like.</h1>
          <p className="mt-6 text-sm leading-7 text-white/55">Share the essentials and we&apos;ll shape the right DJ and production package around your event.</p>
          <div className="mt-8 space-y-3 text-sm">
            <a href="mailto:info@twbproductions.co.za" className="flex items-center gap-3 text-white/65 transition hover:text-white">
              <Mail size={17} className="text-pink" /> info@twbproductions.co.za
            </a>
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27000000000"}`} className="flex items-center gap-3 text-white/65 transition hover:text-white">
              <MessageCircle size={17} className="text-cyan" /> WhatsApp TWB
            </a>
          </div>
          <ul className="mt-8 space-y-2.5">
            {trustPoints.map(({ color, label }) => (
              <li key={label} className="flex items-center gap-3 text-xs text-white/45">
                <span className={`size-1.5 shrink-0 rounded-full ${color}`} />
                {label}
              </li>
            ))}
          </ul>
        </div>
        <BookingForm />
      </div>
    </main>
  );
}
