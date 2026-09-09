import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lion Park Desk",
    short_name: "Lion Park",
    description:
      "Lion Park Resort operations and visitor information in one place.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui", "browser"],
    orientation: "portrait",
    background_color: "#f7f4ec",
    theme_color: "#244d35",
    lang: "en",
    categories: ["travel", "business", "utilities"],
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Staff Desk",
        short_name: "Desk",
        description: "Open Lion Park staff operations.",
        url: "/desk",
        icons: [
          {
            src: "/icon",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      {
        name: "Visitor View",
        short_name: "Visit",
        description: "See today’s Lion Park visitor information.",
        url: "/",
        icons: [
          {
            src: "/icon",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    ],
  };
}
