import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handlename = (event) => {
    setName(event.target.value);
  };

  const handleemail = (event) => {
    setEmail(event.target.value);
  };
  const handlepassword = (event) => {
    setPassword(event.target.value);
  };

  const handlerole = (event) => {
    setRole(event.target.value);
  };

  return (
    <div>
      <form className="signup-form" action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handlename}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleemail}
          />
        </div>
        <div className="pass">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlepassword}
          />
        </div>
        <div className="role">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={role}
            onChange={handlerole}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
