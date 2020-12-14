import React from 'react';


function LoginForm() {
  return (
      <form id="login" >
        <div>
          <fieldset className="loginForm">
            <legend>Logowanie</legend>
            <label for="username">Nazwa użytkownika:</label>
            <input type="text" id="username" name="username" />
            <label for="pwd">Hasło:</label>
            <input type="password" id="pwd" name="pwd" />
            <input type="submit" value="Zaloguj"/>
          </fieldset>
        </div>
      </form>
  );
}



export default LoginForm;