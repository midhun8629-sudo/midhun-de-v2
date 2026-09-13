import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

import { siteConfig } from "@/config";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080a0d",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
