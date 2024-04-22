import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const handleLogin = () => {
   // console.log("Login button clicked!");
    navigate('/user');
  };

  return (
    <div className="login-form">
     
      <h1>Sigin to your PopX account</h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec justo
        in dui varius aliquet.
      </p>

      <fieldset>
        <legend>Email Address</legend>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>Password</legend>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </fieldset>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
