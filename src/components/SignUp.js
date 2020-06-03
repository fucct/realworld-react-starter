import React, { useReducer, useState } from 'react';
import SignUpForm from './SignUpForm';
import ErrorMessages from './ErrorMessages';
import axios from 'axios';


function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const SignUp = (props) => {
  const [user, dispatch] = useReducer(reducer, {
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = user;

  const onChange = e => {
    dispatch(e.target);
  };

  const [error, setError] = useState({
      email: undefined,
      username: undefined,
      password: undefined,
    }
  );

  const onClick = e => {
    e.preventDefault();
    axios.post("https://conduit.productionready.io/api/users", { user: user })
    .then(() => props.history.push("/"))
    .catch(error => {
      if (error.response) {
        const errorList = error.response.data.errors;
        const errors = {
          email: errorList.email,
          username: errorList.username,
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
              <a href="">Have an account?</a>
            </p>
            <ErrorMessages error={error}/>
            <SignUpForm username={username} email={email} password={password} onChange={onChange}
                        onClick={onClick}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;