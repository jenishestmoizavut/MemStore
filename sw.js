const CACHE_NAME = 'memstore-v11';
const ASSETS = [
  'index.html',
  'manifest.json',
  'logo.png'
];

// Install event: Cache the essential files
self.addEventListener('install', (event) => {
  // Forces the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Fetch event: Serve from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
