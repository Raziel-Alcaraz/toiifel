import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import  "firebase/auth";
import "firebase/firestore";

function ToiifelRoot() {

  return (
    <p >
    Este es el toifel<button onClick={checarPerfil}>Perfil</button>
    </p>
  );
}
function checarPerfil(){
  console.log("checarperfil")
  ReactDOM.render(
      <App revisarPerfil={true}/>,
    document.getElementById('root')
  );
}

function addData(){
  var db = firebase.firestore();
  db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}
export default ToiifelRoot;
