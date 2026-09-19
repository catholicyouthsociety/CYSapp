const CACHE_NAME = 'CYSapp';
const ASSETS = [
  './',
  './index.html',
  './faith.html',
  './events.html',
  './community.html',
  './profile.html',
  './more.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
