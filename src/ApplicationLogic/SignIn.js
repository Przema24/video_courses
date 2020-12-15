import React from 'react';
import firebase from 'firebase';

const signInForm = document.querySelector("#signIn");

const showSignedInContent = () => {
    signInForm.style.display = 'none';
    <div>Zalogowano pomyślnie</div>
};

const showSignInForm = () => {
    signInForm.style.display = 'block';
};

const errorBox = () => {
    <div id="errorBox"></div>
};

const handleAuthChanged = (user) => {
    if (user) {
        showSignedInContent();
    }
    else {
        showSignInForm();
    }
};

const showError = (error) => {
    const errorBox = document.querySelector("#errorBox");

    errorBox.innerHTML = error;
    errorBox.style.display = "block";

    setTimeout(() => {
        errorBox.style.display = "none"
    }, 5000)
};



firebase.auth().onAuthStateChanged(handleAuthChanged);