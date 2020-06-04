import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import SignButton from './SignButton';

const Header = () => {
  const [token, setToken] = useState(false);

  if (localStorage.getItem("token") && !token) {
    setToken(true);
  }

  if (!localStorage.getItem("token") && token) {
    setToken(false);
  }

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
              <i className="ion-compose"></i>&nbsp;New Post
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <SignButton token={token}/>

        </ul>
      </div>
    </nav>
  );
}

export default Header;
