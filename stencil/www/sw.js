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
    "revision": "d434a497e1f52df9ba1bb16858a15d75"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "b1efe8960bf0a94a3903b73578bb1d7a"
  },
  {
    "url": "build/app/app.u08yfdlx.js",
    "revision": "9ee11eef321ec2d57a14fc271f17135b"
  },
  {
    "url": "build/app/app.zhed8svv.js",
    "revision": "83e17e57ddbaf7553c8fd860415677f1"
  },
  {
    "url": "build/app/jrobbnm3.es5.js",
    "revision": "d7c52982dd05c76e8c8d79291c3dd90d"
  },
  {
    "url": "build/app/jrobbnm3.js",
    "revision": "e84a679db6196562fcb8b1569a87cb4d"
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
    "revision": "8d2f32c4110a620280af276dc806db8d"
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
