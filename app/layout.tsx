import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "./globals.css";
import { siteUrl } from "../lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KM FINCO | Clarity for what comes next",
    template: "%s | KM FINCO",
  },
  description:
    "Integrated audit, assurance, management consulting, corporate, tax, accounting and investment expertise.",
  alternates: { canonical: "/" },
  applicationName: "KM FINCO",
  category: "professional services",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "KM FINCO | Clarity for what comes next",
    description:
      "Integrated audit, assurance, management consulting, corporate, tax, accounting and investment expertise.",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "KM FINCO — Clarity for what comes next.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KM FINCO | Clarity for what comes next",
    description:
      "Integrated audit, assurance, management consulting, corporate, tax, accounting and investment expertise.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "KM FINCO",
    url: siteUrl,
    image: `${siteUrl}/og.jpg`,
    description:
      "Integrated audit, assurance, management consulting, corporate, tax, accounting and investment expertise.",
    areaServed: "International",
    knowsAbout: [
      "Audit and assurance",
      "Management consulting",
      "Internal audit",
      "Risk management",
      "Tax and accounting",
      "Corporate and fiduciary services",
      "Investment and family office",
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
