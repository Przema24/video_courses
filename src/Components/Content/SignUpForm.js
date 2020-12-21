import React from 'react';


const SignUpForm = () => {
  return (
    <form id="signUp" >
    <div className="signInForm">
      <h3>Rejestracja</h3>
      <label for="username">Adres e-mail:</label>
      <input type="text" id="username" name="username" required/>
      <label for="pwd">Hasło:</label>
      <input type="password" id="pwd" name="pwd" required/>
      <input type="submit" value="Zarajestruj"/>
    </div>
  </form>
  );
}



export default SignUpForm;