"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");
  const topBarT = useTranslations("topBar");

  const serviceLinks = [
    { href: "/servicos", label: navT("services") },
    { href: "/portfolio", label: navT("portfolio") },
    { href: "/ai-first", label: navT("aiFirst") },
  ];

  const companyLinks = [
    { href: "/sobre", label: navT("about") },
    { href: "/contato", label: navT("contact") },
  ];

  return (
    <footer className="bg-[#0A1628] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-1">
            <Logo variant="dark" />
            <p className="mt-4 text-sm text-gray-400">
              {t("tagline")}
            </p>
          </div>

          {/* Service links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t("links.services")}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href as "/"}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t("links.company")}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href as "/"}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t("offices")}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00A3FF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">{topBarT("orlando")}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00A3FF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">{topBarT("rio")}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#00A3FF] mt-0.5 flex-shrink-0" />
                <a href={`mailto:${topBarT("email")}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {topBarT("email")}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#00A3FF] mt-0.5 flex-shrink-0" />
                <a href={`tel:${topBarT("phone")}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {topBarT("phone")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <p className="text-sm text-gray-400">
              &copy; {t("copyright")}
            </p>
            <span className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
              {t("legalLinks.privacy")}
            </span>
            <span className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
              {t("legalLinks.terms")}
            </span>
          </div>
          <LanguageSwitcher variant="neural" />
        </div>
      </div>
    </footer>
  );
}
