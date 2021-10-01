import logo from './logo.png';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { render } from "react-dom";
import firebase from "firebase/app";
import  "firebase/auth";
import "firebase/firestore";
import ToiifelLogin from './ToiifelLogin.js';
import ToiifelRoot from './ToiifelRoot.js';
import Registro from './Registro.js';
import AdSense from 'react-adsense';
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

var usuario;
class App extends React.Component {
  constructor(props) {
   super(props);
  this.state = {pantallaPorMostrar : <ToiifelLogin/>};
}

componentDidMount(){
  console.log(this.props.revisarPerfil);
  var db = firebase.firestore();
firebase.auth().onAuthStateChanged((user) => {
  console.log("userchanged");
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
usuario = user;
    console.log(user);

var docRef = db.collection("users").doc(user.uid);

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        if(this.props.revisarPerfil ==true){
            this.setState({age: doc.get("age"), name: doc.get("name"),
           sex: doc.get("sex"), tel: doc.get("tel"), hombres: doc.get("hombres"),
 mujeres: doc.get("mujeres"),hombresT: doc.get("hombresT"),
mujeresT: doc.get("mujeresT")

         });
          this.setState({pantallaPorMostrar : "Registro"});
        }else{
        this.setState({pantallaPorMostrar : "Root"});
      }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        this.setState({pantallaPorMostrar : "Registro"});
    }
}).catch((error) => {
    this.setState({pantallaPorMostrar : "ERROR"});
});


  } else {
this.setState({pantallaPorMostrar : "Login"});
  }
});
const script = document.createElement("script");

   script.src = "https://use.typekit.net/foobar.js";
   script.async = true;

   document.body.appendChild(script);
}
  render(){


if(this.state.pantallaPorMostrar === "Login"){
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div id="paginaprincipal" className="Ap-corpus">
    <ToiifelLogin/>
      </div>
      <div id="bottom" className="Ap-bottom">

      </div>
    </div>
  );
}
  else if(this.state.pantallaPorMostrar === "Root"){
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={logout} id="Salir">Salir</button>
        </header>
        <div id="paginaprincipal" className="Ap-corpus">
<ToiifelRoot/>
        </div>
        <div id="bottom" className="Ap-bottom">

        </div>
      </div>
    );}
    else if(this.state.pantallaPorMostrar === "Registro"){
      return (
        <div className="App">
          <header className="App-header">
          <button onClick={logout} id="Salir">Salir</button>
          </header>
          <div id="paginaprincipal" className="Ap-corpus">
  <Registro usuario = {usuario} age = {this.state.age}
  name = {this.state.name} sex = {this.state.sex} tel = {this.state.tel}
  hombres = {this.state.hombres}
  mujeres = {this.state.mujeres}
  hombresT = {this.state.hombresT}
  mujeresT = {this.state.mujeresT} />
          </div>
          <div id="bottom" className="Ap-bottom">

          </div>
        </div>
      );}
    else{
      return (
        <div className="App">
          <header className="App-header">
          </header>
          <div id="paginaprincipal" className="Ap-corpus">
<ToiifelLogin/>
          </div>
          <div id="bottom" className="Ap-bottom">

          </div>
        </div>
      );
    }

}

}
function logout(){
  firebase.auth().signOut().then(() => {
  this.setState({pantallaPorMostrar : "Login"});
}).catch((error) => {
  // An error happened.
});
}

export default App;
