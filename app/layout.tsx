import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "./globals.css";
import { siteUrl } from "../lib/seo";
import { siteConfig } from "../lib/site-config";
import { AnalyticsConsent } from "./components/AnalyticsConsent";

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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
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
    email: siteConfig.email,
    telephone: siteConfig.phoneE164,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      availableLanguage: ["English"],
    },
    sameAs: siteConfig.linkedInUrl ? [siteConfig.linkedInUrl] : undefined,
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
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
        <AnalyticsConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
