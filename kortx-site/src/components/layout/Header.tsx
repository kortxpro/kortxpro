"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TopBar } from "./TopBar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/ai-first", label: t("aiFirst") },
    { href: "/servicos", label: t("services") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/sobre", label: t("about") },
    { href: "/contato", label: t("contact") },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* TopBar */}
      <TopBar />

      {/* Main nav */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo variant="light" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as "/"}
                  className={cn(
                    "relative text-sm font-medium transition-colors pb-1",
                    isActive(item.href)
                      ? "text-[#0A1628]"
                      : "text-gray-600 hover:text-[#0A1628]"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00A3FF] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher variant="corporate" />
              <Link href="/contato">
                <Button variant="corporate" size="sm">
                  {t("cta")}
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#0A1628]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-1 bg-white">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href as "/"}
                      className={cn(
                        "block py-2.5 px-3 text-sm font-medium rounded-lg transition-colors",
                        isActive(item.href)
                          ? "text-[#0A1628] bg-[#00A3FF]/10 border-l-2 border-[#00A3FF]"
                          : "text-gray-600 hover:text-[#0A1628] hover:bg-gray-50"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 flex items-center justify-between">
                    <LanguageSwitcher variant="corporate" />
                    <Link href="/contato">
                      <Button variant="corporate" size="sm">
                        {t("cta")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
