"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectMockup, type MockupVariant } from "@/components/ui/ProjectMockup";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

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
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text">
            {t("headline")}
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            {t("sub")}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-accent text-white"
                  : "bg-bg-elevated text-text-secondary hover:text-white border border-white/[0.06]"
              }`}
            >
              {t(`filter.${filter}`)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.key}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group p-5 rounded-2xl bg-bg-elevated border border-white/[0.06] hover:border-accent/30 transition-colors duration-500"
              >
                <ProjectMockup variant={project.variant} />
                <div className="mt-4">
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">
                    {t(`filter.${project.category}`)}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {t(`projects.${project.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
