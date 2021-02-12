import React from 'react'
import NavBarCss from '../NavBar.css'
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm"

function NavBar() {

  return (
      <nav className="NavBar">
          <Link to="/Profile"  className="button">Profile</Link>
          <Link to="/Login"  className="button">Login</Link>
          <Link to="/Logout"  className="button">Logout</Link>
          <Link to="/New"  className="button">Signup</Link>
          <Link to="/Stash"  className="button">Stash</Link>
      </nav>
  );
}

export default NavBar;