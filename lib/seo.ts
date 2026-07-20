import type { Metadata } from "next";

export const siteUrl = "https://kmfinco.com";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const socialTitle = `${title} | KMFINCO`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: "KMFINCO",
      type: "website",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "KMFINCO — Clarity for what comes next." }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/og.jpg"],
    },
  };
}
