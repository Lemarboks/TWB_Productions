"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { bookingSchema, type BookingFormInput, type BookingInput } from "@/lib/validation";
const options = ["DJ performance", "Sound system", "Lighting & staging", "Visuals / screens", "Live streaming"];
export function BookingForm() {
  const [complete, setComplete] = useState(false); const [serverError, setServerError] = useState("");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<BookingFormInput, unknown, BookingInput>({ resolver: zodResolver(bookingSchema), defaultValues: { services: [] } });
  const submit = async (data: BookingInput) => { setServerError(""); if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "true") { const body = [`Name: ${data.name}`, `Email: ${data.email}`, `Phone: ${data.phone}`, `Event: ${data.eventType}`, `Date: ${data.eventDate}`, `Venue: ${data.venue}`, `Guests: ${data.guestCount}`, `Budget: ${data.budget}`, `Services: ${data.services.join(", ")}`, `Message: ${data.message ?? ""}`].join("\n"); window.location.assign(`mailto:info@twbproductions.co.za?subject=${encodeURIComponent(`Booking enquiry — ${data.eventType}`)}&body=${encodeURIComponent(body)}`); return; } const response = await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); const result = await response.json() as { error?: string }; if (!response.ok) return setServerError(result.error ?? "We couldn't send your booking."); setComplete(true); reset(); };
  if (complete) return <div className="glass rounded-3xl p-8 text-center sm:p-12" role="status"><span className="mx-auto grid size-14 place-items-center rounded-full bg-cyan text-ink"><Check /></span><h2 className="display mt-6 text-4xl">Your date is on our radar.</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/55">Thanks for thinking of TWB. We’ll review the brief and get back to you as soon as possible.</p><button type="button" className="button-secondary mt-7" onClick={() => setComplete(false)}>Send another enquiry</button></div>;
  return <form className="glass rounded-3xl p-5 sm:p-8" onSubmit={handleSubmit(submit)} noValidate>
    <div className="grid gap-5 sm:grid-cols-2">
      <Field label="Your name" error={errors.name?.message}><input className="field" placeholder="Full name" autoComplete="name" {...register("name")} /></Field>
      <Field label="Email address" error={errors.email?.message}><input className="field" type="email" placeholder="you@example.com" autoComplete="email" {...register("email")} /></Field>
      <Field label="Phone / WhatsApp" error={errors.phone?.message}><input className="field" placeholder="+27" autoComplete="tel" {...register("phone")} /></Field>
      <Field label="Event type" error={errors.eventType?.message}><select className="field" defaultValue="" {...register("eventType")}><option value="" disabled>Choose one</option><option>Private celebration</option><option>Nightlife / club</option><option>Corporate event</option><option>Wedding</option><option>Festival / concert</option><option>Other</option></select></Field>
      <Field label="Event date" error={errors.eventDate?.message}><input className="field" type="date" {...register("eventDate")} /></Field>
      <Field label="Venue or area" error={errors.venue?.message}><input className="field" placeholder="Venue, Cape Town" {...register("venue")} /></Field>
      <Field label="Estimated guests" error={errors.guestCount?.message}><input className="field" type="number" min="1" placeholder="150" {...register("guestCount")} /></Field>
      <Field label="Budget range" error={errors.budget?.message}><select className="field" defaultValue="" {...register("budget")}><option value="" disabled>Select a range</option><option>Under R10,000</option><option>R10,000 – R25,000</option><option>R25,000 – R50,000</option><option>R50,000+</option><option>Let&apos;s discuss</option></select></Field>
    </div>
    <fieldset className="mt-6"><legend className="mb-3 text-xs font-bold uppercase tracking-widest text-white/65">What do you need?</legend><div className="grid gap-2 sm:grid-cols-2">{options.map(option => <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[.035] px-4 py-3 text-sm text-white/65" key={option}><input type="checkbox" value={option} className="accent-pink" {...register("services")} />{option}</label>)}</div>{errors.services && <p className="mt-1 text-xs text-pink">{errors.services.message}</p>}</fieldset>
    <Field label="Anything else we should know?" error={errors.message?.message} className="mt-6"><textarea className="field min-h-32 resize-y" placeholder="Tell us about the room, the mood and the moment…" {...register("message")} /></Field>
    <input className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register("website")} />{serverError && <p className="mt-4 text-sm text-pink" role="alert">{serverError}</p>}
    <button className="button-primary mt-6 w-full disabled:opacity-60" disabled={isSubmitting}>{isSubmitting ? <><LoaderCircle className="animate-spin" size={17} /> Sending brief</> : "Send booking brief"}</button>
  </form>;
}
function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) { return <label className={`block ${className}`}><span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/65">{label}</span>{children}{error && <span className="mt-1 block text-xs text-pink">{error}</span>}</label>; }

