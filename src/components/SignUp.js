import React, { useReducer, useState } from 'react';
import ErrorMessages from './ErrorMessages';
import { Link } from 'react-router-dom';
import { api } from './utils/Utils';


function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const SignUp = ({ history }) => {
  const [user, dispatch] = useReducer(reducer, {
    username: null,
    email: null,
    password: null,
  });

  const { username, email, password } = user;

  const onChange = e => {
    dispatch(e.target);
  };

  const [error, setError] = useState({
      email: null,
      username: null,
      password: null,
    }
  );

  const onClick = e => {
    try {
      e.preventDefault();
      api.signUp({ user: user }, history);
    }
    catch (error) {
      if (error.response) {
        const errorList = error.response.data.errors;
        const errors = {
          email: errorList.email,
          username: errorList.username,
          password: errorList.password,
        };
        setError(errors);
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/sign-in">Have an account?</Link>
            </p>
            <ErrorMessages error={error}/>
            <form>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" name="username"
                       placeholder="Your Name"
                       onChange={onChange} value={username}/>
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" name="email"
                       placeholder="Email"
                       onChange={onChange} value={email}/>
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="password" name="password"
                       placeholder="Password" onChange={onChange} value={password}/>
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right" onClick={onClick}>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;