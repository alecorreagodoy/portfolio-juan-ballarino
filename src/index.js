import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyCEo2nRKJaeh13MiGMQpI4GcSUIUmQ0PnA",
    authDomain: "jbarq-77146.firebaseapp.com",
    databaseURL: "https://jbarq-77146.firebaseio.com",
    projectId: "jbarq-77146",
    storageBucket: "",
    messagingSenderId: "828265690697",
    appId: "1:828265690697:web:bbd61e03e685a3c5"
});
//SMOOTH SCROLLING


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
