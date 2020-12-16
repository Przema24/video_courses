import React from 'react';
import '../../ApplicationLogic/SignIn';


function SignInForm() {
  return (
      <form id="signIn" >
        <div className="signInForm">
          <h3>Logowanie</h3>
          <label for="username">Adres e-mail:</label>
          <input type="text" id="username" name="username" required/>
          <label for="pwd">Hasło:</label>
          <input type="password" id="pwd" name="pwd" required/>
          <input type="submit" value="Zaloguj"/>
        </div>
      </form>
  );
}


export default SignInForm;