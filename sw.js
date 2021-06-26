self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./", "/style.css", "/script.js", "https://cdn.glitch.com/bab1a760-3e16-4803-af70-535bc2faf96a%2FIcons8_flat_calculator.svg.png?v=1624558008239"]);
    })
  
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  
  );
});