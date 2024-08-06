//asignar un nombre y versión al caché
const CACHE_NAME='v1.1_cache_tigersoft',
urlsToCache= [
    '/',
    'index.html',
    'assets/css/material-dashboard.min.css',
    'assets/js/material-dashboard.min.js',
    'assets/js/core/bootstrap.min.js',
    'assets/js/core/popper.min.js',
    'assets/img/ouytiger.webp',
    'assets/img/photo-1611021061285-16c871740efa.avif',
    'assets/img/IMG-20240806-WA0037.jpg',
    'assets/img/ouytiger.webp'
]

// Instalación del service worker
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Cache abierta');
          return cache.addAll(urlsToCache);
        })
    );
  });
  // Fetch del service worker
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  });