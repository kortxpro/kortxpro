"use client";

import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState("0");
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = numericPart;
    const duration = 2000;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setDisplay(current.toString() + suffix);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [inView, numericPart, suffix]);

  return <span>{display}</span>;
}

export function Stats() {
  const t = useTranslations("stats");
  const items = t.raw("items") as Array<{ value: string; label: string }>;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 border-y border-border">
      {/* Gradient line accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient opacity-40" />

      <div className="mx-auto max-w-[1560px] px-6 lg:px-10" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center lg:text-left"
            >
              <div className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.04em] text-gradient leading-none mb-3">
                <AnimatedNumber value={item.value} inView={inView} />
              </div>
              <p className="text-sm text-text-secondary font-mono uppercase tracking-widest">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
