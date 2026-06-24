"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { useState } from "react";
import { navItems } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);


  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
    <div className="site-shell flex h-20 items-center justify-between">
      <Link href="/" className="relative z-10 leading-none" aria-label="TWB Productions home"><span className="display block text-3xl tracking-wide">TWB</span><span className="block text-[8px] font-bold uppercase tracking-[.4em] text-pink">Productions</span></Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{navItems.map(item => <Link className="text-xs font-bold uppercase tracking-[.14em] text-white/65 transition hover:text-white" key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <Link href="/book" className="button-primary hidden !min-h-11 lg:inline-flex">Book TWB</Link>
      <button type="button" className="relative z-10 grid size-11 place-items-center rounded-full border border-white/15 lg:hidden" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav id="mobile-navigation" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="absolute inset-x-0 top-20 flex min-h-[calc(100vh-5rem)] flex-col bg-ink px-5 py-10 lg:hidden" aria-label="Mobile navigation">{navItems.map((item, index) => <motion.div key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .05 }}><Link href={item.href} onClick={() => setOpen(false)} className="display block border-b border-white/10 py-4 text-5xl text-white/85">{item.label}</Link></motion.div>)}<Link href="/book" onClick={() => setOpen(false)} className="button-primary mt-8">Book TWB</Link></motion.nav>}</AnimatePresence>
  </header>;
}


