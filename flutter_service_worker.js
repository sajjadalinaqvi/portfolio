'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "0dc02780c3850949039ef0041ef80bea",
"robots.txt": "9426dc4ce97e87ab4054105da24c7567",
"index.html": "13fdb22a6894261731aafeee3bb3e6b2",
"/": "13fdb22a6894261731aafeee3bb3e6b2",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin.json": "002ccf40e64e3b219cc9f6a1526e2950",
"assets/AssetManifest.json": "ab3d32480e3c9368be4b96a355251226",
"assets/assets/sajjad.png": "bb5b0b2c9cae154beadd75feaa25958a",
"assets/assets/projects/music_player_app3.png": "01cb4ee35d3e3de333b1e12208abcac6",
"assets/assets/projects/voice_Calling_Agent2.png": "eb7bb1b0d29a80db214a48a67229c8d3",
"assets/assets/projects/clinic_appointment_assistant1.png": "834d28a626f597ba22d7c48be8ca41d1",
"assets/assets/projects/pet_care_voice_agent2.png": "3cd49ca3c509e3a0c3a670a2fa390765",
"assets/assets/projects/music_player_app4.png": "c59adabc67c4ff1dbde0f54423891249",
"assets/assets/projects/music_player_app2.png": "5d7b9e109a4a7999e8e98224d9fce26b",
"assets/assets/projects/firefighting_car3.png": "19d7d76d07fa1d6f8f5d18b30d56d589",
"assets/assets/projects/voice_Calling_Agent3.png": "05b9aa582e886d461efb7e3454d5591c",
"assets/assets/projects/blue_collar_service_agent3.png": "7ae0923929b8837015462c2f446c1fa4",
"assets/assets/projects/voice_Calling_Agent1.png": "c368048b3eef48774af8f9d84627b28f",
"assets/assets/projects/music_player_app5.png": "c26c5887b62437b7d748934a4b982f2c",
"assets/assets/projects/pet_care_voice_agent1.png": "3cd49ca3c509e3a0c3a670a2fa390765",
"assets/assets/projects/clinic_appointment_assistant3.png": "834d28a626f597ba22d7c48be8ca41d1",
"assets/assets/projects/blue_collar_service_agent1.png": "7ae0923929b8837015462c2f446c1fa4",
"assets/assets/projects/clinic_appointment_assistant2.png": "77e248fd549023fafbd6146df4d02185",
"assets/assets/projects/blue_collar_service_agent2.png": "7ae0923929b8837015462c2f446c1fa4",
"assets/assets/projects/music_player_app1.png": "51552e8e4f4f5fed77b13cf08d1df2ea",
"assets/assets/projects/firefighting_car1.png": "2a95987499e08af18858e88cb0568b4e",
"assets/assets/projects/pet_care_voice_agent3.png": "3cd49ca3c509e3a0c3a670a2fa390765",
"assets/assets/projects/firefighting_car2.png": "30cec6b359d11c9e1a625ed687defa30",
"assets/assets/sajjad1.png": "7850705617194e4675a7997173de5272",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "68af833eea41b3fe7ffa82c63ad4fcce",
"assets/NOTICES": "d8c794fd5eaac5ed0fdedb8697dc7a00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e8e927f0a293967eff4cae660dc185c8",
"manifest.json": "99559bef556736da069052535a14d7f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter_bootstrap.js": "fc0e6e839ff40ae86816483a34d8d29b",
"sitemap.xml": "d6241f071827f0e4012d95c05408970d",
"version.json": "a5ea3782e7363c600ebc9c2c07ff7168",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
