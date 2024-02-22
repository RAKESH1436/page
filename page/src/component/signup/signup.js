import React from 'react';
import'./signup.css';

const Signup = () => {
  return (
    <div>
      <form className="signup-form" action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="pass">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="role">
          <label htmlFor="role">Role</label>
          <input type="text" id="role" name="role" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
