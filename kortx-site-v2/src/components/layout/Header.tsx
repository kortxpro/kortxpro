"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { key: "work", href: "/portfolio" as const },
  { key: "services", href: "/servicos" as const },
  { key: "about", href: "/sobre" as const },
  { key: "aiFirst", href: "/ai-first" as const },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight text-black">
            KORT<span className="text-text-muted">.</span>X
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm text-text-secondary hover:text-black transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contato"
            className="hidden md:block text-sm font-medium bg-black text-white px-5 py-2 rounded-full hover:bg-black/80 transition-colors"
          >
            {t("contact")}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`block w-5 h-px bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-40 w-80 bg-white border-l border-border px-8 pt-24 pb-8 flex flex-col md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="text-lg py-3 text-text-secondary hover:text-black transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                ))}
                <Link
                  href="/contato"
                  className="text-lg py-3 text-black font-medium"
                >
                  {t("contact")}
                </Link>
              </div>

              <div className="mt-auto pt-8 border-t border-border">
                <a href="mailto:contato@kortx.pro" className="font-mono text-sm text-text-secondary hover:text-black transition-colors">
                  contato@kortx.pro
                </a>
                <p className="font-mono text-xs text-text-muted mt-3">
                  Orlando, FL — Rio de Janeiro, RJ
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
