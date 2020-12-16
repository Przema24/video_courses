import firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyAjiKtjDVe9S58VYCMryDaiZ6FhKOS-rwY",
authDomain: "video-courses-be2a5.firebaseapp.com",
databaseURL: "https://video-courses-be2a5.firebaseio.com",
projectId: "video-courses-be2a5",
storageBucket: "video-courses-be2a5.appspot.com",
messagingSenderId: "58397336121",
appId: "1:58397336121:web:5e21f18756124b57c3a3e8",
measurementId: "G-RMMF49N6BX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;