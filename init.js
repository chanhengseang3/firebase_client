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