"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function CTA() {
  const t = useTranslations("cta");
  const tf = useTranslations("footer");

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-surface">
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight"
        >
          {t("headline")}
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-4">
          <a
            href="mailto:contato@kortx.pro"
            className="text-lg md:text-xl text-text-secondary hover:text-black transition-colors"
          >
            contato@kortx.pro
          </a>
          <span className="text-text-muted">{tf("phone")}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
