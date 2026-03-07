"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, clipReveal } from "@/lib/animations";
import { GradientButton } from "@/components/ui/GradientButton";

const projectImages = [
  "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
  "linear-gradient(135deg, #0a0a0a, #1a0a2e, #2d1b69)",
  "linear-gradient(135deg, #0d1117, #161b22, #21262d)",
  "linear-gradient(135deg, #1b1b2f, #162447, #1f4068)",
  "linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a1a3a)",
  "linear-gradient(135deg, #111827, #1e293b, #0f172a)",
];

export function Work() {
  const t = useTranslations("work");
  const projects = t.raw("projects") as Array<{
    title: string;
    category: string;
    description: string;
  }>;

  return (
    <section className="relative py-32 lg:py-40 bg-surface">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 blur-[150px]"
        style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
      />

      <div className="mx-auto max-w-[1560px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20 gap-6"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="block text-xs font-mono uppercase tracking-widest text-indigo mb-4"
            >
              {t("label")}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-4"
            >
              {t("title")}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-lg max-w-xl"
            >
              {t("subtitle")}
            </motion.p>
          </div>
          <motion.div variants={fadeUp}>
            <GradientButton href="/portfolio" variant="outline">
              {t("cta")}
            </GradientButton>
          </motion.div>
        </motion.div>

        {/* Project Grid — 2 columns, 3 rows */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image/Gradient area */}
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={{ background: projectImages[i] }}
              >
                {/* Animated gradient mesh inside */}
                <motion.div
                  className="absolute inset-0 opacity-40"
                  animate={{
                    background: [
                      `radial-gradient(circle at 20% 50%, rgba(99,102,241,0.3), transparent 60%)`,
                      `radial-gradient(circle at 80% 50%, rgba(168,85,247,0.3), transparent 60%)`,
                      `radial-gradient(circle at 50% 80%, rgba(6,182,212,0.3), transparent 60%)`,
                      `radial-gradient(circle at 20% 50%, rgba(99,102,241,0.3), transparent 60%)`,
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                {/* Category badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-black/40 backdrop-blur-sm text-white/70 border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Arrow on hover */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 bg-card border border-border border-t-0 rounded-b-2xl">
                <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
