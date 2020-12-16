import firebase from '../firebase/firebase';

const signInForm = document.querySelector("#signIn");


const handleAuthChanged = (user) => {
    if (user) {
        alert("ok");
    }
    else {
        alert("złe hasło");
    }
};


firebase.auth().onAuthStateChanged(handleAuthChanged); 