"use client";

import { useTranslations } from "next-intl";

export function Marquee() {
  const t = useTranslations("marquee");
  const items: string[] = t.raw("items");

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="relative py-8 border-y border-border overflow-hidden bg-surface">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 mx-6 text-sm font-mono uppercase tracking-widest text-text-muted"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo/50" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
