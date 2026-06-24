importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBIa273KciptJRTkTmhBVnBiMhZx2tyOOQ",
  authDomain: "digital-marketing-app-f1a1d.firebaseapp.com",
  projectId: "digital-marketing-app-f1a1d",
  storageBucket: "digital-marketing-app-f1a1d.firebasestorage.app",
  messagingSenderId: "986709827442",
  appId: "1:986709827442:web:a02f2292d1fada065107eb",
});

const messaging = firebase.messaging();