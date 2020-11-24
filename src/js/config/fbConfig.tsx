import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAIi1SQutCCmfXzwMICMMVk4x5p2fkpQ-c",
    authDomain: "samgram-a909e.firebaseapp.com",
    databaseURL: "https://samgram-a909e.firebaseio.com",
    projectId: "samgram-a909e",
    storageBucket: "samgram-a909e.appspot.com",
    messagingSenderId: "55825664904",
    appId: "1:55825664904:web:7608a27731f25400b2483d",
    measurementId: "G-QGTP4FGZ14"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase