import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { newsletterSchema } from "@/lib/validation";
export async function POST(request: Request) {
  try { const parsed = newsletterSchema.safeParse(await request.json()); if (!parsed.success) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 }); if (parsed.data.website) return NextResponse.json({ ok: true }); const supabase = getSupabaseAdmin(); if (!supabase) return NextResponse.json({ error: "Newsletter service is not configured yet." }, { status: 503 }); const { error } = await supabase.from("newsletter_subscribers").upsert({ email: parsed.data.email.toLowerCase(), status: "active", source: "website" }, { onConflict: "email" }); if (error) throw error; return NextResponse.json({ ok: true }, { status: 201 }); } catch (error) { console.error("Newsletter signup failed", error); return NextResponse.json({ error: "Unable to subscribe right now." }, { status: 500 }); }
}
