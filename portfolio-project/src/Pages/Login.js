import "./Login.css";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import CreateLogin from "../Components/Login"

function Login() {
  const [user, setUser] = useState({});

  function handleCallBackResponse(response){
    var userObject = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(()=> {
    /* global google*/
    google.accounts.id.initialize({
      client_id: "255254619189-pvd3mijlap9mniuepp7jmb2065m4ejun.apps.googleusercontent.com",
      callback: handleCallBackResponse
  });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  }, []);
  
  google.accounts.id.prompt();

  return (
  <div className="login">
  <h1>Have an account?</h1>
  <CreateLogin />
  <div id="signInDiv"></div>
  { 
    Object.keys(user).length !== 0 &&
    <button onClick={ (e) => handleSignOut}>Sign Out</button>
  }
  
  { user && 
    <div>
      <img src = {user.picture} alt="user"></img>
      <h3>{user.name}</h3>
    </div>
  }
  </div>
  );
}

export default Login;