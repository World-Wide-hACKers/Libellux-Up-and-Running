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
    "revision": "647692bdf20511eb479a6d2b24b1759d"
  },
  {
    "url": "assets/css/0.styles.6754bbb3.css",
    "revision": "2075a05b4690a599adfff22769d41349"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bf5d3006.js",
    "revision": "730d475ddf2da731a301c32f11507589"
  },
  {
    "url": "assets/js/11.13d12268.js",
    "revision": "95e811317b201eb435474a93b75df3e1"
  },
  {
    "url": "assets/js/12.02ca7262.js",
    "revision": "02aa1a7e6327ae858c8dc59e8ce412f6"
  },
  {
    "url": "assets/js/13.5bfac5c2.js",
    "revision": "77f7e0979fbf14e0a4a8cb284adfaadd"
  },
  {
    "url": "assets/js/14.d3a72412.js",
    "revision": "2a5d7520ac218420771e6936e1a7adac"
  },
  {
    "url": "assets/js/15.14b94db6.js",
    "revision": "f65085bdcd5a0411310b645239607752"
  },
  {
    "url": "assets/js/16.265d8b22.js",
    "revision": "14f356cfb88d681fd637169a367d5421"
  },
  {
    "url": "assets/js/17.4d97e6e8.js",
    "revision": "566f28ade4de112149e4233343ba5574"
  },
  {
    "url": "assets/js/18.c09cb1e7.js",
    "revision": "162c1be4fdef260ff7b7851fb577af54"
  },
  {
    "url": "assets/js/19.06783b9f.js",
    "revision": "cd4bbc91934fe31d214389e3eb372871"
  },
  {
    "url": "assets/js/2.a66976ed.js",
    "revision": "0f19688b7b7c9e2b4120772863afa670"
  },
  {
    "url": "assets/js/20.d51954bc.js",
    "revision": "46493be08719c3ba3bee1633c5c96973"
  },
  {
    "url": "assets/js/3.615db90f.js",
    "revision": "74deffc30ed7c40dce274d91f87f578d"
  },
  {
    "url": "assets/js/4.24a42f63.js",
    "revision": "0e708fed4b9a2d4618b81666d404f667"
  },
  {
    "url": "assets/js/5.4dd64674.js",
    "revision": "13c76b3b8eb80086c371afec64c1bd38"
  },
  {
    "url": "assets/js/6.964cf5dd.js",
    "revision": "9e3026a259ee8753a106a0f13e486257"
  },
  {
    "url": "assets/js/7.30923b80.js",
    "revision": "4f15c01a2aaf7d7ac39788fba75e3a59"
  },
  {
    "url": "assets/js/8.9011527f.js",
    "revision": "c7d4cf164471747b42c32ffcd6442bae"
  },
  {
    "url": "assets/js/9.1d8ef870.js",
    "revision": "54764e30e50f68d2e110c73e130867e1"
  },
  {
    "url": "assets/js/app.0880fd0f.js",
    "revision": "5c4b721d6e60cefdeb81532b9a3460c0"
  },
  {
    "url": "graylog/index.html",
    "revision": "ae789c89d1c4b56338a79a65def32562"
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
    "revision": "dfef39e2d76cebd55e76c69005b3460a"
  },
  {
    "url": "intrusion/index.html",
    "revision": "3642b0d2cfe5d05cd483199dcbbe9615"
  },
  {
    "url": "jira/index.html",
    "revision": "fa3687ee35b7428d13ca1a1b0e8ce758"
  },
  {
    "url": "mmonit/index.html",
    "revision": "f22c2628e6cca1fca05eb7d1abc394a7"
  },
  {
    "url": "openvas/index.html",
    "revision": "abc2bd47a0f65149731280c901ac79d7"
  },
  {
    "url": "ossec/index.html",
    "revision": "2ac499c0a8111272c17f6ec530176387"
  },
  {
    "url": "pcp/index.html",
    "revision": "5d90edb54d8ba4d4c92085c3e11e0abf"
  },
  {
    "url": "psad/index.html",
    "revision": "3ae362c1edeb4d96f418d6507f8dca3a"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "d2cf070f996445de5c55c523907b6e64"
  },
  {
    "url": "tags.html",
    "revision": "44049bc064dc8a49e2ea3518ea1834cd"
  },
  {
    "url": "wireguard/index.html",
    "revision": "e561d31f17d22cc956307abd6f813a2a"
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
