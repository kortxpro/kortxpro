"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectMockup, type MockupVariant } from "@/components/ui/ProjectMockup";
import { fadeUp, viewportOnce } from "@/lib/animations";

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
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t("headline")}</h1>
          <p className="mt-4 text-lg text-text-secondary max-w-xl">{t("sub")}</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3 mb-12 font-mono text-sm"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 rounded-md transition-colors ${
                activeFilter === filter
                  ? "text-accent bg-accent/10"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {t(`filter.${filter}`)}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <motion.div
                key={project.key}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
              >
                <div className="p-4">
                  <ProjectMockup variant={project.variant} />
                </div>
                <div className="px-6 pb-6">
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">
                    {t(`filter.${project.category}`)}
                  </span>
                  <h2 className="text-lg font-semibold text-white mt-1">
                    {t(`projects.${project.key}.title`)}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {t(`projects.${project.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
