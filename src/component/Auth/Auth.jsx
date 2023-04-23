import React, { useState } from "react";
import "./auth.css";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Auth = () => {
  const [login, setLogin] = useState(true);
  return (
    <div
      className="main"
      style={{
        backgroundColor: login ? "rgb(0, 0, 0)" : "skyblue",
      }}
    >
      <div className="auth">
        {login ? <Login temp={setLogin} /> : <Register temp={setLogin} />}
      </div>
    </div>
  );
};

export default Auth;
