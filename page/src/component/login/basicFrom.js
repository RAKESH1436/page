import React from "react";
import "./basicFrom.css"

export const BasicFrom = () => {
  return (
    <>
      <form action="" className="loginpage">
        <div className="email" >
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"></input>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="text" name="email" id="email"></input>
        </div>
        <button type="login">Login</button>
        <div></div>
      </form>
    </>
  );
};
export default BasicFrom;
