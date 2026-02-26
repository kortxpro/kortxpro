"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";

export function TopBar() {
  const t = useTranslations("topBar");

  return (
    <div className="hidden md:block bg-[#0A1628] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 text-xs text-gray-300">
          {/* Left: Contact info */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${t("email")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>{t("email")}</span>
            </a>
            <a
              href={`tel:${t("phone")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{t("phone")}</span>
            </a>
          </div>

          {/* Right: Offices */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#00A3FF]" />
              <span>{t("orlando")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#00A3FF]" />
              <span>{t("rio")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
