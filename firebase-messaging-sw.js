importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBO8-JUJEEFOoIHipbQF4jnMa3PsmJV8H0",
  authDomain: "khela-hobe-2d114.firebaseapp.com",
  projectId: "khela-hobe-2d114",
  storageBucket: "khela-hobe-2d114.firebasestorage.app",
  messagingSenderId: "282635255314",
  appId: "1:282635255314:web:e1bbe3a6841326c63222cb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('[firebase-messaging-sw.js] Background message:', payload);
  const { title, body, click_action } = payload.notification;

  self.registration.showNotification(title, {
    body,
    data: { click_action }
  });
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification.data.click_action || '/';
  event.waitUntil(clients.openWindow(url));
});
