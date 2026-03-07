"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function AboutContent() {
  const t = useTranslations("about");

  return (
    <div className="pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-20 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">{t("headline")}</h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">{t("sub")}</p>
          <div className="flex gap-4 mt-8">
            <Link href="/servicos" className="text-sm font-medium bg-black text-white px-6 py-2.5 rounded-full hover:bg-black/80 transition-colors">
              {t("headline").includes("Transformamos") ? "Ver serviços" : "View services"}
            </Link>
            <Link href="/contato" className="text-sm font-medium border border-border text-black px-6 py-2.5 rounded-full hover:bg-surface transition-colors">
              {t("headline").includes("Transformamos") ? "Fale conosco" : "Get in touch"}
            </Link>
          </div>
        </motion.div>

        {/* Story */}
        <motion.section
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-24 border-t border-border pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-black">
              {t("story.headline")}
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="text-text-secondary leading-relaxed">{t("story.p1")}</p>
              <p className="text-text-secondary leading-relaxed">{t("story.p2")}</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Values */}
        <section className="mb-24">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-2xl md:text-3xl font-bold text-black mb-10"
          >
            {t("values.headline")}
          </motion.h2>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {(["1", "2", "3", "4"] as const).map((key, i) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="bg-surface rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mb-5">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {t(`values.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {t(`values.items.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Team */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="border-t border-border pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              {t("team.headline")}
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              {t("team.description")}
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
