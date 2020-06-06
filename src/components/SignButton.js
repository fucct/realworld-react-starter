import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function SignButton({ token }) {
  if (token) {
    return (
      <li className="nav-item">
        <NavLink className="nav-link" to="/sign-out">Sign out</NavLink>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <Link className="nav-link" to="/sign-up">Sign up</Link>
      </li>
    );
  }
}

export default SignButton;