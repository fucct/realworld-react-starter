import React from 'react';
import { NavLink } from 'react-router-dom';

function SettingButton({ token }) {
  return token ? (
    <li className="nav-item">
      <NavLink className="nav-link" to={{ pathname: '/settings', state: { token: token } }}>
        <i className="ion-gear-a"/>&nbsp;Settings
      </NavLink>
    </li>
  ) : null;
}

export default SettingButton;