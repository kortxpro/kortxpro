"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";
import { letterReveal, staggerFast, fadeUp, blurIn } from "@/lib/animations";

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const title1 = t("title1");
  const title2 = t("title2");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-bg" />
        {/* Main gradient orb */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />
        {/* Second orb */}
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 100, -40, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }}
        />
        {/* Third orb */}
        <motion.div
          animate={{
            x: [0, 50, -100, 0],
            y: [0, -60, 80, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
        />
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-50" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto max-w-[1560px] px-6 lg:px-10 w-full pt-32 pb-20"
      >
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            variants={blurIn}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm text-xs font-mono text-text-secondary uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient animate-pulse-glow" />
              {t("badge")}
            </span>
          </motion.div>

          {/* Title with letter reveal */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em]">
              <span className="block">
                {title1.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterReveal}
                    custom={i}
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="block text-gradient">
                {title2.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterReveal}
                    custom={i + title1.length}
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <GradientButton href="/portfolio" size="lg">
              {t("cta1")}
            </GradientButton>
            <GradientButton href="/contato" variant="outline" size="lg">
              {t("cta2")}
            </GradientButton>
          </motion.div>
        </div>

        {/* Floating video element (like Stormbrain style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden lg:block absolute right-10 bottom-32 w-[280px] h-[180px]"
        >
          <div className="relative w-full h-full rounded-[24px] overflow-hidden border border-border/50 shadow-2xl shadow-indigo/10">
            <div className="absolute inset-0 mesh-gradient opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/5 cursor-pointer hover:scale-110 transition-transform">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                  <path d="M15 9L1 17V1L15 9Z" fill="white" fillOpacity="0.8" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-6 lg:left-10 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-text-muted/30 flex justify-center pt-1.5"
          >
            <motion.div
              animate={{ opacity: [1, 0], y: [0, 12] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-2 rounded-full bg-text-muted"
            />
          </motion.div>
          <span className="text-[11px] font-mono text-text-muted uppercase tracking-widest">
            {t("scroll")}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
