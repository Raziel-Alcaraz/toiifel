import logo from './logo.svg';
import React from 'react';
import './App.css';
import firebase from "firebase/app";
import  "firebase/auth";
import "firebase/firestore";
class ToiifelLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render(){
  return (
    <div id="bienvenida">
    <h1>Te damos la bienvenida</h1>
    <p >
  Toiifel es un servicio en la nube para parejas que buscan conocerse
  mejor, pero no encuentran la manera de sacar "ese tema" de conversación que podría hacer
  felices a ambas partes.

    </p>
    <br></br>
    <p >
  Todas las preguntas que respondas son anónimas, nos respalda una cantidad de tecnología
  impresionante (Firebase, google, CDNs, bases de datos JSON, criptografía avanzada...) que hace
  imposible que cualquier otro ser humano tenga acceso a tu identidad,
   las respuestas que tú y tu pareja viertan aquí y cualquier otro dato sensible sobre tu actividad en este sitio.

    </p>
    <br></br>
    <p >
    Para usar la App de Toiifel es necesario iniciar sesión con una cuenta de Google
    (ya sabes, para aprovechar su seguridad de alto nivel).
    También usamos cookies (por si tenías el pendiente).
    Continuar usando la plataforma implica la aceptación de lo aquí mencionado.
    </p>
    <button id="siVamos" onClick={this.loguear}>Sí, entrar</button>
</div>
  );
}
loguear(){
  console.log("loguieandio")
  var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
      console.log("logueado")
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
}

export default ToiifelLogin;
