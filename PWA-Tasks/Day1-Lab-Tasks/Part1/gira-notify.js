// Notifications — Gira Task Management

// 1-check for notification support
if (!("Notification" in window)) {
  console.log("Sorry Notifications not Supported!");
}

// 2-request permission to show notifications
Notification.requestPermission().then((status) => {
  console.log("Notification permission:", status);
});

// 3-display a notification via the Service Worker
function showNotification(title, body) {
  if (Notification.permission == "granted") {
    navigator.serviceWorker.ready.then((reg) => {
      const options = {
        body: body,
        icon: "manifest_and_icons/icon512_rounded.png",
        data: {
          dateOfArrival: Date.now(),
        },
      };
      reg.showNotification(title, options);
    });
  }
}
