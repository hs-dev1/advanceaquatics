'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d91bf64d68d757c4fde8308a054894fd",
"assets/assets/images/bell.png": "709df9d940f988d8bf27544c72f215ed",
"assets/assets/images/black_bg.png": "d1db0853a48cc25479196033b78f0584",
"assets/assets/images/blue_bg.png": "e710432fb51addb8f0dafefbf4dcb1d2",
"assets/assets/images/bottom.png": "0f724a27b73fe0743f44702d0f62c09a",
"assets/assets/images/camera.png": "f2d84a87ec65a063dcdad488728a2fdf",
"assets/assets/images/camera_bg.png": "69bd693d6203440491c89f61eac319b4",
"assets/assets/images/curve.png": "36ac0dd0258746ef7f1148bf34cfda47",
"assets/assets/images/dashboard_blue.png": "e338d988aa3fc7e68992ad475c4749b5",
"assets/assets/images/dashboard_grey.png": "74d43abe73a14dfed0ba1acb51b8ac6e",
"assets/assets/images/green_bg.png": "795fdce45cd25700615df3d6bf547250",
"assets/assets/images/headphone_blue.png": "a07071dbff834e69fdc86d784cffe3a1",
"assets/assets/images/headphone_grey.png": "02ec322a2672636c7d3c014a43d40d76",
"assets/assets/images/list_menu_icon.png": "a47dda70cd9056a3dcaa3f1bee025b5a",
"assets/assets/images/lock_blue.png": "83730cf546725c92171b3ad538e1f841",
"assets/assets/images/lock_grey.png": "9900bf702208acc05893ff532f4e6305",
"assets/assets/images/logout.png": "18393db8e33174a125a4b07b03e5a0b4",
"assets/assets/images/logo_blue.png": "09b695fa6f10325e079c6d8e56d9d363",
"assets/assets/images/logo_white.png": "c3efa7c4fef32fa87a4a4398c49e92d1",
"assets/assets/images/note_blue.png": "d112acc92d878726d51ef28ebe4005dd",
"assets/assets/images/note_grey.png": "ae0e69e1460cb6bf9aa933f5a98502ff",
"assets/assets/images/order_blue.png": "620ec84c0586c94340ba4a3fff1f4e49",
"assets/assets/images/order_completed_blue.png": "b83f36078a54e3c9cbf5150dfbb061b7",
"assets/assets/images/order_completed_grey.png": "fa6a162a6abe37e4e16c54883a132417",
"assets/assets/images/order_grey.png": "2ea8b71a516fba1477f93c3b8362034a",
"assets/assets/images/people_blue.png": "f96d6217d32a7a1e598660143f20e326",
"assets/assets/images/people_grey.png": "e4001ecca71f5af244e5d15903802808",
"assets/assets/images/person.png": "72e5cefead85e4cee074cf7a7121c6f7",
"assets/assets/images/polygon.png": "99c1f95dac3fb4b960df1f7065f4c92d",
"assets/assets/images/purple_bg.png": "4ee2385b4a21deabc4fd11a3f1b0079d",
"assets/assets/images/shield_blue.png": "1ec98faacea58ceef96de315c1b66860",
"assets/assets/images/shield_grey.png": "3c677ff9b7da5418bfdd4375673c3aa5",
"assets/assets/images/top.png": "5cfc46fd2ceca97fb613e6208688af61",
"assets/assets/images/upload_image.png": "ba6d161dee9e2253856e3bb217024b73",
"assets/assets/images/waves.png": "c450d629cdae82c0ce5061fd1fb1ff67",
"assets/assets/translations/en.json": "1bb4f2e50da6bc952fa4bba423006ff0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2cf3c918ded455b03ab9b6594262ad6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"favicon.ico": "d2708298d13fd773b2ae7048caa99c2c",
"icons/Icon-192.png": "11df7f16fe42f1741b1c10252648fd24",
"icons/Icon-512.png": "0a08a9c2e8d124c9f898e8f4a49740dd",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7b2db873b3b7fac9fc1bd5d23bb66d7a",
"/": "7b2db873b3b7fac9fc1bd5d23bb66d7a",
"main.dart.js": "b46980a7558afd92ef44b2e3f7a79fb2",
"manifest.json": "d33c0df3889084245e4a2b217e87921c",
"version.json": "b85b6ffa562fd034f2ee9aa5a0e2b9dd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
