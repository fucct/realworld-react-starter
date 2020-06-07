import React from "react";
import { NavLink } from 'react-router-dom';
import SignButton from './SignButton';
import SettingButton from './SettingButton';
import WriteButton from './WriteButton';

const Header = ({ token }) => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">conduit</NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">Home</NavLink>
          </li>
          <WriteButton token={token}/>
          <SettingButton token={token}/>
          <SignButton token={token}/>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
