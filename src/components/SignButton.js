import React from 'react';
import { NavLink } from 'react-router-dom';

function SignButton({ token, logOut }) {
  return token ? (
    <li className="nav-item">
      <NavLink className="nav-link" onClick={logOut} to="/">Log out</NavLink>
    </li>
  ) : (
    <li className="nav-item">
      <NavLink className="nav-link" to="/sign-up">Sign up</NavLink>
    </li>
  );
}

export default SignButton;