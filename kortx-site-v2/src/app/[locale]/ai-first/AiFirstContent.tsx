"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { clipReveal, fadeUp, viewportOnce, staggerContainer } from "@/lib/animations";

export function AiFirstContent() {
  const t = useTranslations("aiFirst");

  return (
    <div className="pt-32 pb-24">
      {/* Hero — tech-forward heavy mono */}
      <div className="px-6 md:px-10 max-w-[1440px] mx-auto mb-24">
        <motion.h1
          variants={clipReveal}
          initial="hidden"
          animate="visible"
          className="font-display text-display-lg text-white"
        >
          {t("headline")}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 font-mono text-text-secondary max-w-2xl"
        >
          {t("sub")}
        </motion.p>
      </div>

      {/* What it means */}
      <div className="px-6 md:px-10 max-w-[1440px] mx-auto mb-24">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2 variants={fadeUp} className="font-mono text-lg text-accent mb-4">
            {t("what.headline")}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed text-lg mb-16 max-w-3xl">
            {t("what.description")}
          </motion.p>
        </motion.div>
      </div>

      {/* Capabilities — full-width blocks with big numbers, mono titles */}
      {(["1", "2", "3", "4"] as const).map((key, i) => {
        const num = String(i + 1).padStart(2, "0");
        return (
          <motion.div
            key={key}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className={`py-16 md:py-20 px-6 md:px-10 ${i % 2 === 0 ? "bg-black" : "bg-surface"}`}
          >
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
              <div>
                <span className="font-display text-[4rem] md:text-[6rem] leading-none text-accent/10">{num}</span>
                <h3 className="font-mono text-lg text-white mt-2">
                  {t(`what.items.${key}.title`)}
                </h3>
              </div>
              <div className="flex items-center">
                <p className="text-text-secondary leading-relaxed text-lg">
                  {t(`what.items.${key}.description`)}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* CTA — terminal aesthetic */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="py-32 px-6 md:px-10 bg-black"
      >
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-display-md text-white mb-8">
            {t("cta.headline")}
          </h2>
          <a
            href="mailto:contato@kortx.pro"
            className="font-mono text-lg text-accent inline-flex items-center gap-1 group"
          >
            <span className="text-text-muted">&gt; </span>
            <span>contato@kortx.pro</span>
            <span
              className="inline-block w-2 h-5 bg-accent ml-1"
              style={{ animation: "blink 1s step-end infinite" }}
            />
          </a>
        </div>
      </motion.section>
    </div>
  );
}
