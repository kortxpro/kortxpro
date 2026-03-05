"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { letterRevealContainer, letterRevealChild } from "@/lib/animations";

const navItems = [
  { key: "services", href: "/servicos" as const, num: "01" },
  { key: "portfolio", href: "/portfolio" as const, num: "02" },
  { key: "about", href: "/sobre" as const, num: "03" },
  { key: "aiFirst", href: "/ai-first" as const, num: "04" },
  { key: "contact", href: "/contato" as const, num: "05" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled && !open ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-xl tracking-tight text-white relative z-50">
            KORT<span className="text-accent">.</span>X
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="font-mono text-sm uppercase tracking-widest text-text-secondary hover:text-white transition-colors relative z-50"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black noise-overlay flex flex-col justify-center"
          >
            <nav className="relative z-10 px-6 md:px-10 max-w-[1440px] mx-auto w-full">
              <motion.div
                variants={letterRevealContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-2"
              >
                {navItems.map((item) => (
                  <motion.div key={item.key} variants={letterRevealChild}>
                    <Link
                      href={item.href}
                      className="group flex items-baseline gap-4 py-3 md:py-4"
                    >
                      <span className="font-mono text-xs text-text-muted">
                        {item.num}
                      </span>
                      <span className="font-display text-display-lg text-white group-hover:text-accent transition-colors duration-300">
                        {t(item.key)}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-16 pt-8 border-t border-border">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <a href="mailto:contato@kortx.pro" className="font-mono text-sm text-accent hover:text-accent/80 transition-colors">
                    contato@kortx.pro
                  </a>
                  <span className="font-mono text-xs text-text-muted">
                    Orlando, FL / Rio de Janeiro, RJ
                  </span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
