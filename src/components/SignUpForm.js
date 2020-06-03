import React from 'react';


function SignUpForm({ username, email, password, onChange, onClick }) {

  return (
    <form>
      <fieldset className="form-group">
        <input className="form-control form-control-lg" type="text" name="username"
               placeholder="Your Name"
               onChange={onChange} value={username}/>
      </fieldset>
      <fieldset className="form-group">
        <input className="form-control form-control-lg" type="text" name="email" placeholder="Email"
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
  );
}

export default SignUpForm;