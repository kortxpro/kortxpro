"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const projectData = [
  { filter: "web", gradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)" },
  { filter: "mobile", gradient: "linear-gradient(135deg, #0a0a0a, #1a0a2e, #2d1b69)" },
  { filter: "ecommerce", gradient: "linear-gradient(135deg, #0d1117, #161b22, #21262d)" },
  { filter: "web", gradient: "linear-gradient(135deg, #1b1b2f, #162447, #1f4068)" },
  { filter: "web", gradient: "linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a1a3a)" },
  { filter: "systems", gradient: "linear-gradient(135deg, #111827, #1e293b, #0f172a)" },
];

export function PortfolioContent() {
  const t = useTranslations("portfolioPage");
  const tWork = useTranslations("work");
  const projects = tWork.raw("projects") as Array<{
    title: string;
    category: string;
    description: string;
  }>;
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "web", "mobile", "systems", "ecommerce"] as const;

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((_, i) => projectData[i]?.filter === activeFilter);

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="mx-auto max-w-[1560px] px-6 lg:px-10 mb-16 lg:mb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1] mb-6"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl text-text-secondary leading-relaxed max-w-2xl"
          >
            {t("subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-[1560px] px-6 lg:px-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm font-mono rounded-full border transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "border-indigo bg-indigo/10 text-white"
                  : "border-border text-text-muted hover:border-border-hover hover:text-text-secondary"
              }`}
            >
              {t(`filters.${filter}`)}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-[1560px] px-6 lg:px-10">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const originalIndex = projects.indexOf(project);
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden"
                    style={{ background: projectData[originalIndex]?.gradient }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      animate={{
                        background: [
                          `radial-gradient(circle at 30% 40%, rgba(99,102,241,0.4), transparent 60%)`,
                          `radial-gradient(circle at 70% 60%, rgba(168,85,247,0.4), transparent 60%)`,
                          `radial-gradient(circle at 30% 40%, rgba(99,102,241,0.4), transparent 60%)`,
                        ],
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient opacity-0 group-hover:opacity-15 transition-opacity duration-500" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-black/40 backdrop-blur-sm text-white/70 border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                      <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M4 12L12 4M12 4H6M12 4V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-card border border-border border-t-0 rounded-b-2xl">
                    <h3 className="text-base font-semibold tracking-tight mb-1">{project.title}</h3>
                    <p className="text-sm text-text-secondary line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
