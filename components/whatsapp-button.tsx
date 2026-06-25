import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27000000000";
  const message = encodeURIComponent("Hi TWB Productions, I'd like to enquire about a booking.");
  return <a href={`https://wa.me/${number}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Book TWB Productions on WhatsApp" className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_rgba(37,211,102,.35)] transition hover:-translate-y-1"><WhatsAppIcon size={29} /></a>;
}
