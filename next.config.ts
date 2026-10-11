import type { NextConfig } from "next";
import path from "node:path";

// Short, typeable links for the video channels (links in Shorts/Reels
// descriptions are not clickable). Each one lands in the App Store with
// its own campaign token: App Store Connect → Analytics → Campaigns.
const APP_STORE_CAMPAIGN_LINK = (ct: string) =>
  `https://apps.apple.com/app/apple-store/id6762354184?pt=117720297&ct=${ct}&mt=8`;
const SOCIAL_LINKS = { yt: "youtube", tt: "tiktok", ig: "instagram" };

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(SOCIAL_LINKS).map(([path, ct]) => ({
      source: `/${path}`,
      destination: APP_STORE_CAMPAIGN_LINK(ct),
      permanent: false,
    }));
  },
  // Pin Turbopack to this directory; the repo root contains another lockfile
  // (marketing-screenshots/) and Next would otherwise pick the wrong one.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
