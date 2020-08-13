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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "873a2d9ccb60b3fe760f8717d4efbe8b"
  },
  {
    "url": "assets/css/0.styles.75739d6a.css",
    "revision": "5c23ba07926c78f9ca34590dab66e094"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c94c30dd.js",
    "revision": "c09d1b888e4bc6b20f41b469a50a2fe0"
  },
  {
    "url": "assets/js/11.1bab45d4.js",
    "revision": "338af6b5a5ded03a686047e64b78c2ed"
  },
  {
    "url": "assets/js/12.c13b440c.js",
    "revision": "7d0ac61501290ac3db96965f64eca58f"
  },
  {
    "url": "assets/js/13.fdc6d6d0.js",
    "revision": "68d55dee28dc27caf4df05d416f1a65e"
  },
  {
    "url": "assets/js/14.98e47507.js",
    "revision": "f2e0647592978b90f458aa49b6057243"
  },
  {
    "url": "assets/js/15.340e1898.js",
    "revision": "f9e0f165e6ba05e9d7164b7c53819426"
  },
  {
    "url": "assets/js/16.7bc1c27d.js",
    "revision": "be0268923472ee51b4f8f278a73ce27a"
  },
  {
    "url": "assets/js/17.f5d36f8f.js",
    "revision": "672fa9ef87725313186c6575bafaf359"
  },
  {
    "url": "assets/js/18.d13cab32.js",
    "revision": "f5fa2fbca4bd97f6c5cff4e4f0181d76"
  },
  {
    "url": "assets/js/19.26df38a0.js",
    "revision": "e3a7f7e3d7613b02f47d23a6712f07d8"
  },
  {
    "url": "assets/js/2.716680d4.js",
    "revision": "e403afd810c6c233057a75bdb15de349"
  },
  {
    "url": "assets/js/20.966af82d.js",
    "revision": "7afdfd25f3a8ec9b9a4206309dc8d890"
  },
  {
    "url": "assets/js/3.8dada23c.js",
    "revision": "f7fa8115f5065117987ec2ce71fda23e"
  },
  {
    "url": "assets/js/4.99009925.js",
    "revision": "e445022affac2d4173843599da8f7d76"
  },
  {
    "url": "assets/js/5.06c58baa.js",
    "revision": "087315350d52ff92d1d57218068dadd8"
  },
  {
    "url": "assets/js/6.a68e6a00.js",
    "revision": "9fc5a121cdaf504f2c8747dff4c320aa"
  },
  {
    "url": "assets/js/7.8497ab7c.js",
    "revision": "9609873e3bf949268bb85aae4dc78fb3"
  },
  {
    "url": "assets/js/8.761b8acb.js",
    "revision": "97c88c2de9ac2979e04220c475bb6431"
  },
  {
    "url": "assets/js/9.b26a5461.js",
    "revision": "0f36293e22c080b065d375d236d97b1c"
  },
  {
    "url": "assets/js/app.4d626d7b.js",
    "revision": "67cb2071797424e925bec543dd96aa07"
  },
  {
    "url": "graylog/index.html",
    "revision": "c9ff0e97970a86106a81e416c13af13a"
  },
  {
    "url": "img/centos.png",
    "revision": "eceb88fbdcfbb06c8ddcdcdbc0d9feb4"
  },
  {
    "url": "img/icons/1200x627.png",
    "revision": "4ed965ba2daf1f2907b5696f47949426"
  },
  {
    "url": "img/icons/144x144.png",
    "revision": "c5abed2721558a98cd5adb1b28d5f032"
  },
  {
    "url": "img/icons/1500x500.png",
    "revision": "cb77b3aa40b6fbdd9a25ecb8fed580d3"
  },
  {
    "url": "img/icons/192x192.png",
    "revision": "b8853a3b71b3a7e79c116d8d2dc8fe99"
  },
  {
    "url": "img/icons/256x256.png",
    "revision": "64014871dd4b25592423d91c4a007f3a"
  },
  {
    "url": "img/icons/384x384.png",
    "revision": "f5837cc63fdd26d96461a55d61fb1944"
  },
  {
    "url": "img/icons/4096x4096.png",
    "revision": "9e79bb6db785b2243380efb2546cf841"
  },
  {
    "url": "img/icons/48x48.png",
    "revision": "c1077dc498ae97b7f5209da9277579e3"
  },
  {
    "url": "img/icons/512x512.png",
    "revision": "0a91e0a9adeee05b4a0feeadd06574dd"
  },
  {
    "url": "img/icons/72x72.png",
    "revision": "b36cd3c87f00f07092b6442b7e00b0a6"
  },
  {
    "url": "img/icons/96x96.png",
    "revision": "2907ea3e33e14a352ba8d282e0f32cd5"
  },
  {
    "url": "img/mmonit/mmonit1.png",
    "revision": "1665c0ebb4ce463c59df456bda2e5ee5"
  },
  {
    "url": "img/ossec/512x512.png",
    "revision": "bee855a078b5cf7941dcc4c2838ddf1d"
  },
  {
    "url": "img/ossec/cloudflare_token.png",
    "revision": "c36576440c64fceb89e53cf4f8dd1921"
  },
  {
    "url": "img/ubuntu.png",
    "revision": "f53554b67ad3f94dfb78b2dbcd6630d3"
  },
  {
    "url": "img/win98/canopus.jpg",
    "revision": "713f202c27170220c11ed8dd8d8c1258"
  },
  {
    "url": "img/win98/harddrive.jpg",
    "revision": "a315cb29db3876a2105cc4cd2a3e25e9"
  },
  {
    "url": "img/win98/livedrive.jpg",
    "revision": "0fe14c326242e1d82bed8efb7f0725e3"
  },
  {
    "url": "img/win98/memory.jpg",
    "revision": "01314af32ed413b62944e236664cef20"
  },
  {
    "url": "img/win98/motherboard.jpg",
    "revision": "b0d4ebf37a37d9013ddb6ae1503b22dc"
  },
  {
    "url": "img/win98/newq.jpg",
    "revision": "081147848fc2d1e5202e545d544e07fd"
  },
  {
    "url": "img/win98/pcdvd.jpg",
    "revision": "c4e05a218ebaab64750da9fd4ef9ee73"
  },
  {
    "url": "img/win98/processor.jpg",
    "revision": "bb1250126cc6b2a90f944bde2ebb7d7e"
  },
  {
    "url": "img/win98/psu.jpg",
    "revision": "d5907d3d9e55849f9186daaaaa0964b2"
  },
  {
    "url": "img/win98/soundblaster.jpg",
    "revision": "dab0ec6f7aadd338ef4628e67dae025e"
  },
  {
    "url": "img/win98/voodoo2.jpg",
    "revision": "6d957763e3279acf4608a680f21068a8"
  },
  {
    "url": "img/win98/voodoo2fan.jpg",
    "revision": "2b9e1dc0054358c95026b7b7816a70b1"
  },
  {
    "url": "index.html",
    "revision": "95269de363598a2871a84277a4ccd6c4"
  },
  {
    "url": "intrusion/index.html",
    "revision": "c0d41333faa5fe3af2ac11b145f65afa"
  },
  {
    "url": "jira/index.html",
    "revision": "c364ebb49c8c7a8c78b4b8d20c2406c6"
  },
  {
    "url": "mmonit/index.html",
    "revision": "385d721f9c215092a0b80b92add3983f"
  },
  {
    "url": "openvas/index.html",
    "revision": "903b4942dd2d1c3972f91f5fc1c16325"
  },
  {
    "url": "ossec/index.html",
    "revision": "26e66a40dd3ffa4a9177268de21c393d"
  },
  {
    "url": "pcp/index.html",
    "revision": "5d947c947943010c505f2578b6ff5c2c"
  },
  {
    "url": "psad/index.html",
    "revision": "55462d2f7f8bffcbbfbb7a57c4afaf66"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "7eb2933caeff66bc194fc791fe476a13"
  },
  {
    "url": "tags.html",
    "revision": "80ed7f3ef18059dcdfdd97586b41242b"
  },
  {
    "url": "wireguard/index.html",
    "revision": "9c5dc2c4bf08a7b3386f109769f962ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
