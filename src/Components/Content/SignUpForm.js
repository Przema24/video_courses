import React from 'react';
import firebase from "firebase";

class SignUpForm extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleConfirm(event) {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    //alert("Wysłano formularz. Email: " + this.state.email + "Hasło: " + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form className="signInForm">
          Rejestracja
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <label>
          Hasło:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <div onClick={this.handleConfirm} className="customConfirmButton">Zarejestruj się</div>
      </form>
    );

  }
};


export default SignUpForm;