"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const faqKeys = ["1", "2", "3", "4", "5", "6"] as const;

export function GlobalPresence() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-black mb-12"
          >
            {t("headline")}
          </motion.h2>

          <div className="divide-y divide-border">
            {faqKeys.map((key, i) => (
              <motion.div key={key} variants={fadeUp}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-4 group"
                >
                  <span className="text-base md:text-lg font-medium text-black group-hover:text-text-secondary transition-colors pr-4">
                    {t(`items.${key}.question`)}
                  </span>
                  <span className="text-2xl text-text-muted shrink-0 leading-none mt-0.5 transition-transform duration-300" style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-text-secondary leading-relaxed max-w-2xl">
                        {t(`items.${key}.answer`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
