import React from "react";
import { Link, Route } from 'react-router-dom';
import SignUp from './SignUp';

const Header = () => (
  <nav className="navbar navbar-light">
    <div className="container">
      <a className="navbar-brand" href="index.html">conduit</a>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <a className="nav-link active" href="">Home</a>
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
        <li className="nav-item">
          <Link className="nav-link" to="/sign-up">Sign up</Link>
        </li>
      </ul>
    </div>
    {/*<Route path="/" component={App} exact={true}/>*/}
    <Route path="/sign-up" component={SignUp} exact={true}/>
  </nav>
);

export default Header;
