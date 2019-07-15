const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/service-worker.html',
  '/style.css',
];

this.addEventListener('install', function(event) {
  console.log('ServiceWorker install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});