import logo from './logo.svg';
import React from 'react';
import './App.css';
import firebase from "firebase/app";
import  "firebase/auth";
import "firebase/firestore";
class Pregunta extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: this.props.name, sex:this.props.sex,
       tel:this.props.tel, age:this.props.age};
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
      }
  handleSubmit(event) {
event.preventDefault();
    this.addData();


  }
  render(){
  return (
<div>
{this.props.pregunta}
</div>
  );
}

}
export default Pregunta;
