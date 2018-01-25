/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */


importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js");









/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "348886e0a8ca9605092dbb67b73fa25f"
  },
  {
    "url": "build/app/app.d3ekxsqi.js",
    "revision": "6b7eb042cf77445c36483a92cc17a06b"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "eb77f7ec0b9f40f1dcd7324cbf485335"
  },
  {
    "url": "build/app/jrobbnm3.es5.js",
    "revision": "d7c52982dd05c76e8c8d79291c3dd90d"
  },
  {
    "url": "build/app/jrobbnm3.sc.es5.js",
    "revision": "8b79cd74caeb1cab9f5361a2f9f47c7e"
  },
  {
    "url": "build/app/jrobbnm3.sc.js",
    "revision": "6da1d7a37642ada62a4c315783499829"
  },
  {
    "url": "host.config.json",
    "revision": "732198374e0c49811808e476662efa42"
  },
  {
    "url": "index.html",
    "revision": "c04aa2dc47a5d31d1cb6e83f2869dc3b"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
