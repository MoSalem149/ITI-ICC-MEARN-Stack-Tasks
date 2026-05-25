// INSTALL event — runs once when SW is first registered
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("Gira-cache").then((myCache) => {
      myCache.addAll([
        "index.html",
        "style.css",
        "script.js",
        "gira-db.js",
        "gira-notify.js",
        "manifest_and_icons/manifest.json",
        "manifest_and_icons/icon512_maskable.png",
        "manifest_and_icons/icon512_rounded.png",
      ]);
    }),
  );
});

// FETCH event — intercepts every network request
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request.url).then((page) => {
      if (page) {
        return page;
      } else {
        return fetch(event.request.url);
      }
    }),
  );
});

// Notification click handler
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  clients.openWindow("/index.html");
});
