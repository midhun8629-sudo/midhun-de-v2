import type { Metadata } from "next";

import { portfolioContent } from "@/data/portfolio";

export const links = {
  sourceCode: portfolioContent.owner.sourceCode,
  ownerName: portfolioContent.owner.shortName,
  ownerEmail: portfolioContent.owner.email,
} as const;

export const siteConfig: Metadata = {
  title: portfolioContent.metadata.title,
  description: portfolioContent.metadata.description,
  keywords: [...portfolioContent.metadata.keywords],
  authors: {
    name: portfolioContent.owner.name,
    url: portfolioContent.owner.github,
  },
  metadataBase: new URL(portfolioContent.owner.website),
} as const;
