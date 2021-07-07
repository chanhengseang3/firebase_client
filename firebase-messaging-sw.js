importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js')

var firebaseConfig = {
    apiKey: "AIzaSyD-d5bcd9XsORHbHAmMsVg5GCK5WkbF4lI",
    authDomain: "camdigikey-dev-313205.firebaseapp.com",
    projectId: "camdigikey-dev-313205",
    storageBucket: "camdigikey-dev-313205.appspot.com",
    messagingSenderId: "179589035704",
    appId: "1:179589035704:web:d073bc1a9bcc81cda8264d"
  };

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});