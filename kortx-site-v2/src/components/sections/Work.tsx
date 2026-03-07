"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ProjectMockup, type MockupVariant } from "@/components/ui/ProjectMockup";
import { TextButton } from "@/components/ui/TextButton";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const projects: { key: string; variant: MockupVariant; bg: string; size: "large" | "medium" | "small" }[] = [
  { key: "1", variant: "site-law", bg: "#1a0f2e", size: "large" },
  { key: "2", variant: "site-health", bg: "#0f2922", size: "medium" },
  { key: "3", variant: "site-realestate", bg: "#f0ece4", size: "medium" },
  { key: "4", variant: "landing-saas", bg: "#0f172a", size: "large" },
  { key: "5", variant: "landing-event", bg: "#2d1010", size: "medium" },
  { key: "6", variant: "app-internal", bg: "#e8e4de", size: "medium" },
  { key: "7", variant: "app-field", bg: "#0d2626", size: "large" },
  { key: "8", variant: "dashboard-finance", bg: "#15152e", size: "medium" },
];

export function Work() {
  const t = useTranslations("work");

  return (
    <section id="work" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">{t("headline")}</h2>
          <p className="mt-3 text-text-secondary max-w-xl">{t("sub")}</p>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            const isLight = project.bg.startsWith("#e") || project.bg.startsWith("#f");
            return (
              <motion.div
                key={project.key}
                variants={fadeUp}
                className={`rounded-2xl overflow-hidden group cursor-pointer ${
                  project.size === "large" ? "md:col-span-2" : ""
                }`}
                style={{ backgroundColor: project.bg }}
              >
                <div className={`p-6 md:p-10 ${project.size === "large" ? "md:flex md:items-center md:gap-10" : ""}`}>
                  {/* Mockup */}
                  <div className={`${project.size === "large" ? "md:w-3/5" : ""} mb-6 md:mb-0`}>
                    <div className="transform group-hover:scale-[1.02] transition-transform duration-500">
                      <ProjectMockup variant={project.variant} />
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`${project.size === "large" ? "md:w-2/5" : "mt-4"}`}>
                    <h3 className={`text-xl md:text-2xl font-bold ${isLight ? "text-black" : "text-white"}`}>
                      {t(`projects.${project.key}.title`)}
                    </h3>
                    <p className={`mt-2 text-sm leading-relaxed ${isLight ? "text-black/60" : "text-white/60"}`}>
                      {t(`projects.${project.key}.description`)}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {(t.raw(`projects.${project.key}.tags`) as string[]).map((tag: string, j: number) => (
                        <span
                          key={j}
                          className={`font-mono text-xs px-2.5 py-1 rounded-full ${
                            isLight
                              ? "bg-black/5 text-black/50"
                              : "bg-white/10 text-white/50"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex justify-center mt-12"
        >
          <TextButton href="/portfolio">{t("viewAll")}</TextButton>
        </motion.div>
      </div>
    </section>
  );
}
