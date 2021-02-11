import React from 'react'
import NavBarCss from '../NavBar.css'
import SignUpForm from "./SignUpForm"

function NavBar() {

  return (
      <div class="flex-container">
          <div>Home</div>
          <div>Login</div>
          <div>Logout</div>
          <div>Signup</div>
          <div>Stash</div>
          <SignUpForm />
      </div>
  );
}

export default NavBar;