import React from "react";
import { NavLink } from 'react-router-dom';
import SignButton from './SignButton';

const Header = ({ token, onClickSignOut }) => {

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">conduit</NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/write">
              <i className="ion-compose"/>&nbsp;New Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="settings">
              <i className="ion-gear-a"/>&nbsp;Settings
            </NavLink>
          </li>
          <SignButton token={token} onClickSingOut={onClickSignOut}/>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
