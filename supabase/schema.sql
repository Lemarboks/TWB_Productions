-- TWB Productions website schema
create extension if not exists "pgcrypto";

create type public.event_status as enum ('draft', 'published', 'cancelled');
create type public.lead_status as enum ('new', 'contacted', 'qualified', 'confirmed', 'closed');
create type public.subscriber_status as enum ('active', 'unsubscribed');

create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  venue text not null,
  city text not null default 'Cape Town',
  starts_at timestamptz not null,
  image_url text,
  ticket_url text,
  status public.event_status not null default 'draft',
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  event_type text not null,
  event_date date not null,
  venue text not null,
  guest_count integer not null check (guest_count > 0),
  budget text not null,
  services text[] not null default '{}',
  message text,
  source text not null default 'website',
  status public.lead_status not null default 'new',
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  status public.subscriber_status not null default 'active',
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index events_published_starts_at_idx on public.events (starts_at) where status = 'published';
create index bookings_status_created_at_idx on public.bookings (status, created_at desc);

alter table public.events enable row level security;
alter table public.bookings enable row level security;
alter table public.newsletter_subscribers enable row level security;

create policy "Published events are publicly readable" on public.events for select using (status = 'published');
-- Bookings and subscribers deliberately have no public policies. Server routes write with the service-role key.

create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;
create trigger events_set_updated_at before update on public.events for each row execute procedure public.set_updated_at();
create trigger bookings_set_updated_at before update on public.bookings for each row execute procedure public.set_updated_at();
create trigger subscribers_set_updated_at before update on public.newsletter_subscribers for each row execute procedure public.set_updated_at();

-- Manage events, leads and subscribers from the Supabase dashboard. Never expose the service-role key in the browser.
