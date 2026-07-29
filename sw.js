const CACHE = 'swick-flipbook-v2';
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll([
      './swick-flipbook-app.dc.html',
      './icons/icon-192.png',
      './icons/icon-512.png',
    ])).catch(() => {})
  );
  self.skipWaiting();
});
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request).catch(() => r)));
});
