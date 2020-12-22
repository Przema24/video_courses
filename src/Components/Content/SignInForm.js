import React from 'react';
//import firebase from "firebase";

class SignInForm extends React.Component {

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
    alert("Wysłano formularz. Email: " + this.state.email + "Hasło: " + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form className="signInForm">
          Logowanie
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <label>
          Hasło:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <div onClick={this.handleConfirm} className="customConfirmButton">Zaloguj</div>
      </form>
    );

  }
};


export default SignInForm;