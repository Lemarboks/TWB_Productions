"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { newsletterSchema, type NewsletterInput } from "@/lib/validation";
export function NewsletterForm() {
  const [done, setDone] = useState(false); const [serverError, setServerError] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema) });
  const submit = async (data: NewsletterInput) => { setServerError(""); const response = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); if (!response.ok) return setServerError("Unable to subscribe right now."); setDone(true); };
  if (done) return <p className="mt-5 flex items-center gap-2 text-sm text-cyan"><Check size={16} /> You&apos;re on the list.</p>;
  return <form className="mt-5" onSubmit={handleSubmit(submit)} noValidate><div className="flex rounded-full border border-white/15 bg-white/5 p-1"><input className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/30" type="email" placeholder="Email address" aria-label="Email address" {...register("email")} /><button className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-ink disabled:opacity-50" disabled={isSubmitting} aria-label="Subscribe"><ArrowRight size={17} /></button></div>{(errors.email || serverError) && <p className="mt-2 text-xs text-pink">{errors.email?.message ?? serverError}</p>}<input className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} /></form>;
}
