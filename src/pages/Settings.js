import React, { useReducer, useState } from 'react';
import axios from 'axios';
import ErrorMessages from '../components/ErrorMessages';
import { validateAccess } from '../components/utils/Utils';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function Settings({ token, history }) {
  validateAccess(token, history)

  const [setting, dispatch] = useReducer(reducer, {
    image: "",
    username: "",
    bio: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
      email: undefined,
      username: undefined,
      password: undefined,
    }
  );

  const { image, username, bio, email, password } = setting;

  const onChange = e => {
    dispatch(e.target);
  };

  const onClick = e => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    if (!token) {
      alert("로그인을 먼저 해주세요");
      return;
    }

    axios.put("https://conduit.productionready.io/api/user",
      { user: setting },
      { headers: { "Authorization": "Token " + token } })
    .then(response => {
      alert("성공적으로 수정되었습니다.");
      history.push("/");
    })
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
    });
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <ErrorMessages error={error}/>
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input className="form-control" type="text" placeholder="URL of profile picture"
                         onChange={onChange} value={image} name="image"/>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text"
                         placeholder="Your Name" onChange={onChange} value={username}
                         name="username"/>
                </fieldset>
                <fieldset className="form-group">
                <textarea className="form-control form-control-lg" rows="8"
                          placeholder="Short bio about you" onChange={onChange} value={bio}
                          name="bio"/>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email"
                         onChange={onChange} value={email} name="email"/>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password"
                         placeholder="Password" onChange={onChange} value={password}
                         name="password"/>
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" onClick={onClick}>
                  Update Settings
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;