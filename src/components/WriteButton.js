import React from 'react';
import { NavLink } from 'react-router-dom';

function WriteButton({ token }) {
  return token ? (
    <li className="nav-item">
      <NavLink className="nav-link" to={{ pathname: '/write', state: { token: token } }}>
        <i className="ion-compose"/>&nbsp;New Post
      </NavLink>
    </li>
  ) : null;
}

export default WriteButton;