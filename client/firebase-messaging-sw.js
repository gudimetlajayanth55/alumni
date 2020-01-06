importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');


var firebaseConfig = {
    apiKey: "AIzaSyBEfjm5nfjHta7-2wg7cuhfnndgeGobLIU",
    authDomain: "social-media-c0eea.firebaseapp.com",
    databaseURL: "https://social-media-c0eea.firebaseio.com",
    projectId: "social-media-c0eea",
    storageBucket: "social-media-c0eea.appspot.com",
    messagingSenderId: "549022756029",
    appId: "1:549022756029:web:30e16ef03212b22fc41bd4",
    measurementId: "G-X2WM7XTP1M"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();