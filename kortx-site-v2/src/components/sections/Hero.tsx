"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";
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
      className="relative min-h-screen flex items-center overflow-hidden bg-bg"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto max-w-[1560px] px-6 lg:px-10 w-full pt-32 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Text */}
          <div>
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

            {/* Title */}
            <motion.div
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              className="mb-6"
            >
              <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
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
                <span className="block">
                  {title2.split("").map((char, i) => {
                    const kortxStart = title2.indexOf("KORT.X");
                    const isKortx =
                      kortxStart !== -1 &&
                      i >= kortxStart &&
                      i < kortxStart + 6;
                    return (
                      <motion.span
                        key={i}
                        variants={letterReveal}
                        custom={i + title1.length}
                        className={`inline-block ${isKortx ? "text-gradient" : ""}`}
                        style={{ whiteSpace: char === " " ? "pre" : undefined }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-xl mb-10"
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

          {/* Right — Neural Network contained */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-[4/3] max-w-[600px] rounded-3xl overflow-hidden border border-border/30">
              {/* Dark base inside the container */}
              <div className="absolute inset-0 bg-bg" />

              {/* Neural Network canvas */}
              <NeuralNetwork
                particleCount={100}
                connectionDistance={160}
                particleColor="#6366f1"
                accentColor="#06b6d4"
                mouseRadius={200}
              />

              {/* Subtle inner glow at edges */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 80px rgba(99,102,241,0.06)",
                }}
              />

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 z-10 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl px-4 py-3 pointer-events-none"
              >
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Projetos</p>
                <p className="text-lg font-bold text-text">150+</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 z-10 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl px-4 py-3 pointer-events-none"
              >
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Satisfação</p>
                <p className="text-lg font-bold text-gradient">98%</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 z-10 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl px-4 py-3 pointer-events-none"
              >
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Países</p>
                <p className="text-lg font-bold text-text">12</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-6 lg:left-10 z-10 flex items-center gap-3"
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
    </section>
  );
}
