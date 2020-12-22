import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



  
  var firebaseConfig = {
    apiKey: "AIzaSyCNA--pRZETen_9_SUQ9cjuAY2vc_aFTo0",
    authDomain: "video-courses-6f3a9.firebaseapp.com",
    projectId: "video-courses-6f3a9",
    storageBucket: "video-courses-6f3a9.appspot.com",
    messagingSenderId: "288364950602",
    appId: "1:288364950602:web:363cec30e6a53cd02262b3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
