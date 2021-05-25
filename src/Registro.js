import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import  "firebase/auth";
import "firebase/firestore";

class Registro  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', sex:'', tel:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
        this.setState({[name]: event.target.value});
      }
  handleSubmit(event) {

    this.addData();

    event.preventDefault();
  }
render(){
  return (
    <div className="estilo">
    <h1>Información básica</h1>
    <p >
    Esta información se usará únicamente para darte una mejor experiencia de usuario.
    No se compartirá con nadie (a menos que tú lo hagas).
    La única persona que tendrá acceso a estos datos es a quien le envíes el link
    personalizado que obtendrás después de responder, y sólo podrá ver las coincidencias
    positivas (con lo que ambos fantasean) una vez haya respondido las preguntas.
    </p>

    <form  onSubmit={this.handleSubmit}>
    <table><tbody><tr><td>
              <label>
             Nombre:
             </label>
             </td>
             <td></td>
             </tr><tr>
             <td></td>
             <td className="response"  colSpan="2">
             <input name="name" type="text" id="nombre" value={this.state.name} onChange={this.handleChange} />
            </td>
    </tr>
    {/*preg generica inicio */}
<tr><td>
<label>
Sexo/Género:</label></td>
<td></td></tr><tr><td></td><td>
<select  name="sex" id="sexo" value={this.state.sex} onChange={this.handleChange}>
<option value="hombre">Hombre</option>
<option value="mujer">Mujer</option>
<option value="mujerT">Mujer trans</option>
<option value="hombreT">Hombre trans</option>
</select>
</td></tr>
{/*preg generica fin */}
    <tr><td>
    <label>
         Edad:</label></td>
         <td></td></tr><tr><td></td><td>
         <select  name="age" id="age" value={this.state.age} onChange={this.handleChange}>
           <option value="22">18-22</option>
           <option value="27">23-27</option>
           <option value="32">28-32</option>
           <option value="37">33-37</option>
           <option value="42">38-42</option>
           <option value="47">43-47</option>
           <option value="52">48-52</option>
           <option value="60">+52</option>
         </select>
    </td></tr>

           <tr><td>
                     <label>
                  Teléfono (para recibir sugerencias cuando implementemos la función):
                    </label>
                    </td>

                    </tr><tr>
                    <td></td>
                    <td className="response"  colSpan="2">
                    <input name="tel" type="tel" id="tel" value={this.state.tel} onChange={this.handleChange} />
                   </td>
           </tr>
           <tr><td colSpan="2">
                  <button type="submit" value="Submit" >Enviar</button>
                  </td>
                  </tr>
           </tbody>
           </table>
    </form>

    </div>
  );
}
 addData(){
  var db = firebase.firestore();

      db.collection("users").doc(this.props.usuario.uid).set(this.state)
      .then(() => {
          console.log("Document successfully written!");
          ReactDOM.render(
              <App revisarPerfil={true}/>,
            document.getElementById('root')
          );
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
          ReactDOM.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>,
            document.getElementById('root')
          );
      });
}
}
export default Registro;
