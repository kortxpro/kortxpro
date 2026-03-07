"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Array<{
    quote: string;
    author: string;
    company: string;
  }>;

  return (
    <section className="relative py-32 lg:py-40 bg-surface overflow-hidden">
      <div className="mx-auto max-w-[1560px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 lg:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="block text-xs font-mono uppercase tracking-widest text-indigo mb-4"
          >
            {t("label")}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.1]"
          >
            {t("title")}
          </motion.h2>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative p-8 lg:p-10 rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-400"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-6xl font-serif text-text-muted/10 leading-none select-none">
                &ldquo;
              </div>

              {/* Gradient accent line */}
              <div className="w-10 h-0.5 bg-gradient rounded-full mb-6 opacity-60 group-hover:w-16 transition-all duration-500" />

              <blockquote className="text-lg lg:text-xl leading-relaxed text-text mb-8 font-light">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-subtle border border-border flex items-center justify-center">
                  <span className="text-xs font-bold text-indigo">
                    {item.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-text">{item.author}</p>
                  <p className="text-xs text-text-muted">{item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
