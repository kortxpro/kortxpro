"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";
import { TypeWriter } from "@/components/effects/TypeWriter";
import { letterReveal, staggerFast, fadeUp } from "@/lib/animations";

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
  const badges = t.raw("badge") as string[];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-bg"
    >
      {/* Subtle grid pattern */}
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

          {/* Right — Neural Network with AI voice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-[550px] aspect-square">
              <NeuralNetwork
                particleCount={100}
                connectionDistance={170}
                particleColor="#6366f1"
                accentColor="#06b6d4"
                mouseRadius={220}
              />

              {/* AI voice — typewriter coming from the neural network */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
              >
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo animate-pulse-glow shrink-0" />
                  <TypeWriter
                    texts={badges}
                    speed={45}
                    deleteSpeed={25}
                    pauseTime={2500}
                    className="text-xs font-mono text-indigo/80 whitespace-nowrap"
                  />
                </div>
              </motion.div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[8%] left-[-5%] z-10 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl px-4 py-3 pointer-events-none"
              >
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Projetos</p>
                <p className="text-lg font-bold text-text">150+</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[12%] right-[-8%] z-10 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl px-4 py-3 pointer-events-none"
              >
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Satisfação</p>
                <p className="text-lg font-bold text-gradient">98%</p>
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
