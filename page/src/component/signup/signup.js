import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [record, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    setRecords([...record, newRecord]);
    console.log(record);
    setUserRegistration({ name: "", email: "", password: "", role: "" });
  };

  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userRegistration.name}
            onChange={handleInput}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userRegistration.email}
            onChange={handleInput}
          />
        </div>
        <div className="pass">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userRegistration.password}
            onChange={handleInput}
          />
        </div>
        <div className="role">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={userRegistration.role}
            onChange={handleInput}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
