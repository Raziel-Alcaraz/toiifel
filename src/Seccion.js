import logo from './logo.svg';
import React from 'react';
import './App.css';
import firebase from "firebase/app";
import  "firebase/auth";
import "firebase/firestore";
import Pregunta from './Pregunta';
class Seccion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: this.props.name, sex:this.props.sex,
       tel:this.props.tel, age:this.props.age, preguntas:[], numeros:[]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

var preguntas=[];
var numeros=[];
Object.keys(this.state).forEach(key => {
    if (!this.state[key]) {
      this.state[key] = "";
    }
});
console.log("estado");
    console.log(this.state);
    var db = firebase.firestore();
    db.collection("preguntas").where("seccion", "==", this.props.seccion)
    .orderBy("numero")
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              preguntas.push(doc.get("pregunta"));
              numeros.push(doc.get("numero"));
              console.log(preguntas);
              this.setState({preguntas: preguntas});
              this.setState({numeros: numeros});
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });

  }


  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
        this.setState({[name]: event.target.value});
      }
  handleSubmit(event) {
event.preventDefault();
    this.addData();


  }
  render(){
     var items = []
    for(const [index, value] of this.state.preguntas.entries())
    {

          items.push(<tr><td className="preg" colspan="5"><Pregunta pregunta={this.state.preguntas[index]} /></td></tr>);
          items.push(<tr className="respuestasDer"  onChange={this.handleChange}>
            <td> <input type="radio" value="0" name={this.state.numeros[index]} /> Nada</td>
            <td> <input type="radio" value="1" name={this.state.numeros[index]} /> Poco</td>
            <td> <input type="radio" value="2" name={this.state.numeros[index]} /> Algo</td>
            <td> <input type="radio" value="3" name={this.state.numeros[index]} /> Mucho</td>
            </tr>);
  }


  return (

    <table className="preguntasTabla">
    <tbody>
{items}
</tbody>
</table>

  );
}

}
export default Seccion;
