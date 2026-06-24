export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className="eyebrow">{eyebrow}</p><h2 className="display mt-4 text-5xl sm:text-6xl lg:text-7xl">{title}</h2>{copy && <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">{copy}</p>}</div>;
}
