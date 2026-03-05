"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectMockup, type MockupVariant } from "@/components/ui/ProjectMockup";
import { clipReveal, fadeUp, scaleReveal, viewportOnce } from "@/lib/animations";

const projects: { key: string; variant: MockupVariant; category: string }[] = [
  { key: "1", variant: "site-law", category: "sites" },
  { key: "2", variant: "site-health", category: "sites" },
  { key: "3", variant: "site-realestate", category: "sites" },
  { key: "4", variant: "landing-saas", category: "landing" },
  { key: "5", variant: "landing-event", category: "landing" },
  { key: "6", variant: "app-internal", category: "apps" },
  { key: "7", variant: "app-field", category: "apps" },
  { key: "8", variant: "dashboard-finance", category: "dashboards" },
  { key: "9", variant: "system-logistics", category: "systems" },
];

const filters = ["all", "sites", "apps", "systems", "landing", "dashboards"] as const;

export function PortfolioContent() {
  const t = useTranslations("portfolio");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <div className="px-6 md:px-10 max-w-[1440px] mx-auto mb-12">
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

      {/* Filter: text links mono */}
      <div className="px-6 md:px-10 max-w-[1440px] mx-auto mb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 font-mono text-sm"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`transition-colors ${
                activeFilter === filter
                  ? "text-accent"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {t(`filter.${filter}`)}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Vertical list — each project ~60vh */}
      <div className="px-6 md:px-10 max-w-[1440px] mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.key}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Numbered divider */}
              {i > 0 && (
                <div className="flex items-center gap-4 my-12 md:my-16">
                  <span className="font-mono text-xs text-text-muted">
                    {String(i).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                  <span className="font-mono text-xs text-text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              )}

              <motion.div
                variants={scaleReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div>
                    <ProjectMockup variant={project.variant} />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-accent uppercase tracking-wider">
                      {t(`filter.${project.category}`)}
                    </span>
                    <h2 className="font-display text-display-sm text-white mt-2">
                      {t(`projects.${project.key}.title`)}
                    </h2>
                    <p className="mt-4 text-text-secondary leading-relaxed">
                      {t(`projects.${project.key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
