// Retries failed client chunks and, if they still fail, keeps the server HTML
// instead of Next's error page. See the file for why.
const CHUNK_RETRY_ENTRY = "./src/lib/chunk-load-retry.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  webpack(config, { isServer }) {
    // Put the chunk retry guard ahead of Next's own client bootstrap so it
    // wraps webpack's chunk loader before hydration starts.
    if (!isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        const mainApp = entries["main-app"];
        if (Array.isArray(mainApp) && !mainApp.includes(CHUNK_RETRY_ENTRY)) {
          mainApp.unshift(CHUNK_RETRY_ENTRY);
        }
        return entries;
      };
    }
    return config;
  },
};
module.exports = nextConfig;
