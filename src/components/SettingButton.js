import React from 'react';
import { NavLink } from 'react-router-dom';

function SettingButton({ token }) {
  if (token) {
    return (
      <li className="nav-item">
        <NavLink className="nav-link" to={{ pathname: '/settings', state: { token: token } }}>
          <i className="ion-gear-a"/>&nbsp;Settings
        </NavLink>
      </li>
    );
  }
  return null;
}

export default SettingButton;