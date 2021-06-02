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
    this.state = {name: this.props.name, sex:this.props.sex,
       tel:this.props.tel, age:this.props.age, hombres:this.props.hombres,
       mujeresT:this.props.mujeresT, hombresT:this.props.hombresT, mujeres:this.props.mujeres};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


Object.keys(this.state).forEach(key => {
    if (!this.state[key]) {
      this.state[key] = "";
    }
});


console.log("estado");
    console.log(this.state);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const name = target.name;
        this.setState({[name]: event.target.value});
        if(target.type === "checkbox"){
            this.setState({[name]: value});
        }
      }
  handleSubmit(event) {
event.preventDefault();
    this.addData();


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
    <table className="tabRegistro"><tbody><tr><td>
              <label>
             Nombre:
             </label>
             </td>
             <td></td>
             </tr><tr>
             <td></td>
             <td className="response"  colSpan="2">
             <input className="input" name="name" type="text" id="nombre" value={this.state.name} onChange={this.handleChange} />
            </td>
    </tr>
    {/*preg generica inicio */}
<tr><td>
<label>
Sexo/Género:</label></td>
<td></td></tr><tr><td></td><td>
<select  className="input" name="sex" id="sex" value={this.state.sex} onChange={this.handleChange}>
<option disabled value="null">Seleccione</option>
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
    Intereses:</label></td>
    <td></td></tr><tr className="intereses"><td></td><td>
    <label>    <input
            name="hombres"            type="checkbox"
            checked={this.state.hombres}
            onChange={this.handleChange} />Hombres
        </label><br></br>
  <label>
         <input  name="mujeres"  type="checkbox"
         checked={this.state.mujeres}
          onChange={this.handleChange} />Mujeres
      </label><br></br>
      <label>
          <input
              name="hombresT"            type="checkbox"
              checked={this.state.hombresT}
              onChange={this.handleChange} />  Hombres trans
          </label><br></br>
      <label><input
              name="mujeresT"            type="checkbox"
              checked={this.state.mujeresT}
              onChange={this.handleChange} />  Mujeres trans  </label>
    </td></tr>
           <tr><td>
                     <label>
                  Teléfono (para recibir sugerencias cuando implementemos la función):
                    </label>
                    </td>

                    </tr><tr>
                    <td></td>
                    <td className="response"  colSpan="2">
                    <input  className="input"  name="tel" type="text" id="tel" value={this.state.tel} onChange={this.handleChange} />
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
          console.log("Document successfully written! ok ");
          ReactDOM.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>,
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
