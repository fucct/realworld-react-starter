import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function SignButton({ token }) {
  return token ? (
    <li className="nav-item">
      <NavLink className="nav-link" to="/sign-out">Sign out</NavLink>
    </li>
  ) : (
    <li className="nav-item">
      <Link className="nav-link" to="/sign-up">Sign up</Link>
    </li>
  );
}

export default SignButton;