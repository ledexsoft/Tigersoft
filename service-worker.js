// Asignar un nombre y versión al caché
const CACHE_NAME = 'v1.1_cache_tigersoft';
const urlsToCache = [
  '/',
  'index.html',
  'assets/css/material-dashboard.min.css',
  'assets/js/material-dashboard.min.js',
  'assets/js/core/bootstrap.min.js',
  'assets/js/core/popper.min.js',
  'assets/img/ouytiger.webp',
  'assets/img/photo-1611021061285-16c871740efa.avif',
  'assets/img/IMG-20240806-WA0037.webp'
];

// Instalación del service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache abierta');
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.error('Error al abrir el cache:', error);
      })
  );
});

// Activación del service worker
self.addEventListener('activate', function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
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
      .catch(function(error) {
        console.error('Error en el fetch:', error);
      })
  );
});
