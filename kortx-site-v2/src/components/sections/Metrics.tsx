"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

function useCounter(end: number, duration: number, inView: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let raf: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, inView]);

  return value;
}

function MetricItem({ numericValue, suffix, label, inView }: {
  numericValue: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const count = useCounter(numericValue, 1.5, inView);

  return (
    <motion.div variants={fadeUp} className="text-center">
      <span className="text-4xl md:text-5xl font-bold text-black">
        {count}{suffix}
      </span>
      <span className="block font-mono text-xs uppercase tracking-wider text-text-muted mt-2">
        {label}
      </span>
    </motion.div>
  );
}

export function Metrics() {
  const t = useTranslations("metrics");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const metrics = [
    { numericValue: 150, suffix: "+", label: t("projects") },
    { numericValue: 98, suffix: "%", label: t("satisfaction") },
    { numericValue: 8, suffix: "+", label: t("years") },
    { numericValue: 2, suffix: "", label: t("offices") },
  ];

  return (
    <section ref={ref} className="py-20 md:py-24 px-6 md:px-10 border-t border-border">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12"
      >
        {metrics.map((metric, i) => (
          <MetricItem key={i} {...metric} inView={inView} />
        ))}
      </motion.div>
    </section>
  );
}
