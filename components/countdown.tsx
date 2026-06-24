"use client";
import { useEffect, useState } from "react";

export function Countdown({ target }: { target: string }) {

  const [distance, setDistance] = useState<number | null>(null);
  useEffect(() => { const timer = setInterval(() => setDistance(Math.max(0, new Date(target).getTime() - Date.now())), 1000); return () => clearInterval(timer); }, [target]);
  if (distance === null) return <div className="h-16" aria-hidden="true" />;
  const units = [{ label: "Days", value: Math.floor(distance / 86400000) }, { label: "Hours", value: Math.floor(distance / 3600000) % 24 }, { label: "Min", value: Math.floor(distance / 60000) % 60 }, { label: "Sec", value: Math.floor(distance / 1000) % 60 }];
  if (distance === 0) return <p className="eyebrow">Doors are open</p>;
  return <div className="flex gap-5" role="timer" aria-label="Time until event">{units.map(unit => <div key={unit.label}><strong className="display block text-3xl sm:text-4xl">{String(unit.value).padStart(2,"0")}</strong><span className="text-[9px] font-bold uppercase tracking-[.16em] text-white/45">{unit.label}</span></div>)}</div>;
}



