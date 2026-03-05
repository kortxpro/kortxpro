"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function GradientButton({
  children,
  size = "md",
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: GradientButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--mouse-x", `${x}px`);
    btnRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary: `
      relative overflow-hidden rounded-lg font-medium
      bg-bg-elevated border border-white/10
      text-white
      transition-all duration-500
      hover:border-accent/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    outline: `
      relative overflow-hidden rounded-lg font-medium
      bg-transparent border border-white/20
      text-white/80
      transition-all duration-500
      hover:border-white/40 hover:text-white
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
  };

  return (
    <button
      ref={btnRef}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      disabled={disabled}
      className={`${variants[variant]} ${sizes[size]} ${className} group`}
    >
      {/* Glow effect following mouse */}
      {variant === "primary" && (
        <span
          className="absolute w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
            left: "var(--mouse-x, 50%)",
            top: "var(--mouse-y, 50%)",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
