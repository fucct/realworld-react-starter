import React from 'react';
import { NavLink } from 'react-router-dom';

function WriteButton({ token }) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={{ pathname: '/write', state: { token: token } }}>
        <i className="ion-compose"/>&nbsp;New Post
      </NavLink>
    </li>
  );
}

export default WriteButton;