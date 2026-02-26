"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src={`/logo/kortx-${variant}.svg`}
        alt="KORT.X"
        width={140}
        height={32}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/logo/kortx-icon.svg"
        alt="KORT.X"
        width={40}
        height={40}
        priority
        className="h-10 w-10"
      />
    </Link>
  );
}
