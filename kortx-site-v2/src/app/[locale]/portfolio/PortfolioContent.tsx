"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectMockup, type MockupVariant } from "@/components/ui/ProjectMockup";
import { fadeUp, viewportOnce } from "@/lib/animations";

const projects: { key: string; variant: MockupVariant; category: string; bg: string }[] = [
  { key: "1", variant: "site-law", category: "sites", bg: "#1a0f2e" },
  { key: "2", variant: "site-health", category: "sites", bg: "#0f2922" },
  { key: "3", variant: "site-realestate", category: "branding", bg: "#f0ece4" },
  { key: "4", variant: "landing-saas", category: "saas", bg: "#0f172a" },
  { key: "5", variant: "landing-event", category: "sites", bg: "#2d1010" },
  { key: "6", variant: "app-internal", category: "saas", bg: "#e8e4de" },
  { key: "7", variant: "app-field", category: "apps", bg: "#0d2626" },
  { key: "8", variant: "dashboard-finance", category: "dashboards", bg: "#15152e" },
  { key: "9", variant: "system-logistics", category: "systems", bg: "#111111" },
];

const filters = ["all", "sites", "apps", "systems", "saas", "dashboards", "branding"] as const;

export function PortfolioContent() {
  const t = useTranslations("portfolio");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black">{t("headline")}</h1>
          <p className="mt-4 text-lg text-text-secondary max-w-xl">{t("sub")}</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 mb-14 font-mono text-sm"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                activeFilter === filter
                  ? "bg-black text-white"
                  : "bg-surface text-text-muted hover:text-black"
              }`}
            >
              {t(`filter.${filter}`)}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project) => {
              const isLight = project.bg.startsWith("#e") || project.bg.startsWith("#f");
              return (
                <motion.div
                  key={project.key}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl overflow-hidden group cursor-pointer"
                  style={{ backgroundColor: project.bg }}
                >
                  <div className="p-6 md:p-8">
                    <div className="transform group-hover:scale-[1.02] transition-transform duration-500 mb-6">
                      <ProjectMockup variant={project.variant} />
                    </div>
                    <div>
                      <span className={`font-mono text-xs uppercase tracking-wider ${isLight ? "text-black/40" : "text-white/40"}`}>
                        {t(`filter.${project.category}`)}
                      </span>
                      <h2 className={`text-xl font-bold mt-1 ${isLight ? "text-black" : "text-white"}`}>
                        {t(`projects.${project.key}.title`)}
                      </h2>
                      <p className={`mt-2 text-sm leading-relaxed ${isLight ? "text-black/60" : "text-white/60"}`}>
                        {t(`projects.${project.key}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
