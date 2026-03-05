"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { clipReveal, slideFromLeft, slideFromRight, fadeUp, viewportOnce, staggerContainer } from "@/lib/animations";

export function AboutContent() {
  const t = useTranslations("about");

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
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
          className="mt-4 text-text-secondary max-w-xl text-lg"
        >
          {t("sub")}
        </motion.p>
      </div>

      {/* Story — asymmetric 60/40 */}
      <motion.section
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32"
      >
        <motion.h2 variants={fadeUp} className="font-display text-display-sm text-white mb-12">
          {t("story.headline")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Left 60% — text */}
          <div className="md:col-span-3 space-y-6">
            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed text-lg">
              {t("story.p1")}
            </motion.p>
            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed text-lg">
              {t("story.p2")}
            </motion.p>
          </div>
          {/* Right 40% — accent bar + pull quote */}
          <motion.div variants={slideFromRight} className="md:col-span-2 flex gap-6">
            <div className="w-px bg-accent shrink-0" />
            <blockquote className="font-display text-display-sm text-white/80 leading-snug">
              &ldquo;Software que não funciona não é software.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </motion.section>

      {/* Values — 4 full-width blocks alternating left/right */}
      <section className="mb-32">
        <div className="px-6 md:px-10 max-w-[1440px] mx-auto mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-display text-display-sm text-white"
          >
            {t("values.headline")}
          </motion.h2>
        </div>

        {(["1", "2", "3", "4"] as const).map((key, i) => {
          const num = String(i + 1).padStart(2, "0");
          const isRight = i % 2 === 1;
          const animation = isRight ? slideFromRight : slideFromLeft;

          return (
            <motion.div
              key={key}
              variants={animation}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className={`py-16 md:py-20 px-6 md:px-10 ${i % 2 === 0 ? "bg-black" : "bg-surface"}`}
            >
              <div className={`max-w-[1440px] mx-auto flex flex-col md:flex-row gap-8 md:gap-20 ${isRight ? "md:flex-row-reverse md:text-right" : ""}`}>
                <div className="md:w-1/3">
                  <span className="font-mono text-sm text-text-muted">{num}</span>
                  <h3 className="font-display text-display-sm text-white mt-2">
                    {t(`values.items.${key}.title`)}
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {t(`values.items.${key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Team — editorial block */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="px-6 md:px-10 max-w-[1440px] mx-auto"
      >
        <div className="border-t border-border pt-16">
          <h2 className="font-display text-display-sm text-white mb-4">
            {t("team.headline")}
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl text-lg">
            {t("team.description")}
          </p>
        </div>
      </motion.section>
    </div>
  );
}
