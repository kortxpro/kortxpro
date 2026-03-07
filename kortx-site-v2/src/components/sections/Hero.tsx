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
      {/* Neural Network — full background, interactive */}
      <div className="absolute inset-0">
        <NeuralNetwork
          particleCount={120}
          connectionDistance={180}
          particleColor="#6366f1"
          accentColor="#06b6d4"
          mouseRadius={230}
        />
      </div>

      {/* Left readability overlay — fades text area only */}
      <div
        className="absolute inset-y-0 left-0 w-[65%] pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to right, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.85) 40%, rgba(5,5,5,0.5) 75%, transparent 100%)",
        }}
      />

      {/* Subtle bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to top, rgba(5,5,5,1) 0%, transparent 100%)",
        }}
      />

      {/* Content — pointer-events-none on wrapper, auto on interactive children */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-[2] mx-auto max-w-[1560px] px-6 lg:px-10 w-full pt-32 pb-20 pointer-events-none"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            variants={blurIn}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg/60 backdrop-blur-sm text-xs font-mono text-text-secondary uppercase tracking-widest">
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

          {/* CTAs — re-enable pointer events */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 pointer-events-auto"
          >
            <GradientButton href="/portfolio" size="lg">
              {t("cta1")}
            </GradientButton>
            <GradientButton href="/contato" variant="outline" size="lg">
              {t("cta2")}
            </GradientButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-6 lg:left-10 z-[2] flex items-center gap-3 pointer-events-none"
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
