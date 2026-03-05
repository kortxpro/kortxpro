"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { letterRevealContainer, letterRevealChild, clipReveal, fadeUp } from "@/lib/animations";

function LetterReveal({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={letterRevealContainer}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap ${className ?? ""}`}
      style={{ perspective: "600px" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterRevealChild}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={ref} className="relative min-h-screen bg-black noise-overlay overflow-hidden">
      {/* Giant KORT.X — left-aligned, bleeding off screen */}
      <motion.div
        style={{ y }}
        className="relative z-10 flex flex-col justify-end min-h-screen px-6 md:px-10 pb-12"
      >
        {/* Main title */}
        <div className="max-w-[1440px] mx-auto w-full">
          <h1 className="font-display text-display-hero leading-[0.85] tracking-[-0.04em] text-white -ml-1 md:-ml-3">
            <LetterReveal text="KORT" className="text-white" />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-accent"
            >
              .
            </motion.span>
            <LetterReveal text="X" className="text-white" />
          </h1>

          {/* Tagline */}
          <motion.p
            variants={clipReveal}
            initial="hidden"
            animate="visible"
            className="font-display text-display-sm text-text-secondary mt-6 max-w-2xl"
          >
            {t("sub")}
          </motion.p>

          {/* Bottom bar */}
          <div className="flex items-end justify-between mt-16">
            {/* Left: metadata + link */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="flex flex-col gap-4"
            >
              <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                {t("tag")}
              </span>
              <a
                href="#work"
                className="font-mono text-sm text-accent inline-flex items-center gap-2 group"
              >
                <span>{t("cta")}</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </motion.div>

            {/* Right: scroll indicator (vertical) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden md:flex flex-col items-center gap-3"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted [writing-mode:vertical-lr]">
                {t("scroll")}
              </span>
              <motion.div
                className="w-px h-12 bg-text-muted origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
