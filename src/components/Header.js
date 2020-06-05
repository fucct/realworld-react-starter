import React from "react";
import { Link, NavLink } from 'react-router-dom';
import SignButton from './SignButton';

const Header = ({ isToken, onClickSignOut }) => {

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ion-compose"/>&nbsp;New Post
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="settings">
              <i className="ion-gear-a"/>&nbsp;Settings
            </Link>
          </li>
          <SignButton token={isToken} onClickSingOut={onClickSignOut}/>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
