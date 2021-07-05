importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js')

var firebaseConfig = {
    apiKey: "AIzaSyArFVB4orI1tIg2T1JNNoCcZkFVjAZWgJ8",
    authDomain: "khmer-auction-d8bf5.firebaseapp.com",
    databaseURL: "https://khmer-auction-d8bf5-default-rtdb.firebaseio.com",
    projectId: "khmer-auction-d8bf5",
    storageBucket: "khmer-auction-d8bf5.appspot.com",
    messagingSenderId: "815601442430",
    appId: "1:815601442430:web:9d2c0dbc9c88c0ff2f822f",
    measurementId: "G-TS0384Q8P7"
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