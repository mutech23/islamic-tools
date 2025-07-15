// Install the service worker and cache the site
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('adhan-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/service-worker.js',
        '/icon-512.png',
        // Add more files if needed (e.g. CSS, JS)
      ]);
    })
  );
});

// Fetch from cache if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
