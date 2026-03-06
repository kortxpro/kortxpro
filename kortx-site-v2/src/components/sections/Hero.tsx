"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[85vh] flex items-center bg-black noise-overlay overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="inline-block font-mono text-xs text-text-secondary uppercase tracking-widest mb-6"
          >
            {t("tag")}
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            KORT<span className="text-accent">.</span>X
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed"
          >
            {t("sub")}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="bg-accent text-black font-medium text-sm px-6 py-2.5 rounded-md hover:bg-accent/90 transition-colors"
            >
              {t("cta")}
            </Link>
            <Link
              href="/contato"
              className="border border-border text-white font-medium text-sm px-6 py-2.5 rounded-md hover:border-border-hover hover:bg-white/5 transition-colors"
            >
              {t("scroll")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
