"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        // Proposal A - Neural
        neural:
          "bg-[#00A3FF]/20 text-[#00A3FF] border border-[#00A3FF]/30",
        // Proposal B - Corporate
        corporate: "bg-[#00A3FF]/10 text-[#00A3FF]",
        // Proposal C - Minimal
        minimal: "bg-black text-white dark:bg-white dark:text-black",
        // Common
        success: "bg-green-500/20 text-green-400",
        warning: "bg-yellow-500/20 text-yellow-400",
        outline: "border border-current",
      },
    },
    defaultVariants: {
      variant: "neural",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
