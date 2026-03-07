"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { GradientButton } from "@/components/ui/GradientButton";

const icons = [
  // Web
  <svg key="web" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  // Apps
  <svg key="apps" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
  // Systems
  <svg key="sys" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 14h.01M10 14h.01"/></svg>,
  // Branding
  <svg key="brand" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  // E-commerce
  <svg key="ecom" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>,
  // AI
  <svg key="ai" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93"/><path d="M8.24 6.93A4 4 0 0112 2"/><circle cx="12" cy="12" r="3"/><path d="M12 15v7"/><path d="M8 18l4-3 4 3"/></svg>,
];

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as Array<{
    title: string;
    description: string;
    tags: string[];
  }>;

  return (
    <section className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-[1560px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 lg:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="block text-xs font-mono uppercase tracking-widest text-indigo mb-4"
          >
            {t("label")}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-text-secondary text-lg max-w-xl"
          >
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glow-card p-8 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-subtle flex items-center justify-center text-indigo mb-6 group-hover:scale-110 transition-transform duration-400">
                {icons[i]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full border border-border text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <GradientButton href="/servicos" variant="outline">
            {t("cta")}
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
