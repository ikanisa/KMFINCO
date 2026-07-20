import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KM FINCO",
    short_name: "KM FINCO",
    description: "Integrated audit, assurance, management consulting and financial expertise.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f3",
    theme_color: "#163f37",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
