import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://km-finco-advisory-2026.bosco560038.chatgpt.site"),
  title: {
    default: "KM FINCO | Clarity for what comes next",
    template: "%s | KM FINCO",
  },
  description:
    "Integrated audit, assurance, management consulting, corporate, tax, accounting and investment expertise.",
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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
