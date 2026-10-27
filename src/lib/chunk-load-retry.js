/* global __webpack_require__ */

// Runs first in the main-app client entry (see next.config.js), before React
// hydrates. It wraps webpack's chunk loader, which the React Server Components
// client calls for every client component chunk (next/link and next/image live
// in a shared chunk that every page needs).
//
// Without this, one chunk that fails to load (Google's renderer sometimes
// skips a script, flaky mobile data) rejects, hydration throws, and Next swaps
// the whole server-rendered page for its error document. Google then reads the
// page as a soft 404.
//
// With it, a failed chunk is retried with a short backoff. If it still fails,
// the promise is left pending instead of rejecting: React suspends, keeps the
// server HTML on screen, and the page stays readable with plain links.

const MAX_RETRIES = 3;
const BASE_DELAY_MS = 500;

if (typeof window !== "undefined" && typeof __webpack_require__ === "function") {
  const ensureChunk = __webpack_require__.e;

  __webpack_require__.e = function ensureChunkWithRetry(chunkId) {
    const attempt = (retry) =>
      ensureChunk(chunkId).catch((error) => {
        if (retry >= MAX_RETRIES) {
          console.error("Chunk " + chunkId + " could not be loaded; keeping the server-rendered page.", error);
          return new Promise(() => {});
        }
        return new Promise((resolve) => setTimeout(resolve, BASE_DELAY_MS * 2 ** retry)).then(() =>
          attempt(retry + 1),
        );
      });
    return attempt(0);
  };
}
