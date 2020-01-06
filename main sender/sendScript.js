var admin = require('firebase-admin');
var serviceAccount = require('./keys/serviceAccountKey.json');
const router = require('express').Router();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://social-media-c0eea.firebaseio.com"
});

let message = {
    notification: {
        title: "about fasaaaak",
        body: "you are kasaaak"
    },
    data: {
        Nick: "Mario",
        body: "great match!",
        Room: "PortugalVSDenmark"
    },
    webpush: {
        fcm_options: {
            "link": "http://127.0.0.1:8080/index.html"
        }
    },
    token: "clnOWobERXJjo3yfTVfk8l:APA91bGKN5Y2wCh8afB-8MTZUMxCR1EYPxvgwQ42mw3ygV7CB_801vXDiLFF5EEu1TYIdydUSQDrvRrisklQUhF4UcH4YpcJMn8kW_kjCg-aqylh9ko6sr_RcSmhqmhDpxsQffICOqS1"
};




router.post('/', (req, res) => {
    console.log(req.body.message);
    message.notification.body = req.body.message;
    message.data.body = req.body.message;
    admin.messaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
    res.send('message is sending....');
});

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

var registrationToken = "clnOWobERXJjo3yfTVfk8l:APA91bEm0D5Ob3FDTyA5MNFp9fr5Cnq2PlH5G_3W9BU2p26ZJD18Efpug0mHk1StXjo3tFTXGZEG5JSY6gm_Nnh2xrTKcNLXReWrbUd2uTpqaskdIcQWp8NuuoTF8Qp9gg5einWh-eYB";

var options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
}
module.exports = router;