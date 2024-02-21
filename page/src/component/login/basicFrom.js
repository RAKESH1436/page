import React, { useState } from "react";
import "./basicFrom.css";

export const BasicFrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [AllEntry, setAllEntry] = useState([]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...AllEntry, newEntry]);
    console.log(AllEntry);}

    return (
      <>
        <form action="" onSubmit={submitForm} className="loginpage">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="on"
              value={email}
              onChange={handleEmailChange}
            ></input>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="on"
              value={password}
              onChange={handlePasswordChange}
            ></input>
          </div>
          <div className="login">
            <button type="login">Login</button>
          </div>
          <div>
            <button type="login">Sign Up</button>
          </div>
          <div>
            
          </div>
        </form>
      </>
    );
  };

export default BasicFrom
