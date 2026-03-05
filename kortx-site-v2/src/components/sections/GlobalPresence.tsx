"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight, fadeUp, viewportOnce } from "@/lib/animations";

export function GlobalPresence() {
  const t = useTranslations("global");

  return (
    <section className="relative bg-surface py-32 md:py-40 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Orlando — LEFT-aligned */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-start gap-6"
        >
          <h3 className="font-display text-display-xl text-white leading-none">
            {t("orlando.city")}
          </h3>
          <div className="flex flex-col items-center gap-2 pt-4">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div
                className="absolute inset-0 w-3 h-3 rounded-full bg-accent"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
            </div>
          </div>
          <div className="pt-4">
            <span className="font-mono text-xs text-text-muted block">{t("orlando.country")}</span>
            <span className="font-mono text-xs text-text-muted/60">{t("orlando.coords")}</span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-center gap-6 my-16 md:my-24"
        >
          <div className="flex-1 h-px bg-border" />
          <div className="w-3 h-3 rounded-full border border-border" />
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Rio de Janeiro — RIGHT-aligned */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-start gap-6 justify-end"
        >
          <div className="pt-4 text-right">
            <span className="font-mono text-xs text-text-muted block">{t("rio.country")}</span>
            <span className="font-mono text-xs text-text-muted/60">{t("rio.coords")}</span>
          </div>
          <div className="flex flex-col items-center gap-2 pt-4">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div
                className="absolute inset-0 w-3 h-3 rounded-full bg-accent"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
            </div>
          </div>
          <h3 className="font-display text-display-xl text-white leading-none text-right">
            {t("rio.city")}
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
