import React from 'react'
import NavBarCss from '../NavBar.css'
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm"

function NavBar() {

  return (
      <nav class="NavBar">
          <Link to="/" exact className="button">Home</Link>
          <Link to="/Login" exact className="button">Login</Link>
          <Link to="/Logout" exact className="button">Logout</Link>
          <Link to="/Signup" exact className="button">Signup</Link>
          <Link to="/Stash" exact className="button">Stash</Link>
      </nav>
  );
}

export default NavBar;