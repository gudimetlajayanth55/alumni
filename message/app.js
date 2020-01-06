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
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.requestPermission().then(() => {
        console.log("Have permission");
        return messaging.getToken();
    })
    .then((token) => {
        console.log(token);
    })
    .catch((err) => {
        console.log('Error Occured');
    });