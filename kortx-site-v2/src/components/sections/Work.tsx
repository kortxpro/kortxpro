"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ProjectMockup, type MockupVariant } from "@/components/ui/ProjectMockup";
import { TextButton } from "@/components/ui/TextButton";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const projects: { key: string; variant: MockupVariant }[] = [
  { key: "1", variant: "site-law" },
  { key: "2", variant: "site-health" },
  { key: "3", variant: "site-realestate" },
  { key: "4", variant: "landing-saas" },
  { key: "5", variant: "landing-event" },
  { key: "6", variant: "app-internal" },
];

export function Work() {
  const t = useTranslations("work");

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t("headline")}</h2>
          <p className="mt-2 text-text-secondary max-w-xl">{t("sub")}</p>
          <p className="mt-2 font-mono text-xs text-text-muted">{t("confidential")}</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.key}
              variants={fadeUp}
              className="bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-colors group"
            >
              <div className="p-4">
                <ProjectMockup variant={project.variant} />
              </div>
              <div className="px-6 pb-6">
                <span className="font-mono text-xs text-accent uppercase tracking-wider">
                  {t(`projects.${project.key}.category`)}
                </span>
                <h3 className="text-lg font-semibold text-white mt-1">
                  {t(`projects.${project.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {t(`projects.${project.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <div className="flex justify-end mt-8">
          <TextButton href="/portfolio">{t("viewAll")}</TextButton>
        </div>
      </div>
    </section>
  );
}
