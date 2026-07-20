import type { Metadata } from "next";

import { siteConfig } from "./site-config";

export const siteUrl = siteConfig.url;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const socialTitle = `${title} | KM FINCO`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: "KM FINCO",
      type: "website",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "KM FINCO — Clarity for what comes next." }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/og.jpg"],
    },
  };
}
