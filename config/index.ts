import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/midhun8629-sudo/midhun-de-v2",
  ownerName: "Midhun Mohanan",
  ownerEmail: "midhun.de@proton.me",
} as const;

export const siteConfig: Metadata = {
  metadataBase: new URL("https://midhun.de"),
  title: "Midhun Mohanan | Semiconductor Simulation",
  description:
    "FEM and multiphysics modelling for thermal, fluid and structural problems in semiconductor and AI hardware.",
  keywords: [
    "computational engineering",
    "finite element method",
    "multiphysics simulation",
    "thermal simulation",
    "thermo-mechanical simulation",
    "electronics cooling",
    "semiconductor packaging",
  ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: "https://midhun.de",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://midhun.de",
    title: "Midhun Mohanan | Semiconductor Simulation",
    description:
      "Physics-based simulation for thermal management and reliability of semiconductor and AI hardware.",
    siteName: "Midhun Mohanan",
  },
} as const;
