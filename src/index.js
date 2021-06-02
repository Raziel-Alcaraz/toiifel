import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.png';
import './App.css';
import { render } from "react-dom";
import firebase from "firebase/app";
import  "firebase/auth";
import "firebase/firestore";

import ToiifelRoot from './ToiifelRoot.js';
const firebaseConfig = {
apiKey: "AIzaSyDQmM42egpxzQDYNqPUTva6cN8X7ib3AKQ",
authDomain: "toiifel.firebaseapp.com",
projectId: "toiifel",
storageBucket: "toiifel.appspot.com",
messagingSenderId: "1005717204337",
appId: "1:1005717204337:web:2e92476eb59e57eba45ad0",
measurementId: "G-HBZWGPSF73"
};


if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
