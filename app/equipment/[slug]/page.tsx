import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { equipment, getEquipment } from "@/lib/equipment";

export function generateStaticParams() { return equipment.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const item = getEquipment((await params).slug); if (!item) return {}; return { title: `${item.name} Hire`, description: `${item.description} Available from TWB Productions in Cape Town.`, alternates: { canonical: `/equipment/${item.slug}` } }; }

export default async function EquipmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const item = getEquipment((await params).slug); if (!item) notFound();
  return <main className="min-h-screen pb-24 pt-32"><div className="site-shell"><Link href="/equipment" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/45 transition hover:text-white"><ArrowLeft size={15} /> Equipment catalogue</Link><div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center"><div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle,rgba(139,92,246,.2),transparent_67%)]"><Image src={item.image} alt={item.alt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-8 sm:p-14" /></div><div><p className="eyebrow">{item.category} · Equipment hire</p><h1 className="display gradient-text mt-5 text-6xl sm:text-8xl">{item.name}</h1><p className="mt-6 max-w-xl text-base leading-8 text-white/60">{item.description}</p><ul className="mt-8 space-y-4">{item.features.map(feature => <li key={feature} className="flex items-center gap-3 text-sm text-white/70"><span className="grid size-6 place-items-center rounded-full bg-cyan/15 text-cyan"><Check size={14} /></span>{feature}</li>)}</ul><div className="mt-10 flex flex-wrap gap-3"><Link href={`/book?equipment=${item.slug}`} className="button-primary">Request hire quote <ArrowRight size={16} /></Link><a href="mailto:info@twbproductions.co.za" className="button-secondary">Email TWB</a></div><p className="mt-5 text-xs leading-5 text-white/35">Availability and pricing depend on the event date, collection or delivery requirements, and production support needed.</p></div></div></div></main>;
}
