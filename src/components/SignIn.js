import React, { useReducer, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ErrorMessages from './ErrorMessages';
import SignInForm from './SignInForm';


function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const SignIn = (props) => {
  console.log("wtf?");
  const [user, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = e => {
    dispatch(e.target);
  };

  const [error, setError] = useState({
      email: undefined,
      password: undefined,
    }
  );

  const onClick = e => {
    e.preventDefault();
    axios.post("https://conduit.productionready.io/api/users/login", { user: user })
    .then(() => props.history.push("/"))
    .catch(error => {
      if (error.response) {
        const errorList = error.response.data.errors;
        const errors = {
          email: errorList.email,
          password: errorList.password,
        };
        setError(errors);
      }
    })
  }


  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/sign-up">Don't You Have an account?</Link>
            </p>
            <ErrorMessages error={error}/>
            <SignInForm email={email} password={password} onChange={onChange}
                        onClick={onClick}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;