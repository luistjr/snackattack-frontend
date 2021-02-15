import React, { useState } from 'react'
import NavBarCss from '../NavBar.css'
import { Link } from "react-router-dom";
// import SignUpForm from "./SignUpForm"
// import LoginForm from './LoginForm'

function NavBar({user, setUser}) {
  
  
  function logout() {
    setUser(null);
  }

  return (
    <nav className="NavBar">
      <div>
      <Link to="/"  className="button">Home</Link>
      </div>
      <div>
        {user ? (
          <>
            <Link to="/Profile"  className="button">Profile</Link>
            <Link to="/Stash"  className="button">Stash</Link>
            <Link to="/Login" onClick={logout}>Logout</Link>
          </>
        ) : (
          <>
            <Link to="/New"  className="button">Signup</Link>
            <Link to="/Login"  className="button">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;