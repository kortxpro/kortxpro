"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TopBar } from "./TopBar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/ai-first", label: t("aiFirst") },
    { href: "/servicos", label: t("services") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/sobre", label: t("about") },
    { href: "/contato", label: t("contact") },
  ];

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
                  className={cn("text-sm font-medium text-gray-600 hover:text-[#0A1628] transition-colors")}
                >
                  {item.label}
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
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as "/"}
                  className="block py-2 text-sm font-medium text-gray-600 hover:text-[#0A1628] transition-colors"
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
          )}
        </nav>
      </div>
    </header>
  );
}
