# TWB Productions

Production-ready marketing and booking site built with Next.js, TypeScript, Tailwind CSS, Framer Motion, Supabase, React Hook Form, Zod and Resend.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and supply real credentials.
3. Run `supabase/schema.sql` in the Supabase SQL editor.
4. Start the app with `npm run dev`.

Without Supabase variables, public event pages use branded sample events. Booking and newsletter routes return a clear service-unavailable response so leads are never silently lost.

## Supabase administration

The Supabase dashboard is the initial admin surface. The schema includes `events`, `bookings`, and `newsletter_subscribers`, enum-backed statuses, indexes, timestamps and row-level security. Anonymous users can only read published events. Server-only form writes use `SUPABASE_SERVICE_ROLE_KEY`.

Add an event in the dashboard with `status = published`; it appears automatically on the website. Use a public Storage URL in `image_url`, or a normal HTTPS image URL whose host is allowed in `next.config.ts`.

## Email

Verify the sending domain in Resend, then set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `BOOKING_NOTIFICATION_EMAIL`. Booking storage succeeds independently of email notification delivery.

## Vercel deployment

Import the repository in Vercel, add every variable from `.env.example`, and deploy. Set `NEXT_PUBLIC_SITE_URL` to the final production origin. The included configuration selects the Cape Town region and adds conservative security headers.

Before launch, replace the placeholder WhatsApp number and sample social links with the official TWB accounts. Run `npm run lint`, `npm run typecheck`, and `npm run build` for release verification.
