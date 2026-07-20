"use client";

import type { AnchorHTMLAttributes } from "react";
import { siteConfig } from "../../lib/site-config";
import { TrackedLink } from "./TrackedLink";

type PrimaryCtaProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

export function PrimaryCta(props: PrimaryCtaProps) {
  return (
    <TrackedLink {...props} href={siteConfig.bookingUrl} event="booking_click">
      {siteConfig.primaryCtaLabel}
    </TrackedLink>
  );
}
