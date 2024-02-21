import React from 'react'

export const signup = () => {
  return (
    <div><form action="">
        <div className='sign'>
        <div className="name" >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name"></input>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"></input>
        </div>
         <div className="password" >
          <label htmlFor="email">Password</label>
          <input type="text" name="Password" id="Password"></input>
        </div>
        <div className="role">
          <label htmlFor="password">Role</label>
          <input type="text" name="Role" id="Role"></input>
        </div>
        </div>
    </form></div>
  )
}
export default signup
