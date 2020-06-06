import React from 'react';
import { Redirect } from 'react-router-dom';

function SignOut(props) {
  localStorage.clear();

  return (
    <Redirect to="/"/>
  )
}

export default SignOut;