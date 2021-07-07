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

function initFirebaseMessagingRegistration() {
    messaging
        .requestPermission()
        .then(function () {
            messageElement.innerHTML = "Got notification permission";
            console.log("Got notification permission");
            return messaging.getToken();
        })
        .then(function (token) {
            // print the token on the HTML page
            tokenElement.innerHTML = "Token is " + token;
        })
        .catch(function (err) {
            errorElement.innerHTML = "Error: " + err;
            console.log("Didn't get notification permission", err);
        });
}

messaging.onMessage(function (payload) {
    console.log("Message received. ", JSON.stringify(payload));
    notificationElement.innerHTML = notificationElement.innerHTML + " " + payload.data.notification;
});

messaging.onTokenRefresh(function () {
    messaging.getToken()
        .then(function (refreshedToken) {
            console.log('Token refreshed.');
            tokenElement.innerHTML = "Token is " + refreshedToken;
        }).catch(function (err) {
            errorElement.innerHTML = "Error: " + err;
            console.log('Unable to retrieve refreshed token ', err);
        });
});