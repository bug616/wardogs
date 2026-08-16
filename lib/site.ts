import type { Metadata } from "next";

export const siteConfig = {
  name: "WARDOGS HUB",
  description:
    "An unofficial WARDOGS player guide covering playtests, release information, platforms, beginner fundamentals, and the Cash economy.",
  url: "https://wardogsfps.com",
  disclosure: "Unofficial WARDOGS player guide. Not affiliated with BULKHEAD or Team17.",
  lastChecked: "August 16, 2026",
  official: {
    steam: "https://store.steampowered.com/app/1867240/WARDOGS/",
    steamCommunity: "https://steamcommunity.com/app/1867240/announcements/",
    team17: "https://www.team17.com/games/wardogs",
    reveal: "https://www.team17.com/news/wardogs-reveal-trailer",
    playtest: "https://community.wardogs.com/signup/community",
    bulkhead: "https://bulkhead.com/games/wardogs/",
  },
} as const;

export const liveRoutes = [
  "",
  "/playtest",
  "/release-date",
  "/price",
  "/console",
  "/beginner-guide",
  "/cash-economy",
] as const;

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}

export function buildMetadata(
  title: string,
  description: string,
  path: string,
  type: "article" | "website" = "article",
): Metadata {
  const socialImage = {
    url: absoluteUrl("/wardogs-hub-social.png"),
    width: 1200,
    height: 630,
    alt: "WARDOGS HUB — Unofficial Player Guide",
  };

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: path || "/" },
    openGraph: {
      type,
      siteName: siteConfig.name,
      title,
      description,
      url: absoluteUrl(path),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
  };
}

export type FaqItem = { question: string; answer: string };
