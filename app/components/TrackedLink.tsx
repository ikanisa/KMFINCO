"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackConversion, type ConversionEvent } from "../../lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: ConversionEvent;
  children: ReactNode;
};

export function TrackedLink({ event, children, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(clickEvent) => {
        trackConversion(event);
        onClick?.(clickEvent);
      }}
    >
      {children}
    </a>
  );
}
