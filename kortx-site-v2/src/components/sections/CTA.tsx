"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { clipReveal, fadeUp, viewportOnce } from "@/lib/animations";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="relative bg-black noise-overlay py-32 md:py-40 px-6 md:px-10 overflow-hidden">
      {/* Accent line full-width top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-accent/30" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.h2
          variants={clipReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-display text-display-lg text-white max-w-[18ch]"
        >
          {t("headline")}
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12"
        >
          <a
            href="mailto:contato@kortx.pro"
            className="font-mono text-lg md:text-xl text-accent inline-flex items-center gap-3 group"
          >
            <span>contato@kortx.pro</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
