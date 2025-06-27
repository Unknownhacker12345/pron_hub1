// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO8-JUJEEFOoIHipbQF4jnMa3PsmJV8H0",
  authDomain: "khela-hobe-2d114.firebaseapp.com",
  projectId: "khela-hobe-2d114",
  storageBucket: "khela-hobe-2d114.firebasestorage.app",
  messagingSenderId: "282635255314",
  appId: "1:282635255314:web:e1bbe3a6841326c63222cb",
  measurementId: "G-Y64GP921KW"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

function subscribe() {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      messaging.getToken({ vapidKey: "BD9xCTAz_9ri9APwaWkm-Kb6nFDI6Ww_gNhck--FCXg6weSDpIphxLFsEzTx3QnMiewuGVjZz3uxGfjhIkT1PXs" }).then(token => {
        console.log("Push token:", token);
        alert("Push token copied to console.");
      }).catch(err => {
        console.error("Token error:", err);
      });
    } else {
      alert("Notification permission denied");
    }
  });
}
