// firebase-messaging-sw.js

// Import the Firebase Messaging library
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js');

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCfdHuspNn7_CTbjvNlLqJ3HQkcCeXGrS8",
  authDomain: "push-notification-cbd93.firebaseapp.com",
  projectId: "push-notification-cbd93",
  storageBucket: "push-notification-cbd93.firebasestorage.app",
  messagingSenderId: "538064467126",
  appId: "1:538064467126:web:e0d258fc4f55f1cf3fa217"
};

// Initialize Firebase in the service worker
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = firebase.messaging();

// Background notification event handler
messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  // Show the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});